// Client-side fallback seed recipes and ingredient matching engine for RasoiAI (25 Recipes)

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
  },
  {
    "id": "rec-011",
    "name": "Vegetable Kurma",
    "region": "Tamil Nadu",
    "category": "Curry",
    "cook_time_mins": 30,
    "servings": 4,
    "description": "Mildly spiced coconut-cashew gravy stewed with mixed vegetables and herbs.",
    "ingredients": [
      {"name": "mixed vegetables", "quantity": 1.5, "unit": "cups", "is_optional": false},
      {"name": "coconut", "quantity": 0.5, "unit": "cup grated", "is_optional": false},
      {"name": "cashews", "quantity": 8, "unit": "pieces", "is_optional": false},
      {"name": "fennel seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Grind grated coconut, cashews, green chili, and fennel seeds into a smooth paste.", "timer_seconds": null, "tips": "Cashews add rich thickness."},
      {"step_number": 2, "instruction": "Boil mixed vegetables in 2 cups salted water until tender.", "timer_seconds": 600, "tips": "Keep colorful."},
      {"step_number": 3, "instruction": "Heat oil in a pan, sauté onions and ginger garlic paste until fragrant.", "timer_seconds": 180, "tips": "Sauté till raw smell leaves."},
      {"step_number": 4, "instruction": "Add chopped tomatoes, turmeric powder, and cook until tomatoes turn soft.", "timer_seconds": 240, "tips": "Mash with spoon."},
      {"step_number": 5, "instruction": "Add boiled vegetables and coconut paste. Simmer on low heat for 6 minutes.", "timer_seconds": 360, "tips": "Adjust water."},
      {"step_number": 6, "instruction": "Garnish with fresh coriander leaves and serve hot.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-012",
    "name": "Curd Rice (Thayir Sadam)",
    "region": "Tamil Nadu",
    "category": "Rice",
    "cook_time_mins": 15,
    "servings": 3,
    "description": "Comforting South Indian seasoned rice cooled with fresh yogurt, milk, and crunchy mustard tempering.",
    "ingredients": [
      {"name": "raw rice", "quantity": 1, "unit": "cup", "is_optional": false},
      {"name": "curd", "quantity": 1.5, "unit": "cups", "is_optional": false},
      {"name": "milk", "quantity": 0.25, "unit": "cup", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "chopped", "is_optional": false},
      {"name": "ginger", "quantity": 1, "unit": "tsp finely chopped", "is_optional": false},
      {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": false},
      {"name": "oil", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook 1 cup raw rice with 4 cups water for 5 whistles until soft and mushy.", "timer_seconds": 600, "tips": "Overcooked mushy rice is best."},
      {"step_number": 2, "instruction": "Mash hot cooked rice thoroughly using a ladle. Allow it to cool down to room temperature.", "timer_seconds": 300, "tips": "Never add curd to boiling rice."},
      {"step_number": 3, "instruction": "Mix cooled rice with fresh curd, milk, and salt until smooth.", "timer_seconds": null, "tips": "Milk prevents souring."},
      {"step_number": 4, "instruction": "Heat oil in small pan, temper mustard seeds, green chili, ginger, and curry leaves.", "timer_seconds": 60, "tips": "Sizzle seeds."},
      {"step_number": 5, "instruction": "Pour tempering over curd rice, garnish with pomegranate seeds, and serve.", "timer_seconds": null, "tips": "Serve chilled or room temp."}
    ]
  },
  {
    "id": "rec-013",
    "name": "Rasam Vada",
    "region": "Tamil Nadu",
    "category": "Snack",
    "cook_time_mins": 35,
    "servings": 4,
    "description": "Crispy fried lentil donuts soaked in piping hot, tangy pepper-tamarind rasam.",
    "ingredients": [
      {"name": "urad dal", "quantity": 1, "unit": "cup", "is_optional": false},
      {"name": "black pepper", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "ginger", "quantity": 1, "unit": "inch", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "cups for frying", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "tamarind", "quantity": 1, "unit": "small ball", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Soak urad dal in water for 2 hours, then grind into thick batter.", "timer_seconds": 7200, "tips": "Thick fluffy batter."},
      {"step_number": 2, "instruction": "Add crushed pepper, green chili, ginger, and salt to batter. Whisk for 3 minutes.", "timer_seconds": 180, "tips": "Trap air for light vadas."},
      {"step_number": 3, "instruction": "Shape batter into small vadas and deep fry in hot oil until golden brown.", "timer_seconds": 480, "tips": "Medium flame."},
      {"step_number": 4, "instruction": "Prepare pepper rasam by simmering tamarind extract, tomatoes, and cumin-pepper tempering.", "timer_seconds": 300, "tips": "Froth gently."},
      {"step_number": 5, "instruction": "Soak fried vadas in warm water for 2 minutes, squeeze gently, place in hot rasam.", "timer_seconds": 120, "tips": "Removes surface oil."},
      {"step_number": 6, "instruction": "Allow vadas to absorb rasam for 10 minutes before serving.", "timer_seconds": 600, "tips": "Serve warm."}
    ]
  },
  {
    "id": "rec-014",
    "name": "Coconut Chutney",
    "region": "South Indian",
    "category": "Chutney",
    "cook_time_mins": 10,
    "servings": 4,
    "description": "Classic South Indian coconut dip blended with green chili and tempered with mustard.",
    "ingredients": [
      {"name": "coconut", "quantity": 1, "unit": "cup grated", "is_optional": false},
      {"name": "roasted chana dal", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "ginger", "quantity": 0.5, "unit": "inch", "is_optional": false},
      {"name": "mustard seeds", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "urad dal", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": false},
      {"name": "oil", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 0.75, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Combine fresh grated coconut, roasted chana dal, green chili, ginger, salt, and 1/3 cup water.", "timer_seconds": null, "tips": "Blend smooth."},
      {"step_number": 2, "instruction": "Grind into a smooth chutney texture and transfer to bowl.", "timer_seconds": null, "tips": "Adjust water if thick."},
      {"step_number": 3, "instruction": "Heat oil in tadka pan, add mustard seeds, urad dal, and curry leaves.", "timer_seconds": 60, "tips": "Urad dal golden."},
      {"step_number": 4, "instruction": "Pour hot tempering over chutney and stir well.", "timer_seconds": null, "tips": "Serve with idli or dosa."}
    ]
  },
  {
    "id": "rec-015",
    "name": "Vatha Kuzhambu",
    "region": "Tamil Nadu",
    "category": "Curry",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Tangy and spicy Tamil Brahmin style tamarind gravy simmered with fried turkey berries.",
    "ingredients": [
      {"name": "tamarind", "quantity": 1, "unit": "large lemon size", "is_optional": false},
      {"name": "sundakai", "quantity": 2, "unit": "tbsp dried", "is_optional": false},
      {"name": "sesame oil", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "fenugreek seeds", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "sambar powder", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "jaggery", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "salt", "quantity": 1.25, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Extract thick tamarind juice using 2 cups warm water.", "timer_seconds": 300, "tips": "Strain seeds."},
      {"step_number": 2, "instruction": "Heat sesame oil in pan. Fry dried sundakai vathal until dark brown, then set aside.", "timer_seconds": 120, "tips": "Do not burn."},
      {"step_number": 3, "instruction": "In remaining oil, temper mustard seeds, fenugreek seeds, and curry leaves.", "timer_seconds": 60, "tips": "Fenugreek gives aroma."},
      {"step_number": 4, "instruction": "Pour tamarind juice, add sambar powder, chili powder, turmeric, salt. Boil for 10 minutes.", "timer_seconds": 600, "tips": "Gravy reduces."},
      {"step_number": 5, "instruction": "Add fried vathal and jaggery, simmer for another 4 minutes until thick.", "timer_seconds": 240, "tips": "Jaggery balances tanginess."}
    ]
  },
  {
    "id": "rec-016",
    "name": "Rajma Masala",
    "region": "Punjabi",
    "category": "Curry",
    "cook_time_mins": 40,
    "servings": 4,
    "description": "Rich Punjabi red kidney bean curry cooked in onion-tomato gravy.",
    "ingredients": [
      {"name": "kidney beans", "quantity": 1.5, "unit": "cups soaked", "is_optional": false},
      {"name": "onion", "quantity": 2, "unit": "medium chopped", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "large pureed", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "coriander powder", "quantity": 1.5, "unit": "tsp", "is_optional": false},
      {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "butter", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook soaked kidney beans (rajma) with 4 cups water and salt for 6-8 whistles.", "timer_seconds": 900, "tips": "Melt-in-mouth tender."},
      {"step_number": 2, "instruction": "Heat oil and butter in a pan. Add cumin seeds and chopped onions, sautéing till golden brown.", "timer_seconds": 360, "tips": "Brown onions give color."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, tomato puree, chili powder, coriander powder, cook till oil separates.", "timer_seconds": 420, "tips": "Cook thoroughly."},
      {"step_number": 4, "instruction": "Add boiled rajma with liquid. Mash a few beans with spoon to thicken gravy.", "timer_seconds": 180, "tips": "Mash beans for thickness."},
      {"step_number": 5, "instruction": "Simmer on low heat for 12 minutes so flavors meld together.", "timer_seconds": 720, "tips": "Stir occasionally."},
      {"step_number": 6, "instruction": "Sprinkle garam masala, garnish with fresh coriander, and serve hot.", "timer_seconds": null, "tips": "Serve with rice."}
    ]
  },
  {
    "id": "rec-017",
    "name": "Palak Paneer",
    "region": "North Indian",
    "category": "Curry",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Vibrant green spinach curry loaded with soft cottage cheese cubes.",
    "ingredients": [
      {"name": "spinach", "quantity": 1, "unit": "bunch", "is_optional": false},
      {"name": "paneer", "quantity": 200, "unit": "grams cubed", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "garlic", "quantity": 6, "unit": "cloves", "is_optional": false},
      {"name": "ginger", "quantity": 1, "unit": "inch", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "fresh cream", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "butter", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Blanch spinach leaves in boiling salted water for 2 minutes, then transfer to ice water.", "timer_seconds": 120, "tips": "Ice water keeps green color."},
      {"step_number": 2, "instruction": "Blend blanched spinach with green chili and ginger into smooth bright green puree.", "timer_seconds": null, "tips": "Do not over-blend."},
      {"step_number": 3, "instruction": "Heat 1 tbsp butter in pan. Add cumin seeds, chopped garlic, and onions, sautéing till golden.", "timer_seconds": 300, "tips": "Garlic adds aroma."},
      {"step_number": 4, "instruction": "Add pureed tomatoes and cook for 3 minutes, then pour in spinach puree and salt. Simmer for 5 minutes.", "timer_seconds": 300, "tips": "Low flame."},
      {"step_number": 5, "instruction": "Add paneer cubes and fresh cream. Gently stir and simmer for 2 minutes before serving.", "timer_seconds": 120, "tips": "Serve with naan."}
    ]
  },
  {
    "id": "rec-018",
    "name": "Butter Chicken (Murgh Makhani)",
    "region": "North Indian",
    "category": "Curry",
    "cook_time_mins": 35,
    "servings": 4,
    "description": "Tender grilled chicken pieces simmered in a buttery, mildly spiced cashew tomato gravy.",
    "ingredients": [
      {"name": "chicken", "quantity": 500, "unit": "grams boneless", "is_optional": false},
      {"name": "curd", "quantity": 0.5, "unit": "cup", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1.5, "unit": "tbsp", "is_optional": false},
      {"name": "kashmiri red chili powder", "quantity": 1.5, "unit": "tbsp", "is_optional": false},
      {"name": "butter", "quantity": 4, "unit": "tbsp", "is_optional": false},
      {"name": "tomato", "quantity": 4, "unit": "large pureed", "is_optional": false},
      {"name": "cashews", "quantity": 15, "unit": "pieces", "is_optional": false},
      {"name": "fresh cream", "quantity": 3, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Marinate chicken in curd, ginger garlic paste, chili powder, and salt for 30 minutes.", "timer_seconds": 1800, "tips": "Makes chicken tender."},
      {"step_number": 2, "instruction": "Pan-sear chicken in 1 tbsp oil until lightly charred. Set aside.", "timer_seconds": 480, "tips": "Charred spots add flavor."},
      {"step_number": 3, "instruction": "Cook pureed tomatoes, cashews, and ginger garlic paste with water for 10 minutes, then blend smooth.", "timer_seconds": 600, "tips": "Strain for smooth texture."},
      {"step_number": 4, "instruction": "Melt butter in pan, add blended tomato gravy, chili powder, garam masala, salt. Simmer for 6 minutes.", "timer_seconds": 360, "tips": "Cook till butter glistens."},
      {"step_number": 5, "instruction": "Add grilled chicken, fresh cream, and kasuri methi. Simmer gently for 5 minutes.", "timer_seconds": 300, "tips": "Stir gently."},
      {"step_number": 6, "instruction": "Top with dollop of butter and serve warm with naan.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-019",
    "name": "Jeera Rice",
    "region": "North Indian",
    "category": "Rice",
    "cook_time_mins": 20,
    "servings": 3,
    "description": "Aromatic basmati rice tempered with whole cumin seeds, ghee, and whole spices.",
    "ingredients": [
      {"name": "basmati rice", "quantity": 1.5, "unit": "cups", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1.5, "unit": "tsp", "is_optional": false},
      {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "bay leaf", "quantity": 1, "unit": "piece", "is_optional": false},
      {"name": "cloves", "quantity": 3, "unit": "pieces", "is_optional": false},
      {"name": "cinnamon", "quantity": 1, "unit": "stick", "is_optional": false},
      {"name": "green chili", "quantity": 1, "unit": "slit", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Rinse basmati rice and soak in water for 20 minutes. Drain thoroughly.", "timer_seconds": 1200, "tips": "Soaking makes long grains."},
      {"step_number": 2, "instruction": "Heat ghee in a pot. Add cumin seeds, bay leaf, cloves, cinnamon, green chili. Sauté till cumin crackles.", "timer_seconds": 60, "tips": "Cumin sizzles."},
      {"step_number": 3, "instruction": "Add drained rice and sauté gently in ghee for 2 minutes.", "timer_seconds": 120, "tips": "Coats grains."},
      {"step_number": 4, "instruction": "Pour 3 cups water and salt. Bring to boil, cover, and cook on low heat for 12 minutes.", "timer_seconds": 720, "tips": "Do not open lid."},
      {"step_number": 5, "instruction": "Rest covered for 5 minutes, then fluff with fork.", "timer_seconds": 300, "tips": "Resting prevents mushiness."}
    ]
  },
  {
    "id": "rec-020",
    "name": "Kadai Paneer",
    "region": "North Indian",
    "category": "Curry",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Paneer cubes and bell peppers tossed in spicy freshly ground Kadai masala tomato gravy.",
    "ingredients": [
      {"name": "paneer", "quantity": 250, "unit": "grams cubed", "is_optional": false},
      {"name": "capsicum", "quantity": 1, "unit": "large diced", "is_optional": false},
      {"name": "onion", "quantity": 2, "unit": "medium diced", "is_optional": false},
      {"name": "tomato", "quantity": 3, "unit": "large pureed", "is_optional": false},
      {"name": "ginger", "quantity": 1, "unit": "inch julienned", "is_optional": false},
      {"name": "coriander seeds", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "dry red chili", "quantity": 2, "unit": "pieces", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Dry roast coriander seeds and dry red chili for 2 minutes, then crush into Kadai Masala.", "timer_seconds": 120, "tips": "Fresh spice is key."},
      {"step_number": 2, "instruction": "Heat 1 tbsp oil, sauté capsicum and onion cubes on high heat for 3 minutes until crunchy.", "timer_seconds": 180, "tips": "Keep crunchy."},
      {"step_number": 3, "instruction": "In same pan, add pureed tomatoes, Kadai Masala, and salt. Cook until oil separates.", "timer_seconds": 360, "tips": "Cook till red."},
      {"step_number": 4, "instruction": "Add paneer cubes, sautéed capsicum, onions, ginger juliennes, and 1/4 cup water. Simmer for 4 minutes.", "timer_seconds": 240, "tips": "Mix gently."},
      {"step_number": 5, "instruction": "Sprinkle kasuri methi and garam masala before serving.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-021",
    "name": "Vegetable Pulao",
    "region": "North Indian",
    "category": "Rice",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "One-pot fragrant basmati rice pilaf cooked with mixed vegetables, ghee, and whole spices.",
    "ingredients": [
      {"name": "basmati rice", "quantity": 1.5, "unit": "cups", "is_optional": false},
      {"name": "mixed vegetables", "quantity": 1.5, "unit": "cups chopped", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1.25, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Soak basmati rice in water for 20 minutes, then drain.", "timer_seconds": 1200, "tips": "Fluffy rice."},
      {"step_number": 2, "instruction": "Heat ghee in pressure cooker. Sauté cumin seeds, bay leaf, onions, and green chilies until golden.", "timer_seconds": 300, "tips": "Sauté onions well."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, mixed vegetables, and salt. Sauté for 3 minutes.", "timer_seconds": 180, "tips": "Coat in ghee."},
      {"step_number": 4, "instruction": "Add soaked rice and 2.5 cups water. Mix gently, cover lid, and cook for 2 whistles.", "timer_seconds": 480, "tips": "Correct water ratio."},
      {"step_number": 5, "instruction": "Allow pressure to release naturally, fluff rice with fork, and serve with raita.", "timer_seconds": 300, "tips": "Serve with raita."}
    ]
  },
  {
    "id": "rec-022",
    "name": "Chana Masala",
    "region": "North Indian",
    "category": "Curry",
    "cook_time_mins": 30,
    "servings": 4,
    "description": "Classic North Indian chickpea curry cooked with onions, tomatoes, amchur powder, and coriander spices.",
    "ingredients": [
      {"name": "chickpeas", "quantity": 1.5, "unit": "cups soaked", "is_optional": false},
      {"name": "onion", "quantity": 2, "unit": "medium chopped", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "medium pureed", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "amchur powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "coriander powder", "quantity": 1.5, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Pressure cook soaked chickpeas with 4 cups water and salt for 6 whistles until soft.", "timer_seconds": 900, "tips": "Mashes easily."},
      {"step_number": 2, "instruction": "Heat oil in pan, crackle cumin seeds, add chopped onions, and sauté until golden brown.", "timer_seconds": 360, "tips": "Cook patiently."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, pureed tomatoes, coriander powder, chili powder, and cook until thick.", "timer_seconds": 360, "tips": "Oil separates."},
      {"step_number": 4, "instruction": "Add cooked chickpeas with liquid, mash a few chickpeas, and simmer for 10 minutes.", "timer_seconds": 600, "tips": "Mashing thickens."},
      {"step_number": 5, "instruction": "Add amchur powder and garam masala, garnish with fresh cilantro, and serve.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-023",
    "name": "Bhindi Fry (Crispy Okra)",
    "region": "North Indian",
    "category": "Side Dish",
    "cook_time_mins": 20,
    "servings": 3,
    "description": "Pan-roasted okra slices stir-fried with onions, amchur powder, and red chili.",
    "ingredients": [
      {"name": "bhindi", "quantity": 300, "unit": "grams sliced", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "amchur powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2.5, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Wash bhindi and dry thoroughly with towel before chopping into round slices.", "timer_seconds": null, "tips": "Must be dry."},
      {"step_number": 2, "instruction": "Heat oil in wide pan. Add cumin seeds and sliced onions, sautéing for 3 minutes.", "timer_seconds": 180, "tips": "Wide pan is best."},
      {"step_number": 3, "instruction": "Add sliced bhindi, turmeric powder, and salt. Stir gently and cook uncovered for 10 minutes.", "timer_seconds": 600, "tips": "Do NOT cover pan."},
      {"step_number": 4, "instruction": "Sprinkle red chili powder and amchur powder. Roast for another 4 minutes until crispy.", "timer_seconds": 240, "tips": "Amchur cuts stickiness."}
    ]
  },
  {
    "id": "rec-024",
    "name": "Mixed Vegetable Curry",
    "region": "South Indian",
    "category": "Curry",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Homestyle mixed vegetable curry cooked with tomatoes, mustard seeds, and curry leaves.",
    "ingredients": [
      {"name": "mixed vegetables", "quantity": 2, "unit": "cups", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": false},
      {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": false},
      {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Parboil mixed vegetables in salted water for 6 minutes. Drain.", "timer_seconds": 360, "tips": "Keep colorful."},
      {"step_number": 2, "instruction": "Heat oil in pan, temper mustard seeds and curry leaves. Sauté onions until translucent.", "timer_seconds": 180, "tips": "Let mustard crackle."},
      {"step_number": 3, "instruction": "Add ginger garlic paste, chopped tomatoes, turmeric, chili powder. Cook till soft.", "timer_seconds": 240, "tips": "Cook till juicy."},
      {"step_number": 4, "instruction": "Add parboiled vegetables and 1/2 cup water. Cover and simmer on low heat for 8 minutes.", "timer_seconds": 480, "tips": "Stir gently."},
      {"step_number": 5, "instruction": "Garnish with fresh coriander and serve warm with chapati or rice.", "timer_seconds": null, "tips": "Serve hot."}
    ]
  },
  {
    "id": "rec-025",
    "name": "Tomato Rice (Thakkali Sadam)",
    "region": "Tamil Nadu",
    "category": "Rice",
    "cook_time_mins": 25,
    "servings": 4,
    "description": "Tangy South Indian rice cooked with juicy tomatoes, green chili, and mustard tempering.",
    "ingredients": [
      {"name": "raw rice", "quantity": 1, "unit": "cup", "is_optional": false},
      {"name": "tomato", "quantity": 3, "unit": "large chopped", "is_optional": false},
      {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": false},
      {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": false},
      {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "urad dal", "quantity": 1, "unit": "tsp", "is_optional": false},
      {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": false},
      {"name": "sambar powder", "quantity": 1, "unit": "tbsp", "is_optional": false},
      {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": false},
      {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": false},
      {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": false}
    ],
    "steps": [
      {"step_number": 1, "instruction": "Rinse rice and cook in pressure cooker with 2 cups water for 3 whistles. Cool slightly.", "timer_seconds": 480, "tips": "Grains stay separate."},
      {"step_number": 2, "instruction": "Heat oil in a pan, add mustard seeds, urad dal, green chili, and curry leaves until golden.", "timer_seconds": 60, "tips": "Crispy urad dal."},
      {"step_number": 3, "instruction": "Sauté sliced onions until soft, then add ginger garlic paste, tomatoes, sambar powder, turmeric, and salt.", "timer_seconds": 300, "tips": "Juicy red tomatoes."},
      {"step_number": 4, "instruction": "Cook tomato masala on medium flame for 6 minutes until soft and oil separates.", "timer_seconds": 360, "tips": "Juices reduce."},
      {"step_number": 5, "instruction": "Add cooked rice to tomato masala, gently fold together until evenly coated, and simmer for 2 minutes.", "timer_seconds": 120, "tips": "Garnish with coriander."}
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
