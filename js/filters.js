/**
 * Filtering and the vocabulary behind the preference sheet.
 *
 * Selections are multi-select: OR within a group, AND between groups. An empty
 * group means "no constraint", which is why there is no "Any" option any more —
 * deselecting everything is "any".
 */
(function (namespace) {
  'use strict';

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

  /**
   * Display names for dish types. The options themselves are derived from the
   * meal data, so a dish type can never be offered without meals behind it —
   * but a new one needs a label here or it falls back to its raw value.
   */
  const DISH_TYPE_LABELS = {
    appetizer: 'Appetisers & Sides',
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

  /** Labels for the values declared statically in index.html. */
  const VALUE_LABELS = {
    breakfast: 'Breakfast',
    brunch: 'Brunch',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
    vegetarian: 'Vegetarian',
    vegan: 'Vegan',
    'meat-lovers': 'Meat Lovers',
    pescatarian: 'Pescatarian',
    'gluten-free': 'Gluten-Free',
    keto: 'Keto/Low-Carb',
    italian: 'Italian',
    chinese: 'Chinese',
    japanese: 'Japanese',
    thai: 'Thai',
    korean: 'Korean',
    vietnamese: 'Vietnamese',
    indian: 'Indian',
    mexican: 'Mexican',
    american: 'American',
    mediterranean: 'Mediterranean',
  };

  /** Icons for the meta row on the meal card. */
  const META_ICONS = {
    cookingTime: '⏱️',
    difficulty: '👨‍🍳',
    spiceLevel: '🌶️',
  };

  const COOKING_TIME_LABELS = {
    quick: 'Under 30 min',
    medium: '30–60 min',
    long: '1 hour+',
  };

  const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const SPICE_LABELS = { mild: 'Mild', medium: 'Medium spice', spicy: 'Spicy' };

  function emptySelection() {
    return PREFERENCE_KEYS.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
  }

  function isEmptySelection(selection) {
    return PREFERENCE_KEYS.every((key) => selection[key].length === 0);
  }

  function countSelected(selection) {
    return PREFERENCE_KEYS.reduce((total, key) => total + selection[key].length, 0);
  }

  function mealMatchesValue(meal, key, value) {
    const field = meal[key];
    return MULTI_VALUE_KEYS.indexOf(key) !== -1
      ? Array.isArray(field) && field.indexOf(value) !== -1
      : field === value;
  }

  function mealMatchesGroup(meal, key, values) {
    // An empty group places no constraint on the meal.
    return values.length === 0 || values.some((value) => mealMatchesValue(meal, key, value));
  }

  function createFilters(meals) {
    function filter(selection) {
      return meals.filter((meal) =>
        PREFERENCE_KEYS.every((key) => mealMatchesGroup(meal, key, selection[key]))
      );
    }

    function valueExists(key, value) {
      return meals.some((meal) => mealMatchesValue(meal, key, value));
    }

    /**
     * Dish types present across the selected cuisines (all cuisines when none
     * are selected), ordered by the label map.
     */
    function dishTypesFor(cuisines) {
      const present = new Set(
        meals
          .filter((meal) => cuisines.length === 0 || cuisines.indexOf(meal.cuisine) !== -1)
          .map((meal) => meal.dishType)
      );
      return Object.keys(DISH_TYPE_LABELS)
        .filter((type) => present.has(type))
        .map((type) => ({ value: type, label: DISH_TYPE_LABELS[type] }));
    }

    /**
     * True when ticking this value could never produce a meal, given the other
     * groups. Because a group ORs its values, a value is only useless if it
     * yields nothing on its own alongside the rest of the selection.
     */
    function isDeadEnd(selection, key, value) {
      const candidate = { ...selection, [key]: [value] };
      // Dish types are rebuilt from the cuisine selection, so a cuisine must not
      // be judged against a dish type belonging to a different cuisine.
      if (key === 'cuisine') candidate.dishType = [];
      return filter(candidate).length === 0;
    }

    /** Accepts anything shaped like a selection and discards what no longer fits. */
    function sanitise(candidate) {
      const result = emptySelection();
      if (!candidate || typeof candidate !== 'object') return result;

      PREFERENCE_KEYS.forEach((key) => {
        const saved = candidate[key];
        // Migrate the old single-value format ("any" | "italian") to a list.
        const values = Array.isArray(saved)
          ? saved
          : typeof saved === 'string' && saved !== 'any'
            ? [saved]
            : [];
        result[key] = values.filter(
          (value, index) =>
            typeof value === 'string' &&
            values.indexOf(value) === index &&
            valueExists(key, value)
        );
      });

      // Drop dish types that do not belong to the selected cuisines.
      const allowed = dishTypesFor(result.cuisine).map((type) => type.value);
      result.dishType = result.dishType.filter((type) => allowed.indexOf(type) !== -1);

      // Individually valid values can still combine to nothing.
      return filter(result).length > 0 ? result : emptySelection();
    }

    return { filter, valueExists, dishTypesFor, isDeadEnd, sanitise };
  }

  namespace.filters = {
    PREFERENCE_KEYS,
    MULTI_VALUE_KEYS,
    DISH_TYPE_LABELS,
    VALUE_LABELS,
    META_ICONS,
    COOKING_TIME_LABELS,
    DIFFICULTY_LABELS,
    SPICE_LABELS,
    emptySelection,
    isEmptySelection,
    countSelected,
    createFilters,
    /** Group-specific labels win, so cookingTime "medium" reads "30-60 min"
        while spiceLevel "medium" reads "Medium spice". */
    labelFor(key, value) {
      const perGroup = {
        dishType: DISH_TYPE_LABELS,
        cookingTime: COOKING_TIME_LABELS,
        difficulty: DIFFICULTY_LABELS,
        spiceLevel: SPICE_LABELS,
      }[key];
      if (perGroup && perGroup[value]) return perGroup[value];
      return VALUE_LABELS[value] || value;
    },
  };
})((window.DishWish = window.DishWish || {}));
