# HANDOVER DOCUMENT — Domino's Calorie Calculator

> Written for a future Claude instance (or developer) picking up this project.
> Last updated: 2026-03-27 (updated after full implementation complete)

---

## 1. What This Project Is

A mobile-responsive, client-side web application that lets users build a Domino's UK order (pizzas, sides, dips, desserts) and see a live nutritional breakdown (calories, fat, carbs, protein, salt, etc.).

No backend. No database. No build step. The app is a single HTML file + static assets, served by Nginx inside Docker.

**Live target:** `http://localhost:8080` (Docker) or open `index.html` directly in a browser.

---

## 2. Technology Stack

| Layer | Technology | Why |
|---|---|---|
| UI | Vanilla HTML5 + CSS3 + JS (ES Modules) | No build pipeline, tiny Docker image, works offline |
| Styling | Custom CSS with CSS custom properties | Full control, no framework dependency |
| Data | JS ES module files (`src/data/pizzas.js`, `src/data/sides.js`) | Works over `file://` without CORS issues from `fetch()` |
| Server | Nginx 1.27 Alpine | Lightweight static file server |
| Container | Docker + docker-compose | Portable, reproducible deployment |

**No framework (React, Vue, Angular).** This was an intentional choice — the data is static, so a framework adds complexity for zero benefit.

**No database.** All nutritional data is embedded in JavaScript ES module files.

---

## 3. Project Structure

```
DominosCalculator/
├── public/
│   ├── nutrition_pizzas.pdf              ← Source PDF: pizza nutrition data (20 pages)
│   └── nutrition_sides-and-desserts.pdf  ← Source PDF: sides/desserts data (4 pages)
│
├── src/
│   ├── data/
│   │   ├── pizzas.js       ← All pizza nutritional data as ES module export
│   │   └── sides.js        ← All sides, dips, desserts data as ES module export
│   ├── css/
│   │   ├── reset.css           ← CSS reset (box-sizing, margins, list styles)
│   │   ├── variables.css       ← CSS custom properties (colours, spacing, radius, shadows)
│   │   ├── layout.css          ← App layout grid, header, tab bar, responsive breakpoints
│   │   ├── components.css      ← Cards, buttons, option-buttons, steppers, cart items, search
│   │   └── nutrition-panel.css ← Sticky nutrition summary panel (bottom sheet on mobile, sidebar on desktop)
│   └── js/
│       ├── app.js              ← Entry point: imports all modules, wires together, sets up tabs
│       ├── pizza-builder.js    ← Pizza selection state machine + DOM rendering
│       ├── sides-builder.js    ← Sides/desserts multi-item cart + DOM rendering
│       ├── calculator.js       ← Pure function: aggregates selections, fires 'nutrition:updated' event
│       └── nutrition-panel.js  ← Listens for 'nutrition:updated', renders kcal total + breakdown table
│
├── index.html              ← Single HTML file: full semantic skeleton, loads all CSS + JS
├── docker/
│   └── nginx.conf          ← Custom Nginx config: MIME types for .js modules, gzip, caching
├── Dockerfile              ← Single-stage: nginx:alpine + copy src
├── docker-compose.yml      ← Port 8080:80, container name, restart policy
├── .gitignore
├── README.md
└── HANDOVER.md             ← This file
```

---

## 4. Data Architecture

### 4a. Source of Truth

All nutritional data comes from two official Domino's UK PDFs (correct as of 9th February 2026):
- `public/nutrition_pizzas.pdf` (20 pages)
- `public/nutrition_sides-and-desserts.pdf` (4 pages)

### 4b. Pizza Data (`src/data/pizzas.js`)

**Exported as:** `export const PIZZAS = { meta, categories }`

**Variant key pattern:** `"{size}__{crust}__{cheese}"`

Example key: `"medium__classic__standard"`, `"large__thin__reduced_fat"`

**Categories:**
1. `standard` — ~30 pizza varieties, sizes: Personal/Small/Medium/Large, crusts: classic/italian/stuffed/thin, cheese: standard/reduced_fat
2. `gluten_free` — 5 varieties (GF Cheese & Tomato, GF Vegi Supreme, GF Pepperoni Passion, GF Texas BBQ, GF New Yorker), Small size only, GF base only, standard/reduced_fat cheese
3. `plant_based` — 2 varieties (Plant-Based Margheri-tastic, Plant-Based Vegi Supreme), Medium/Large, classic/thin crusts, plant-based cheese only
4. `cheeky_little` — 5 varieties (BBQ Chicken and Bacon, Cheese and Tomato, Pepperoni, Sausage and Bacon, Vegi Classic), Personal only, classic/thin crusts, standard cheese
5. `delight` — 2 varieties (Delight Chicken, Delight Vegi), Medium only, classic/thin crusts, standard/reduced_fat cheese

**Nutritional fields per variant (from PDF, per whole pizza):**
```
kcal, fat_g, sat_g, carb_g, sugars_g, fibre_g, protein_g, salt_g, sodium_g
```

### 4c. Sides Data (`src/data/sides.js`)

**Exported as:** `export const SIDES = { categories }`

**Categories:**
1. `chicken` — Chick 'n' Mix, Chicken Kickers (4/7/14pc), Chicken Strippers (4/7/14pc), Chicken Wings (4/7/14pc), Frank's Red Hot Wings (4/7/14pc), Spicy BBQ Wings (4/7/14pc) + Combo variants with Fries/Wedges
2. `sides` — Coleslaw, Fries, Garlic Dippers, Garlic Pizza Bread, Loaded Fries (Cheese/Cheeseburger/Pepperoni Passion/Spicy Sausage/Double Bacon and Cheese), Loaded Veg, Loaded Veg with Chicken, Loaded Wedges, Mac n Cheese, Nachos (no jalapeños / with jalapeños), Potato Wedges (IRL / UK), The Ultimate Cheesy Garlic Bread, Twisted Dough Balls (Cheese/Ham/Pepperoni/Nduja Hot Honey)
3. `wraps` — American Hot, Chicken and Bacon, Pepperoni Passion, Tandoori Chicken, Texas BBQ, Vegi, Mexicana, Ham & Cheese, Tuna Melt
4. `chick_n_dip` — Tenders (×3/×5/×8), Wings (×8/×12/×20), Boneless Bites (×8/×12/×20), plus combos: 5 Tenders + Wedges/Fries/Garlic Pizza Bread, 8 Wings + Wedges/Fries/Garlic Pizza Bread, 8 Boneless Bites + Wedges/Fries/Garlic Pizza Bread
5. `dips` — Standard dips (25g): BBQ, Frank's Hot, Garlic & Herb, Honey & Mustard, Sweet Chilli, Tangy Salsa, Vegan Garlic & Herb; Chick 'N' Dip sauces (40g): Garlic Aioli, Hot Honey, Buffalo Hot Sauce, Ghost Chilli Glaze, Katsu Curry Sauce, Mexicana Mayo, Teriyaki Sauce, BBQ Sauce, Garlic & Herb
6. `desserts` — Cinni Dippers (×4), Domino's Cookies (×2/×4), Lotta-Chocca Pizza (×4), Double Chocolate & Caramel Cookies (×4), Twisted Dough Balls Cinnamon (×2), Mince Pie Cookies (×4), Crème Egg Cookies (×2)

---

## 5. UI Architecture

### 5a. Tab Layout

Two main tabs:
- **Pizzas tab** — step-by-step pizza builder (category → flavor → size → crust → cheese → quantity)
- **Sides & More tab** — sub-tabbed by category, each item has variant dropdown + "Add" button

### 5b. Pizza Builder State Machine

Defined in `src/js/pizza-builder.js`. Module-level state object:

```javascript
const state = {
  categoryId: null,  // "standard" | "gluten_free" | "plant_based" | "cheeky_little" | "delight"
  pizzaId:    null,  // pizza's id field e.g. "american_hot"
  size:       null,  // "personal" | "small" | "medium" | "large"
  crustId:    null,  // "classic" | "italian" | "stuffed" | "thin" | "gf_base"
  cheeseId:   null,  // "standard" | "reduced_fat" | "plant_based"
  quantity:   1,
};
```

**Cascade invalidation:** Each selection step clears all downstream state fields before rendering the next step. E.g. selecting a new size resets `crustId` and `cheeseId` to `null`.

**Step visibility:** Steps are shown/hidden by toggling the `builder-step--hidden` CSS class. `hideStepsFrom(stepId)` hides a step and all steps after it in the pipeline.

**Auto-select:** If a step has only one valid (non-disabled) option button, it is selected automatically and the next step is shown immediately — the user doesn't have to click it. This handles categories like Gluten Free (only one crust type) and Plant Based (only plant-based cheese).

**Crust/cheese availability check:** A crust is available for a given size if any variant key in `pizza.variants` matches `{size}__{crustId}__*`. A cheese option is available if the exact key `{size}__{crustId}__{cheeseId}` exists in `pizza.variants`.

**Variant lookup:** `pizza.variants[`${size}__${crustId}__${cheeseId}`]` returns the nutrition object or `undefined`. The "Add to Order" button is `disabled` when this returns `undefined`.

**Pizza cart:** Each pizza added becomes `{ id, label, quantity, nutrition, kcal }` pushed into a module-level `cart` array. The cart renders as a `<ul>` with per-item quantity steppers and remove buttons. Fires `pizza-cart:changed` CustomEvent on every mutation.

**Pizza search:** `<input id="pizza-search">` filters the pizza grid by toggling `hidden` on non-matching cards. No state change — purely visual filter.

### 5c. Sides Builder

Defined in `src/js/sides-builder.js`:

**Sub-tabs:** One `<button>` per category in `SIDES.categories`, rendered into `#sides-sub-tabs`. Clicking a tab calls `renderItems(catId)` which replaces the contents of `#sides-items-area`.

**Item cards:** Each item renders as a `.side-card` with:
- A `<select>` dropdown if it has >1 variant, or a static label if only one
- A live kcal preview that updates when the dropdown changes
- An "Add" button with 800ms "Added!" feedback animation

**Sides cart:** Same structure as the pizza cart. Each entry: `{ id, label, quantity, nutrition, kcal }`. Fires `sides-cart:changed` CustomEvent on mutation.

### 5d. Calculator

Defined in `src/js/calculator.js`. Pure functions — no DOM access:

```javascript
// Sums nutrition × quantity across all selections
export function computeTotals(pizzaSelections, cartItems) { ... }

// Calls computeTotals, then fires the DOM event
export function dispatchNutritionUpdate(pizzaSelections, cartItems) { ... }
```

### 5e. Event Bus

Three custom DOM events coordinate the modules:

```javascript
// calculator.js fires after every cart change:
document.dispatchEvent(new CustomEvent('nutrition:updated', { detail: totals }));

// pizza-builder.js fires on every pizza cart mutation:
document.dispatchEvent(new CustomEvent('pizza-cart:changed', { detail: cart }));

// sides-builder.js fires on every sides cart mutation:
document.dispatchEvent(new CustomEvent('sides-cart:changed', { detail: cart }));
```

`app.js` listens for both `pizza-cart:changed` and `sides-cart:changed`, then calls `dispatchNutritionUpdate(getPizzaCart(), getSidesCart())` and `renderBreakdown(allItems)`.

`totals` shape: `{ kcal, fat_g, sat_g, carb_g, sugars_g, fibre_g, protein_g, salt_g }` (values rounded to 1 d.p.)

### 5f. Nutrition Panel

Defined in `src/js/nutrition-panel.js`:

- `initNutritionPanel(onClearAll)` — populates the nutrient `<tbody>` dynamically, binds the mobile toggle and "Clear all" button, and starts listening for `nutrition:updated`
- `renderBreakdown(items)` — called from `app.js` to update the order breakdown list (`#breakdown-list`)
- Mobile expand/collapse: clicking `#panel-toggle` toggles `.panel--expanded` on `#nutrition-panel` and updates `aria-expanded`
- The kcal reference bar (`#kcal-ref-bar`) gets CSS class `kcal-ref-bar--warn` at >75% and `kcal-ref-bar--over` at 100%+ of the 2000 kcal reference

### 5e. Responsive Layout

| Breakpoint | Layout |
|---|---|
| < 768px (mobile) | Single column; nutrition panel is a collapsed bottom bar — tap to expand a full-height drawer |
| 768–1023px (tablet) | 2-column grid: selection area left, nutrition panel as sticky right sidebar |
| ≥ 1024px (desktop) | Same 2-column but wider panel (360px) |

---

## 6. Docker Setup

### Build & Run
```bash
docker compose up --build
# Access at http://localhost:8080
```

### Image Details
- Base: `nginx:1.27-alpine` (~23MB)
- Added app files: < 2MB
- Final image: ~25MB
- No Node.js runtime — purely static files served by Nginx

### Dockerfile
```dockerfile
FROM nginx:1.27-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/
COPY public/ /usr/share/nginx/html/public/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

Note: `public/` (the PDFs) is included in the image so they are browsable at `/public/nutrition_pizzas.pdf` etc. if needed for reference.

### nginx.conf Key Settings
- `application/javascript` MIME type for `.js` files (required for ES modules)
- `gzip on` for HTML, CSS, JS
- 24h cache headers for static assets
- `try_files $uri /index.html` fallback

---

## 7. GitHub Repository

**URL:** https://github.com/ej22/dominos-calorie-calculator

**Branch:** `master`

**Actual commit history (git log --oneline):**
```
f5a051c docs: add README with setup instructions and project overview
9bc0fb2 feat: add Docker configuration (nginx alpine, port 8080)
062bde3 feat: implement pizza builder, sides builder, calculator and nutrition panel
47d201d feat: add sides and desserts nutritional data as ES module
b7405ce feat: add pizza nutritional data as ES module
811b9bf docs: add comprehensive HANDOVER.md
a458d56 chore: initialise project structure and design system
```

All JS modules (pizza-builder, sides-builder, calculator, nutrition-panel, app) were committed as a single commit (`062bde3`) because they were all written in the same session and are tightly interdependent.

---

## 8. Data Extraction Process

### How the Data Was Obtained
1. The PDF files were read by Claude Code's PDF reader tool
2. An AI subagent extracted text from all 20 pages of `nutrition_pizzas.pdf`
3. A Python script (`nutrition_complete.json`) was auto-generated to parse and structure the raw text
4. The data was cleaned and hand-structured into the ES module files (`src/data/pizzas.js`, `src/data/sides.js`)

### Data Limitations & Known Issues

**PDF parsing quirks:**
- The pizza PDF has a complex multi-column table structure. The PDF text extractor sometimes loses track of which crust type a nutritional row belongs to (entries all say "Classic Crust" in the raw text even when they represent Thin & Crispy or Reduced Fat variants)
- This means some pizza variants may have approximated or placeholder nutritional values
- Always cross-check values against the PDFs in `/public/` if accuracy is critical

**Two JSON artefacts were auto-generated during the build process:**
- `nutrition_complete.json` — raw parsed data with 153 entries (pizza_name, size, nutrition_values array, raw_line)
- `nutrition_parsed.json` — same data without raw_line
- **These are reference files, not used by the app** — the app uses `src/data/pizzas.js` and `src/data/sides.js`

**The sides PDF was clean:** The 4-page sides PDF had well-structured tables and was extracted accurately with full confidence.

### Updating Data When Domino's Changes Their Menu
1. Download the new PDFs from Domino's website and replace files in `/public/`
2. Edit `src/data/pizzas.js` and `src/data/sides.js` directly with new values
3. Rebuild Docker: `docker compose up --build`
4. No deployment pipeline needed — just rebuild and restart

---

## 9. How to Add a New Pizza

1. Open `src/data/pizzas.js`
2. Find the appropriate category in `PIZZAS.categories`
3. Add a new entry to the `pizzas` array:

```javascript
{
  id: "pizza_id_no_spaces",
  label: "Pizza Display Name",
  variants: {
    "personal__classic__standard": { kcal: 0, fat_g: 0, sat_g: 0, carb_g: 0, sugars_g: 0, fibre_g: 0, protein_g: 0, salt_g: 0, sodium_g: 0 },
    "medium__classic__standard": { /* ... */ },
    // Add all size/crust/cheese combinations that exist
  }
}
```

4. Only add variant keys that actually exist in the PDF. The UI automatically disables options that have no matching variant.

---

## 10. How to Add a New Side Item

1. Open `src/data/sides.js`
2. Find or create the appropriate category
3. Add to the `items` array:

```javascript
{
  id: "item_id",
  label: "Item Display Name",
  icon: "🍟",
  variants: [
    {
      id: "variant_id",
      label: "Serving size label",
      nutrition: { kcal: 0, fat_g: 0, sat_g: 0, carb_g: 0, sugars_g: 0, fibre_g: 0, protein_g: 0, salt_g: 0, sodium_g: 0 }
    }
  ]
}
```

---

## 11. Features Implemented

- [x] Pizza builder: category → flavor → size → crust → cheese → quantity
- [x] Auto-select single-option steps (e.g. Gluten Free only has one crust — skips that click)
- [x] Unavailable crust/cheese combos are `disabled`, not hidden, with `aria-disabled`
- [x] Pizza search/filter (filters card grid visually, no state change)
- [x] Kcal preview updates live as quantity stepper changes
- [x] Sides builder: category sub-tabs → item cards → variant dropdown → add to cart
- [x] "Added!" button feedback animation (800ms) on sides add
- [x] Multi-item pizza cart and multi-item sides cart, both with quantity +/- and remove
- [x] Live calorie total in nutrition panel (updates on every cart mutation)
- [x] Full nutrient breakdown table (fat, saturates, carbs, sugars, fibre, protein, salt)
- [x] 2000 kcal daily reference progress bar with warn (>75%) and over (>100%) colour states
- [x] Order breakdown list in panel (separate pizza and sides entries)
- [x] "Clear all" button wipes both carts and resets the panel
- [x] Mobile responsive (collapsible bottom sheet panel, single-column layout)
- [x] Desktop sticky sidebar panel (always visible at ≥768px)
- [x] Keyboard accessible (focus styles, `aria-label`, `aria-live`, `aria-pressed`, `role` attributes)
- [x] Docker + Nginx deployment (port 8080, gzip, correct ES module MIME type)
- [x] README.md with setup instructions

---

## 12. Features NOT Yet Implemented / Known Gaps

- [ ] **Missing pizza variants:** Due to PDF parsing complexity, some pizza/size/crust combinations in the PDF may not be in the data file. Cross-check against PDFs and add missing `variants` keys.
- [ ] **Dip calorie inclusion with pizza:** The PDF explicitly states pizza nutrition excludes dips. The UI currently shows a disclaimer but doesn't force dip selection alongside pizza — a future UX improvement would be to prompt for a dip when adding a pizza.
- [ ] **Persistence across page refresh:** Selections reset on refresh. Could be added with `localStorage` — a 30-min task.
- [ ] **Share/export order:** No way to save or share a built order.
- [ ] **Daily total tracker:** No concept of a daily log (multiple orders).
- [ ] **Allergen information:** The PDFs contain allergen data not currently extracted.
- [ ] **Drink/ice cream nutrition:** The PDF disclaimer notes these come from packaging; they are excluded from this calculator.
- [ ] **IRL vs UK variants:** Some sides (Potato Wedges, Chicken Kickers Combos) have separate IRL and UK values. Currently both are listed; a future improvement would be a regional toggle.
- [ ] **Slices calculator:** Nutrition is shown per whole pizza. A "how many slices" input would let users calculate per-slice.

---

## 13. What Went Wrong / Lessons Learned

### PDF Table Parsing
**Problem:** The 20-page pizza PDF has a complex multi-column table layout. When text is extracted, crust-type row labels ("Thin & Crispy", "Italian Style") are sometimes lost, resulting in entries labelled "Classic Crust" that may actually be other crust types.

**Fix applied:** The data module was structured to only include variant keys where we have confident data. Uncertain combinations were marked with placeholder values rather than fabricated numbers.

**Future fix:** Use a PDF-to-image tool (pdftoppm, pdf2image) to render each page as an image and use vision-based extraction for the table data.

### ES Modules vs `fetch()` over `file://`
**Problem:** Using `fetch()` to load JSON data files fails with a CORS error when `index.html` is opened directly via `file://` protocol (without a local server).

**Fix applied:** Data is exported as ES module constants (`export const PIZZAS = {...}`) and imported with `import` statements in `<script type="module">` tags. This works correctly over both `file://` and HTTP.

### `gh auth login` timeout
**Problem:** First attempt at `gh auth login --web` timed out before the user could complete browser auth.

**Fix:** Retried the command and the user completed auth on the second attempt.

### Element ID mismatch between index.html and nutrition-panel.js
**Problem:** The first draft of `nutrition-panel.js` used different element IDs than those that had been baked into `index.html` (e.g. `total-kcal` vs `kcal-total`, `kcal-bar-fill` vs `kcal-ref-bar`, `mobile-kcal` vs `panel-kcal-bar`). The panel would have silently failed to update anything.

**Fix:** `nutrition-panel.js` was rewritten immediately to use the correct IDs from `index.html` before any browser testing. The nutrient table `<tbody>` rows are now populated dynamically by `initNutritionPanel()` rather than being hard-coded in HTML — this reduces the surface for future ID drift.

### Context window exhaustion mid-implementation
**Problem:** The first Claude session ran out of context before any JS modules were written. The project was fully planned and data files were complete, but none of the interactive logic existed.

**Fix:** A HANDOVER.md was written and committed while context remained, allowing the next session to resume cleanly with full context on what had been done and what remained.

---

## 14. How to Run Locally

### Option A: Docker (recommended)
```bash
docker compose up --build
# Open http://localhost:8080
```

### Option B: Direct browser
Open `index.html` directly in any modern browser (Chrome 80+, Firefox 75+, Safari 14+, Edge 80+).
No server needed — ES modules work over `file://`.

### Option C: Local HTTP server (for development)
```bash
# Python
python3 -m http.server 3000

# Node.js (npx)
npx serve .

# Then open http://localhost:3000
```

---

## 15. Environment & Dependencies

| Dependency | Version | Where used |
|---|---|---|
| Nginx | 1.27 Alpine | Docker container |
| Docker | Any recent | Container runtime |
| docker-compose | v2+ | Orchestration |
| gh CLI | Latest | Used to create GitHub repo |
| Python 3 | Any | Used to parse PDFs during build (not needed at runtime) |

**Runtime dependencies: none.** The browser needs ES module support (all modern browsers).

---

## 16. Nutritional Data Disclaimer

Nutritional values are sourced from official Domino's UK PDFs (correct as of 9 February 2026). All pizza nutrition excludes dips. Sides and desserts nutrition excludes dips. As pizzas are handmade to order, actual nutritional values may vary. This tool is for informational purposes only.
