// Client-side fallback seed recipes and ingredient matching engine for RasoiAI

export const SEED_RECIPES = [
  {
    "id": "rec-001",
    "name": "South Indian Sambar",
    "region": "Tamil Nadu",
    "category": "Curry",
    "cook_time_mins": 35,
    "servings": 4,
    "description": "A comforting, tangy lentil-based vegetable stew cooked with tamarind broth and freshly ground sambar powder.",
    "ingredients": [
      {"name": "toor dal", "quantity": 1, "unit": "cup", "is_optional": false},
      {"name": "tamarind", "quantity": 1, "unit": "lemon-sized ball", "is_optional": false},
      {"name": "drumstick", "quantity": 1, "unit": "piece", "is_optional": true},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "sambar powder", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": false},
      {"name": "hing", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": true}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook 1 cup toor dal with 3 cups water and 1/2 tsp turmeric for 4 whistles.", "timer_seconds": 600, "tips": "Mash cooked dal well."},
      {"step_number": 2, "instruction": "Soak tamarind in 1 cup warm water for 10 minutes and extract tamarind juice.", "timer_seconds": 300, "tips": "Discard pulp."},
      {"step_number": 3, "instruction": "In a pot, combine sliced onion, chopped tomatoes, drumsticks, tamarind juice, sambar powder, and salt. Boil until vegetables are tender.", "timer_seconds": 600, "tips": "Check with a fork."},
      {"step_number": 4, "instruction": "Add mashed cooked toor dal to boiling vegetable mix and simmer on low heat for 5 minutes.", "timer_seconds": 300, "tips": "Adjust water if thick."},
      {"step_number": 5, "instruction": "Heat 2 tbsp oil in a tadka pan. Add mustard seeds, curry leaves, and hing. Allow mustard seeds to crackle.", "timer_seconds": 60, "tips": "Medium flame."},
      {"step_number": 6, "instruction": "Pour tempering over sambar, garnish with fresh coriander leaves, and serve hot with rice or idli.", "timer_seconds": null, "tips": "Cover with lid for 2 mins."}
    ]
  },
  {
    "id": "rec-002",
    "name": "Pepper Rasam",
    "region": "Tamil Nadu",
    "category": "Soup",
    "cook_time_mins": 20,
    "servings": 3,
    "description": "Spicy, aromatic pepper-cumin broth infused with tomatoes and garlic.",
    "ingredients": [
      {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "tamarind", "quantity": 0.5, "unit": "small ball", "is_optional": false},
      {"name": "black pepper", "quantity": 1.5, "unit": "tsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "garlic", "quantity": 5, "unit": "cloves", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "mustard seeds", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": false},
      {"name": "ghee", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Coarsely crush black pepper, cumin seeds, and garlic cloves together.", "timer_seconds": null, "tips": "Coarse texture is best."},
      {"step_number": 2, "instruction": "Extract tamarind juice in 1.5 cups water. Mash tomatoes directly into tamarind juice with salt and turmeric.", "timer_seconds": 180, "tips": "Mash thoroughly."},
      {"step_number": 3, "instruction": "Heat 1 tbsp ghee in a vessel. Add mustard seeds, curry leaves, and crushed pepper-cumin mixture. Sauté for 30 seconds.", "timer_seconds": 30, "tips": "Low flame."},
      {"step_number": 4, "instruction": "Pour tomato-tamarind mixture into pan. Bring it to a gentle froth over medium heat.", "timer_seconds": 300, "tips": "Do NOT boil vigorously."},
      {"step_number": 5, "instruction": "Garnish with fresh coriander leaves, cover immediately, and serve warm.", "timer_seconds": null, "tips": "Serve with hot rice."}
    ]
  },
  {
    "id": "rec-003",
    "name": "Paneer Butter Masala",
    "region": "North Indian",
    "category": "Curry",
    "cook_time_mins": 30,
    "servings": 4,
    "description": "Rich, creamy cottage cheese curry cooked in tomato-cashew gravy with aromatic spices.",
    "ingredients": [
      {"name": "paneer", "quantity": 250, "unit": "grams", "is_optional": false},
      {"name": "butter", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "large", "is_optional": false},
      {"name": "tomato", "quantity": 3, "unit": "large", "is_optional": false},
      {"name": "cashews", "quantity": 12, "unit": "pieces", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "kashmiri red chili powder", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "fresh cream", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "kasuri methi", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Roughly chop onions and tomatoes. Sauté onions in 1 tbsp butter for 4 minutes, then add tomatoes and cashews. Cook until soft.", "timer_seconds": 360, "tips": "Cashews add rich thickness."},
      {"step_number": 2, "instruction": "Allow mixture to cool, then blend into a smooth silk puree using 1/4 cup water.", "timer_seconds": 180, "tips": "Strain through sieve."},
      {"step_number": 3, "instruction": "Melt remaining butter in a pan. Add ginger garlic paste, red chili powder, and cook for 30 seconds.", "timer_seconds": 30, "tips": "Low flame."},
      {"step_number": 4, "instruction": "Pour blended puree, add salt and garam masala, simmer on medium heat for 6 minutes until butter separates.", "timer_seconds": 360, "tips": "Stir occasionally."},
      {"step_number": 5, "instruction": "Add paneer cubes, crushed kasuri methi, and fresh cream. Simmer gently for 3 minutes.", "timer_seconds": 180, "tips": "Do not overcook paneer."}
    ]
  },
  {
    "id": "rec-004",
    "name": "Dal Tadka",
    "region": "North Indian",
    "category": "Dal",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Yellow lentils cooked smooth and tempered with ghee, cumin seeds, garlic, and dried red chilies.",
    "ingredients": [
      {"name": "toor dal", "quantity": 1, "unit": "cup", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "garlic", "quantity": 6, "unit": "cloves", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook toor dal with 3 cups water, salt, and turmeric for 4 whistles.", "timer_seconds": 600, "tips": "Whisk dal slightly."},
      {"step_number": 2, "instruction": "In a pan, heat 1 tbsp ghee. Add chopped onions, green chilies, and sauté until golden brown.", "timer_seconds": 300, "tips": "Brown onions add deep flavor."},
      {"step_number": 3, "instruction": "Add chopped tomatoes, red chili powder, cook until soft. Mix in boiled dal and simmer for 4 minutes.", "timer_seconds": 240, "tips": "Adjust salt."},
      {"step_number": 4, "instruction": "Prepare Tadka: heat remaining ghee, crackle cumin seeds, garlic slices, dried red chili. Pour hot over dal.", "timer_seconds": 60, "tips": "Serve piping hot."}
    ]
  },
  {
    "id": "rec-005",
    "name": "Classic Potato Poriyal (Aloo Fry)",
    "region": "Tamil Nadu",
    "category": "Side Dish",
    "cook_time_mins": 20,
    "servings": 3,
    "description": "Crispy South Indian styled pan-roasted potatoes tempered with mustard, urad dal, and curry leaves.",
    "ingredients": [
      {"name": "potato", "quantity": 3, "unit": "large", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "urad dal", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "sambar powder", "quantity": 0.5, "unit": "tsp", "is_optional": true},
      {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Peel potatoes and cut into small 1/2-inch cubes. Parboil in salted water for 5 minutes.", "timer_seconds": 300, "tips": "Drain water thoroughly."},
      {"step_number": 2, "instruction": "Heat oil in a wide pan. Add mustard seeds, urad dal, and curry leaves. Let dal turn golden.", "timer_seconds": 60, "tips": "Urad dal gives crunch."},
      {"step_number": 3, "instruction": "Add parboiled potatoes, turmeric powder, chili powder, sambar powder, and salt. Toss well.", "timer_seconds": 120, "tips": "Coat all potato pieces."},
      {"step_number": 4, "instruction": "Roast uncovered on low-medium flame for 10-12 minutes, stirring every 2 minutes until golden crispy.", "timer_seconds": 600, "tips": "Do not cover with lid."}
    ]
  },
  {
    "id": "rec-006",
    "name": "Crispy Masala Dosa",
    "region": "South Indian",
    "category": "Breakfast",
    "cook_time_mins": 25,
    "servings": 3,
    "description": "Golden crispy fermented rice-lentil crepes stuffed with spiced mashed potato filling.",
    "ingredients": [
      {"name": "dosa batter", "quantity": 3, "unit": "cups", "is_optional": false},
      {"name": "potato", "quantity": 3, "unit": "medium", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "sliced", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "chopped", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": false},
      {"name": "oil", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Boil potatoes until soft, peel, and crush coarsely.", "timer_seconds": 480, "tips": "Keep chunky."},
      {"step_number": 2, "instruction": "Heat 1 tbsp oil, temper mustard seeds and curry leaves. Sauté sliced onions and green chili till translucent.", "timer_seconds": 180, "tips": "Add turmeric."},
      {"step_number": 3, "instruction": "Add crushed potatoes, 3 tbsp water, salt, stir well and cook for 3 minutes for potato masala.", "timer_seconds": 180, "tips": "Make spreadable."},
      {"step_number": 4, "instruction": "Heat tawa pan, pour ladle of dosa batter, spread thin in spiral. Drizzle oil around edges.", "timer_seconds": 120, "tips": "Cook till golden."},
      {"step_number": 5, "instruction": "Place potato masala in center, fold dosa into half, and serve hot with chutney and sambar.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-007",
    "name": "Chole Masala (Amritsari Chickpeas)",
    "region": "Punjabi",
    "category": "Curry",
    "cook_time_mins": 40,
    "servings": 4,
    "description": "Tangy and dark spiced chickpea curry infused with tea bag decoction and aromatic chole spices.",
    "ingredients": [
      {"name": "chickpeas", "quantity": 1.5, "unit": "cups (soaked)", "is_optional": false},
      {"name": "tea bag", "quantity": 1, "unit": "piece", "is_optional": false},
      {"name": "onion", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "chole masala powder", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "amchur powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook soaked chickpeas with tea bag, salt, and 3.5 cups water for 6 whistles till very tender.", "timer_seconds": 900, "tips": "Tea bag gives dark color."},
      {"step_number": 2, "instruction": "Heat oil in pan, add cumin seeds, chopped onions, and cook until deep golden.", "timer_seconds": 360, "tips": "Deep brown onions give authentic flavor."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, pureed tomatoes, chole masala, amchur powder, salt. Cook till oil separates.", "timer_seconds": 360, "tips": "Cook masala thoroughly."},
      {"step_number": 4, "instruction": "Add cooked chickpeas (discard tea bag). Mash a few chickpeas to thicken gravy, simmer for 10 minutes.", "timer_seconds": 600, "tips": "Serve hot with bhature."}
    ]
  },
  {
    "id": "rec-008",
    "name": "Vegetable Biryani",
    "region": "Hyderabadi",
    "category": "Rice",
    "cook_time_mins": 45,
    "servings": 4,
    "description": "Fragrant basmati rice layered with spiced vegetables, saffron milk, mint, and caramelized onions.",
    "ingredients": [
      {"name": "basmati rice", "quantity": 2, "unit": "cups", "is_optional": false},
      {"name": "mixed vegetables", "quantity": 2, "unit": "cups", "is_optional": false},
      {"name": "curd", "quantity": 0.5, "unit": "cup", "is_optional": false},
      {"name": "biryani masala", "quantity": 1.5, "unit": "tbsp", "is_optional": false},
      {"name": "onion", "quantity": 2, "unit": "large", "is_optional": false},
      {"name": "mint leaves", "quantity": 0.25, "unit": "cup", "is_optional": false},
      {"name": "ghee", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "saffron milk", "quantity": 3, "unit": "tbsp", "is_optional": true},
      {"name": "salt", "quantity": 1.5, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Boil basmati rice with whole spices until 70% cooked. Drain water and set aside.", "timer_seconds": 420, "tips": "Do not overcook rice."},
      {"step_number": 2, "instruction": "Thinly slice onions and fry in ghee/oil until crispy golden brown (birista).", "timer_seconds": 480, "tips": "Remove onto paper towel."},
      {"step_number": 3, "instruction": "Marinate veggies in curd, biryani masala, mint, and salt. Sauté in pan for 8 minutes.", "timer_seconds": 480, "tips": "Veggies slightly crunchy."},
      {"step_number": 4, "instruction": "Layer cooked veggies at bottom, top with rice, fried onions, mint, and saffron milk.", "timer_seconds": 180, "tips": "Seal pot with tight lid."},
      {"step_number": 5, "instruction": "Cook on low flame (dum) for 15 minutes. Rest 5 minutes before fluffing gently.", "timer_seconds": 900, "tips": "Fluff with fork."}
    ]
  },
  {
    "id": "rec-009",
    "name": "Egg Roast (Kerala Style)",
    "region": "Kerala",
    "category": "Curry",
    "cook_time_mins": 25,
    "servings": 3,
    "description": "Hard-boiled eggs coated in caramelized spicy onion-tomato gravy with black pepper and curry leaves.",
    "ingredients": [
      {"name": "egg", "quantity": 4, "unit": "large", "is_optional": false},
      {"name": "onion", "quantity": 3, "unit": "large (sliced)", "is_optional": false},
      {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "black pepper", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "coriander powder", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "coconut oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 12, "unit": "leaves", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Boil eggs for 10 minutes, peel shell, and make light vertical slits on each egg.", "timer_seconds": 600, "tips": "Slits absorb flavors."},
      {"step_number": 2, "instruction": "Heat coconut oil, add curry leaves, sliced onions, salt, and sauté until deep caramelized brown.", "timer_seconds": 600, "tips": "Caramelizing onions is crucial."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, chopped tomato, chili powder, coriander powder, pepper powder. Cook 4 minutes.", "timer_seconds": 240, "tips": "Add 2 tbsp water."},
      {"step_number": 4, "instruction": "Add boiled eggs to gravy, roast together for 3 minutes to coat thoroughly, and serve hot.", "timer_seconds": 180, "tips": "Great with appam."}
    ]
  },
  {
    "id": "rec-010",
    "name": "Aloo Gobi Fry",
    "region": "North Indian",
    "category": "Dry Curry",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Classic home-style dry stir fry made with potatoes, cauliflower florets, turmeric, and cumin.",
    "ingredients": [
      {"name": "cauliflower", "quantity": 1, "unit": "medium head", "is_optional": false},
      {"name": "potato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": true},
      {"name": "ginger", "quantity": 1, "unit": "inch finely chopped", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "coriander powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Cut cauliflower into medium florets and potatoes into small cubes.", "timer_seconds": null, "tips": "Blanch florets."},
      {"step_number": 2, "instruction": "Heat oil in pan, add cumin seeds, ginger, green chilies. Add potato cubes and cover cook for 5 mins.", "timer_seconds": 300, "tips": "Potatoes take longer."},
      {"step_number": 3, "instruction": "Add cauliflower florets, turmeric, coriander powder, salt. Mix gently without breaking florets.", "timer_seconds": 120, "tips": "Medium flame."},
      {"step_number": 4, "instruction": "Cover and cook on low heat for 10 minutes until veggies are tender. Sprinkle garam masala before serving.", "timer_seconds": 600, "tips": "Garnish with cilantro."}
    ]
  }
];

export function clientMatchIngredients(userIngredients, minMatchPercent = 25.0) {
  const normSet = new Set(userIngredients.map(i => i.trim().toLowerCase()));
  const results = [];

  for (const recipe of SEED_RECIPES) {
    const required = recipe.ingredients.filter(i => !i.is_optional);
    const optional = recipe.ingredients.filter(i => i.is_optional);

    let matchCount = 0;
    const missing = [];

    for (const req of required) {
      const name = req.name.toLowerCase();
      let matched = false;
      for (const u of normSet) {
        if (u === name || u.includes(name) || name.includes(u)) {
          matched = true;
          break;
        }
      }
      if (matched) matchCount++;
      else missing.push(req.name);
    }

    const matchPercent = Math.round((matchCount / (required.length || 1)) * 100);

    results.push({
      recipe,
      match_percent: matchPercent,
      matched_count: matchCount,
      total_required: required.length,
      missing_ingredients: missing,
      matched_optional: []
    });
  }

  results.sort((a, b) => b.match_percent - a.match_percent);
  return results.filter(r => r.match_percent >= minMatchPercent);
}
