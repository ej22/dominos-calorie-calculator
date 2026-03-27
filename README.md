# Domino's Calorie Calculator

A mobile-responsive web app for calculating the nutritional content of a Domino's UK order. Select pizzas (with size, crust and cheese options), sides, dips, wraps and desserts — see a live calorie total and full nutrient breakdown as you build your order.

> **Disclaimer:** Nutritional values are sourced from the Domino's UK PDFs in `/public/` and are approximate. Handmade items may vary.

---

## Features

- All 41+ standard pizzas, gluten-free, plant-based, Cheeky Little and Delight categories
- Cascade selection: size → crust → cheese, with unavailable combinations disabled
- Sides, wraps, dips, Chick 'N' Dip, and desserts with variant dropdowns
- Multi-item cart with quantity controls and remove buttons
- Live nutrition panel: kcal total with 2000 kcal/day reference bar, full nutrient table, order breakdown
- Mobile-first: collapsible bottom sheet on small screens, sticky sidebar on desktop
- No build step, no framework, no external dependencies

---

## Quick Start

### Docker (recommended)

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080).

### Local (no Docker)

Open `index.html` directly in a browser. ES module imports work over `file://` without a server.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Vanilla HTML5 + CSS3 + ES Modules |
| Server | Nginx 1.27 Alpine |
| Container | Docker + Docker Compose |
| Data | Static JS files (`src/data/*.js`) |

No database. No API. No build pipeline.

---

## Project Structure

```
DominosCalculator/
├── public/                        # Domino's UK nutrition PDFs (source of truth)
├── src/
│   ├── data/
│   │   ├── pizzas.js              # Pizza nutritional data (ES module export)
│   │   └── sides.js              # Sides/dips/desserts data (ES module export)
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css          # Design tokens (colours, spacing, typography)
│   │   ├── layout.css             # App grid, tab bar, responsive breakpoints
│   │   ├── components.css         # Cards, buttons, steppers, cart items
│   │   └── nutrition-panel.css    # Sticky summary panel + mobile bottom sheet
│   └── js/
│       ├── app.js                 # Entry point — wires all modules
│       ├── pizza-builder.js       # Pizza selection state machine + cart
│       ├── sides-builder.js       # Sides sub-tabs, item cards, cart
│       ├── calculator.js          # Pure aggregation, fires nutrition:updated event
│       └── nutrition-panel.js     # Renders live summary from event
├── docker/
│   └── nginx.conf
├── Dockerfile
├── docker-compose.yml
├── index.html
└── HANDOVER.md                    # Full technical handover documentation
```

---

## Adding New Items

**New pizza:** add an entry to the `pizzas` array inside the relevant category in `src/data/pizzas.js`. Use the variant key format `"size__crust__cheese"` (e.g. `"medium__classic__standard"`).

**New side:** add an entry to the relevant category's `items` array in `src/data/sides.js`. Each item needs at least one variant with a `nutrition` object.

---

## Data Source

Nutritional values are transcribed from:
- `public/nutrition_pizzas.pdf` — Domino's UK Pizza Nutrition Information
- `public/nutrition_sides-and-desserts.pdf` — Domino's UK Sides & Desserts Nutrition Information

All values are per serving (whole pizza or per-piece count as listed in the PDFs).
