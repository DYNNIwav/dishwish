/**
 * DishWish — random meal generator.
 *
 * Meal data lives in data/meals.js (loaded first, exposed as the MEALS global).
 * Wrapped in an IIFE so nothing leaks onto window.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------

  /** Number of recently shown meals to avoid repeating. */
  const MAX_RECENT_MEALS = 8;

  /** Artificial "rolling the dice" delay, in ms. */
  const GENERATE_DELAY = 1000;

  /** Give up avoiding recent meals after this many draws. */
  const MAX_DRAW_ATTEMPTS = 50;

  const STORAGE_KEYS = {
    mealCount: 'mealCount',
    preferences: 'dishwishPreferences',
  };

  /** Preference groups, in the order they appear in the modal. */
  const PREFERENCE_KEYS = [
    'mealType',
    'dietary',
    'cuisine',
    'dishType',
    'cookingTime',
    'spiceLevel',
    'difficulty',
  ];

  /** Preference keys whose meal field holds a list rather than a single value. */
  const MULTI_VALUE_KEYS = ['mealType', 'dietary'];

  const DEFAULT_PREFERENCES = PREFERENCE_KEYS.reduce((acc, key) => {
    acc[key] = 'any';
    return acc;
  }, {});

  /**
   * Display names for dish types. The option list itself is derived from the
   * meal data (see buildDishTypes) so a dish type can never be offered unless
   * meals actually carry it.
   */
  const DISH_TYPE_LABELS = {
    appetizer: 'Appetizers & Sides',
    bbq: 'Grilled & BBQ',
    breakfast: 'Breakfast',
    burger: 'Burgers',
    burrito: 'Burritos',
    curry: 'Curry',
    dumpling: 'Dumplings & Small Bites',
    enchilada: 'Enchiladas',
    meat: 'Meat Dishes',
    noodles: 'Noodles',
    other: 'Other',
    pasta: 'Pasta',
    pizza: 'Pizza',
    quesadilla: 'Quesadillas',
    rice: 'Rice Dishes',
    salad: 'Salads & Bowls',
    sandwich: 'Sandwiches & Wraps',
    seafood: 'Seafood',
    soup: 'Soups & Stews',
    sushi: 'Sushi',
    taco: 'Tacos',
  };

  const meals = Array.isArray(window.MEALS) ? window.MEALS : [];

  // ---------------------------------------------------------------------------
  // DOM references
  // ---------------------------------------------------------------------------

  const mealCard = document.querySelector('.meal-card');
  const mealEmoji = document.getElementById('mealEmoji');
  const mealName = document.getElementById('mealName');
  const mealDescription = document.getElementById('mealDescription');
  const mealTags = document.getElementById('mealTags');
  const generateBtn = document.getElementById('generateBtn');
  const mealCountElement = document.getElementById('mealCount');
  const recipeLinkContainer = document.getElementById('recipeLinkContainer');
  const recipeLink = document.getElementById('recipeLink');
  const recipeSource = document.getElementById('recipeSource');
  const tiktokSearch = document.getElementById('tiktokSearch');
  const youtubeSearch = document.getElementById('youtubeSearch');
  const foodNetworkSearch = document.getElementById('foodNetworkSearch');

  const preferencesBtn = document.getElementById('preferencesBtn');
  const preferencesModal = document.getElementById('preferencesModal');
  const preferencesOverlay = document.getElementById('preferencesOverlay');
  const preferencesContent = preferencesModal.querySelector('.preferences-content');
  const preferencesClose = document.getElementById('preferencesClose');
  const preferencesReset = document.getElementById('preferencesReset');
  const preferencesApply = document.getElementById('preferencesApply');
  const preferencesMatchCount = document.getElementById('preferencesMatchCount');
  const dishTypeSection = document.getElementById('dishTypeSection');
  const dishTypeOptions = document.getElementById('dishTypeOptions');
  const notificationRegion = document.getElementById('notificationRegion');

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------

  let userPreferences = { ...DEFAULT_PREFERENCES };

  /** Preferences as last applied — used to discard edits on a cancelled close. */
  let appliedPreferences = { ...DEFAULT_PREFERENCES };

  let mealCount = 0;
  let recentMeals = [];
  let generateTimeoutId = null;
  let elementFocusedBeforeModal = null;
  let clickCount = 0;

  // ---------------------------------------------------------------------------
  // Storage helpers
  // ---------------------------------------------------------------------------

  // localStorage throws in private-mode Safari and when the quota is full, and
  // returns whatever a previous version wrote. Every access is guarded so a bad
  // value can never stop the app from starting.

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      /* Saving is a nice-to-have; ignore quota and privacy-mode failures. */
    }
  }

  function loadMealCount() {
    const parsed = parseInt(readStorage(STORAGE_KEYS.mealCount), 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  }

  function loadPreferences() {
    const raw = readStorage(STORAGE_KEYS.preferences);
    if (!raw) return { ...DEFAULT_PREFERENCES };

    let saved;
    try {
      saved = JSON.parse(raw);
    } catch (error) {
      return { ...DEFAULT_PREFERENCES };
    }
    if (!saved || typeof saved !== 'object') return { ...DEFAULT_PREFERENCES };

    // Only accept keys we know about, and only values that still exist in the
    // meal data, so renamed or removed options degrade to "any" instead of
    // filtering everything away.
    const result = { ...DEFAULT_PREFERENCES };
    PREFERENCE_KEYS.forEach((key) => {
      const value = saved[key];
      if (typeof value === 'string' && (value === 'any' || valueExists(key, value))) {
        result[key] = value;
      }
    });

    // Each value can be individually valid while the combination is not — a dish
    // type saved under a different cuisine, say. Widen until something matches,
    // otherwise the generator would open on "No meals match your preferences!".
    if (
      result.cuisine !== 'any' &&
      !buildDishTypes(result.cuisine).some((type) => type.value === result.dishType)
    ) {
      result.dishType = 'any';
    }
    return filterMeals(result).length > 0 ? result : { ...DEFAULT_PREFERENCES };
  }

  function savePreferences() {
    writeStorage(STORAGE_KEYS.preferences, JSON.stringify(userPreferences));
  }

  // ---------------------------------------------------------------------------
  // Meal filtering
  // ---------------------------------------------------------------------------

  function mealMatches(meal, key, value) {
    if (value === 'any') return true;
    const field = meal[key];
    return MULTI_VALUE_KEYS.indexOf(key) !== -1
      ? Array.isArray(field) && field.indexOf(value) !== -1
      : field === value;
  }

  function valueExists(key, value) {
    return meals.some((meal) => mealMatches(meal, key, value));
  }

  function filterMeals(preferences) {
    return meals.filter((meal) =>
      PREFERENCE_KEYS.every((key) => mealMatches(meal, key, preferences[key]))
    );
  }

  /** Dish types actually present for a cuisine, in the label map's order. */
  function buildDishTypes(cuisine) {
    const present = new Set(
      meals
        .filter((meal) => cuisine === 'any' || meal.cuisine === cuisine)
        .map((meal) => meal.dishType)
    );
    return Object.keys(DISH_TYPE_LABELS)
      .filter((type) => present.has(type))
      .map((type) => ({ value: type, text: DISH_TYPE_LABELS[type] }));
  }

  // ---------------------------------------------------------------------------
  // Preferences modal
  // ---------------------------------------------------------------------------

  function readFormPreferences() {
    const values = { ...DEFAULT_PREFERENCES };
    PREFERENCE_KEYS.forEach((key) => {
      const checked = preferencesModal.querySelector(`input[name="${key}"]:checked`);
      if (checked) values[key] = checked.value;
    });
    return values;
  }

  function renderDishTypes(cuisine, selected) {
    const dishTypes = cuisine === 'any' ? [] : buildDishTypes(cuisine);

    // A cuisine with a single dish type offers no real choice — hide the group
    // rather than showing a section where every answer is the same.
    if (dishTypes.length < 2) {
      dishTypeSection.hidden = true;
      dishTypeSection.classList.remove('show');
      dishTypeOptions.innerHTML = '';
      return;
    }

    const options = [{ value: 'any', text: `Any ${capitalize(cuisine)}` }].concat(dishTypes);
    const wanted = options.some((option) => option.value === selected) ? selected : 'any';

    dishTypeOptions.innerHTML = '';
    options.forEach((option) => {
      dishTypeOptions.appendChild(
        createOption('dishType', option.value, option.text, option.value === wanted)
      );
    });

    dishTypeSection.hidden = false;
    // Next frame, so the browser registers the starting state and animates.
    requestAnimationFrame(() => dishTypeSection.classList.add('show'));
  }

  function createOption(name, value, text, checked) {
    const label = document.createElement('label');
    label.className = 'preference-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.value = value;
    input.checked = checked;

    const span = document.createElement('span');
    span.className = 'option-text';
    span.textContent = text;

    label.appendChild(input);
    label.appendChild(span);
    return label;
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  /**
   * Disables the options that would return no meals, and shows how many meals
   * the current selection matches. Prevents the dead-end combinations that
   * previously ended in "No meals match your preferences!".
   */
  function refreshAvailability() {
    const current = readFormPreferences();

    preferencesModal.querySelectorAll('.preference-option input[type="radio"]').forEach((input) => {
      if (input.value === 'any' || input.checked) {
        input.disabled = false;
        input.closest('.preference-option').classList.remove('preference-option--empty');
        return;
      }

      const candidate = { ...current, [input.name]: input.value };
      // Dish types are rebuilt whenever the cuisine changes, so a cuisine must
      // not be judged against a dish type belonging to a different cuisine.
      if (input.name === 'cuisine') candidate.dishType = 'any';

      const isEmpty = filterMeals(candidate).length === 0;
      input.disabled = isEmpty;
      input.closest('.preference-option').classList.toggle('preference-option--empty', isEmpty);
    });

    const total = filterMeals(current).length;
    preferencesMatchCount.textContent =
      total === 1 ? '1 meal matches' : `${total} meals match`;
  }

  function updatePreferencesForm(preferences) {
    PREFERENCE_KEYS.forEach((key) => {
      if (key === 'dishType') return; // Rendered below, after the cuisine is known.
      const radio = preferencesModal.querySelector(
        `input[name="${key}"][value="${preferences[key]}"]`
      );
      if (radio) radio.checked = true;
    });
    renderDishTypes(preferences.cuisine, preferences.dishType);
    refreshAvailability();
  }

  function updatePreferencesButtonState() {
    const active = PREFERENCE_KEYS.some((key) => userPreferences[key] !== 'any');
    preferencesBtn.classList.toggle('preferences-active', active);
    preferencesBtn.title = active
      ? 'Preferences are active - click to modify'
      : 'Set your meal preferences';
  }

  function openPreferencesModal() {
    elementFocusedBeforeModal = document.activeElement;
    updatePreferencesForm(appliedPreferences);
    preferencesModal.hidden = false;
    document.body.classList.add('modal-open');
    preferencesClose.focus();
  }

  function closePreferencesModal() {
    preferencesModal.hidden = true;
    document.body.classList.remove('modal-open');
    if (elementFocusedBeforeModal && elementFocusedBeforeModal.focus) {
      elementFocusedBeforeModal.focus();
    }
    elementFocusedBeforeModal = null;
  }

  function isModalOpen() {
    return !preferencesModal.hidden;
  }

  function resetPreferences() {
    userPreferences = { ...DEFAULT_PREFERENCES };
    appliedPreferences = { ...DEFAULT_PREFERENCES };
    savePreferences();
    updatePreferencesForm(appliedPreferences);
    updatePreferencesButtonState();
    closePreferencesModal();
    showNotification('Preferences reset! 🔄', 'success');
  }

  function applyPreferences() {
    userPreferences = readFormPreferences();
    appliedPreferences = { ...userPreferences };
    savePreferences();
    updatePreferencesButtonState();
    closePreferencesModal();
    showNotification('Preferences saved! ✓', 'success');
  }

  /** Keeps Tab inside the dialog while it is open. */
  function trapFocus(event) {
    if (event.key !== 'Tab') return;

    const focusable = Array.from(
      preferencesContent.querySelectorAll('button, input:not([disabled])')
    ).filter((element) => element.offsetParent !== null);
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
  // Notifications
  // ---------------------------------------------------------------------------

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notificationRegion.appendChild(notification);

    requestAnimationFrame(() => notification.classList.add('notification--visible'));

    window.setTimeout(() => {
      notification.classList.remove('notification--visible');
      // Remove once it has slid out, or immediately if transitions are off.
      window.setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // ---------------------------------------------------------------------------
  // Meal generation
  // ---------------------------------------------------------------------------

  function pickMeal(candidates) {
    let selected;
    let attempts = 0;

    // Avoiding recent meals only makes sense when there are more candidates
    // than the history length; otherwise every candidate is "recent".
    const avoidRecent = candidates.length > MAX_RECENT_MEALS;
    do {
      selected = candidates[Math.floor(Math.random() * candidates.length)];
      attempts += 1;
      if (attempts > MAX_DRAW_ATTEMPTS) {
        recentMeals = [];
        break;
      }
    } while (avoidRecent && recentMeals.indexOf(selected.name) !== -1);

    recentMeals.push(selected.name);
    if (recentMeals.length > MAX_RECENT_MEALS) recentMeals.shift();
    return selected;
  }

  function generateRandomMeal() {
    if (generateBtn.disabled) return;

    generateBtn.disabled = true;
    generateBtn.setAttribute('aria-busy', 'true');

    mealEmoji.textContent = '🎲';
    mealName.textContent = 'Generating your meal...';
    mealDescription.textContent = 'Please wait while we pick something delicious!';
    mealTags.innerHTML = '';
    recipeLinkContainer.hidden = true;

    // A single pending timeout replaces the old generation-id bookkeeping:
    // there can only ever be one in flight.
    window.clearTimeout(generateTimeoutId);
    generateTimeoutId = window.setTimeout(() => {
      const candidates = filterMeals(userPreferences);

      if (candidates.length === 0) {
        mealEmoji.textContent = '😅';
        mealName.textContent = 'No meals match your preferences!';
        mealDescription.textContent =
          'Try adjusting your preferences or reset them to see more options.';
        showNotification('No meals found! Try different preferences 🔍', 'info');
      } else {
        displayMeal(pickMeal(candidates));
        mealCount += 1;
        updateMealCount();
        writeStorage(STORAGE_KEYS.mealCount, String(mealCount));
      }

      generateBtn.disabled = false;
      generateBtn.removeAttribute('aria-busy');
    }, GENERATE_DELAY);
  }

  function displayMeal(meal) {
    mealCard.classList.remove('fade-in');

    mealEmoji.textContent = meal.emoji || '🍽️';
    mealName.textContent = meal.name;
    mealDescription.textContent = meal.description;

    mealTags.innerHTML = '';
    (meal.tags || []).forEach((tag) => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';
      tagElement.textContent = tag;
      mealTags.appendChild(tagElement);
    });

    if (meal.searchQuery) {
      const query = encodeURIComponent(meal.searchQuery);
      recipeLink.href = `https://www.allrecipes.com/search?q=${query}`;
      recipeSource.textContent = 'Search AllRecipes';
      recipeLink.setAttribute('aria-label', `Find ${meal.name} recipes on AllRecipes`);
      tiktokSearch.href = `https://www.tiktok.com/search?q=${query}`;
      youtubeSearch.href = `https://www.youtube.com/results?search_query=${query}`;
      foodNetworkSearch.href = `https://www.google.com/search?q=site:foodnetwork.com+${query}`;
      recipeLinkContainer.hidden = false;
    } else {
      recipeLinkContainer.hidden = true;
    }

    requestAnimationFrame(() => mealCard.classList.add('fade-in'));
  }

  function updateMealCount() {
    mealCountElement.textContent = String(mealCount);
  }

  // ---------------------------------------------------------------------------
  // Easter eggs
  // ---------------------------------------------------------------------------

  function checkEasterEggs() {
    clickCount += 1;
    if (clickCount === 10) {
      showNotification('🎉 Wow! You really love trying new meals! Keep exploring! 🎉', 'success');
    } else if (clickCount === 25) {
      showNotification("🏆 You're a true food adventurer! 25 meals generated! 🏆", 'success');
    }
  }

  // ---------------------------------------------------------------------------
  // Wiring
  // ---------------------------------------------------------------------------

  /**
   * Space/Enter generates a meal, but only when the user is not interacting
   * with a control. The previous version swallowed both keys document-wide,
   * which made every button and radio in the app unusable from the keyboard.
   */
  function handleGlobalKeydown(event) {
    if (isModalOpen()) return;
    if (event.code !== 'Space' && event.code !== 'Enter') return;

    const target = event.target;
    if (target !== document.body && target.closest('a, button, input, select, textarea')) {
      return;
    }

    event.preventDefault();
    if (!generateBtn.disabled) generateRandomMeal();
  }

  function setupEventListeners() {
    generateBtn.addEventListener('click', generateRandomMeal);
    generateBtn.addEventListener('click', checkEasterEggs);

    preferencesBtn.addEventListener('click', openPreferencesModal);
    preferencesClose.addEventListener('click', closePreferencesModal);
    preferencesOverlay.addEventListener('click', closePreferencesModal);
    preferencesReset.addEventListener('click', resetPreferences);
    preferencesApply.addEventListener('click', applyPreferences);

    // One delegated listener covers the dish-type radios too, which are
    // recreated whenever the cuisine changes.
    preferencesModal.addEventListener('change', (event) => {
      if (event.target.name === 'cuisine') {
        renderDishTypes(event.target.value, 'any');
      }
      refreshAvailability();
    });

    preferencesModal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closePreferencesModal();
      else trapFocus(event);
    });

    document.addEventListener('keydown', handleGlobalKeydown);

    // Keep the result in view on small screens after generating.
    if (window.matchMedia('(max-width: 768px)').matches) {
      generateBtn.addEventListener('click', () => {
        window.setTimeout(() => {
          mealCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      });
    }
  }

  function init() {
    if (meals.length === 0) {
      mealEmoji.textContent = '😕';
      mealName.textContent = 'Meal database failed to load';
      mealDescription.textContent = 'Check that data/meals.js is present, then reload the page.';
      generateBtn.disabled = true;
      return;
    }

    mealCount = loadMealCount();
    updateMealCount();

    userPreferences = loadPreferences();
    appliedPreferences = { ...userPreferences };
    updatePreferencesButtonState();

    setupEventListeners();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
