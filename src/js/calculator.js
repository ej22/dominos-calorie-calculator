/**
 * calculator.js — Pure aggregation logic, no DOM access.
 * Sums nutrition × quantity across all active selections and
 * fires a CustomEvent('nutrition:updated') for the panel to consume.
 */

const NUTRIENTS = ['kcal', 'fat_g', 'sat_g', 'carb_g', 'sugars_g', 'fibre_g', 'protein_g', 'salt_g'];

/**
 * @param {Array} pizzaSelections - [{nutrition, quantity}, ...]
 * @param {Array} cartItems       - [{nutrition, quantity}, ...]
 * @returns {Object} totals object keyed by nutrient name
 */
export function computeTotals(pizzaSelections, cartItems) {
  const totals = Object.fromEntries(NUTRIENTS.map(n => [n, 0]));

  for (const sel of [...pizzaSelections, ...cartItems]) {
    if (!sel.nutrition) continue;
    const qty = sel.quantity ?? 1;
    for (const nutrient of NUTRIENTS) {
      totals[nutrient] += (sel.nutrition[nutrient] ?? 0) * qty;
    }
  }

  // Round to 1dp to avoid float artefacts
  for (const n of NUTRIENTS) {
    totals[n] = Math.round(totals[n] * 10) / 10;
  }

  return totals;
}

export function dispatchNutritionUpdate(pizzaSelections, cartItems) {
  const totals = computeTotals(pizzaSelections, cartItems);
  document.dispatchEvent(new CustomEvent('nutrition:updated', { detail: totals }));
}
