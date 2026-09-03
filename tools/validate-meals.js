#!/usr/bin/env node
/**
 * Checks data/meals.js for the mistakes that are invisible in the browser but
 * quietly break filtering: missing fields, duplicate dishes, values the UI does
 * not offer, and filter options that can never return a meal.
 *
 * Run with:  node tools/validate-meals.js
 * No dependencies — plain Node, matching the rest of the project.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const meals = require(path.join(ROOT, 'data', 'meals.js'));
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const REQUIRED_FIELDS = ['name', 'emoji', 'description', 'tags', 'searchQuery', 'fallbackUrl',
  'mealType', 'dietary', 'cuisine', 'dishType', 'cookingTime', 'spiceLevel', 'difficulty'];
const ARRAY_FIELDS = ['tags', 'mealType', 'dietary'];
const MULTI_VALUE_KEYS = ['mealType', 'dietary'];

const errors = [];
const warnings = [];

// --- every meal is complete and well-typed -----------------------------------
meals.forEach((meal, index) => {
  const label = meal.name || `meal #${index}`;
  REQUIRED_FIELDS.forEach((field) => {
    if (meal[field] === undefined || meal[field] === null || meal[field] === '') {
      errors.push(`${label}: missing "${field}"`);
    } else if (ARRAY_FIELDS.includes(field) && !Array.isArray(meal[field])) {
      errors.push(`${label}: "${field}" must be an array`);
    } else if (ARRAY_FIELDS.includes(field) && meal[field].length === 0) {
      errors.push(`${label}: "${field}" is empty`);
    }
  });
});

// --- no duplicate dishes -----------------------------------------------------
const seen = new Map();
meals.forEach((meal, index) => {
  if (seen.has(meal.name)) {
    errors.push(`Duplicate meal "${meal.name}" (#${seen.get(meal.name)} and #${index})`);
  } else {
    seen.set(meal.name, index);
  }
});

// --- every radio option in the UI can actually return a meal -----------------
const groups = {};
for (const match of html.matchAll(/name="(\w+)"\s+value="([\w-]+)"/g)) {
  (groups[match[1]] = groups[match[1]] || new Set()).add(match[2]);
}

function matches(meal, key, value) {
  if (value === 'any') return true;
  const field = meal[key];
  return MULTI_VALUE_KEYS.includes(key)
    ? Array.isArray(field) && field.includes(value)
    : field === value;
}

Object.entries(groups).forEach(([key, values]) => {
  values.forEach((value) => {
    if (value === 'any') return;
    const count = meals.filter((meal) => matches(meal, key, value)).length;
    if (count === 0) errors.push(`UI offers ${key}="${value}" but no meal has it`);
    else if (count < 3) warnings.push(`${key}="${value}" only matches ${count} meal(s)`);
  });
});

// --- values in the data that the UI never offers ------------------------------
Object.keys(groups).forEach((key) => {
  if (key === 'dishType') return; // Dish types are generated from the data itself.
  const used = new Set(meals.flatMap((meal) =>
    Array.isArray(meal[key]) ? meal[key] : [meal[key]]));
  used.forEach((value) => {
    if (!groups[key].has(value)) {
      warnings.push(`${key}="${value}" exists in the data but has no UI option (unreachable)`);
    }
  });
});

// --- report -------------------------------------------------------------------
const cuisines = new Set(meals.map((meal) => meal.cuisine));
console.log(`${meals.length} meals across ${cuisines.size} cuisines`);
warnings.forEach((warning) => console.log(`  warning: ${warning}`));
errors.forEach((error) => console.log(`  ERROR:   ${error}`));

if (errors.length > 0) {
  console.log(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(`\nOK${warnings.length ? ` (${warnings.length} warning(s))` : ''}.`);
