/**
 * sides-builder.js — Sides/wraps/dips/desserts selection + multi-item cart.
 *
 * Each category gets a sub-tab. Selecting a variant and clicking Add
 * appends an entry to the cart. Cart items have quantity +/- and remove.
 */

import { SIDES } from '../data/sides.js';

// Cart: [{id, label, quantity, nutrition, kcal}]
let cart = [];

// ── Public API ─────────────────────────────────────────────────────────────
export function initSidesBuilder(onCartChange) {
  renderSubTabs();
  selectSubCategory(SIDES.categories[0].id);
}

export function clearSidesCart() {
  cart = [];
  renderCart();
}

export function getSidesCart() { return cart; }

// ── Sub-tabs ───────────────────────────────────────────────────────────────
function renderSubTabs() {
  const nav = document.getElementById('sides-sub-tabs');
  nav.innerHTML = SIDES.categories.map(cat => `
    <button class="sub-tab-btn" role="tab" data-sub-cat="${cat.id}" aria-selected="false">
      ${cat.icon ?? ''} ${cat.label}
    </button>
  `).join('');

  nav.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-sub-cat]');
    if (!btn) return;
    selectSubCategory(btn.dataset.subCat);
  });
}

function selectSubCategory(catId) {
  document.querySelectorAll('#sides-sub-tabs [data-sub-cat]').forEach(btn => {
    const active = btn.dataset.subCat === catId;
    btn.classList.toggle('sub-tab-btn--active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  renderItems(catId);
}

// ── Items ──────────────────────────────────────────────────────────────────
function renderItems(catId) {
  const cat = SIDES.categories.find(c => c.id === catId);
  if (!cat) return;

  const area = document.getElementById('sides-items-area');
  area.innerHTML = cat.items.map(item => {
    const hasVariants = item.variants.length > 1;
    const optionsHtml = hasVariants
      ? `<select class="side-select" data-item="${item.id}" aria-label="${escHtml(item.label)} options">
           ${item.variants.map((v, i) =>
             `<option value="${i}">${escHtml(v.label)}</option>`
           ).join('')}
         </select>`
      : `<span class="side-single-label">${escHtml(item.variants[0].label)}</span>`;

    const firstNutrition = item.variants[0].nutrition;

    return `
      <div class="side-card" data-item="${item.id}" data-cat="${catId}">
        <div class="side-card__header">
          <span class="side-card__icon">${item.icon ?? ''}</span>
          <span class="side-card__name">${escHtml(item.label)}</span>
        </div>
        <div class="side-card__body">
          ${optionsHtml}
          <span class="side-card__kcal" data-item="${item.id}">
            ${Math.round(firstNutrition.kcal).toLocaleString()} kcal
          </span>
        </div>
        <button class="btn btn--secondary btn--sm side-card__add"
          data-item="${item.id}"
          data-cat="${catId}"
          aria-label="Add ${escHtml(item.label)} to order">
          Add
        </button>
      </div>
    `;
  }).join('');

  // Update kcal preview when dropdown changes
  area.addEventListener('change', (e) => {
    const sel = e.target.closest('select[data-item]');
    if (!sel) return;
    const item = cat.items.find(i => i.id === sel.dataset.item);
    if (!item) return;
    const variant = item.variants[parseInt(sel.value, 10)];
    const kcalEl = area.querySelector(`.side-card__kcal[data-item="${item.id}"]`);
    if (kcalEl && variant) kcalEl.textContent = `${Math.round(variant.nutrition.kcal).toLocaleString()} kcal`;
  });

  // Add to cart
  area.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.side-card__add');
    if (!addBtn) return;

    const itemId = addBtn.dataset.item;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;

    // Find selected variant index
    const sel = area.querySelector(`select[data-item="${itemId}"]`);
    const variantIdx = sel ? parseInt(sel.value, 10) : 0;
    const variant = item.variants[variantIdx];

    cart.push({
      id: `${catId}__${itemId}__${variantIdx}__${Date.now()}`,
      label: item.variants.length > 1 ? `${item.label} – ${variant.label}` : item.label,
      quantity: 1,
      nutrition: variant.nutrition,
      kcal: variant.nutrition.kcal,
    });

    renderCart();
    notifyChange();

    // Brief visual feedback
    addBtn.textContent = 'Added!';
    addBtn.disabled = true;
    setTimeout(() => {
      addBtn.textContent = 'Add';
      addBtn.disabled = false;
    }, 800);
  });
}

// ── Cart ───────────────────────────────────────────────────────────────────
function renderCart() {
  const list = document.getElementById('sides-cart-list');
  const empty = document.getElementById('sides-cart-empty');
  const section = document.getElementById('sides-cart-section');

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
  document.dispatchEvent(new CustomEvent('sides-cart:changed', { detail: cart }));
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
