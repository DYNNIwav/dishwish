/**
 * Duo mode — the "couples who can't agree" case the README always claimed.
 *
 * Both people rate the same shuffled deck, one after the other, without seeing
 * each other's answers. Whatever they both said yes to is the match. Nothing is
 * persisted: a round lives entirely in memory and is gone when it closes.
 */
(function (namespace) {
  'use strict';

  const DECK_SIZES = [5, 8, 12];

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

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /**
   * @param {object} options
   * @param {() => object[]} options.getCandidates  meals matching the current filters
   * @param {(meal: object) => void} options.onPick  show this meal in the main card
   * @param {(message: string, type?: string) => void} options.notify
   * @param {{lookup: (meal: object) => Promise<string|null>}} options.images
   */
  function create(options) {
    const root = document.getElementById('duoMode');
    const panel = root.querySelector('.duo-panel');

    let deck = [];
    let deckSize = 8;
    let player = 1;
    let index = 0;
    let votes = [[], []];
    let lastFocused = null;

    function close() {
      root.hidden = true;
      document.body.classList.remove('is-locked');
      panel.innerHTML = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
      lastFocused = null;
    }

    function render(nodes) {
      panel.innerHTML = '';
      nodes.forEach((node) => panel.appendChild(node));
      const focusTarget = panel.querySelector('button');
      if (focusTarget) focusTarget.focus();
    }

    // --- setup -------------------------------------------------------------
    function renderSetup() {
      const available = options.getCandidates().length;
      const sizes = DECK_SIZES.filter((size) => size <= available);
      if (sizes.length === 0) sizes.push(available);
      if (sizes.indexOf(deckSize) === -1) deckSize = sizes[sizes.length - 1];

      const sizeButtons = sizes.map((size) =>
        el(
          'button',
          {
            type: 'button',
            class: 'duo-choice',
            'data-size': String(size),
            'aria-pressed': String(size === deckSize),
            onclick: () => {
              deckSize = size;
              renderSetup();
            },
          },
          [
            el('span', { text: String(size) }),
            el('span', { class: 'duo-choice-label', text: 'dishes' }),
          ]
        )
      );

      render([
        el('div', { class: 'duo-handoff-emoji', text: '👩‍❤️‍👨' }),
        el('h2', { class: 'duo-title', text: 'Duo mode' }),
        el('p', {
          class: 'duo-lede',
          text:
            available < 2
              ? 'You need at least two matching dishes. Widen your filters and try again.'
              : 'One phone, two people. You each rate the same dishes in private, then the app shows what you both said yes to.',
        }),
        available >= 2 ? el('div', { class: 'duo-size-options' }, sizeButtons) : null,
        el('div', { class: 'duo-actions' }, [
          available >= 2
            ? el('button', {
                type: 'button',
                class: 'btn-primary',
                text: 'Start round',
                onclick: start,
              })
            : null,
          el('button', { type: 'button', class: 'btn-ghost', text: 'Close', onclick: close }),
        ]),
      ]);
    }

    function start() {
      const candidates = options.getCandidates();
      deck = shuffle(candidates).slice(0, Math.min(deckSize, candidates.length));
      player = 1;
      index = 0;
      votes = [[], []];
      renderSwipe();
    }

    // --- swiping -----------------------------------------------------------
    function renderSwipe() {
      const meal = deck[index];
      const media = el('div', { class: 'duo-card-media', text: meal.emoji || '🍽️' });

      // Photo is a bonus; the emoji stands in until (and if) it arrives.
      options.images.lookup(meal).then((url) => {
        if (!url || !media.isConnected) return;
        const img = el('img', {
          class: 'meal-photo',
          src: url,
          alt: '',
          loading: 'lazy',
          decoding: 'async',
        });
        img.addEventListener('load', () => img.classList.add('is-loaded'));
        img.addEventListener('error', () => img.remove());
        media.appendChild(img);
      });

      render([
        el('p', {
          class: 'duo-progress',
          text: `Player ${player} · ${index + 1} of ${deck.length}`,
        }),
        el('div', { class: 'duo-card' }, [
          media,
          el('div', { class: 'duo-card-body' }, [
            el('h2', { class: 'duo-card-name', text: meal.name }),
            el('p', { class: 'duo-card-desc', text: meal.description }),
          ]),
        ]),
        el('div', { class: 'duo-choices' }, [
          el(
            'button',
            {
              type: 'button',
              class: 'duo-choice duo-choice--no',
              'aria-label': `No to ${meal.name}`,
              onclick: () => vote(false),
            },
            [
              el('span', { text: '👎', 'aria-hidden': 'true' }),
              el('span', { class: 'duo-choice-label', text: 'Nope' }),
            ]
          ),
          el(
            'button',
            {
              type: 'button',
              class: 'duo-choice duo-choice--yes',
              'aria-label': `Yes to ${meal.name}`,
              onclick: () => vote(true),
            },
            [
              el('span', { text: '👍', 'aria-hidden': 'true' }),
              el('span', { class: 'duo-choice-label', text: 'Yes!' }),
            ]
          ),
        ]),
        el('p', { class: 'kbd-hint' }, [
          el('kbd', { text: '←' }),
          document.createTextNode(' nope · '),
          el('kbd', { text: '→' }),
          document.createTextNode(' yes'),
        ]),
      ]);
    }

    function vote(liked) {
      if (liked) votes[player - 1].push(deck[index].name);
      index += 1;

      if (index < deck.length) {
        renderSwipe();
      } else if (player === 1) {
        renderHandoff();
      } else {
        renderResults();
      }
    }

    // --- handoff -----------------------------------------------------------
    function renderHandoff() {
      render([
        el('div', { class: 'duo-handoff-emoji', text: '🤝' }),
        el('h2', { class: 'duo-title', text: 'Pass the phone' }),
        el('p', {
          class: 'duo-lede',
          text: 'Player 2 rates the same dishes. Player 1, no peeking at the answers.',
        }),
        el('div', { class: 'duo-actions' }, [
          el('button', {
            type: 'button',
            class: 'btn-primary',
            text: "I'm player 2 — start",
            onclick: () => {
              player = 2;
              index = 0;
              renderSwipe();
            },
          }),
          el('button', { type: 'button', class: 'btn-ghost', text: 'Cancel', onclick: close }),
        ]),
      ]);
    }

    // --- results -----------------------------------------------------------
    function renderResults() {
      const matches = deck.filter(
        (meal) => votes[0].indexOf(meal.name) !== -1 && votes[1].indexOf(meal.name) !== -1
      );

      const matchNodes = matches.map((meal) =>
        el(
          'button',
          {
            type: 'button',
            class: 'duo-match',
            onclick: () => {
              close();
              options.onPick(meal);
            },
          },
          [
            el('span', {
              class: 'duo-match-emoji',
              text: meal.emoji || '🍽️',
              'aria-hidden': 'true',
            }),
            el('span', {}, [
              el('span', { class: 'duo-match-name', text: meal.name }),
              el('span', { class: 'duo-match-desc', text: meal.description }),
            ]),
          ]
        )
      );

      render([
        el('div', {
          class: 'duo-handoff-emoji',
          text: matches.length > 0 ? '🎉' : '😬',
        }),
        el('h2', {
          class: 'duo-title',
          text:
            matches.length === 0
              ? 'No agreement'
              : matches.length === 1
                ? 'One match!'
                : `${matches.length} matches!`,
        }),
        el('p', {
          class: 'duo-lede',
          text:
            matches.length === 0
              ? 'Not a single dish you both wanted. Run another round — a bigger deck usually helps.'
              : 'You both said yes to these. Tap one to open it.',
        }),
        el('div', {}, matchNodes),
        el('div', { class: 'duo-actions' }, [
          el('button', {
            type: 'button',
            class: 'btn-primary',
            text: 'Another round',
            onclick: renderSetup,
          }),
          el('button', { type: 'button', class: 'btn-ghost', text: 'Close', onclick: close }),
        ]),
      ]);
    }

    // --- keyboard ----------------------------------------------------------
    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }

      const swiping = panel.querySelector('.duo-choice--yes');
      if (!swiping) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        vote(false);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        vote(true);
      }
    });

    return {
      open() {
        const available = options.getCandidates().length;
        if (available < 2) {
          options.notify('Duo mode needs at least 2 matching dishes 🔍', 'info');
          return;
        }
        lastFocused = document.activeElement;
        root.hidden = false;
        document.body.classList.add('is-locked');
        renderSetup();
      },
      close,
    };
  }

  namespace.duo = { create };
})((window.DishWish = window.DishWish || {}));
