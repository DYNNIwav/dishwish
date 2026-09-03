/**
 * DishWish — random meal generator.
 *
 * Loaded last, after data/meals.js and the js/ modules. Owns the DOM wiring:
 * the meal card, the filter sheet, saved dishes, history, theme, and sharing.
 */
(function () {
  'use strict';

  const { store, filters, images, duo } = window.DishWish;
  const { PREFERENCE_KEYS, META_ICONS, COOKING_TIME_LABELS, DIFFICULTY_LABELS, SPICE_LABELS } =
    filters;

  /** Time the dice tumbles before landing. Long enough to read as an action. */
  const GENERATE_DELAY = 450;

  /** Suggestions to remember before allowing a repeat. */
  const MAX_RECENT = 8;

  /** Entries kept in the history tab. */
  const MAX_HISTORY = 30;

  const MAX_DRAW_ATTEMPTS = 50;

  const meals = Array.isArray(window.MEALS) ? window.MEALS : [];
  const mealsByName = new Map(meals.map((meal) => [meal.name, meal]));
  const engine = filters.createFilters(meals);

  // ---------------------------------------------------------------------------
  // DOM
  // ---------------------------------------------------------------------------

  const $ = (id) => document.getElementById(id);

  const dom = {
    themeToggle: $('themeToggle'),
    photosToggle: $('photosToggle'),

    filterBtn: $('filterBtn'),
    filterCount: $('filterCount'),
    activeFilters: $('activeFilters'),
    filterMatch: $('filterMatch'),

    mealCard: $('mealCard'),
    mealMedia: $('mealMedia'),
    mealEmoji: $('mealEmoji'),
    mealPhoto: $('mealPhoto'),
    mealName: $('mealName'),
    mealDescription: $('mealDescription'),
    mealMeta: $('mealMeta'),
    mealTags: $('mealTags'),
    mealActions: $('mealActions'),
    favouriteBtn: $('favouriteBtn'),
    shareBtn: $('shareBtn'),
    backBtn: $('backBtn'),

    recipeLinkContainer: $('recipeLinkContainer'),
    recipeLink: $('recipeLink'),
    recipeSource: $('recipeSource'),
    tiktokSearch: $('tiktokSearch'),
    youtubeSearch: $('youtubeSearch'),
    foodNetworkSearch: $('foodNetworkSearch'),

    generateBtn: $('generateBtn'),
    mealCount: $('mealCount'),

    savedBtn: $('savedBtn'),
    savedCount: $('savedCount'),
    historyBtn: $('historyBtn'),
    duoBtn: $('duoBtn'),

    prefSheet: $('preferencesSheet'),
    prefBody: $('preferencesBody'),
    prefClose: $('preferencesClose'),
    prefReset: $('preferencesReset'),
    prefApply: $('preferencesApply'),
    prefMatch: $('preferencesMatchCount'),
    dishTypeSection: $('dishTypeSection'),
    dishTypeOptions: $('dishTypeOptions'),

    savedSheet: $('savedSheet'),
    savedList: $('savedList'),
    savedClose: $('savedClose'),
    tabFavourites: $('tabFavourites'),
    tabHistory: $('tabHistory'),

    notificationRegion: $('notificationRegion'),
  };

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------

  /** Filters currently in force. */
  let selection = filters.emptySelection();

  /** Edits inside the sheet, only promoted to `selection` on Apply. */
  let draft = filters.emptySelection();

  let currentMeal = null;
  let recentNames = [];
  let history = [];
  let historyCursor = -1;
  let favourites = [];
  let mealCount = 0;
  let generateTimer = null;
  let photoToken = 0;
  let savedTab = 'favourites';
  let duoController = null;

  // ---------------------------------------------------------------------------
  // Small helpers
  // ---------------------------------------------------------------------------

  function el(tag, props, children) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([key, value]) => {
      if (key === 'class') node.className = value;
      else if (key === 'text') node.textContent = value;
      else if (key.startsWith('on')) node.addEventListener(key.slice(2).toLowerCase(), value);
      else node.setAttribute(key, value);
    });
    (children || []).forEach((child) => child && node.appendChild(child));
    return node;
  }

  function showNotification(message, type = 'info') {
    const toast = el('div', { class: `notification notification--${type}`, text: message });
    dom.notificationRegion.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('notification--visible'));
    window.setTimeout(() => {
      toast.classList.remove('notification--visible');
      window.setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ---------------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------------

  function applyTheme(theme) {
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    else document.documentElement.removeAttribute('data-theme');

    const isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    dom.themeToggle.textContent = isDark ? '☀️' : '🌙';
    dom.themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const isDark = current
      ? current === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = isDark ? 'light' : 'dark';
    store.setTheme(next);
    applyTheme(next);
  }

  // ---------------------------------------------------------------------------
  // Meal photos
  // ---------------------------------------------------------------------------

  function renderPhotosToggle() {
    const on = images.isEnabled();
    dom.photosToggle.setAttribute('aria-pressed', String(on));
    dom.photosToggle.setAttribute(
      'aria-label',
      on ? 'Turn meal photos off' : 'Turn meal photos on'
    );
  }

  function togglePhotos() {
    const on = !images.isEnabled();
    images.setEnabled(on);
    renderPhotosToggle();

    if (!on) {
      photoToken += 1;
      dom.mealPhoto.classList.remove('is-loaded');
      dom.mealPhoto.removeAttribute('src');
      dom.mealMedia.classList.remove('has-photo');
      showNotification('Photos off — no external requests', 'info');
    } else {
      showNotification('Photos on 📷', 'success');
      if (currentMeal) loadPhoto(currentMeal);
    }
  }

  // ---------------------------------------------------------------------------
  // Filter bar
  // ---------------------------------------------------------------------------

  function renderFilterBar() {
    const count = filters.countSelected(selection);
    dom.filterBtn.dataset.active = String(count > 0);
    dom.filterCount.textContent = String(count);
    dom.filterCount.hidden = count === 0;

    dom.activeFilters.innerHTML = '';
    PREFERENCE_KEYS.forEach((key) => {
      selection[key].forEach((value) => {
        dom.activeFilters.appendChild(
          el('button', {
            type: 'button',
            class: 'filter-chip',
            text: filters.labelFor(key, value),
            'aria-label': `Remove filter ${filters.labelFor(key, value)}`,
            onclick: () => removeFilter(key, value),
          })
        );
      });
    });

    const total = engine.filter(selection).length;
    dom.filterMatch.textContent =
      count === 0 ? `${total} dishes` : total === 1 ? '1 match' : `${total} matches`;
  }

  function removeFilter(key, value) {
    selection[key] = selection[key].filter((entry) => entry !== value);
    if (key === 'cuisine') {
      const allowed = engine.dishTypesFor(selection.cuisine).map((type) => type.value);
      selection.dishType = selection.dishType.filter((type) => allowed.indexOf(type) !== -1);
    }
    persistSelection();
    renderFilterBar();
  }

  function persistSelection() {
    store.writeJson(store.KEYS.preferences, selection);
  }

  // ---------------------------------------------------------------------------
  // Preferences sheet
  // ---------------------------------------------------------------------------

  function readDraftFromForm() {
    const values = filters.emptySelection();
    PREFERENCE_KEYS.forEach((key) => {
      values[key] = Array.from(
        dom.prefSheet.querySelectorAll(`input[name="${key}"]:checked`)
      ).map((input) => input.value);
    });
    return values;
  }

  function createOption(name, value, label, checked) {
    const input = el('input', { type: 'checkbox', name, value });
    input.checked = checked;
    return el('label', { class: 'preference-option' }, [
      input,
      el('span', { class: 'option-text', text: label }),
    ]);
  }

  function renderDishTypes() {
    const available = engine.dishTypesFor(draft.cuisine);

    // With one dish type there is nothing to choose between.
    if (available.length < 2) {
      dom.dishTypeSection.hidden = true;
      dom.dishTypeOptions.innerHTML = '';
      draft.dishType = [];
      return;
    }

    const allowed = available.map((type) => type.value);
    draft.dishType = draft.dishType.filter((type) => allowed.indexOf(type) !== -1);

    dom.dishTypeOptions.innerHTML = '';
    available.forEach((type) => {
      dom.dishTypeOptions.appendChild(
        createOption(
          'dishType',
          type.value,
          type.label,
          draft.dishType.indexOf(type.value) !== -1
        )
      );
    });
    dom.dishTypeSection.hidden = false;
  }

  /**
   * Strikes through options that could never return a dish given the other
   * groups, and reports how many dishes the draft matches.
   */
  function refreshAvailability() {
    dom.prefSheet.querySelectorAll('.preference-option input').forEach((input) => {
      const dead = !input.checked && engine.isDeadEnd(draft, input.name, input.value);
      input.disabled = dead;
      input.closest('.preference-option').classList.toggle('preference-option--empty', dead);
    });

    const total = engine.filter(draft).length;
    dom.prefMatch.textContent = total === 1 ? '1 dish matches' : `${total} dishes match`;
  }

  function syncFormToDraft() {
    PREFERENCE_KEYS.forEach((key) => {
      if (key === 'dishType') return;
      dom.prefSheet.querySelectorAll(`input[name="${key}"]`).forEach((input) => {
        input.checked = draft[key].indexOf(input.value) !== -1;
      });
    });
    renderDishTypes();
    refreshAvailability();
  }

  function openPreferences() {
    draft = JSON.parse(JSON.stringify(selection));
    syncFormToDraft();
    openSheet(dom.prefSheet, dom.prefClose);
  }

  function applyPreferences() {
    selection = draft;
    persistSelection();
    renderFilterBar();
    closeSheet(dom.prefSheet, dom.generateBtn);
    showNotification('Filters applied ✓', 'success');
  }

  function resetPreferences() {
    draft = filters.emptySelection();
    selection = filters.emptySelection();
    persistSelection();
    syncFormToDraft();
    renderFilterBar();
    closeSheet(dom.prefSheet, dom.generateBtn);
    showNotification('Filters cleared 🔄', 'success');
  }

  // ---------------------------------------------------------------------------
  // Sheets (shared open/close, focus handling)
  // ---------------------------------------------------------------------------

  let sheetReturnFocus = null;

  function openSheet(sheet, focusTarget) {
    sheetReturnFocus = document.activeElement;
    sheet.hidden = false;
    document.body.classList.add('is-locked');
    (focusTarget || sheet.querySelector('button')).focus();
  }

  /**
   * Focus returns to whatever opened the sheet, unless a caller names somewhere
   * better. After Apply the opener is the Filters button, and leaving focus
   * there means the advertised Space shortcut re-opens the sheet instead of
   * rolling — so those paths hand focus to the roll button.
   */
  function closeSheet(sheet, focusTarget) {
    sheet.hidden = true;
    document.body.classList.remove('is-locked');
    const next = focusTarget || sheetReturnFocus;
    if (next && next.focus) next.focus();
    sheetReturnFocus = null;
  }

  function isSheetOpen() {
    return !dom.prefSheet.hidden || !dom.savedSheet.hidden || !$('duoMode').hidden;
  }

  /** Keeps Tab inside an open sheet. */
  function trapFocus(sheet, event) {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(
      sheet.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]')
    ).filter((node) => node.offsetParent !== null || node.type === 'checkbox');
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  // ---------------------------------------------------------------------------
  // Meal display
  // ---------------------------------------------------------------------------

  function metaFor(meal) {
    return [
      { icon: META_ICONS.cookingTime, label: COOKING_TIME_LABELS[meal.cookingTime] },
      { icon: META_ICONS.difficulty, label: DIFFICULTY_LABELS[meal.difficulty] },
      { icon: META_ICONS.spiceLevel, label: SPICE_LABELS[meal.spiceLevel] },
    ].filter((item) => item.label);
  }

  function loadPhoto(meal) {
    const token = ++photoToken;
    dom.mealPhoto.classList.remove('is-loaded');
    dom.mealPhoto.removeAttribute('src');
    dom.mealMedia.classList.remove('has-photo');

    images.lookup(meal).then((url) => {
      // A newer suggestion may have landed while the request was in flight.
      if (!url || token !== photoToken) return;
      dom.mealPhoto.src = url;
      dom.mealPhoto.alt = `Photo of ${meal.name}`;
    });
  }

  function displayMeal(meal) {
    currentMeal = meal;

    dom.mealEmoji.textContent = meal.emoji || '🍽️';
    dom.mealName.textContent = meal.name;
    dom.mealDescription.textContent = meal.description;

    dom.mealMeta.innerHTML = '';
    metaFor(meal).forEach((item) => {
      dom.mealMeta.appendChild(
        el('span', { class: 'meta-item' }, [
          el('span', { text: item.icon, 'aria-hidden': 'true' }),
          el('span', { text: item.label }),
        ])
      );
    });

    dom.mealTags.innerHTML = '';
    (meal.tags || []).forEach((tag) => {
      dom.mealTags.appendChild(el('span', { class: 'tag', text: tag }));
    });

    if (meal.searchQuery) {
      const query = encodeURIComponent(meal.searchQuery);
      dom.recipeLink.href = `https://www.allrecipes.com/search?q=${query}`;
      dom.recipeLink.setAttribute('aria-label', `Find ${meal.name} recipes on AllRecipes`);
      dom.recipeSource.textContent = 'AllRecipes';
      dom.tiktokSearch.href = `https://www.tiktok.com/search?q=${query}`;
      dom.youtubeSearch.href = `https://www.youtube.com/results?search_query=${query}`;
      dom.foodNetworkSearch.href = `https://www.google.com/search?q=site:foodnetwork.com+${query}`;
      dom.recipeLinkContainer.hidden = false;
    } else {
      dom.recipeLinkContainer.hidden = true;
    }

    dom.mealActions.hidden = false;
    updateFavouriteButton();
    loadPhoto(meal);
  }

  function showPlaceholder(emoji, title, description) {
    currentMeal = null;
    photoToken += 1;
    dom.mealPhoto.classList.remove('is-loaded');
    dom.mealPhoto.removeAttribute('src');
    dom.mealMedia.classList.remove('has-photo');
    dom.mealEmoji.textContent = emoji;
    dom.mealName.textContent = title;
    dom.mealDescription.textContent = description;
    dom.mealMeta.innerHTML = '';
    dom.mealTags.innerHTML = '';
    dom.recipeLinkContainer.hidden = true;
    dom.mealActions.hidden = true;
  }

  // ---------------------------------------------------------------------------
  // Generation
  // ---------------------------------------------------------------------------

  function pickMeal(candidates) {
    let selected;
    let attempts = 0;
    const avoidRecent = candidates.length > MAX_RECENT;

    do {
      selected = candidates[Math.floor(Math.random() * candidates.length)];
      attempts += 1;
      if (attempts > MAX_DRAW_ATTEMPTS) {
        recentNames = [];
        break;
      }
    } while (avoidRecent && recentNames.indexOf(selected.name) !== -1);

    recentNames.push(selected.name);
    if (recentNames.length > MAX_RECENT) recentNames.shift();
    return selected;
  }

  function pushHistory(meal) {
    history = [meal.name].concat(history.filter((name) => name !== meal.name));
    if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
    historyCursor = 0;
    store.setHistory(history);
    updateNavButtons();
  }

  function generateRandomMeal() {
    if (dom.generateBtn.disabled) return;

    dom.generateBtn.disabled = true;
    dom.generateBtn.setAttribute('aria-busy', 'true');
    dom.mealName.textContent = 'Rolling…';
    dom.mealDescription.textContent = 'Picking something good.';

    window.clearTimeout(generateTimer);
    generateTimer = window.setTimeout(() => {
      const candidates = engine.filter(selection);

      if (candidates.length === 0) {
        showPlaceholder(
          '😅',
          'Nothing matches those filters',
          'Remove a filter or two and try again.'
        );
        showNotification('No dishes match — try fewer filters 🔍', 'info');
      } else {
        const meal = pickMeal(candidates);
        displayMeal(meal);
        pushHistory(meal);
        mealCount += 1;
        updateMealCount();
        store.setMealCount(mealCount);
      }

      dom.generateBtn.disabled = false;
      dom.generateBtn.removeAttribute('aria-busy');
    }, GENERATE_DELAY);
  }

  function updateMealCount() {
    dom.mealCount.textContent = String(mealCount);
  }

  // ---------------------------------------------------------------------------
  // History navigation
  // ---------------------------------------------------------------------------

  function stepBack() {
    if (historyCursor + 1 >= history.length) return;
    historyCursor += 1;
    const meal = mealsByName.get(history[historyCursor]);
    if (meal) displayMeal(meal);
    updateNavButtons();
  }

  function updateNavButtons() {
    dom.backBtn.disabled = historyCursor + 1 >= history.length;
    dom.historyBtn.disabled = history.length === 0;
    dom.savedCount.textContent = String(favourites.length);
    dom.savedCount.hidden = favourites.length === 0;
  }

  // ---------------------------------------------------------------------------
  // Favourites
  // ---------------------------------------------------------------------------

  function isFavourite(meal) {
    return meal ? favourites.indexOf(meal.name) !== -1 : false;
  }

  function updateFavouriteButton() {
    const saved = isFavourite(currentMeal);
    dom.favouriteBtn.setAttribute('aria-pressed', String(saved));
    dom.favouriteBtn.textContent = saved ? '❤️' : '🤍';
    dom.favouriteBtn.setAttribute(
      'aria-label',
      saved ? 'Remove from saved dishes' : 'Save this dish'
    );
  }

  function toggleFavourite() {
    if (!currentMeal) return;

    if (isFavourite(currentMeal)) {
      favourites = favourites.filter((name) => name !== currentMeal.name);
      showNotification('Removed from saved', 'info');
    } else {
      favourites = [currentMeal.name].concat(favourites);
      showNotification('Saved ❤️', 'success');
    }
    store.setFavourites(favourites);
    updateFavouriteButton();
    updateNavButtons();
  }

  // ---------------------------------------------------------------------------
  // Saved sheet (favourites + history)
  // ---------------------------------------------------------------------------

  function renderSavedList() {
    const names = savedTab === 'favourites' ? favourites : history;
    const items = names.map((name) => mealsByName.get(name)).filter(Boolean);

    dom.tabFavourites.setAttribute('aria-selected', String(savedTab === 'favourites'));
    dom.tabHistory.setAttribute('aria-selected', String(savedTab === 'history'));

    dom.savedList.innerHTML = '';

    if (items.length === 0) {
      dom.savedList.appendChild(
        el('div', { class: 'empty-state' }, [
          el('div', {
            class: 'empty-state-emoji',
            text: savedTab === 'favourites' ? '🤍' : '🕘',
            'aria-hidden': 'true',
          }),
          el('p', {
            text:
              savedTab === 'favourites'
                ? 'Nothing saved yet. Tap the heart on a dish you like.'
                : 'No history yet. Generate a dish to get started.',
          }),
        ])
      );
      return;
    }

    const list = el('ul', { class: 'meal-list' });
    items.forEach((meal) => {
      list.appendChild(
        el('li', { class: 'meal-list-item' }, [
          el(
            'button',
            {
              type: 'button',
              class: 'meal-list-pick',
              onclick: () => {
                displayMeal(meal);
                closeSheet(dom.savedSheet);
              },
            },
            [
              el('span', {
                class: 'meal-list-emoji',
                text: meal.emoji || '🍽️',
                'aria-hidden': 'true',
              }),
              el('span', {}, [
                el('span', { class: 'meal-list-name', text: meal.name }),
                el('span', {
                  class: 'meal-list-sub',
                  text: `${filters.labelFor('cuisine', meal.cuisine)} · ${COOKING_TIME_LABELS[meal.cookingTime]}`,
                }),
              ]),
            ]
          ),
          el('button', {
            type: 'button',
            class: 'meal-list-remove',
            text: '✕',
            'aria-label': `Remove ${meal.name}`,
            onclick: () => {
              if (savedTab === 'favourites') {
                favourites = favourites.filter((name) => name !== meal.name);
                store.setFavourites(favourites);
              } else {
                history = history.filter((name) => name !== meal.name);
                historyCursor = Math.min(historyCursor, history.length - 1);
                store.setHistory(history);
              }
              updateFavouriteButton();
              updateNavButtons();
              renderSavedList();
            },
          }),
        ])
      );
    });
    dom.savedList.appendChild(list);
  }

  function openSaved(tab) {
    savedTab = tab;
    renderSavedList();
    openSheet(dom.savedSheet, dom.savedClose);
  }

  // ---------------------------------------------------------------------------
  // Sharing
  // ---------------------------------------------------------------------------

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    // file:// and plain http have no async clipboard; this still works there.
    const field = el('textarea', { class: 'visually-hidden' });
    field.value = text;
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }

  async function shareMeal() {
    if (!currentMeal) return;
    const text = `${currentMeal.emoji} ${currentMeal.name} — ${currentMeal.description}\n\nPicked with DishWish`;

    try {
      if (navigator.share) {
        await navigator.share({ title: currentMeal.name, text });
        return;
      }
      await copyText(text);
      showNotification('Copied to clipboard 📋', 'success');
    } catch (error) {
      // AbortError means the user dismissed the share sheet — not a failure.
      if (error && error.name === 'AbortError') return;
      showNotification('Could not share this one', 'info');
    }
  }

  // ---------------------------------------------------------------------------
  // Keyboard
  // ---------------------------------------------------------------------------

  /**
   * Space/Enter rolls the dice, but only when the user is not inside a control
   * or a sheet — a document-wide handler that swallows both keys makes every
   * button and checkbox in the app unusable.
   */
  function handleGlobalKeydown(event) {
    if (isSheetOpen()) return;
    if (event.code !== 'Space' && event.code !== 'Enter') return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    const target = event.target;
    if (target !== document.body && target.closest('a, button, input, select, textarea'))
      return;

    event.preventDefault();
    generateRandomMeal();
  }

  // ---------------------------------------------------------------------------
  // Wiring
  // ---------------------------------------------------------------------------

  function setupEventListeners() {
    dom.themeToggle.addEventListener('click', toggleTheme);
    dom.photosToggle.addEventListener('click', togglePhotos);
    dom.generateBtn.addEventListener('click', generateRandomMeal);
    dom.filterBtn.addEventListener('click', openPreferences);
    dom.favouriteBtn.addEventListener('click', toggleFavourite);
    dom.shareBtn.addEventListener('click', shareMeal);
    dom.backBtn.addEventListener('click', stepBack);
    dom.savedBtn.addEventListener('click', () => openSaved('favourites'));
    dom.historyBtn.addEventListener('click', () => openSaved('history'));
    dom.duoBtn.addEventListener('click', () => duoController.open());

    dom.prefClose.addEventListener('click', () => closeSheet(dom.prefSheet));
    dom.prefApply.addEventListener('click', applyPreferences);
    dom.prefReset.addEventListener('click', resetPreferences);
    dom.savedClose.addEventListener('click', () => closeSheet(dom.savedSheet));
    dom.tabFavourites.addEventListener('click', () => {
      savedTab = 'favourites';
      renderSavedList();
    });
    dom.tabHistory.addEventListener('click', () => {
      savedTab = 'history';
      renderSavedList();
    });

    // One delegated listener also covers the dish-type boxes, which are rebuilt
    // whenever the cuisine selection changes.
    dom.prefSheet.addEventListener('change', (event) => {
      if (!event.target.name) return;
      draft = readDraftFromForm();
      if (event.target.name === 'cuisine') renderDishTypes();
      refreshAvailability();
    });

    [dom.prefSheet, dom.savedSheet].forEach((sheet) => {
      sheet.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeSheet(sheet);
        else trapFocus(sheet, event);
      });
      sheet.querySelector('.sheet-overlay').addEventListener('click', () => closeSheet(sheet));
    });

    document.addEventListener('keydown', handleGlobalKeydown);

    dom.mealPhoto.addEventListener('load', () => {
      dom.mealPhoto.classList.add('is-loaded');
      dom.mealMedia.classList.add('has-photo');
    });
    dom.mealPhoto.addEventListener('error', () => {
      dom.mealPhoto.classList.remove('is-loaded');
      dom.mealPhoto.removeAttribute('src');
      dom.mealMedia.classList.remove('has-photo');
    });

    // Keep the result in view on small screens.
    if (window.matchMedia('(max-width: 560px)').matches) {
      dom.generateBtn.addEventListener('click', () => {
        window.setTimeout(() => {
          dom.mealCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 120);
      });
    }
  }

  function buildOptionLists() {
    // Static groups are declared in index.html with data-values; the labels come
    // from the filters module so they stay in one place.
    dom.prefSheet.querySelectorAll('[data-group]').forEach((container) => {
      const key = container.dataset.group;
      const values = container.dataset.values.split(',');
      values.forEach((value) => {
        container.appendChild(createOption(key, value, filters.labelFor(key, value), false));
      });
    });
  }

  function init() {
    applyTheme(store.getTheme());

    if (meals.length === 0) {
      showPlaceholder(
        '😕',
        'Meal database failed to load',
        'Check that data/meals.js is present, then reload the page.'
      );
      dom.generateBtn.disabled = true;
      return;
    }

    const isKnown = (name) => mealsByName.has(name);
    mealCount = store.getMealCount();
    favourites = store.getFavourites(isKnown);
    history = store.getHistory(isKnown);
    historyCursor = -1;
    selection = engine.sanitise(store.readJson(store.KEYS.preferences, null));

    duoController = duo.create({
      getCandidates: () => engine.filter(selection),
      onPick: (meal) => {
        displayMeal(meal);
        pushHistory(meal);
      },
      notify: showNotification,
      images,
    });

    buildOptionLists();
    setupEventListeners();

    updateMealCount();
    renderPhotosToggle();
    renderFilterBar();
    updateNavButtons();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
