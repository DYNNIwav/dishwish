# 🍽️ DishWish - Random Meal Generator

**DishWish** is a small, dependency-free web app that answers the age-old question:
"What should we eat?" Perfect for indecisive dinner planners, couples who can't
agree on a meal, or anyone looking for culinary inspiration.

## ✨ Features

### 🎲 Random meal generation

- **270 dishes** across ten cuisines
- Remembers the last 8 suggestions and avoids repeating them
- Recipe search links to AllRecipes, TikTok, YouTube, and Food Network
- Keyboard support: press <kbd>Space</kbd> or <kbd>Enter</kbd> to generate
- Meal counter persisted in `localStorage`

### 🎛️ Preference filters

Seven filters, all optional:

| Filter | Options |
| --- | --- |
| Meal type | Breakfast, Brunch, Lunch, Dinner, Snack |
| Dietary | Vegetarian, Vegan, Meat Lovers, Pescatarian, Gluten-Free, Keto/Low-Carb |
| Cuisine | Italian, Chinese, Japanese, Thai, Korean, Vietnamese, Indian, Mexican, American, Mediterranean |
| Dish type | Built from the data for whichever cuisine you pick |
| Cooking time | Quick (<30 min), Medium (30-60 min), Long (1h+) |
| Spice level | Mild, Medium, Spicy |
| Difficulty | Easy, Medium, Hard |

The dialog shows a live **match count** and strikes through any option that
would leave you with zero meals, so a filter combination can never dead-end.

### 🌍 Cuisine coverage

| Cuisine | Dishes | Cuisine | Dishes |
| --- | ---: | --- | ---: |
| American | 76 | Japanese | 17 |
| Mexican | 64 | Thai | 13 |
| Italian | 43 | Indian | 12 |
| Chinese | 23 | Mediterranean | 12 |
| Korean | 6 | Vietnamese | 4 |

## 🚀 Getting started

No build step, no dependencies. Clone the repo and open `index.html` in a
browser — it works straight off the filesystem.

```
index.html          markup
styles.css          styles
script.js           application logic
data/meals.js       meal database
tools/              maintenance scripts
```

## 🍲 Adding meals

Add an entry to `data/meals.js`. Every field is required — the filter treats a
missing field as "never matches", which silently hides the dish from any
filtered search:

```js
{
  name: "Spaghetti Carbonara",
  emoji: "🍝",
  description: "Creamy pasta with eggs, cheese, pancetta, and black pepper",
  tags: ["Italian", "Pasta", "Comfort Food"],
  searchQuery: "spaghetti carbonara recipe",
  fallbackUrl: "https://www.allrecipes.com/search?q=spaghetti+carbonara",
  mealType: ["lunch", "dinner"],      // breakfast | brunch | lunch | dinner | snack
  dietary: ["meat-lovers"],           // vegetarian | vegan | meat-lovers | pescatarian | gluten-free | keto
  cuisine: "italian",
  dishType: "pasta",
  cookingTime: "medium",              // quick | medium | long
  spiceLevel: "mild",                 // mild | medium | spicy
  difficulty: "medium",               // easy | medium | hard
},
```

New dish types appear in the UI automatically, but need a display name in
`DISH_TYPE_LABELS` at the top of `script.js`.

Then check the data:

```sh
node tools/validate-meals.js
```

It flags missing fields, duplicate dishes, UI options that no meal can satisfy,
and data values the UI never offers.

## ♿ Accessibility

- Every control is reachable and operable by keyboard
- The preferences dialog uses `role="dialog"`, traps focus, closes on
  <kbd>Esc</kbd>, and returns focus to the button that opened it
- New suggestions and toasts are announced through live regions
- Animations are disabled under `prefers-reduced-motion`

## 📱 Browser support

Chrome, Firefox, Safari, and Edge (current versions), plus iOS Safari and
Chrome for Android.

## 🤝 Contributing

Pull requests welcome — more meals, UI improvements, new filters, bug fixes.
Please run `node tools/validate-meals.js` before opening one.

## 📄 License

MIT.

---

**Enjoy discovering your next meal with DishWish!** 🍽️✨
