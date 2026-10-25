# 🍽️ DishWish

A small, dependency-free web app that answers the age-old question: "What should
we eat?" Built for indecisive dinner planners, and for two people who can't
agree.

## ✨ What it does

### 🎲 Pick a dish

- **322 dishes** across ten cuisines
- Remembers the last 8 suggestions and avoids repeating them
- Cooking time, difficulty, and spice shown on the card
- Recipe searches on AllRecipes, TikTok, YouTube, and Food Network
- Save dishes you like, step back through history, share a pick
- <kbd>Space</kbd> rolls again

### 👥 Duo mode

One phone, two people. You each rate the same shuffled deck in private, then the
app shows what you both said yes to. Nothing is stored — a round lives in memory
and disappears when it closes.

### 🎛️ Filters

Multi-select: **OR within a group, AND between groups**. So "Korean or
Vietnamese" widens, and adding "Vegetarian" narrows. Nothing selected means no
constraint.

| Filter       | Options                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------- |
| Meal type    | Breakfast, Brunch, Lunch, Dinner, Snack                                                        |
| Diet         | Vegetarian, Vegan, Meat Lovers, Pescatarian, Gluten-Free, Keto/Low-Carb                        |
| Cuisine      | Italian, Chinese, Japanese, Thai, Korean, Vietnamese, Indian, Mexican, American, Mediterranean |
| Dish type    | Built from the data for whichever cuisines you pick                                            |
| Cooking time | Under 30 min, 30–60 min, 1 hour+                                                               |
| Spice level  | Mild, Medium, Spicy                                                                            |
| Difficulty   | Easy, Medium, Hard                                                                             |

A live match count updates as you choose, and any option that would leave you
with zero dishes is struck through and disabled — so a filter combination can
never dead-end. Active filters appear as chips you can click to remove.

### 🌍 Cuisine coverage

| Cuisine  | Dishes | Cuisine       | Dishes |
| -------- | -----: | ------------- | -----: |
| American |     76 | Japanese      |     20 |
| Mexican  |     64 | Thai          |     20 |
| Italian  |     43 | Indian        |     20 |
| Chinese  |     23 | Mediterranean |     20 |
| Korean   |     18 | Vietnamese    |     18 |

## 🚀 Getting started

No build step. Clone the repo and open `index.html` — it works straight off the
filesystem.

```
index.html          markup
styles.css          design tokens + styles
script.js           app wiring (entry point, loaded last)
data/meals.js       meal database
js/store.js         localStorage access
js/filters.js       filtering + label vocabulary
js/images.js        optional meal photos
js/duo.js           duo mode
tools/              maintenance scripts
```

The dev tooling (lint, format) is optional and needs Node:

```sh
npm install
npm run check         # validate the meal data
npm run lint
npm run format
```

## 🌐 Third-party services

DishWish makes exactly two kinds of outbound request, and both are optional.

**Recipe links.** Every "find recipes" button opens a _search URL_ on
AllRecipes, TikTok, YouTube, or Google. The app never copies, scrapes, reframes,
or republishes anyone's recipe content — it hands the query to their own search
and gets out of the way. Brand names are used only to say where a link goes; no
third-party logos are bundled.

**Meal photos** come from [TheMealDB](https://www.themealdb.com) and are
hot-linked from their CDN. This is the one place the app pulls in third-party
content rather than linking out to it.

- `js/images.js` uses TheMealDB's documented free key (`1`), which they publish
  for development. **Check their current terms before deploying publicly** and
  swap in your own key — the constant is at the top of the file.
- Photos can be turned off entirely with the 📷 button in the header. Off means
  **no external requests at all**; the app falls back to emoji.
- Lookups are cached in `localStorage` (hits for 30 days, misses for 1 day), and
  after two consecutive network failures the lookup disables itself for the
  session. The app is fully functional with photos unavailable.

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
`DISH_TYPE_LABELS` in `js/filters.js`.

Then check the data:

```sh
node tools/validate-meals.js
```

It flags missing fields, duplicate dishes, filter options no dish can satisfy,
and data values the UI never offers. CI runs it on every push.

## ♿ Accessibility

- Every control is reachable and operable by keyboard
- Dialogs use `role="dialog"`, trap focus, close on <kbd>Esc</kbd>, and return
  focus sensibly — after applying filters, focus lands on the roll button so the
  <kbd>Space</kbd> shortcut does what the hint says
- New suggestions and toasts are announced through live regions
- Light and dark themes, following the OS unless you choose one
- Animations are disabled under `prefers-reduced-motion`

## 📱 Browser support

Chrome, Firefox, Safari, and Edge (current versions), plus iOS Safari and Chrome
for Android.

## 🤝 Contributing

Pull requests welcome — more dishes, UI improvements, new filters, bug fixes.
Run `npm run check && npm run lint && npm run format:check` before opening one.

## 📄 License

MIT.

---

**Enjoy discovering your next meal with DishWish!** 🍽️✨
