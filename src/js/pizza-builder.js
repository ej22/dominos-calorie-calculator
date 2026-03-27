/**
 * pizza-builder.js — Pizza selection state machine + DOM rendering.
 *
 * State cascade: category → pizza → size → crust → cheese → quantity
 * Each upstream change clears all downstream selections.
 * "Add to Order" only enabled when variant lookup resolves to a valid nutrition object.
 */

import { PIZZAS } from '../data/pizzas.js';
import { dispatchNutritionUpdate } from './calculator.js';
import { renderBreakdown } from './nutrition-panel.js';

const SIZE_LABELS = { personal: 'Personal', small: 'Small', medium: 'Medium', large: 'Large' };

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  categoryId: null,
  pizzaId:    null,
  size:       null,
  crustId:    null,
  cheeseId:   null,
  quantity:   1,
};

// Cart: [{id, label, quantity, nutrition, kcal}]
let cart = [];

// ── Public API ─────────────────────────────────────────────────────────────
export function initPizzaBuilder(onCartChange) {
  renderCategories();
  bindQuantityControls();
  document.getElementById('add-pizza-btn').addEventListener('click', () => {
    addToCart();
    onCartChange?.(cart);
  });
  document.getElementById('pizza-search').addEventListener('input', (e) => {
    filterPizzas(e.target.value.toLowerCase());
  });
}

export function clearPizzaCart() {
  cart = [];
  renderCart();
}

export function getPizzaCart() { return cart; }

// ── Rendering helpers ──────────────────────────────────────────────────────
function showStep(id) {
  document.getElementById(id)?.classList.remove('builder-step--hidden');
}
function hideStep(id) {
  document.getElementById(id)?.classList.add('builder-step--hidden');
}
function hideStepsFrom(stepId) {
  const steps = ['step-pizza','step-size','step-crust','step-cheese','step-add-pizza'];
  const idx = steps.indexOf(stepId);
  if (idx === -1) return;
  steps.slice(idx).forEach(hideStep);
}

// ── Category ───────────────────────────────────────────────────────────────
function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = PIZZAS.categories.map(cat => `
    <button class="sel-card" role="listitem" data-cat="${cat.id}" aria-pressed="false">
      <span class="sel-card__icon">${cat.icon ?? '🍕'}</span>
      <span class="sel-card__label">${cat.label}</span>
    </button>
  `).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    selectCategory(btn.dataset.cat);
  });
}

function selectCategory(catId) {
  if (state.categoryId === catId) return;
  state.categoryId = catId;
  state.pizzaId = null;
  state.size = null;
  state.crustId = null;
  state.cheeseId = null;

  // Update card pressed states
  document.querySelectorAll('#category-grid [data-cat]').forEach(btn => {
    btn.classList.toggle('sel-card--selected', btn.dataset.cat === catId);
    btn.setAttribute('aria-pressed', btn.dataset.cat === catId);
  });

  hideStepsFrom('step-pizza');
  renderPizzas(catId);
  showStep('step-pizza');
  document.getElementById('pizza-search').value = '';
}

// ── Pizza ──────────────────────────────────────────────────────────────────
function renderPizzas(catId) {
  const cat = getCategory(catId);
  if (!cat) return;

  const grid = document.getElementById('pizza-grid');
  grid.innerHTML = cat.pizzas.map(p => `
    <button class="sel-card" role="listitem" data-pizza="${p.id}" aria-pressed="false">
      <span class="sel-card__label">${p.label}</span>
    </button>
  `).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-pizza]');
    if (!btn) return;
    selectPizza(btn.dataset.pizza);
  });
}

function filterPizzas(query) {
  document.querySelectorAll('#pizza-grid [data-pizza]').forEach(btn => {
    const label = btn.querySelector('.sel-card__label').textContent.toLowerCase();
    btn.hidden = query.length > 0 && !label.includes(query);
  });
}

function selectPizza(pizzaId) {
  if (state.pizzaId === pizzaId) return;
  state.pizzaId = pizzaId;
  state.size = null;
  state.crustId = null;
  state.cheeseId = null;

  document.querySelectorAll('#pizza-grid [data-pizza]').forEach(btn => {
    btn.classList.toggle('sel-card--selected', btn.dataset.pizza === pizzaId);
    btn.setAttribute('aria-pressed', btn.dataset.pizza === pizzaId);
  });

  hideStepsFrom('step-size');
  renderSizes();
  showStep('step-size');
}

// ── Size ───────────────────────────────────────────────────────────────────
function renderSizes() {
  const cat = getCategory(state.categoryId);
  if (!cat) return;

  const group = document.getElementById('size-group');
  group.innerHTML = cat.sizes.map(sz => `
    <button class="opt-btn" data-size="${sz}" aria-pressed="false">${SIZE_LABELS[sz] ?? sz}</button>
  `).join('');

  group.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-size]');
    if (!btn || btn.disabled) return;
    selectSize(btn.dataset.size);
  });
}

function selectSize(size) {
  if (state.size === size) return;
  state.size = size;
  state.crustId = null;
  state.cheeseId = null;

  document.querySelectorAll('#size-group [data-size]').forEach(btn => {
    btn.classList.toggle('opt-btn--selected', btn.dataset.size === size);
    btn.setAttribute('aria-pressed', btn.dataset.size === size);
  });

  hideStepsFrom('step-crust');
  renderCrusts();
  showStep('step-crust');
}

// ── Crust ──────────────────────────────────────────────────────────────────
function renderCrusts() {
  const cat = getCategory(state.categoryId);
  if (!cat) return;

  const pizza = getPizza(state.categoryId, state.pizzaId);
  const group = document.getElementById('crust-group');

  group.innerHTML = cat.crusts.map(crust => {
    // Crust available if any variant key with this crust+current size exists
    const available = pizzaHasCrustForSize(pizza, state.size, crust.id);
    return `
      <button class="opt-btn${available ? '' : ' opt-btn--disabled'}"
        data-crust="${crust.id}"
        aria-pressed="false"
        ${available ? '' : 'disabled aria-disabled="true"'}
      >${crust.label}</button>
    `;
  }).join('');

  // Auto-select if only one valid option
  const available = group.querySelectorAll('.opt-btn:not(.opt-btn--disabled)');
  if (available.length === 1) {
    selectCrust(available[0].dataset.crust);
    return;
  }

  group.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-crust]');
    if (!btn || btn.disabled) return;
    selectCrust(btn.dataset.crust);
  });
}

function selectCrust(crustId) {
  if (state.crustId === crustId) return;
  state.crustId = crustId;
  state.cheeseId = null;

  document.querySelectorAll('#crust-group [data-crust]').forEach(btn => {
    btn.classList.toggle('opt-btn--selected', btn.dataset.crust === crustId);
    btn.setAttribute('aria-pressed', btn.dataset.crust === crustId);
  });

  hideStepsFrom('step-cheese');
  renderCheeses();
  showStep('step-cheese');
}

// ── Cheese ─────────────────────────────────────────────────────────────────
function renderCheeses() {
  const cat = getCategory(state.categoryId);
  if (!cat || !cat.cheeses) {
    // Category has no cheese options — skip straight to add step
    state.cheeseId = 'standard';
    showAddStep();
    return;
  }

  const pizza = getPizza(state.categoryId, state.pizzaId);
  const group = document.getElementById('cheese-group');

  group.innerHTML = cat.cheeses.map(cheese => {
    const key = variantKey(state.size, state.crustId, cheese.id);
    const available = pizza?.variants?.[key] != null;
    return `
      <button class="opt-btn${available ? '' : ' opt-btn--disabled'}"
        data-cheese="${cheese.id}"
        aria-pressed="false"
        ${available ? '' : 'disabled aria-disabled="true"'}
      >${cheese.label}</button>
    `;
  }).join('');

  // Auto-select if only one valid option
  const available = group.querySelectorAll('.opt-btn:not(.opt-btn--disabled)');
  if (available.length === 1) {
    selectCheese(available[0].dataset.cheese);
    return;
  }

  group.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cheese]');
    if (!btn || btn.disabled) return;
    selectCheese(btn.dataset.cheese);
  });
}

function selectCheese(cheeseId) {
  if (state.cheeseId === cheeseId) return;
  state.cheeseId = cheeseId;

  document.querySelectorAll('#cheese-group [data-cheese]').forEach(btn => {
    btn.classList.toggle('opt-btn--selected', btn.dataset.cheese === cheeseId);
    btn.setAttribute('aria-pressed', btn.dataset.cheese === cheeseId);
  });

  showAddStep();
}

// ── Add step ───────────────────────────────────────────────────────────────
function showAddStep() {
  hideStep('step-add-pizza');
  showStep('step-add-pizza');

  const pizza = getPizza(state.categoryId, state.pizzaId);
  const key = variantKey(state.size, state.crustId, state.cheeseId);
  const nutrition = pizza?.variants?.[key];

  const addBtn = document.getElementById('add-pizza-btn');
  const preview = document.getElementById('pizza-kcal-preview');

  if (nutrition) {
    addBtn.disabled = false;
    const kcalEach = Math.round(nutrition.kcal);
    const kcalTotal = Math.round(nutrition.kcal * state.quantity);
    preview.textContent = state.quantity > 1
      ? `${kcalEach.toLocaleString()} kcal each · ${kcalTotal.toLocaleString()} kcal total`
      : `${kcalEach.toLocaleString()} kcal`;
  } else {
    addBtn.disabled = true;
    preview.textContent = 'This combination is not available.';
  }
}

// ── Quantity controls ──────────────────────────────────────────────────────
function bindQuantityControls() {
  document.getElementById('pizza-qty-dec').addEventListener('click', () => {
    if (state.quantity > 1) {
      state.quantity--;
      updateQtyDisplay();
    }
  });
  document.getElementById('pizza-qty-inc').addEventListener('click', () => {
    if (state.quantity < 20) {
      state.quantity++;
      updateQtyDisplay();
    }
  });
}

function updateQtyDisplay() {
  document.getElementById('pizza-qty-value').textContent = state.quantity;
  // Refresh kcal preview if add step is visible
  if (!document.getElementById('step-add-pizza').classList.contains('builder-step--hidden')) {
    showAddStep();
  }
}

// ── Cart ───────────────────────────────────────────────────────────────────
function addToCart() {
  const pizza = getPizza(state.categoryId, state.pizzaId);
  if (!pizza) return;

  const key = variantKey(state.size, state.crustId, state.cheeseId);
  const nutrition = pizza.variants?.[key];
  if (!nutrition) return;

  const cat = getCategory(state.categoryId);
  const crustLabel = cat?.crusts?.find(c => c.id === state.crustId)?.label ?? state.crustId;
  const cheeseLabel = cat?.cheeses?.find(c => c.id === state.cheeseId)?.label ?? '';
  const sizeLabel = SIZE_LABELS[state.size] ?? state.size;

  const label = [
    pizza.label,
    `(${sizeLabel}`,
    crustLabel ? `, ${crustLabel}` : '',
    cheeseLabel ? `, ${cheeseLabel}` : '',
    ')',
  ].join('');

  cart.push({
    id: `${pizza.id}__${key}__${Date.now()}`,
    label,
    quantity: state.quantity,
    nutrition,
    kcal: nutrition.kcal,
  });

  // Reset quantity
  state.quantity = 1;
  updateQtyDisplay();

  renderCart();
}

function renderCart() {
  const list = document.getElementById('pizza-cart-list');
  const empty = document.getElementById('pizza-cart-empty');
  const section = document.getElementById('pizza-cart-section');

  section.hidden = false;

  if (!cart.length) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  list.innerHTML = cart.map((item, i) => `
    <li class="cart-item" data-idx="${i}">
      <div class="cart-item__info">
        <span class="cart-item__label">${escHtml(item.label)}</span>
        <span class="cart-item__kcal">${Math.round(item.kcal * item.quantity).toLocaleString()} kcal</span>
      </div>
      <div class="cart-item__controls">
        <div class="qty-stepper" role="group" aria-label="Quantity">
          <button class="qty-btn" data-action="dec" data-idx="${i}" aria-label="Decrease quantity">−</button>
          <output class="qty-value">${item.quantity}</output>
          <button class="qty-btn" data-action="inc" data-idx="${i}" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-item__remove" data-idx="${i}" aria-label="Remove ${escHtml(item.label)}">×</button>
      </div>
    </li>
  `).join('');

  list.addEventListener('click', handleCartClick);
}

function handleCartClick(e) {
  const removeBtn = e.target.closest('.cart-item__remove');
  const qtyBtn = e.target.closest('.qty-btn[data-action]');

  if (removeBtn) {
    const idx = parseInt(removeBtn.dataset.idx, 10);
    cart.splice(idx, 1);
    renderCart();
    notifyChange();
  } else if (qtyBtn) {
    const idx = parseInt(qtyBtn.dataset.idx, 10);
    if (qtyBtn.dataset.action === 'inc') cart[idx].quantity = Math.min(20, cart[idx].quantity + 1);
    if (qtyBtn.dataset.action === 'dec' && cart[idx].quantity > 1) cart[idx].quantity--;
    renderCart();
    notifyChange();
  }
}

function notifyChange() {
  document.dispatchEvent(new CustomEvent('pizza-cart:changed', { detail: cart }));
}

// ── Lookup helpers ─────────────────────────────────────────────────────────
function variantKey(size, crust, cheese) {
  return `${size}__${crust}__${cheese}`;
}

function getCategory(catId) {
  return PIZZAS.categories.find(c => c.id === catId);
}

function getPizza(catId, pizzaId) {
  return getCategory(catId)?.pizzas.find(p => p.id === pizzaId);
}

function pizzaHasCrustForSize(pizza, size, crustId) {
  if (!pizza?.variants) return false;
  return Object.keys(pizza.variants).some(k => {
    const [s, c] = k.split('__');
    return s === size && c === crustId;
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
