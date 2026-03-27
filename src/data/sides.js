/**
 * Domino's UK Sides, Dips, Wraps, Chick 'N' Dip & Desserts Nutritional Data
 * Source: Official Domino's UK Nutrition PDF — Sides & Desserts (correct as of 9th February 2026)
 * Note: Nutrition excludes dips unless the item IS a dip. Values are per product as sold.
 */

export const SIDES = {

  categories: [

    // =========================================================
    // CHICKEN SIDES
    // =========================================================
    {
      id: "chicken", label: "Chicken", icon: "🍗",
      items: [
        {
          id: "chick_n_mix", label: "Chick 'n' Mix",
          icon: "🍗",
          variants: [
            { id: "chick_n_mix_4", label: "4 pieces", nutrition: { kcal:738, fat_g:41.4, sat_g:14.8, carb_g:31.5, sugars_g:4.7, fibre_g:5.3, protein_g:59.9, salt_g:4.8, sodium_g:1.90 } }
          ]
        },
        {
          id: "chicken_kickers", label: "Chicken Kickers",
          icon: "🍗",
          variants: [
            { id: "kickers_4",  label: "4 pieces",  nutrition: { kcal:232, fat_g:11.1, sat_g:3.8, carb_g:15.5, sugars_g:0.8, fibre_g:2.6, protein_g:17.5, salt_g:1.7, sodium_g:0.65 } },
            { id: "kickers_7",  label: "7 pieces",  nutrition: { kcal:406, fat_g:19.4, sat_g:6.7, carb_g:27.1, sugars_g:1.4, fibre_g:4.6, protein_g:30.6, salt_g:2.9, sodium_g:1.14 } },
            { id: "kickers_14", label: "14 pieces", nutrition: { kcal:812, fat_g:38.9, sat_g:13.3, carb_g:54.3, sugars_g:2.8, fibre_g:9.1, protein_g:61.3, salt_g:5.8, sodium_g:2.28 } }
          ]
        },
        {
          id: "kickers_combo", label: "Chicken Kickers Combo",
          icon: "🍗",
          variants: [
            { id: "kickers_combo_fries",  label: "Kickers + Fries",     nutrition: { kcal:922, fat_g:38.3, sat_g:8.2, carb_g:108.3, sugars_g:2.2, fibre_g:9.9, protein_g:36.4, salt_g:3.5, sodium_g:1.38 } },
            { id: "kickers_combo_wedges", label: "Kickers + Wedges UK",  nutrition: { kcal:643, fat_g:26.8, sat_g:7.6, carb_g:65.5, sugars_g:2.3, fibre_g:9.4, protein_g:34.9, salt_g:4.6, sodium_g:1.81 } }
          ]
        },
        {
          id: "chicken_strippers", label: "Chicken Strippers",
          icon: "🍗",
          variants: [
            { id: "strippers_4",  label: "4 pieces",  nutrition: { kcal:249, fat_g:13.2, sat_g:5.7, carb_g:11.9, sugars_g:2.0, fibre_g:2.6, protein_g:20.6, salt_g:1.3, sodium_g:0.52 } },
            { id: "strippers_7",  label: "7 pieces",  nutrition: { kcal:436, fat_g:23.1, sat_g:10.0, carb_g:20.8, sugars_g:3.5, fibre_g:4.5, protein_g:36.1, salt_g:2.3, sodium_g:0.90 } },
            { id: "strippers_14", label: "14 pieces", nutrition: { kcal:871, fat_g:46.3, sat_g:20.0, carb_g:41.6, sugars_g:7.1, fibre_g:9.0, protein_g:72.1, salt_g:4.6, sodium_g:1.80 } }
          ]
        },
        {
          id: "strippers_combo", label: "Chicken Strippers Combo",
          icon: "🍗",
          variants: [
            { id: "strippers_combo_fries",  label: "Strippers + Fries",    nutrition: { kcal:952, fat_g:42.0, sat_g:11.6, carb_g:102.0, sugars_g:4.3, fibre_g:9.9, protein_g:41.8, salt_g:2.9, sodium_g:1.14 } },
            { id: "strippers_combo_wedges", label: "Strippers + Wedges UK", nutrition: { kcal:671, fat_g:30.5, sat_g:10.9, carb_g:59.1, sugars_g:4.5, fibre_g:9.4, protein_g:40.4, salt_g:4.0, sodium_g:1.58 } }
          ]
        },
        {
          id: "chicken_wings", label: "Chicken Wings",
          icon: "🍗",
          variants: [
            { id: "wings_4",  label: "4 pieces",  nutrition: { kcal:258, fat_g:17.1, sat_g:5.3, carb_g:4.1, sugars_g:1.9, fibre_g:0.1, protein_g:21.8, salt_g:1.9, sodium_g:0.74 } },
            { id: "wings_7",  label: "7 pieces",  nutrition: { kcal:451, fat_g:30.0, sat_g:9.2, carb_g:7.2, sugars_g:3.3, fibre_g:0.2, protein_g:38.1, salt_g:3.3, sodium_g:1.29 } },
            { id: "wings_14", label: "14 pieces", nutrition: { kcal:902, fat_g:59.9, sat_g:18.4, carb_g:14.4, sugars_g:6.6, fibre_g:0.4, protein_g:76.1, salt_g:6.6, sodium_g:2.58 } }
          ]
        },
        {
          id: "wings_combo", label: "Chicken Wings Combo",
          icon: "🍗",
          variants: [
            { id: "wings_combo_fries",  label: "Wings + Fries",    nutrition: { kcal:970, fat_g:48.9, sat_g:10.8, carb_g:88.4, sugars_g:4.1, fibre_g:5.6, protein_g:43.8, salt_g:3.9, sodium_g:1.53 } },
            { id: "wings_combo_wedges", label: "Wings + Wedges UK", nutrition: { kcal:688, fat_g:37.3, sat_g:10.1, carb_g:45.6, sugars_g:4.2, fibre_g:5.1, protein_g:42.4, salt_g:5.0, sodium_g:1.97 } }
          ]
        },
        {
          id: "franks_hot_wings", label: "Frank's Red Hot Wings",
          icon: "🌶️",
          variants: [
            { id: "franks_4",  label: "4 pieces",  nutrition: { kcal:260, fat_g:17.2, sat_g:5.3, carb_g:4.5, sugars_g:1.9, fibre_g:0.3, protein_g:21.9, salt_g:2.9, sodium_g:1.14 } },
            { id: "franks_7",  label: "7 pieces",  nutrition: { kcal:455, fat_g:30.1, sat_g:9.2, carb_g:7.8, sugars_g:3.4, fibre_g:0.5, protein_g:38.2, salt_g:5.1, sodium_g:2.00 } },
            { id: "franks_14", label: "14 pieces", nutrition: { kcal:909, fat_g:60.1, sat_g:18.4, carb_g:15.3, sugars_g:6.7, fibre_g:0.9, protein_g:76.4, salt_g:9.3, sodium_g:3.64 } }
          ]
        },
        {
          id: "spicy_bbq_wings", label: "Spicy BBQ Wings",
          icon: "🌶️",
          variants: [
            { id: "spicy_bbq_4",  label: "4 pieces",  nutrition: { kcal:288, fat_g:17.2, sat_g:5.3, carb_g:11.2, sugars_g:7.9, fibre_g:0.3, protein_g:22.0, salt_g:2.2, sodium_g:0.88 } },
            { id: "spicy_bbq_7",  label: "7 pieces",  nutrition: { kcal:504, fat_g:30.1, sat_g:9.2, carb_g:19.6, sugars_g:13.8, fibre_g:0.6, protein_g:38.5, salt_g:3.9, sodium_g:1.53 } },
            { id: "spicy_bbq_14", label: "14 pieces", nutrition: { kcal:981, fat_g:60.1, sat_g:18.4, carb_g:33.0, sugars_g:22.4, fibre_g:1.0, protein_g:76.7, salt_g:7.5, sodium_g:2.94 } }
          ]
        }
      ]
    },

    // =========================================================
    // SIDES
    // =========================================================
    {
      id: "sides", label: "Sides", icon: "🍟",
      items: [
        {
          id: "coleslaw", label: "Coleslaw", icon: "🥗",
          variants: [
            { id: "coleslaw_reg", label: "2 portions", nutrition: { kcal:290, fat_g:25.8, sat_g:2.0, carb_g:12.6, sugars_g:9.6, fibre_g:1.2, protein_g:1.9, salt_g:1.6, sodium_g:0.63 } }
          ]
        },
        {
          id: "fries", label: "Fries", icon: "🍟",
          variants: [
            { id: "fries_reg", label: "2 portions", nutrition: { kcal:518, fat_g:18.9, sat_g:1.6, carb_g:81.2, sugars_g:0.8, fibre_g:5.4, protein_g:5.8, salt_g:0.6, sodium_g:0.24 } }
          ]
        },
        {
          id: "garlic_dippers", label: "Garlic Dippers", icon: "🧄",
          variants: [
            { id: "garlic_dippers_reg", label: "2 portions", nutrition: { kcal:475, fat_g:15.3, sat_g:3.9, carb_g:69.0, sugars_g:6.9, fibre_g:5.4, protein_g:15.3, salt_g:1.3, sodium_g:0.53 } }
          ]
        },
        {
          id: "garlic_pizza_bread", label: "Garlic Pizza Bread", icon: "🍕",
          variants: [
            { id: "gpb_reg", label: "2 portions", nutrition: { kcal:614, fat_g:18.2, sat_g:5.9, carb_g:88.7, sugars_g:7.7, fibre_g:4.7, protein_g:23.8, salt_g:1.9, sodium_g:0.75 } }
          ]
        },
        {
          id: "loaded_fries", label: "Loaded Fries", icon: "🍟",
          variants: [
            { id: "loaded_fries_cheese",       label: "Cheese",                nutrition: { kcal:561, fat_g:21.3, sat_g:6.5, carb_g:76.1, sugars_g:3.1, fibre_g:6.8, protein_g:13.3, salt_g:3.4, sodium_g:1.32 } },
            { id: "loaded_fries_cheeseburger", label: "Cheeseburger",           nutrition: { kcal:662, fat_g:31.4, sat_g:8.3, carb_g:76.2, sugars_g:7.2, fibre_g:5.2, protein_g:16.4, salt_g:2.5, sodium_g:0.97 } },
            { id: "loaded_fries_pepperoni",    label: "Pepperoni Passion",      nutrition: { kcal:737, fat_g:36.7, sat_g:12.9, carb_g:77.1, sugars_g:2.7, fibre_g:4.8, protein_g:22.0, salt_g:2.7, sodium_g:1.06 } },
            { id: "loaded_fries_spicy_saus",   label: "Spicy Sausage",          nutrition: { kcal:713, fat_g:33.4, sat_g:10.8, carb_g:83.2, sugars_g:2.1, fibre_g:4.2, protein_g:19.8, salt_g:3.4, sodium_g:1.34 } },
            { id: "loaded_fries_bacon_cheese", label: "Double Bacon & Cheese",  nutrition: { kcal:655, fat_g:28.9, sat_g:9.6, carb_g:80.1, sugars_g:3.0, fibre_g:5.3, protein_g:16.1, salt_g:2.0, sodium_g:0.80 } }
          ]
        },
        {
          id: "loaded_veg", label: "Loaded Veg", icon: "🥦",
          variants: [
            { id: "loaded_veg",         label: "Loaded Veg",             nutrition: { kcal:128, fat_g:4.7, sat_g:2.6, carb_g:11.2, sugars_g:6.9, fibre_g:3.3, protein_g:10.2, salt_g:0.8, sodium_g:0.33 } },
            { id: "loaded_veg_chicken", label: "Loaded Veg with Chicken", nutrition: { kcal:160, fat_g:5.1, sat_g:2.7, carb_g:11.8, sugars_g:6.3, fibre_g:2.0, protein_g:16.8, salt_g:1.1, sodium_g:0.41 } }
          ]
        },
        {
          id: "loaded_wedges", label: "Loaded Wedges", icon: "🥔",
          variants: [
            { id: "loaded_wedges_reg", label: "2 portions", nutrition: { kcal:543, fat_g:37.6, sat_g:12.3, carb_g:38.2, sugars_g:2.6, fibre_g:6.6, protein_g:12.8, salt_g:2.3, sodium_g:0.92 } }
          ]
        },
        {
          id: "mac_n_cheese", label: "Mac n Cheese", icon: "🧀",
          variants: [
            { id: "mac_n_cheese_reg", label: "2 portions", nutrition: { kcal:438, fat_g:19.7, sat_g:11.8, carb_g:41.7, sugars_g:4.6, fibre_g:2.8, protein_g:23.2, salt_g:2.6, sodium_g:1.01 } }
          ]
        },
        {
          id: "nachos", label: "Nachos", icon: "🫔",
          variants: [
            { id: "nachos_plain",     label: "No Jalapeños",   nutrition: { kcal:509, fat_g:28.8, sat_g:11.8, carb_g:43.0, sugars_g:2.9, fibre_g:3.7, protein_g:19.3, salt_g:2.3, sodium_g:0.90 } },
            { id: "nachos_jalapeno",  label: "With Jalapeños", nutrition: { kcal:511, fat_g:28.9, sat_g:11.8, carb_g:43.3, sugars_g:3.0, fibre_g:3.8, protein_g:19.5, salt_g:3.1, sodium_g:1.22 } }
          ]
        },
        {
          id: "potato_wedges", label: "Potato Wedges", icon: "🥔",
          variants: [
            { id: "wedges_uk",  label: "UK (2 portions)",  nutrition: { kcal:237, fat_g:7.3, sat_g:0.9, carb_g:38.4, sugars_g:0.9, fibre_g:4.9, protein_g:4.3, salt_g:1.7, sodium_g:0.68 } },
            { id: "wedges_irl", label: "IRL (2 portions)", nutrition: { kcal:263, fat_g:8.1, sat_g:1.0, carb_g:42.6, sugars_g:1.0, fibre_g:5.4, protein_g:4.8, salt_g:1.9, sodium_g:0.75 } }
          ]
        },
        {
          id: "ultimate_cheesy_garlic_bread", label: "The Ultimate Cheesy Garlic Bread", icon: "🧄",
          variants: [
            { id: "ucgb_reg", label: "2 portions", nutrition: { kcal:834, fat_g:32.9, sat_g:12.3, carb_g:103.8, sugars_g:10.6, fibre_g:4.5, protein_g:30.7, salt_g:2.9, sodium_g:1.16 } }
          ]
        },
        {
          id: "twisted_dough_balls", label: "Twisted Dough Balls", icon: "🥐",
          variants: [
            { id: "tdb_cheese",      label: "Cheese (2 pieces)",        nutrition: { kcal:664, fat_g:22.3, sat_g:7.4, carb_g:90.8, sugars_g:7.2, fibre_g:5.6, protein_g:25.1, salt_g:1.8, sodium_g:0.73 } },
            { id: "tdb_ham",         label: "Ham (2 pieces)",            nutrition: { kcal:683, fat_g:22.9, sat_g:7.6, carb_g:90.9, sugars_g:7.2, fibre_g:5.7, protein_g:28.5, salt_g:2.4, sodium_g:0.92 } },
            { id: "tdb_pepperoni",   label: "Pepperoni (2 pieces)",      nutrition: { kcal:748, fat_g:30.0, sat_g:10.4, carb_g:91.0, sugars_g:7.3, fibre_g:5.6, protein_g:28.5, salt_g:2.6, sodium_g:1.03 } },
            { id: "tdb_nduja_honey", label: "Nduja Hot Honey (2 pieces)", nutrition: { kcal:654, fat_g:24.4, sat_g:8.0, carb_g:84.4, sugars_g:18.1, fibre_g:3.6, protein_g:23.7, salt_g:2.5, sodium_g:1.06 } }
          ]
        }
      ]
    },

    // =========================================================
    // WRAPS
    // =========================================================
    {
      id: "wraps", label: "Wraps", icon: "🌯",
      items: [
        { id: "wrap_american_hot",    label: "American Hot",      icon: "🌯", variants: [{ id: "wrap_ah",  label: "1 wrap", nutrition: { kcal:358, fat_g:18.4, sat_g:8.4, carb_g:33.6, sugars_g:3.6, fibre_g:2.2, protein_g:14.5, salt_g:2.77, sodium_g:1.09 } }] },
        { id: "wrap_chicken_bacon",   label: "Chicken & Bacon",   icon: "🌯", variants: [{ id: "wrap_cb",  label: "1 wrap", nutrition: { kcal:405, fat_g:16.7, sat_g:5.1, carb_g:40.1, sugars_g:3.1, fibre_g:2.0, protein_g:23.6, salt_g:2.16, sodium_g:0.85 } }] },
        { id: "wrap_pepperoni",       label: "Pepperoni Passion", icon: "🌯", variants: [{ id: "wrap_pp",  label: "1 wrap", nutrition: { kcal:431, fat_g:23.2, sat_g:11.3, carb_g:36.6, sugars_g:3.4, fibre_g:1.7, protein_g:18.9, salt_g:2.79, sodium_g:1.1 } }] },
        { id: "wrap_tandoori",        label: "Tandoori Chicken",  icon: "🌯", variants: [{ id: "wrap_tc",  label: "1 wrap", nutrition: { kcal:306, fat_g:11.1, sat_g:5.8, carb_g:36.5, sugars_g:3.7, fibre_g:2.7, protein_g:15.2, salt_g:2.23, sodium_g:0.88 } }] },
        { id: "wrap_texas_bbq",       label: "Texas BBQ",         icon: "🌯", variants: [{ id: "wrap_tb",  label: "1 wrap", nutrition: { kcal:420, fat_g:16.8, sat_g:5.2, carb_g:43.7, sugars_g:7.0, fibre_g:1.9, protein_g:23.6, salt_g:2.22, sodium_g:0.88 } }] },
        { id: "wrap_vegi",            label: "Vegi",              icon: "🌯", variants: [{ id: "wrap_v",   label: "1 wrap", nutrition: { kcal:310, fat_g:10.3, sat_g:5.3, carb_g:42.7, sugars_g:4.7, fibre_g:0.7, protein_g:11.5, salt_g:1.52, sodium_g:0.6 } }] },
        { id: "wrap_mexicana",        label: "Mexicana",          icon: "🌯", variants: [{ id: "wrap_mx",  label: "1 wrap", nutrition: { kcal:320, fat_g:12.5, sat_g:6.3, carb_g:36.3, sugars_g:2.6, fibre_g:2.7, protein_g:15.5, salt_g:2.72, sodium_g:1.07 } }] },
        { id: "wrap_ham_cheese",      label: "Ham & Cheese",      icon: "🌯", variants: [{ id: "wrap_hc",  label: "1 wrap", nutrition: { kcal:397, fat_g:21.8, sat_g:11.1, carb_g:31.7, sugars_g:2.7, fibre_g:2.2, protein_g:18.4, salt_g:2.54, sodium_g:1.0 } }] },
        { id: "wrap_tuna_melt",       label: "Tuna Melt",         icon: "🌯", variants: [{ id: "wrap_tm",  label: "1 wrap", nutrition: { kcal:372, fat_g:18.0, sat_g:8.1, carb_g:32.3, sugars_g:2.7, fibre_g:2.0, protein_g:20.1, salt_g:1.66, sodium_g:0.65 } }] }
      ]
    },

    // =========================================================
    // CHICK 'N' DIP
    // =========================================================
    {
      id: "chick_n_dip", label: "Chick 'N' Dip", icon: "🍗",
      items: [
        {
          id: "cnd_tenders", label: "Tenders", icon: "🍗",
          variants: [
            { id: "tenders_3", label: "3 Tenders",  nutrition: { kcal:356, fat_g:14.3, sat_g:5.9, carb_g:27.9, sugars_g:0.6, fibre_g:1.7, protein_g:29.1, salt_g:1.34, sodium_g:0.53 } },
            { id: "tenders_5", label: "5 Tenders",  nutrition: { kcal:594, fat_g:23.8, sat_g:9.8, carb_g:46.5, sugars_g:1.0, fibre_g:2.8, protein_g:48.5, salt_g:2.23, sodium_g:0.88 } },
            { id: "tenders_8", label: "8 Tenders",  nutrition: { kcal:949, fat_g:38.1, sat_g:15.7, carb_g:74.4, sugars_g:1.6, fibre_g:4.5, protein_g:77.6, salt_g:3.6, sodium_g:1.4 } }
          ]
        },
        {
          id: "cnd_wings", label: "Wings", icon: "🍗",
          variants: [
            { id: "cnd_wings_8",  label: "8 Wings",  nutrition: { kcal:515, fat_g:34.3, sat_g:10.5, carb_g:8.3, sugars_g:3.8, fibre_g:0.3, protein_g:43.5, salt_g:3.75, sodium_g:1.48 } },
            { id: "cnd_wings_12", label: "12 Wings", nutrition: { kcal:773, fat_g:51.4, sat_g:15.8, carb_g:12.4, sugars_g:5.6, fibre_g:0.4, protein_g:65.3, salt_g:5.6, sodium_g:2.2 } },
            { id: "cnd_wings_20", label: "20 Wings", nutrition: { kcal:1288, fat_g:85.8, sat_g:26.3, carb_g:20.8, sugars_g:9.5, fibre_g:0.8, protein_g:108.8, salt_g:9.4, sodium_g:3.7 } }
          ]
        },
        {
          id: "cnd_boneless", label: "Boneless Bites", icon: "🍗",
          variants: [
            { id: "boneless_8",  label: "8 Bites",  nutrition: { kcal:373, fat_g:13.0, sat_g:2.2, carb_g:34.2, sugars_g:0.9, fibre_g:1.6, protein_g:28.7, salt_g:1.46, sodium_g:0.58 } },
            { id: "boneless_12", label: "12 Bites", nutrition: { kcal:560, fat_g:19.5, sat_g:3.3, carb_g:51.3, sugars_g:1.3, fibre_g:2.4, protein_g:43.1, salt_g:2.2, sodium_g:0.86 } },
            { id: "boneless_20", label: "20 Bites", nutrition: { kcal:933, fat_g:32.6, sat_g:5.6, carb_g:85.5, sugars_g:2.2, fibre_g:4.1, protein_g:71.8, salt_g:3.66, sodium_g:1.44 } }
          ]
        },
        {
          id: "cnd_combos_tenders", label: "Tenders Combos", icon: "🍗",
          variants: [
            { id: "5t_wedges", label: "5 Tenders + Wedges",         nutrition: { kcal:832, fat_g:31.1, sat_g:10.7, carb_g:84.9, sugars_g:1.9, fibre_g:7.6, protein_g:52.8, salt_g:3.95, sodium_g:1.55 } },
            { id: "5t_fries",  label: "5 Tenders + Fries",          nutrition: { kcal:1111, fat_g:42.7, sat_g:11.3, carb_g:127.7, sugars_g:1.8, fibre_g:8.1, protein_g:54.3, salt_g:2.84, sodium_g:1.12 } },
            { id: "5t_gpb",    label: "5 Tenders + Garlic Pizza Bread", nutrition: { kcal:1205, fat_g:41.9, sat_g:15.6, carb_g:135.2, sugars_g:8.7, fibre_g:7.5, protein_g:72.3, salt_g:4.02, sodium_g:1.58 } }
          ]
        },
        {
          id: "cnd_combos_wings", label: "Wings Combos", icon: "🍗",
          variants: [
            { id: "8w_wedges", label: "8 Wings + Wedges",            nutrition: { kcal:751, fat_g:41.6, sat_g:11.4, carb_g:46.6, sugars_g:4.7, fibre_g:5.1, protein_g:47.8, salt_g:5.47, sodium_g:2.15 } },
            { id: "8w_fries",  label: "8 Wings + Fries",             nutrition: { kcal:1032, fat_g:53.2, sat_g:12.1, carb_g:89.4, sugars_g:4.5, fibre_g:5.6, protein_g:49.3, salt_g:4.36, sodium_g:1.72 } },
            { id: "8w_gpb",    label: "8 Wings + Garlic Pizza Bread", nutrition: { kcal:1128, fat_g:52.4, sat_g:16.4, carb_g:97.0, sugars_g:11.5, fibre_g:5.0, protein_g:67.3, salt_g:5.55, sodium_g:2.18 } }
          ]
        },
        {
          id: "cnd_combos_boneless", label: "Boneless Bites Combos", icon: "🍗",
          variants: [
            { id: "8bb_wedges", label: "8 Bites + Wedges",            nutrition: { kcal:693, fat_g:21.8, sat_g:3.3, carb_g:80.1, sugars_g:2.0, fibre_g:7.5, protein_g:33.9, salt_g:3.53, sodium_g:1.39 } },
            { id: "8bb_fries",  label: "8 Bites + Fries",             nutrition: { kcal:1003, fat_g:35.0, sat_g:4.5, carb_g:125.9, sugars_g:1.6, fibre_g:17.4, protein_g:37.2, salt_g:1.87, sodium_g:0.74 } },
            { id: "8bb_gpb",    label: "8 Bites + Garlic Pizza Bread", nutrition: { kcal:987, fat_g:31.2, sat_g:8.1, carb_g:122.9, sugars_g:8.6, fibre_g:6.4, protein_g:52.5, salt_g:3.38, sodium_g:1.33 } }
          ]
        }
      ]
    },

    // =========================================================
    // DIPS
    // =========================================================
    {
      id: "dips", label: "Dips", icon: "🫙",
      items: [
        {
          id: "standard_dips", label: "Standard Dips (25g each)", icon: "🫙",
          variants: [
            { id: "dip_bbq",             label: "BBQ Dip",             nutrition: { kcal:47,  fat_g:0.1,  sat_g:0.0, carb_g:11.2, sugars_g:10.8, fibre_g:0.2, protein_g:0.3, salt_g:0.5, sodium_g:0.21 } },
            { id: "dip_franks_hot",      label: "Frank's Hot Dip",     nutrition: { kcal:5,   fat_g:0.2,  sat_g:0.0, carb_g:0.8,  sugars_g:0.2,  fibre_g:0.4, protein_g:0.2, salt_g:2.3, sodium_g:0.89 } },
            { id: "dip_garlic_herb",     label: "Garlic & Herb",       nutrition: { kcal:169, fat_g:18.5, sat_g:1.3, carb_g:0.5,  sugars_g:0.4,  fibre_g:0.0, protein_g:0.2, salt_g:0.2, sodium_g:0.08 } },
            { id: "dip_honey_mustard",   label: "Honey & Mustard",     nutrition: { kcal:109, fat_g:10.8, sat_g:0.8, carb_g:2.4,  sugars_g:2.2,  fibre_g:0.2, protein_g:0.4, salt_g:0.4, sodium_g:0.16 } },
            { id: "dip_sweet_chilli",    label: "Sweet Chilli",        nutrition: { kcal:54,  fat_g:0.2,  sat_g:0.0, carb_g:12.9, sugars_g:12.6, fibre_g:0.1, protein_g:0.1, salt_g:0.2, sodium_g:0.09 } },
            { id: "dip_tangy_salsa",     label: "Tangy Salsa",         nutrition: { kcal:42,  fat_g:1.4,  sat_g:0.1, carb_g:6.9,  sugars_g:6.2,  fibre_g:0.6, protein_g:0.5, salt_g:0.3, sodium_g:0.13 } },
            { id: "dip_vegan_garlic",    label: "Vegan Garlic & Herb", nutrition: { kcal:116, fat_g:12.3, sat_g:0.9, carb_g:1.1,  sugars_g:0.8,  fibre_g:0.0, protein_g:0.0, salt_g:0.3, sodium_g:0.10 } }
          ]
        },
        {
          id: "cnd_sauces", label: "Chick 'N' Dip Sauces (40g each)", icon: "🫙",
          variants: [
            { id: "sauce_garlic_aioli",  label: "Garlic Aioli",     nutrition: { kcal:207, fat_g:22.0, sat_g:2.1, carb_g:1.7,  sugars_g:0.6,  fibre_g:0.2, protein_g:0.5, salt_g:0.4, sodium_g:0.14 } },
            { id: "sauce_hot_honey",     label: "Hot Honey",        nutrition: { kcal:84,  fat_g:0.1,  sat_g:0.0, carb_g:20.4, sugars_g:15.6, fibre_g:0.3, protein_g:0.2, salt_g:0.2, sodium_g:0.09 } },
            { id: "sauce_buffalo",       label: "Buffalo Hot Sauce", nutrition: { kcal:26,  fat_g:1.0,  sat_g:0.1, carb_g:3.7,  sugars_g:2.2,  fibre_g:0.2, protein_g:0.2, salt_g:1.2, sodium_g:0.50 } },
            { id: "sauce_ghost_chilli",  label: "Ghost Chilli Glaze", nutrition: { kcal:29, fat_g:0.2,  sat_g:0.0, carb_g:6.4,  sugars_g:4.0,  fibre_g:0.2, protein_g:0.3, salt_g:0.5, sodium_g:0.21 } },
            { id: "sauce_katsu",         label: "Katsu Curry Sauce", nutrition: { kcal:70,  fat_g:5.1,  sat_g:1.3, carb_g:5.4,  sugars_g:3.1,  fibre_g:0.3, protein_g:0.4, salt_g:0.5, sodium_g:0.19 } },
            { id: "sauce_mexicana_mayo", label: "Mexicana Mayo",    nutrition: { kcal:252, fat_g:26.4, sat_g:2.0, carb_g:3.1,  sugars_g:1.4,  fibre_g:0.2, protein_g:0.5, salt_g:0.6, sodium_g:0.22 } },
            { id: "sauce_teriyaki",      label: "Teriyaki Sauce",   nutrition: { kcal:52,  fat_g:0.2,  sat_g:0.0, carb_g:12.3, sugars_g:9.4,  fibre_g:0.2, protein_g:0.5, salt_g:0.4, sodium_g:0.18 } },
            { id: "sauce_bbq",           label: "BBQ Sauce",        nutrition: { kcal:78,  fat_g:0.0,  sat_g:0.0, carb_g:18.8, sugars_g:16.0, fibre_g:0.5, protein_g:0.5, salt_g:0.8, sodium_g:0.30 } },
            { id: "sauce_garlic_herb",   label: "Garlic & Herb",    nutrition: { kcal:265, fat_g:28.4, sat_g:2.0, carb_g:2.5,  sugars_g:0.7,  fibre_g:0.2, protein_g:0.3, salt_g:0.3, sodium_g:0.12 } }
          ]
        }
      ]
    },

    // =========================================================
    // DESSERTS
    // =========================================================
    {
      id: "desserts", label: "Desserts", icon: "🍪",
      items: [
        {
          id: "cinni_dippers", label: "Cinni Dippers", icon: "🍩",
          variants: [
            { id: "cinni_4", label: "4 pieces", nutrition: { kcal:782, fat_g:34.7, sat_g:6.1, carb_g:98.8, sugars_g:16.2, fibre_g:4.8, protein_g:18.6, salt_g:0.37, sodium_g:0.59 } }
          ]
        },
        {
          id: "cookies", label: "Domino's Cookies", icon: "🍪",
          variants: [
            { id: "cookies_2", label: "2 cookies", nutrition: { kcal:347, fat_g:15.4, sat_g:7.8, carb_g:47.7, sugars_g:27.3, fibre_g:1.8, protein_g:4.6, salt_g:0.63, sodium_g:0.25 } },
            { id: "cookies_4", label: "4 cookies", nutrition: { kcal:694, fat_g:30.7, sat_g:15.5, carb_g:95.4, sugars_g:54.6, fibre_g:3.5, protein_g:9.1, salt_g:1.25, sodium_g:0.49 } }
          ]
        },
        {
          id: "lotta_chocca", label: "Lotta-Chocca Pizza", icon: "🍫",
          variants: [
            { id: "lotta_chocca_4", label: "4 pieces", nutrition: { kcal:828, fat_g:31.4, sat_g:12.1, carb_g:114.5, sugars_g:32.7, fibre_g:5.3, protein_g:21.8, salt_g:0.1, sodium_g:0.04 } }
          ]
        },
        {
          id: "choc_caramel_cookies", label: "Double Chocolate & Caramel Cookies", icon: "🍪",
          variants: [
            { id: "dcc_4", label: "4 cookies", nutrition: { kcal:668, fat_g:26.2, sat_g:12.6, carb_g:98.6, sugars_g:64.1, fibre_g:2.8, protein_g:9.4, salt_g:1.41, sodium_g:0.55 } }
          ]
        },
        {
          id: "twisted_cinnamon", label: "Twisted Dough Balls: Cinnamon", icon: "🥐",
          variants: [
            { id: "cinnamon_2", label: "2 pieces", nutrition: { kcal:767, fat_g:31.7, sat_g:12.2, carb_g:102.0, sugars_g:35.8, fibre_g:5.8, protein_g:18.3, salt_g:1.24, sodium_g:0.49 } }
          ]
        },
        {
          id: "mince_pie_cookies", label: "Mince Pie Cookies", icon: "🍪",
          variants: [
            { id: "mince_pie_4", label: "4 cookies", nutrition: { kcal:578, fat_g:18.7, sat_g:7.7, carb_g:95.9, sugars_g:61.2, fibre_g:2.8, protein_g:6.6, salt_g:1.2, sodium_g:0.48 } }
          ]
        },
        {
          id: "creme_egg_cookies", label: "Crème Egg Cookies", icon: "🍪",
          variants: [
            { id: "creme_egg_2", label: "2 cookies", nutrition: { kcal:758, fat_g:25.7, sat_g:13.4, carb_g:123.5, sugars_g:81.3, fibre_g:1.5, protein_g:7.3, salt_g:0.89, sodium_g:0.35 } }
          ]
        }
      ]
    }

  ]
};
