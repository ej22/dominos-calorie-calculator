/**
 * Domino's UK Pizza Nutritional Data
 * Source: Official Domino's UK Nutrition PDFs (correct as of 9th February 2026)
 * Note: Values are per whole pizza. Nutrition excludes dips.
 * Handmade pizzas may vary from stated values.
 *
 * Variant key format: "{size}__{crust}__{cheese}"
 * Sizes:  personal | small | medium | large
 * Crusts: classic | italian | thin | stuffed | gf_base | pb_classic | pb_thin
 * Cheese: standard | reduced_fat | plant_based
 *
 * Data extraction note: Medium pizza entries labeled "classic" and "italian"
 * represent the two crust variants shown in the PDF per-pizza table.
 * Where only one medium variant exists, it is labeled "classic".
 */

export const PIZZAS = {

  meta: {
    nutrients:      ["kcal","fat_g","sat_g","carb_g","sugars_g","fibre_g","protein_g","salt_g","sodium_g"],
    labels: {
      kcal:      "Calories",
      fat_g:     "Fat",
      sat_g:     "Saturated Fat",
      carb_g:    "Carbohydrates",
      sugars_g:  "Sugars",
      fibre_g:   "Fibre",
      protein_g: "Protein",
      salt_g:    "Salt",
      sodium_g:  "Sodium"
    },
    units: {
      kcal:      "kcal",
      fat_g:     "g",
      sat_g:     "g",
      carb_g:    "g",
      sugars_g:  "g",
      fibre_g:   "g",
      protein_g: "g",
      salt_g:    "g",
      sodium_g:  "g"
    }
  },

  categories: [

    // =========================================================
    // STANDARD PIZZAS
    // =========================================================
    {
      id:     "standard",
      label:  "Standard",
      icon:   "🍕",
      sizes:  ["personal","medium","large"],
      crusts: [
        { id: "classic",  label: "Classic Crust" },
        { id: "italian",  label: "Italian Style" },
        { id: "stuffed",  label: "Double Decadence" },
        { id: "thin",     label: "Thin & Crispy" }
      ],
      cheeses: [
        { id: "standard",     label: "Standard Mozzarella" },
        { id: "reduced_fat",  label: "Reduced Fat Mozzarella" }
      ],
      note: "Nutritional values are per whole pizza",
      pizzas: [
        {
          id: "absolute_banger", label: "Absolute Banger",
          variants: {
            "personal__classic__standard": { kcal:457, fat_g:25.3, sat_g:11.3, carb_g:36.8, sugars_g:4.5, fibre_g:2.7, protein_g:20.5, salt_g:2.6, sodium_g:1.01 },
            "medium__classic__standard":  { kcal:1747, fat_g:67.6, sat_g:27.2, carb_g:187.6, sugars_g:34.9, fibre_g:22.9, protein_g:96.7, salt_g:8.67, sodium_g:3.41 },
            "medium__italian__standard":  { kcal:1751, fat_g:73.7, sat_g:35.1, carb_g:204.2, sugars_g:40.9, fibre_g:13.6, protein_g:67.8, salt_g:10.34, sodium_g:4.07 },
            "large__stuffed__standard":   { kcal:2735, fat_g:140.9, sat_g:78.1, carb_g:255.2, sugars_g:26.4, fibre_g:28.9, protein_g:111.2, salt_g:18.02, sodium_g:7.08 }
          }
        },
        {
          id: "american_hot", label: "American Hot",
          variants: {
            "personal__classic__standard": { kcal:381, fat_g:18.9, sat_g:8.8, carb_g:36.5, sugars_g:4.9, fibre_g:2.8, protein_g:16.1, salt_g:2.89, sodium_g:1.14 },
            "medium__classic__standard":  { kcal:1585, fat_g:54.3, sat_g:22.0, carb_g:187.3, sugars_g:36.4, fibre_g:23.5, protein_g:87.2, salt_g:10.57, sodium_g:4.16 },
            "medium__italian__standard":  { kcal:1933, fat_g:71.8, sat_g:35.8, carb_g:231.8, sugars_g:73.4, fibre_g:12.6, protein_g:90.4, salt_g:9.74, sodium_g:3.83 }
          }
        },
        {
          id: "americano", label: "Americano",
          variants: {
            "large__classic__standard":  { kcal:2495, fat_g:74.3, sat_g:30.0, carb_g:359.8, sugars_g:107.6, fibre_g:24.5, protein_g:97.6, salt_g:15.92, sodium_g:6.26 },
            "medium__classic__standard": { kcal:1853, fat_g:54.8, sat_g:21.4, carb_g:266.2, sugars_g:68.0, fibre_g:12.6, protein_g:74.4, salt_g:12.72, sodium_g:5.0 },
            "medium__italian__standard": { kcal:1802, fat_g:75.7, sat_g:35.1, carb_g:203.5, sugars_g:39.8, fibre_g:13.3, protein_g:76.6, salt_g:8.36, sodium_g:3.29 }
          }
        },
        {
          id: "bacon_double_cheese", label: "Bacon Double Cheese",
          variants: {
            "personal__classic__standard": { kcal:421, fat_g:21.8, sat_g:11.1, carb_g:36.4, sugars_g:4.7, fibre_g:2.7, protein_g:19.7, salt_g:2.29, sodium_g:0.9 },
            "medium__classic__standard":  { kcal:1608, fat_g:51.6, sat_g:23.4, carb_g:188.1, sugars_g:35.8, fibre_g:23.2, protein_g:98.5, salt_g:8.33, sodium_g:3.27 },
            "medium__italian__standard":  { kcal:1541, fat_g:48.9, sat_g:25.2, carb_g:205.1, sugars_g:42.0, fibre_g:14.1, protein_g:70.1, salt_g:9.24, sodium_g:3.63 }
          }
        },
        {
          id: "buffalo_chicken", label: "Buffalo Chicken",
          variants: {
            "personal__classic__standard": { kcal:313, fat_g:10.7, sat_g:5.5, carb_g:36.9, sugars_g:5.3, fibre_g:3.0, protein_g:17.2, salt_g:2.53, sodium_g:1.0 },
            "medium__classic__standard":  { kcal:1377, fat_g:29.4, sat_g:12.1, carb_g:188.2, sugars_g:37.5, fibre_g:24.1, protein_g:89.6, salt_g:9.47, sodium_g:3.72 },
            "medium__italian__standard":  { kcal:1565, fat_g:49.5, sat_g:25.3, carb_g:206.3, sugars_g:41.7, fibre_g:14.3, protein_g:73.6, salt_g:6.63, sodium_g:2.61 }
          }
        },
        {
          id: "chicken_feast", label: "Chicken Feast",
          variants: {
            "personal__classic__standard": { kcal:320, fat_g:10.9, sat_g:5.6, carb_g:37.2, sugars_g:5.2, fibre_g:3.0, protein_g:18.1, salt_g:1.66, sodium_g:0.65 },
            "medium__classic__standard":  { kcal:1399, fat_g:30.1, sat_g:12.2, carb_g:189.4, sugars_g:37.2, fibre_g:24.2, protein_g:93.0, salt_g:6.86, sodium_g:2.7 },
            "medium__italian__standard":  { kcal:1733, fat_g:70.6, sat_g:33.8, carb_g:205.2, sugars_g:41.6, fibre_g:13.9, protein_g:69.2, salt_g:8.45, sodium_g:3.32 }
          }
        },
        {
          id: "deluxe", label: "Deluxe",
          variants: {
            "personal__classic__standard": { kcal:371, fat_g:17.3, sat_g:8.1, carb_g:37.0, sugars_g:5.1, fibre_g:2.9, protein_g:16.8, salt_g:2.22, sodium_g:0.87 },
            "medium__classic__standard":  { kcal:1568, fat_g:51.2, sat_g:20.7, carb_g:188.3, sugars_g:37.1, fibre_g:23.8, protein_g:88.7, salt_g:8.68, sodium_g:3.41 },
            "medium__italian__standard":  { kcal:1547, fat_g:50.1, sat_g:25.7, carb_g:203.4, sugars_g:40.8, fibre_g:14.1, protein_g:69.4, salt_g:7.98, sodium_g:3.14 }
          }
        },
        {
          id: "farmhouse", label: "Farmhouse",
          variants: {
            "personal__classic__standard": { kcal:311, fat_g:11.1, sat_g:5.7, carb_g:36.2, sugars_g:4.9, fibre_g:3.0, protein_g:16.7, salt_g:2.11, sodium_g:0.83 },
            "medium__classic__standard":  { kcal:1376, fat_g:30.7, sat_g:12.6, carb_g:186.5, sugars_g:36.3, fibre_g:24.1, protein_g:88.8, salt_g:8.21, sodium_g:3.23 },
            "medium__italian__standard":  { kcal:1474, fat_g:48.1, sat_g:24.9, carb_g:203.6, sugars_g:40.9, fibre_g:13.5, protein_g:57.1, salt_g:7.22, sodium_g:2.84 }
          }
        },
        {
          id: "fiery_vegi_sizzler", label: "Fiery Vegi Sizzler",
          variants: {
            "personal__classic__standard": { kcal:288, fat_g:10.4, sat_g:5.4, carb_g:36.2, sugars_g:4.8, fibre_g:2.8, protein_g:12.5, salt_g:1.83, sodium_g:0.72 },
            "medium__classic__standard":  { kcal:1310, fat_g:28.7, sat_g:11.8, carb_g:186.6, sugars_g:36.4, fibre_g:23.5, protein_g:76.5, salt_g:7.44, sodium_g:2.93 },
            "medium__italian__standard":  { kcal:1508, fat_g:48.1, sat_g:25.0, carb_g:210.4, sugars_g:43.0, fibre_g:15.3, protein_g:58.4, salt_g:6.49, sodium_g:2.55 }
          }
        },
        {
          id: "four_vegi", label: "Four Vegi",
          variants: {
            "personal__classic__standard": { kcal:303, fat_g:10.4, sat_g:5.5, carb_g:39.2, sugars_g:5.7, fibre_g:3.6, protein_g:13.1, salt_g:1.67, sodium_g:0.66 },
            "medium__classic__standard":  { kcal:1345, fat_g:28.7, sat_g:11.8, carb_g:193.4, sugars_g:36.3, fibre_g:24.2, protein_g:77.8, salt_g:7.44, sodium_g:2.93 },
            "medium__italian__standard":  { kcal:1742, fat_g:66.8, sat_g:27.2, carb_g:211.7, sugars_g:40.9, fibre_g:13.3, protein_g:73.9, salt_g:8.84, sodium_g:3.48 }
          }
        },
        {
          id: "full_house", label: "Full House",
          variants: {
            "personal__classic__standard": { kcal:411, fat_g:19.1, sat_g:9.2, carb_g:39.4, sugars_g:6.0, fibre_g:2.8, protein_g:20.3, salt_g:2.56, sodium_g:1.01 },
            "medium__classic__standard":  { kcal:1579, fat_g:52.5, sat_g:22.2, carb_g:194.2, sugars_g:40.1, fibre_g:23.4, protein_g:89.3, salt_g:9.18, sodium_g:3.61 },
            "medium__italian__standard":  { kcal:1548, fat_g:50.8, sat_g:26.0, carb_g:210.8, sugars_g:45.5, fibre_g:13.8, protein_g:70.0, salt_g:8.97, sodium_g:3.53 }
          }
        },
        {
          id: "ham_pineapple", label: "Ham & Pineapple",
          variants: {
            "personal__classic__standard": { kcal:314, fat_g:11.1, sat_g:5.8, carb_g:36.3, sugars_g:7.3, fibre_g:2.8, protein_g:16.4, salt_g:1.97, sodium_g:0.78 },
            "medium__classic__standard":  { kcal:1385, fat_g:29.9, sat_g:12.6, carb_g:189.0, sugars_g:44.1, fibre_g:23.5, protein_g:80.8, salt_g:8.21, sodium_g:3.23 },
            "medium__italian__standard":  { kcal:1555, fat_g:49.4, sat_g:25.5, carb_g:207.1, sugars_g:46.0, fibre_g:13.6, protein_g:61.8, salt_g:7.4, sodium_g:2.91 }
          }
        },
        {
          id: "hawaiian", label: "Hawaiian",
          variants: {
            "personal__classic__standard": { kcal:315, fat_g:11.1, sat_g:5.7, carb_g:36.5, sugars_g:7.1, fibre_g:2.8, protein_g:16.2, salt_g:1.85, sodium_g:0.73 },
            "medium__classic__standard":  { kcal:1390, fat_g:29.9, sat_g:12.4, carb_g:189.0, sugars_g:42.8, fibre_g:23.5, protein_g:81.5, salt_g:8.15, sodium_g:3.21 },
            "medium__italian__standard":  { kcal:1550, fat_g:49.1, sat_g:24.9, carb_g:206.9, sugars_g:47.5, fibre_g:13.5, protein_g:61.6, salt_g:7.32, sodium_g:2.88 }
          }
        },
        {
          id: "hot_spicy", label: "Hot & Spicy",
          variants: {
            "personal__classic__standard": { kcal:316, fat_g:11.0, sat_g:5.5, carb_g:36.7, sugars_g:4.9, fibre_g:3.1, protein_g:15.7, salt_g:2.09, sodium_g:0.82 },
            "medium__classic__standard":  { kcal:1389, fat_g:29.3, sat_g:12.1, carb_g:188.8, sugars_g:36.0, fibre_g:24.8, protein_g:79.5, salt_g:9.15, sodium_g:3.60 },
            "medium__italian__standard":  { kcal:1984, fat_g:79.5, sat_g:38.2, carb_g:224.6, sugars_g:43.3, fibre_g:14.5, protein_g:85.5, salt_g:11.21, sodium_g:4.41 }
          }
        },
        {
          id: "house_special_tandoori", label: "House Special Tandoori",
          variants: {
            "personal__classic__standard": { kcal:511, fat_g:23.8, sat_g:10.3, carb_g:50.8, sugars_g:9.3, fibre_g:2.9, protein_g:25.6, salt_g:2.22, sodium_g:0.87 },
            "large__classic__standard":   { kcal:2413, fat_g:86.2, sat_g:33.3, carb_g:254.6, sugars_g:46.8, fibre_g:24.1, protein_g:120.7, salt_g:12.89, sodium_g:5.07 },
            "medium__classic__standard":  { kcal:1792, fat_g:61.7, sat_g:24.4, carb_g:200.8, sugars_g:39.3, fibre_g:24.0, protein_g:93.0, salt_g:10.56, sodium_g:4.15 },
            "medium__italian__standard":  { kcal:1980, fat_g:82.0, sat_g:39.0, carb_g:218.8, sugars_g:42.7, fibre_g:14.2, protein_g:93.0, salt_g:11.28, sodium_g:4.44 }
          }
        },
        {
          id: "meatball_marinara", label: "Meatball Marinara",
          variants: {
            "personal__classic__standard": { kcal:475, fat_g:24.4, sat_g:11.6, carb_g:43.3, sugars_g:8.4, fibre_g:3.0, protein_g:24.1, salt_g:2.85, sodium_g:1.12 },
            "medium__classic__standard":  { kcal:1814, fat_g:78.6, sat_g:33.7, carb_g:196.0, sugars_g:38.6, fibre_g:23.5, protein_g:94.3, salt_g:11.67, sodium_g:4.59 },
            "medium__italian__standard":  { kcal:2090, fat_g:97.9, sat_g:49.3, carb_g:214.4, sugars_g:41.5, fibre_g:13.8, protein_g:83.0, salt_g:13.12, sodium_g:5.16 }
          }
        },
        {
          id: "meateor", label: "Meateor",
          variants: {
            "personal__classic__standard": { kcal:584, fat_g:36.3, sat_g:17.4, carb_g:38.2, sugars_g:5.8, fibre_g:2.9, protein_g:27.0, salt_g:3.27, sodium_g:1.29 },
            "medium__classic__standard":  { kcal:2010, fat_g:97.0, sat_g:43.3, carb_g:195.5, sugars_g:38.7, fibre_g:23.0, protein_g:99.5, salt_g:13.83, sodium_g:5.44 },
            "medium__italian__standard":  { kcal:1769, fat_g:74.1, sat_g:37.5, carb_g:212.7, sugars_g:43.0, fibre_g:13.6, protein_g:75.8, salt_g:11.52, sodium_g:4.53 }
          }
        },
        {
          id: "meatilicious", label: "Meatilicious",
          variants: {
            "personal__classic__standard": { kcal:444, fat_g:22.8, sat_g:10.6, carb_g:38.1, sugars_g:5.6, fibre_g:3.0, protein_g:23.6, salt_g:2.63, sodium_g:1.03 },
            "medium__classic__standard":  { kcal:1599, fat_g:58.5, sat_g:24.6, carb_g:190.2, sugars_g:36.0, fibre_g:24.3, protein_g:92.5, salt_g:9.63, sodium_g:3.79 },
            "medium__italian__standard":  { kcal:1869, fat_g:81.8, sat_g:40.8, carb_g:207.1, sugars_g:39.5, fibre_g:14.0, protein_g:81.7, salt_g:11.12, sodium_g:4.37 }
          }
        },
        {
          id: "meat_lovers", label: "Meat Lovers",
          variants: {
            "personal__classic__standard": { kcal:429, fat_g:21.5, sat_g:9.9, carb_g:38.2, sugars_g:5.4, fibre_g:3.0, protein_g:21.8, salt_g:2.94, sodium_g:1.16 },
            "medium__classic__standard":  { kcal:1705, fat_g:67.0, sat_g:27.9, carb_g:191.9, sugars_g:37.3, fibre_g:24.2, protein_g:89.2, salt_g:12.06, sodium_g:4.75 },
            "medium__italian__standard":  { kcal:1834, fat_g:79.5, sat_g:39.2, carb_g:209.4, sugars_g:40.4, fibre_g:14.1, protein_g:77.4, salt_g:11.93, sodium_g:4.70 }
          }
        },
        {
          id: "meatzza", label: "Meatzza",
          variants: {
            "personal__classic__standard": { kcal:403, fat_g:19.5, sat_g:9.0, carb_g:38.0, sugars_g:5.4, fibre_g:3.0, protein_g:20.4, salt_g:2.47, sodium_g:0.97 },
            "medium__classic__standard":  { kcal:1674, fat_g:64.4, sat_g:26.2, carb_g:190.5, sugars_g:36.7, fibre_g:24.3, protein_g:88.6, salt_g:10.31, sodium_g:4.06 },
            "medium__italian__standard":  { kcal:1816, fat_g:79.2, sat_g:38.5, carb_g:208.0, sugars_g:39.7, fibre_g:14.1, protein_g:77.8, salt_g:11.17, sodium_g:4.39 }
          }
        },
        {
          id: "mexican_hot", label: "Mexican Hot",
          variants: {
            "personal__classic__standard": { kcal:382, fat_g:18.2, sat_g:8.4, carb_g:36.6, sugars_g:4.9, fibre_g:3.2, protein_g:17.1, salt_g:2.53, sodium_g:1.0 },
            "medium__classic__standard":  { kcal:1627, fat_g:59.9, sat_g:24.5, carb_g:188.7, sugars_g:37.0, fibre_g:24.2, protein_g:85.0, salt_g:10.21, sodium_g:4.02 },
            "medium__italian__standard":  { kcal:1860, fat_g:81.7, sat_g:38.8, carb_g:208.2, sugars_g:41.6, fibre_g:14.0, protein_g:79.2, salt_g:11.91, sodium_g:4.69 }
          }
        },
        {
          id: "mighty_meaty", label: "Mighty Meaty",
          variants: {
            "personal__classic__standard": { kcal:410, fat_g:20.2, sat_g:9.5, carb_g:36.4, sugars_g:5.1, fibre_g:2.8, protein_g:22.2, salt_g:2.75, sodium_g:1.08 },
            "medium__classic__standard":  { kcal:1695, fat_g:65.5, sat_g:26.6, carb_g:190.4, sugars_g:37.5, fibre_g:23.5, protein_g:91.2, salt_g:11.42, sodium_g:4.49 },
            "medium__italian__standard":  { kcal:1765, fat_g:72.7, sat_g:35.3, carb_g:207.6, sugars_g:41.2, fibre_g:13.8, protein_g:76.0, salt_g:10.82, sodium_g:4.26 }
          }
        },
        {
          id: "mixed_grill", label: "Mixed Grill",
          variants: {
            "personal__classic__standard": { kcal:412, fat_g:18.8, sat_g:8.6, carb_g:40.5, sugars_g:7.8, fibre_g:3.2, protein_g:21.9, salt_g:2.52, sodium_g:0.99 },
            "medium__classic__standard":  { kcal:1791, fat_g:69.0, sat_g:27.8, carb_g:206.8, sugars_g:49.3, fibre_g:24.0, protein_g:92.3, salt_g:11.47, sodium_g:4.51 }
          }
        },
        {
          id: "new_yorker", label: "New Yorker",
          variants: {
            "personal__classic__standard": { kcal:400, fat_g:18.2, sat_g:8.3, carb_g:39.2, sugars_g:5.9, fibre_g:3.0, protein_g:20.8, salt_g:2.5, sodium_g:0.98 },
            "medium__classic__standard":  { kcal:1623, fat_g:54.5, sat_g:22.0, carb_g:196.3, sugars_g:38.3, fibre_g:24.4, protein_g:92.1, salt_g:10.07, sodium_g:3.96 },
            "medium__italian__standard":  { kcal:1614, fat_g:56.9, sat_g:27.6, carb_g:208.2, sugars_g:42.4, fibre_g:14.0, protein_g:73.7, salt_g:9.21, sodium_g:3.62 }
          }
        },
        {
          id: "original_cheese_tomato", label: "Original Cheese & Tomato",
          variants: {
            "personal__classic__standard": { kcal:319, fat_g:11.0, sat_g:5.5, carb_g:37.6, sugars_g:5.4, fibre_g:2.9, protein_g:15.3, salt_g:1.68, sodium_g:0.66 },
            "large__classic__standard":   { kcal:1942, fat_g:55.4, sat_g:23.5, carb_g:263.6, sugars_g:55.3, fibre_g:24.6, protein_g:88.3, salt_g:11.69, sodium_g:4.60 },
            "medium__classic__standard":  { kcal:1421, fat_g:36.5, sat_g:15.0, carb_g:192.3, sugars_g:38.4, fibre_g:24.5, protein_g:77.5, salt_g:8.39, sodium_g:3.30 },
            "medium__italian__standard":  { kcal:1988, fat_g:79.0, sat_g:36.9, carb_g:219.3, sugars_g:44.4, fibre_g:14.4, protein_g:84.8, salt_g:11.18, sodium_g:4.40 }
          }
        },
        {
          id: "pepperoni_passion", label: "Pepperoni Passion",
          variants: {
            "personal__classic__standard": { kcal:470, fat_g:24.7, sat_g:11.6, carb_g:38.0, sugars_g:5.5, fibre_g:2.9, protein_g:22.1, salt_g:2.87, sodium_g:1.13 },
            "medium__classic__standard":  { kcal:1798, fat_g:75.8, sat_g:32.6, carb_g:192.6, sugars_g:38.0, fibre_g:23.6, protein_g:91.2, salt_g:12.03, sodium_g:4.73 },
            "medium__italian__standard":  { kcal:1994, fat_g:93.5, sat_g:48.2, carb_g:210.5, sugars_g:41.0, fibre_g:13.8, protein_g:83.0, salt_g:13.64, sodium_g:5.37 }
          }
        },
        {
          id: "ranch_bbq", label: "Ranch BBQ",
          variants: {
            "personal__classic__standard": { kcal:476, fat_g:22.9, sat_g:10.1, carb_g:47.5, sugars_g:14.1, fibre_g:2.9, protein_g:24.0, salt_g:3.04, sodium_g:1.2 },
            "medium__classic__standard":  { kcal:1914, fat_g:79.3, sat_g:32.7, carb_g:218.5, sugars_g:57.5, fibre_g:22.8, protein_g:98.8, salt_g:13.63, sodium_g:5.36 },
            "medium__italian__standard":  { kcal:1998, fat_g:88.1, sat_g:44.2, carb_g:236.0, sugars_g:62.8, fibre_g:13.3, protein_g:85.1, salt_g:14.14, sodium_g:5.56 }
          }
        },
        {
          id: "scrummy", label: "Scrummy",
          variants: {
            "personal__classic__standard": { kcal:526, fat_g:28.3, sat_g:12.4, carb_g:44.6, sugars_g:9.0, fibre_g:3.0, protein_g:24.8, salt_g:3.19, sodium_g:1.26 },
            "medium__classic__standard":  { kcal:1834, fat_g:80.1, sat_g:34.8, carb_g:203.2, sugars_g:42.8, fibre_g:23.0, protein_g:95.0, salt_g:12.8, sodium_g:5.04 },
            "medium__italian__standard":  { kcal:1545, fat_g:52.8, sat_g:27.5, carb_g:209.4, sugars_g:43.0, fibre_g:13.8, protein_g:72.0, salt_g:9.98, sodium_g:3.93 }
          }
        },
        {
          id: "tandoori_sizzler", label: "Tandoori Sizzler",
          variants: {
            "personal__classic__standard": { kcal:311, fat_g:9.8, sat_g:5.2, carb_g:38.2, sugars_g:6.5, fibre_g:3.2, protein_g:15.9, salt_g:1.87, sodium_g:0.74 },
            "medium__classic__standard":  { kcal:1371, fat_g:27.8, sat_g:11.9, carb_g:196.2, sugars_g:39.7, fibre_g:25.1, protein_g:74.8, salt_g:8.44, sodium_g:3.32 },
            "medium__italian__standard":  { kcal:1748, fat_g:66.5, sat_g:33.1, carb_g:216.6, sugars_g:44.3, fibre_g:14.5, protein_g:77.6, salt_g:10.51, sodium_g:4.14 }
          }
        },
        {
          id: "texas_bbq", label: "Texas BBQ",
          variants: {
            "personal__classic__standard": { kcal:414, fat_g:17.5, sat_g:8.0, carb_g:46.0, sugars_g:12.4, fibre_g:3.1, protein_g:21.4, salt_g:2.79, sodium_g:1.10 },
            "medium__classic__standard":  { kcal:1665, fat_g:54.8, sat_g:22.4, carb_g:216.8, sugars_g:59.8, fibre_g:24.0, protein_g:85.8, salt_g:11.28, sodium_g:4.44 },
            "medium__italian__standard":  { kcal:1743, fat_g:70.0, sat_g:34.6, carb_g:231.2, sugars_g:65.5, fibre_g:13.7, protein_g:73.3, salt_g:11.3, sodium_g:4.45 }
          }
        },
        {
          id: "the_cheeseburger", label: "The Cheeseburger",
          variants: {
            "personal__classic__standard": { kcal:706, fat_g:41.8, sat_g:18.9, carb_g:53.2, sugars_g:12.7, fibre_g:3.4, protein_g:27.4, salt_g:4.52, sodium_g:1.78 },
            "medium__classic__standard":  { kcal:1584, fat_g:58.9, sat_g:25.6, carb_g:188.0, sugars_g:36.6, fibre_g:23.5, protein_g:78.5, salt_g:9.58, sodium_g:3.77 },
            "medium__italian__standard":  { kcal:1973, fat_g:88.2, sat_g:43.3, carb_g:213.9, sugars_g:42.2, fibre_g:13.9, protein_g:82.1, salt_g:12.68, sodium_g:4.99 }
          }
        },
        {
          id: "the_meatfielder", label: "The Meatfielder",
          variants: {
            "personal__classic__standard": { kcal:519, fat_g:28.4, sat_g:13.0, carb_g:39.6, sugars_g:6.1, fibre_g:2.7, protein_g:24.6, salt_g:3.26, sodium_g:1.28 },
            "medium__classic__standard":  { kcal:1810, fat_g:77.9, sat_g:32.7, carb_g:194.0, sugars_g:38.3, fibre_g:22.7, protein_g:95.7, salt_g:13.17, sodium_g:5.18 },
            "medium__italian__standard":  { kcal:1798, fat_g:78.2, sat_g:38.6, carb_g:210.4, sugars_g:41.9, fibre_g:13.5, protein_g:80.3, salt_g:12.6, sodium_g:4.96 }
          }
        },
        {
          id: "the_sizzler", label: "The Sizzler",
          variants: {
            "personal__classic__standard": { kcal:410, fat_g:18.5, sat_g:8.3, carb_g:41.6, sugars_g:7.7, fibre_g:3.2, protein_g:20.4, salt_g:2.63, sodium_g:1.04 },
            "medium__classic__standard":  { kcal:1675, fat_g:58.7, sat_g:23.3, carb_g:203.3, sugars_g:46.6, fibre_g:24.3, protein_g:84.2, salt_g:10.59, sodium_g:4.17 },
            "medium__italian__standard":  { kcal:1788, fat_g:71.5, sat_g:34.5, carb_g:218.7, sugars_g:50.3, fibre_g:13.9, protein_g:74.5, salt_g:11.0, sodium_g:4.33 }
          }
        },
        {
          id: "uhh_pepperoni", label: "The Ultimate Hot Honey Pepperoni",
          variants: {
            "personal__classic__standard": { kcal:393, fat_g:17.8, sat_g:8.3, carb_g:39.3, sugars_g:10.0, fibre_g:3.2, protein_g:18.3, salt_g:2.59, sodium_g:1.02 },
            "large__classic__standard":   { kcal:2184, fat_g:75.0, sat_g:30.7, carb_g:248.5, sugars_g:79.5, fibre_g:25.0, protein_g:88.2, salt_g:14.8, sodium_g:5.83 },
            "medium__classic__standard":  { kcal:1623, fat_g:51.1, sat_g:20.9, carb_g:200.7, sugars_g:55.1, fibre_g:24.5, protein_g:76.5, salt_g:10.98, sodium_g:4.32 },
            "medium__italian__standard":  { kcal:1919, fat_g:75.1, sat_g:35.8, carb_g:220.8, sugars_g:61.6, fibre_g:14.2, protein_g:78.4, salt_g:12.53, sodium_g:4.93 }
          }
        },
        {
          id: "uhh_nduja", label: "The Ultimate Hot Honey Nduja",
          variants: {
            "personal__classic__standard": { kcal:441, fat_g:22.0, sat_g:9.9, carb_g:42.9, sugars_g:10.4, fibre_g:3.2, protein_g:18.5, salt_g:3.12, sodium_g:1.23 },
            "large__classic__standard":   { kcal:2376, fat_g:94.9, sat_g:39.6, carb_g:253.1, sugars_g:82.1, fibre_g:25.1, protein_g:88.7, salt_g:17.78, sodium_g:7.0 },
            "medium__classic__standard":  { kcal:1756, fat_g:67.2, sat_g:28.1, carb_g:204.4, sugars_g:57.5, fibre_g:24.5, protein_g:77.2, salt_g:12.97, sodium_g:5.11 },
            "medium__italian__standard":  { kcal:1564, fat_g:56.5, sat_g:29.2, carb_g:209.1, sugars_g:59.0, fibre_g:14.1, protein_g:63.5, salt_g:10.66, sodium_g:4.20 }
          }
        },
        {
          id: "tuna_supreme", label: "Tuna Supreme",
          variants: {
            "personal__classic__standard": { kcal:323, fat_g:10.8, sat_g:5.1, carb_g:37.2, sugars_g:5.0, fibre_g:3.1, protein_g:18.0, salt_g:1.77, sodium_g:0.70 },
            "medium__classic__standard":  { kcal:1402, fat_g:30.1, sat_g:12.4, carb_g:193.3, sugars_g:37.9, fibre_g:24.8, protein_g:84.5, salt_g:8.23, sodium_g:3.24 },
            "medium__italian__standard":  { kcal:1549, fat_g:48.9, sat_g:25.0, carb_g:210.2, sugars_g:42.4, fibre_g:14.3, protein_g:66.0, salt_g:8.66, sodium_g:3.41 }
          }
        },
        {
          id: "veg_a_roma", label: "Veg-a-Roma",
          variants: {
            "personal__classic__standard": { kcal:343, fat_g:12.1, sat_g:5.9, carb_g:43.0, sugars_g:6.9, fibre_g:4.3, protein_g:16.0, salt_g:1.81, sodium_g:0.71 },
            "medium__classic__standard":  { kcal:1426, fat_g:31.3, sat_g:13.0, carb_g:202.8, sugars_g:39.5, fibre_g:28.2, protein_g:74.9, salt_g:8.03, sodium_g:3.16 },
            "medium__italian__standard":  { kcal:1474, fat_g:48.4, sat_g:24.9, carb_g:218.4, sugars_g:44.2, fibre_g:16.8, protein_g:59.4, salt_g:8.47, sodium_g:3.33 }
          }
        },
        {
          id: "vegi_classic", label: "Vegi Classic",
          variants: {
            "personal__classic__standard": { kcal:289, fat_g:9.4, sat_g:5.0, carb_g:36.8, sugars_g:5.5, fibre_g:3.4, protein_g:13.3, salt_g:1.57, sodium_g:0.62 },
            "medium__classic__standard":  { kcal:1309, fat_g:28.0, sat_g:11.8, carb_g:188.3, sugars_g:36.3, fibre_g:24.6, protein_g:71.3, salt_g:7.6, sodium_g:2.99 },
            "medium__italian__standard":  { kcal:1478, fat_g:47.9, sat_g:24.5, carb_g:207.6, sugars_g:41.2, fibre_g:14.3, protein_g:57.7, salt_g:8.36, sodium_g:3.29 }
          }
        },
        {
          id: "vegi_sizzler", label: "Vegi Sizzler",
          variants: {
            "personal__classic__standard": { kcal:289, fat_g:9.4, sat_g:5.0, carb_g:37.0, sugars_g:5.4, fibre_g:3.4, protein_g:12.7, salt_g:1.49, sodium_g:0.59 },
            "medium__classic__standard":  { kcal:1315, fat_g:28.2, sat_g:11.8, carb_g:190.8, sugars_g:37.6, fibre_g:24.8, protein_g:70.7, salt_g:7.74, sodium_g:3.05 },
            "medium__italian__standard":  { kcal:1494, fat_g:48.2, sat_g:24.6, carb_g:210.5, sugars_g:43.2, fibre_g:14.4, protein_g:57.6, salt_g:8.56, sodium_g:3.37 }
          }
        },
        {
          id: "vegi_supreme", label: "Vegi Supreme",
          variants: {
            "large__classic__standard":   { kcal:1821, fat_g:55.1, sat_g:22.1, carb_g:246.6, sugars_g:54.3, fibre_g:25.9, protein_g:86.2, salt_g:10.47, sodium_g:4.12 },
            "medium__classic__standard":  { kcal:1332, fat_g:30.8, sat_g:12.6, carb_g:186.4, sugars_g:38.1, fibre_g:24.8, protein_g:74.5, salt_g:7.96, sodium_g:3.13 },
            "medium__italian__standard":  { kcal:1689, fat_g:62.2, sat_g:29.8, carb_g:211.8, sugars_g:44.2, fibre_g:14.4, protein_g:67.2, salt_g:10.1, sodium_g:3.97 }
          }
        },
        {
          id: "vegi_volcano", label: "Vegi Volcano",
          variants: {
            "personal__classic__standard": { kcal:378, fat_g:15.2, sat_g:7.0, carb_g:44.7, sugars_g:8.3, fibre_g:4.5, protein_g:17.7, salt_g:2.12, sodium_g:0.83 },
            "medium__classic__standard":  { kcal:1535, fat_g:47.5, sat_g:19.4, carb_g:208.8, sugars_g:44.7, fibre_g:28.3, protein_g:76.2, salt_g:9.57, sodium_g:3.77 },
            "medium__italian__standard":  { kcal:832, fat_g:26.4, sat_g:11.2, carb_g:114.6, sugars_g:24.3, fibre_g:14.0, protein_g:38.3, salt_g:5.03, sodium_g:1.98 }
          }
        }
      ]
    },

    // =========================================================
    // GLUTEN FREE
    // =========================================================
    {
      id:     "gluten_free",
      label:  "Gluten Free",
      icon:   "🌾",
      note:   "Small size only",
      sizes:  ["small"],
      crusts: [{ id: "gf_base", label: "Gluten Free Base" }],
      cheeses: [{ id: "standard", label: "Standard Mozzarella" }],
      pizzas: [
        {
          id: "gf_cheese_tomato", label: "GF Cheese & Tomato",
          variants: { "small__gf_base__standard": { kcal:708, fat_g:30.0, sat_g:15.9, carb_g:81.8, sugars_g:7.8, fibre_g:8.6, protein_g:27.2, salt_g:5.08, sodium_g:2.0 } }
        },
        {
          id: "gf_vegi_supreme", label: "GF Vegi Supreme",
          variants: { "small__gf_base__standard": { kcal:509, fat_g:14.5, sat_g:6.0, carb_g:81.6, sugars_g:6.9, fibre_g:8.3, protein_g:13.1, salt_g:2.88, sodium_g:1.13 } }
        },
        {
          id: "gf_pepperoni_passion", label: "GF Pepperoni Passion",
          variants: { "small__gf_base__standard": { kcal:818, fat_g:40.3, sat_g:20.0, carb_g:82.1, sugars_g:7.9, fibre_g:8.6, protein_g:31.8, salt_g:6.1, sodium_g:2.4 } }
        },
        {
          id: "gf_texas_bbq", label: "GF Texas BBQ",
          variants: { "small__gf_base__standard": { kcal:602, fat_g:19.4, sat_g:8.1, carb_g:92.6, sugars_g:15.9, fibre_g:7.2, protein_g:14.6, salt_g:3.81, sodium_g:1.5 } }
        },
        {
          id: "gf_new_yorker", label: "GF New Yorker",
          variants: { "small__gf_base__standard": { kcal:568, fat_g:20.9, sat_g:8.7, carb_g:79.1, sugars_g:5.0, fibre_g:7.6, protein_g:15.8, salt_g:3.46, sodium_g:1.36 } }
        }
      ]
    },

    // =========================================================
    // PLANT-BASED
    // =========================================================
    {
      id:     "plant_based",
      label:  "Plant-Based",
      icon:   "🌱",
      note:   "Made with plant-based dough and plant-based cheese alternative",
      sizes:  ["medium","large"],
      crusts: [
        { id: "classic", label: "Classic Crust" },
        { id: "italian", label: "Italian Style" },
        { id: "thin",    label: "Thin & Crispy" }
      ],
      cheeses: [{ id: "plant_based", label: "Plant-Based Cheese" }],
      pizzas: [
        {
          id: "pb_margheri_tastic", label: "Plant-Based Margheri-tastic",
          variants: {
            "medium__classic__plant_based": { kcal:1365, fat_g:42.4, sat_g:28.9, carb_g:204.9, sugars_g:24.6, fibre_g:14.0, protein_g:41.0, salt_g:5.14, sodium_g:2.02 },
            "medium__thin__plant_based":    { kcal:833, fat_g:34.8, sat_g:26.6, carb_g:114.4, sugars_g:14.3, fibre_g:9.8, protein_g:15.7, salt_g:3.44, sodium_g:1.35 }
          }
        },
        {
          id: "pb_vegi_supreme", label: "Plant-Based Vegi Supreme",
          variants: {
            "medium__classic__plant_based": { kcal:1373, fat_g:40.9, sat_g:26.5, carb_g:207.9, sugars_g:33.4, fibre_g:14.4, protein_g:43.2, salt_g:5.05, sodium_g:1.99 },
            "large__italian__plant_based":  { kcal:1486, fat_g:50.7, sat_g:36.1, carb_g:213.1, sugars_g:28.5, fibre_g:15.3, protein_g:44.4, salt_g:6.25, sodium_g:2.46 },
            "medium__thin__plant_based":    { kcal:854, fat_g:35.3, sat_g:26.6, carb_g:118.0, sugars_g:18.1, fibre_g:11.0, protein_g:16.3, salt_g:3.14, sodium_g:1.23 }
          }
        }
      ]
    },

    // =========================================================
    // CHEEKY LITTLE
    // =========================================================
    {
      id:     "cheeky_little",
      label:  "Cheeky Little",
      icon:   "😋",
      note:   "Personal size only",
      sizes:  ["personal"],
      crusts: [
        { id: "classic", label: "Classic Crust" },
        { id: "thin",    label: "Thin & Crispy" }
      ],
      cheeses: [{ id: "standard", label: "Standard Mozzarella" }],
      pizzas: [
        {
          id: "cl_bbq_chicken_bacon", label: "BBQ Chicken & Bacon",
          variants: {
            "personal__classic__standard": { kcal:594, fat_g:15.5, sat_g:6.3, carb_g:87.4, sugars_g:18.4, fibre_g:3.8, protein_g:28.0, salt_g:2.89, sodium_g:1.14 },
            "personal__thin__standard":   { kcal:394, fat_g:10.8, sat_g:4.4, carb_g:54.0, sugars_g:16.1, fibre_g:0.7, protein_g:20.3, salt_g:3.72, sodium_g:1.46 }
          }
        },
        {
          id: "cl_cheese_tomato", label: "Cheese & Tomato",
          variants: {
            "personal__classic__standard": { kcal:535, fat_g:15.0, sat_g:7.0, carb_g:72.8, sugars_g:8.4, fibre_g:4.3, protein_g:25.2, salt_g:2.35, sodium_g:0.92 },
            "personal__thin__standard":   { kcal:345, fat_g:10.4, sat_g:4.6, carb_g:41.6, sugars_g:4.8, fibre_g:3.4, protein_g:21.3, salt_g:1.54, sodium_g:0.6 }
          }
        },
        {
          id: "cl_pepperoni", label: "Pepperoni",
          variants: {
            "personal__classic__standard": { kcal:571, fat_g:19.0, sat_g:7.8, carb_g:72.4, sugars_g:8.2, fibre_g:3.9, protein_g:25.7, salt_g:2.82, sodium_g:1.11 },
            "personal__thin__standard":   { kcal:398, fat_g:16.0, sat_g:6.4, carb_g:39.9, sugars_g:5.6, fibre_g:3.5, protein_g:23.5, salt_g:2.11, sodium_g:0.83 }
          }
        },
        {
          id: "cl_sausage_bacon", label: "Sausage & Bacon",
          variants: {
            "personal__classic__standard": { kcal:541, fat_g:18.2, sat_g:7.7, carb_g:57.6, sugars_g:8.1, fibre_g:4.6, protein_g:29.3, salt_g:2.8, sodium_g:1.1 },
            "personal__thin__standard":   { kcal:356, fat_g:13.9, sat_g:6.3, carb_g:38.3, sugars_g:4.6, fibre_g:0.9, protein_g:19.4, salt_g:2.09, sodium_g:0.82 }
          }
        },
        {
          id: "cl_vegi_classic", label: "Vegi Classic",
          variants: {
            "personal__classic__standard": { kcal:495, fat_g:11.9, sat_g:5.0, carb_g:72.3, sugars_g:9.2, fibre_g:5.0, protein_g:22.6, salt_g:2.02, sodium_g:0.79 },
            "personal__thin__standard":   { kcal:298, fat_g:7.4, sat_g:3.3, carb_g:39.8, sugars_g:6.5, fibre_g:3.7, protein_g:17.9, salt_g:2.24, sodium_g:0.88 }
          }
        }
      ]
    },

    // =========================================================
    // DELIGHT
    // =========================================================
    {
      id:     "delight",
      label:  "Delight",
      icon:   "✨",
      note:   "Lower calorie option",
      sizes:  ["medium"],
      crusts: [{ id: "classic", label: "Classic Crust" }],
      cheeses: [
        { id: "reduced_fat", label: "Reduced Fat Mozzarella" },
        { id: "standard",    label: "Standard Mozzarella" }
      ],
      pizzas: [
        {
          id: "delight_chicken", label: "Delight Chicken",
          variants: {
            "medium__classic__reduced_fat": { kcal:941, fat_g:22.0, sat_g:10.8, carb_g:125.9, sugars_g:16.4, fibre_g:20.6, protein_g:59.9, salt_g:5.48, sodium_g:2.15 }
          }
        },
        {
          id: "delight_vegi", label: "Delight Vegi",
          variants: {
            "medium__classic__reduced_fat": { kcal:923, fat_g:21.6, sat_g:11.0, carb_g:131.9, sugars_g:20.6, fibre_g:19.7, protein_g:50.2, salt_g:5.42, sodium_g:2.13 },
            "medium__classic__standard":    { kcal:1909, fat_g:87.1, sat_g:40.3, carb_g:204.6, sugars_g:39.3, fibre_g:12.9, protein_g:77.3, salt_g:8.45, sodium_g:3.32 }
          }
        }
      ]
    }

  ]
};
