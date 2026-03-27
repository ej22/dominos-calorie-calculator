/**
 * app.js — Entry point. Wires together all modules.
 */

import { initPizzaBuilder, getPizzaCart, clearPizzaCart } from './pizza-builder.js';
import { initSidesBuilder, getSidesCart, clearSidesCart } from './sides-builder.js';
import { initNutritionPanel, renderBreakdown } from './nutrition-panel.js';
import { dispatchNutritionUpdate } from './calculator.js';

// ── Tab switching ──────────────────────────────────────────────────────────
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn[data-tab]');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => {
        b.classList.toggle('tab-btn--active', b.dataset.tab === target);
        b.setAttribute('aria-selected', b.dataset.tab === target);
      });
      document.querySelectorAll('.tab-panel').forEach(panel => {
        const show = panel.id === `panel-${target}`;
        panel.classList.toggle('tab-panel--active', show);
        panel.hidden = !show;
      });
    });
  });
}

// ── Recalculate totals and re-render breakdown ─────────────────────────────
function recalculate() {
  const pizzaCart = getPizzaCart();
  const sidesCart = getSidesCart();
  dispatchNutritionUpdate(pizzaCart, sidesCart);

  const allItems = [
    ...pizzaCart.map(i => ({ label: i.label, quantity: i.quantity, kcal: i.kcal })),
    ...sidesCart.map(i => ({ label: i.label, quantity: i.quantity, kcal: i.kcal })),
  ];
  renderBreakdown(allItems);
}

// ── Init ───────────────────────────────────────────────────────────────────
function init() {
  initTabs();

  initNutritionPanel(() => {
    // Clear all callback
    clearPizzaCart();
    clearSidesCart();
    recalculate();
  });

  initPizzaBuilder(() => recalculate());
  initSidesBuilder(() => recalculate());

  // Listen for cart change events from both builders
  document.addEventListener('pizza-cart:changed', () => recalculate());
  document.addEventListener('sides-cart:changed', () => recalculate());

  // Initial state
  recalculate();
}

init();
