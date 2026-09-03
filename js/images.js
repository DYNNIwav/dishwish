/**
 * Optional meal photos from TheMealDB.
 *
 * This is strictly an enhancement: the emoji placeholder is always painted
 * first, the lookup never blocks the suggestion, and any failure — offline,
 * blocked by a network policy, CORS on file://, a name TheMealDB has never
 * heard of — degrades silently back to the emoji.
 *
 * Results are cached in localStorage (misses too, so a dish the API does not
 * know is not re-requested on every roll), and after a couple of consecutive
 * network failures the lookup switches itself off for the rest of the session.
 */
(function (namespace) {
  'use strict';

  // TheMealDB's documented free/test key. It is intended for development; a
  // production deployment should check their current terms and swap in a key of
  // its own. Photos are hot-linked from their CDN, so this is also the one place
  // where the app pulls in third-party content rather than merely linking out.
  const API_KEY = '1';
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=`;
  const REQUEST_TIMEOUT = 5000;
  const HIT_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days
  const MISS_TTL = 24 * 60 * 60 * 1000; // 1 day — the API does add meals
  const MAX_CACHE_ENTRIES = 250;
  const FAILURE_LIMIT = 2;

  const store = namespace.store;

  let cache = null;
  let consecutiveFailures = 0;
  let unavailable = typeof fetch !== 'function';
  let enabled = store.getPhotosEnabled();
  const inFlight = new Map();

  const isOff = () => unavailable || !enabled;

  function loadCache() {
    if (cache) return cache;
    const saved = store.readJson(store.KEYS.imageCache, {});
    cache = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
    return cache;
  }

  function persistCache() {
    const entries = Object.entries(loadCache());
    if (entries.length > MAX_CACHE_ENTRIES) {
      entries.sort((a, b) => (b[1].ts || 0) - (a[1].ts || 0));
      cache = Object.fromEntries(entries.slice(0, MAX_CACHE_ENTRIES));
    }
    store.writeJson(store.KEYS.imageCache, cache);
  }

  function readCache(key) {
    const entry = loadCache()[key];
    if (!entry || typeof entry.ts !== 'number') return undefined;
    const ttl = entry.url ? HIT_TTL : MISS_TTL;
    if (Date.now() - entry.ts > ttl) return undefined;
    return entry.url;
  }

  function writeCache(key, url) {
    loadCache()[key] = { url: url || null, ts: Date.now() };
    persistCache();
  }

  /** The API answers with { meals: [...] } or { meals: null }. */
  function pickThumbnail(payload, mealName) {
    if (!payload || !Array.isArray(payload.meals) || payload.meals.length === 0) return null;

    const wanted = mealName.toLowerCase();
    const exact = payload.meals.find(
      (entry) => typeof entry.strMeal === 'string' && entry.strMeal.toLowerCase() === wanted
    );
    const chosen = exact || payload.meals[0];
    return typeof chosen.strMealThumb === 'string' && chosen.strMealThumb
      ? chosen.strMealThumb
      : null;
  }

  async function request(mealName) {
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = controller
      ? window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
      : null;

    try {
      const response = await fetch(ENDPOINT + encodeURIComponent(mealName), {
        signal: controller ? controller.signal : undefined,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      consecutiveFailures = 0;
      return pickThumbnail(payload, mealName);
    } finally {
      if (timer !== null) window.clearTimeout(timer);
    }
  }

  /**
   * Resolves to an image URL, or null when there is no usable photo.
   * Never rejects.
   */
  function lookup(meal) {
    if (!meal || !meal.name) return Promise.resolve(null);

    if (isOff()) return Promise.resolve(null);

    const key = meal.name.toLowerCase();
    const cached = readCache(key);
    if (cached !== undefined) return Promise.resolve(cached);
    if (inFlight.has(key)) return inFlight.get(key);

    const pending = request(meal.name)
      .then((url) => {
        writeCache(key, url);
        return url;
      })
      .catch(() => {
        consecutiveFailures += 1;
        if (consecutiveFailures >= FAILURE_LIMIT) {
          // Offline, blocked, or CORS-refused. Stop asking.
          unavailable = true;
        }
        return null;
      })
      .finally(() => inFlight.delete(key));

    inFlight.set(key, pending);
    return pending;
  }

  namespace.images = {
    lookup,
    isDisabled: () => isOff(),
    isEnabled: () => enabled,

    /** User-facing kill switch: no photos means no third-party requests at all. */
    setEnabled(value) {
      enabled = Boolean(value);
      store.setPhotosEnabled(enabled);
    },

    /** Test seam: lets the suite exercise the circuit breaker deterministically. */
    reset() {
      cache = null;
      consecutiveFailures = 0;
      unavailable = typeof fetch !== 'function';
      inFlight.clear();
    },
  };
})((window.DishWish = window.DishWish || {}));
