/**
 * nutrition-panel.js — Renders the live nutrition summary panel.
 * Listens for CustomEvent('nutrition:updated') and updates the DOM.
 */

const DAILY_KCAL = 2000;

const NUTRIENT_ROWS = [
  { key: 'fat_g',     label: 'Fat',          unit: 'g' },
  { key: 'sat_g',     label: 'Saturates',    unit: 'g' },
  { key: 'carb_g',    label: 'Carbohydrates',unit: 'g' },
  { key: 'sugars_g',  label: 'Sugars',       unit: 'g' },
  { key: 'fibre_g',   label: 'Fibre',        unit: 'g' },
  { key: 'protein_g', label: 'Protein',      unit: 'g' },
  { key: 'salt_g',    label: 'Salt',         unit: 'g' },
];

export function initNutritionPanel(onClearAll) {
  // Populate nutrient table rows (so we don't need them hard-coded in HTML)
  const tbody = document.getElementById('nutrient-tbody');
  if (tbody) {
    tbody.innerHTML = NUTRIENT_ROWS.map(row => `
      <tr data-nutrient="${row.key}">
        <td>${row.label}</td>
        <td class="text-right nutrient-value">—</td>
      </tr>
    `).join('');
  }

  // Mobile expand/collapse
  const toggle = document.getElementById('panel-toggle');
  const panel = document.getElementById('nutrition-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const expanded = panel.classList.toggle('panel--expanded');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // Clear all button
  const clearBtn = document.getElementById('clear-all-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      onClearAll?.();
    });
  }

  document.addEventListener('nutrition:updated', (e) => {
    renderPanel(e.detail);
  });

  renderPanel(null);
}

function renderPanel(totals) {
  const kcal = totals?.kcal ?? 0;
  const isEmpty = kcal === 0;
  const pct = Math.min(100, Math.round((kcal / DAILY_KCAL) * 100));

  // Kcal hero
  const kcalEl = document.getElementById('kcal-total');
  if (kcalEl) kcalEl.textContent = isEmpty ? '0' : Math.round(kcal).toLocaleString();

  const barEl = document.getElementById('kcal-ref-bar');
  if (barEl) {
    barEl.style.width = `${pct}%`;
    barEl.setAttribute('aria-valuenow', pct);
    barEl.className = 'kcal-ref-bar'
      + (pct > 100 ? ' kcal-ref-bar--over' : pct > 75 ? ' kcal-ref-bar--warn' : '');
  }

  const refTextEl = document.getElementById('kcal-ref-text');
  if (refTextEl) {
    refTextEl.textContent = isEmpty
      ? `Reference: ${DAILY_KCAL.toLocaleString()} kcal/day`
      : `${pct}% of ${DAILY_KCAL.toLocaleString()} kcal reference`;
  }

  // Mobile toggle bar
  const mobileKcal = document.getElementById('panel-kcal-bar');
  if (mobileKcal) mobileKcal.textContent = `${isEmpty ? '0' : Math.round(kcal).toLocaleString()} kcal`;

  // Nutrient rows
  const tbody = document.getElementById('nutrient-tbody');
  if (tbody) {
    for (const row of NUTRIENT_ROWS) {
      const tr = tbody.querySelector(`[data-nutrient="${row.key}"]`);
      if (tr) {
        tr.querySelector('.nutrient-value').textContent =
          isEmpty ? '—' : `${totals[row.key]}${row.unit}`;
      }
    }
  }
}

/**
 * Render the order breakdown list in the panel.
 * @param {Array} items - [{label, quantity, kcal}]
 */
export function renderBreakdown(items) {
  const list = document.getElementById('breakdown-list');
  const empty = document.getElementById('breakdown-empty');
  if (!list) return;

  if (!items.length) {
    list.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;
  list.innerHTML = items.map((item, i) => `
    <li class="breakdown-item">
      <span class="breakdown-label">${item.quantity > 1 ? `${item.quantity}× ` : ''}${escHtml(item.label)}</span>
      <span class="breakdown-kcal">${Math.round(item.kcal * item.quantity).toLocaleString()} kcal</span>
    </li>
  `).join('');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
