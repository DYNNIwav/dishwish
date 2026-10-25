/**
 * Persistence layer.
 *
 * Every localStorage access goes through here. The API throws in private-mode
 * Safari and when the quota is full, and it hands back whatever a previous
 * version of the app wrote — so nothing below is allowed to throw, and every
 * read validates before returning.
 */
(function (namespace) {
  'use strict';

  const KEYS = {
    mealCount: 'mealCount',
    preferences: 'dishwishPreferences',
    favourites: 'dishwishFavourites',
    history: 'dishwishHistory',
    theme: 'dishwishTheme',
    imageCache: 'dishwishImageCache',
    photos: 'dishwishPhotos',
  };

  function readRaw(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeRaw(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      // Quota exceeded or storage blocked. Persisting is a nice-to-have.
      return false;
    }
  }

  function readJson(key, fallback) {
    const raw = readRaw(key);
    if (!raw) return fallback;
    try {
      const parsed = JSON.parse(raw);
      return parsed === null || parsed === undefined ? fallback : parsed;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    return writeRaw(key, JSON.stringify(value));
  }

  namespace.store = {
    KEYS,
    readRaw,
    writeRaw,
    readJson,
    writeJson,

    getMealCount() {
      const parsed = parseInt(readRaw(KEYS.mealCount), 10);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    },

    setMealCount(count) {
      writeRaw(KEYS.mealCount, String(count));
    },

    /** Favourites are stored as meal names; unknown names are dropped on read. */
    getFavourites(isKnownName) {
      const saved = readJson(KEYS.favourites, []);
      if (!Array.isArray(saved)) return [];
      return saved.filter((name) => typeof name === 'string' && isKnownName(name));
    },

    setFavourites(names) {
      writeJson(KEYS.favourites, names);
    },

    /** Recently generated meals, newest first, stored as names. */
    getHistory(isKnownName) {
      const saved = readJson(KEYS.history, []);
      if (!Array.isArray(saved)) return [];
      return saved.filter((name) => typeof name === 'string' && isKnownName(name));
    },

    setHistory(names) {
      writeJson(KEYS.history, names);
    },

    /** Meal photos are on unless the user has turned them off. */
    getPhotosEnabled() {
      return readRaw(KEYS.photos) !== 'off';
    },

    setPhotosEnabled(value) {
      writeRaw(KEYS.photos, value ? 'on' : 'off');
    },

    /** "light" | "dark" | null (follow the OS). */
    getTheme() {
      const value = readRaw(KEYS.theme);
      return value === 'light' || value === 'dark' ? value : null;
    },

    setTheme(theme) {
      if (theme === null) {
        try {
          localStorage.removeItem(KEYS.theme);
        } catch {
          /* storage blocked */
        }
        return;
      }
      writeRaw(KEYS.theme, theme);
    },
  };
})((window.DishWish = window.DishWish || {}));
