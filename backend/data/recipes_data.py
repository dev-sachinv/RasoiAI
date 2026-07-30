"""
Seed recipe dataset for AI Voice Cooking Assistant (RasoiAI).
Contains 25 authentic Indian recipes with detailed steps, timer durations, and ingredient lists.
"""

RECIPES = [
    {
        "id": "rec-001",
        "name": "South Indian Sambar",
        "region": "Tamil Nadu",
        "category": "Curry",
        "cook_time_mins": 35,
        "servings": 4,
        "description": "A comforting, tangy lentil-based vegetable stew cooked with tamarind broth and freshly ground sambar powder.",
        "ingredients": [
            {"name": "toor dal", "quantity": 1, "unit": "cup", "is_optional": False},
            {"name": "tamarind", "quantity": 1, "unit": "lemon-sized ball", "is_optional": False},
            {"name": "drumstick", "quantity": 1, "unit": "piece", "is_optional": True},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "sambar powder", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False},
            {"name": "hing", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook 1 cup toor dal with 3 cups water and 1/2 tsp turmeric for 4 whistles.",
                "timer_seconds": 600,
                "tips": "Mash the cooked dal well for a thick consistency."
            },
            {
                "step_number": 2,
                "instruction": "Soak tamarind in 1 cup warm water for 10 minutes and extract the tamarind juice.",
                "timer_seconds": 300,
                "tips": "Discard the pulp after extracting liquid."
            },
            {
                "step_number": 3,
                "instruction": "In a pot, combine sliced onion, chopped tomatoes, drumsticks, tamarind juice, sambar powder, and salt. Boil until vegetables are tender.",
                "timer_seconds": 600,
                "tips": "Check drumstick tenderness with a fork."
            },
            {
                "step_number": 4,
                "instruction": "Add the mashed cooked toor dal to the boiling vegetable mix and simmer on low heat for 5 minutes.",
                "timer_seconds": 300,
                "tips": "Adjust water if sambar is too thick."
            },
            {
                "step_number": 5,
                "instruction": "Heat 2 tbsp oil in a tadka pan. Add mustard seeds, curry leaves, and a pinch of hing. Allow mustard seeds to crackle.",
                "timer_seconds": 60,
                "tips": "Keep flame medium so spices don't burn."
            },
            {
                "step_number": 6,
                "instruction": "Pour the tempering over the sambar, garnish with fresh coriander leaves, and serve hot with rice or idli.",
                "timer_seconds": None,
                "tips": "Cover with lid for 2 minutes to seal aromas."
            }
        ]
    },
    {
        "id": "rec-002",
        "name": "Pepper Rasam",
        "region": "Tamil Nadu",
        "category": "Soup",
        "cook_time_mins": 20,
        "servings": 3,
        "description": "Spicy, aromatic pepper-cumin broth infused with tomatoes and garlic. Perfect for soothing cold or digestions.",
        "ingredients": [
            {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "tamarind", "quantity": 0.5, "unit": "small ball", "is_optional": False},
            {"name": "black pepper", "quantity": 1.5, "unit": "tsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "garlic", "quantity": 5, "unit": "cloves", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": False},
            {"name": "ghee", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Coarsely crush black pepper, cumin seeds, and garlic cloves together in a mortar pestle or spice grinder.",
                "timer_seconds": None,
                "tips": "Do not make a fine powder; coarse texture gives better flavor."
            },
            {
                "step_number": 2,
                "instruction": "Extract tamarind juice in 1.5 cups water. Mash tomatoes directly into the tamarind juice along with salt and turmeric.",
                "timer_seconds": 180,
                "tips": "Mash tomatoes thoroughly with your hand or spoon."
            },
            {
                "step_number": 3,
                "instruction": "Heat 1 tbsp ghee in a vessel. Add mustard seeds, curry leaves, and the crushed pepper-cumin mixture. Sauté for 30 seconds.",
                "timer_seconds": 30,
                "tips": "Keep flame low so garlic doesn't turn bitter."
            },
            {
                "step_number": 4,
                "instruction": "Pour the tomato-tamarind mixture into the pan. Bring it to a gentle froth over medium heat.",
                "timer_seconds": 300,
                "tips": "Do NOT boil rasam vigorously; turn off as soon as it froths up."
            },
            {
                "step_number": 5,
                "instruction": "Garnish with fresh coriander leaves, cover immediately with a lid, and serve warm.",
                "timer_seconds": None,
                "tips": "Best served with hot steamed rice and ghee."
            }
        ]
    },
    {
        "id": "rec-003",
        "name": "Paneer Butter Masala",
        "region": "North Indian",
        "category": "Curry",
        "cook_time_mins": 30,
        "servings": 4,
        "description": "Rich, creamy, and velvety cottage cheese curry cooked in a tomato-cashew gravy with aromatic spices.",
        "ingredients": [
            {"name": "paneer", "quantity": 250, "unit": "grams", "is_optional": False},
            {"name": "butter", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "large", "is_optional": False},
            {"name": "tomato", "quantity": 3, "unit": "large", "is_optional": False},
            {"name": "cashews", "quantity": 12, "unit": "pieces", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "kashmiri red chili powder", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "fresh cream", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "kasuri methi", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Roughly chop onions and tomatoes. Sauté onions in 1 tbsp butter for 4 minutes, then add tomatoes and cashews. Cook until soft.",
                "timer_seconds": 360,
                "tips": "Cashews add rich thickness to the gravy."
            },
            {
                "step_number": 2,
                "instruction": "Allow mixture to cool, then blend into a smooth silk puree using 1/4 cup water.",
                "timer_seconds": 180,
                "tips": "Strain through a sieve for extra smooth restaurant texture."
            },
            {
                "step_number": 3,
                "instruction": "Melt remaining butter in a pan. Add ginger garlic paste, red chili powder, and cook for 30 seconds.",
                "timer_seconds": 30,
                "tips": "Low flame prevents chili powder from burning."
            },
            {
                "step_number": 4,
                "instruction": "Pour the blended puree, add salt and garam masala, simmer on medium heat for 6 minutes until butter separates.",
                "timer_seconds": 360,
                "tips": "Stir occasionally to avoid sticking."
            },
            {
                "step_number": 5,
                "instruction": "Add paneer cubes, crushed kasuri methi, and fresh cream. Simmer gently for 3 minutes.",
                "timer_seconds": 180,
                "tips": "Do not overcook paneer or it becomes rubbery."
            }
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
            {"name": "toor dal", "quantity": 1, "unit": "cup", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "garlic", "quantity": 6, "unit": "cloves", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook toor dal with 3 cups water, salt, and turmeric for 4 whistles.",
                "timer_seconds": 600,
                "tips": "Whisk dal slightly to achieve creamy texture."
            },
            {
                "step_number": 2,
                "instruction": "In a pan, heat 1 tbsp ghee. Add fine chopped onions, green chilies, and sauté until golden brown.",
                "timer_seconds": 300,
                "tips": "Browned onions add deep flavor."
            },
            {
                "step_number": 3,
                "instruction": "Add chopped tomatoes, red chili powder, cook until soft. Mix in the boiled dal and simmer for 4 minutes.",
                "timer_seconds": 240,
                "tips": "Adjust salt and consistency with warm water."
            },
            {
                "step_number": 4,
                "instruction": "Prepare Tadka: heat remaining ghee, crackle cumin seeds, garlic slices, dried red chili. Pour hot over dal.",
                "timer_seconds": 60,
                "tips": "Serve immediately while piping hot."
            }
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
            {"name": "potato", "quantity": 3, "unit": "large", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "urad dal", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "sambar powder", "quantity": 0.5, "unit": "tsp", "is_optional": True},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Peel potatoes and cut into small 1/2-inch cubes. Parboil in salted water for 5 minutes.",
                "timer_seconds": 300,
                "tips": "Drain water thoroughly to ensure crispiness."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in a wide pan. Add mustard seeds, urad dal, and curry leaves. Let dal turn golden.",
                "timer_seconds": 60,
                "tips": "Urad dal gives a lovely crunch."
            },
            {
                "step_number": 3,
                "instruction": "Add parboiled potatoes, turmeric powder, chili powder, sambar powder, and salt. Toss well.",
                "timer_seconds": 120,
                "tips": "Coat all potato pieces evenly."
            },
            {
                "step_number": 4,
                "instruction": "Roast uncovered on low-medium flame for 10-12 minutes, stirring every 2 minutes until golden crispy.",
                "timer_seconds": 600,
                "tips": "Do not cover with lid if you want crisp poriyal."
            }
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
            {"name": "dosa batter", "quantity": 3, "unit": "cups", "is_optional": False},
            {"name": "potato", "quantity": 3, "unit": "medium", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "sliced", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "chopped", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": False},
            {"name": "oil", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Boil potatoes until soft, peel, and crush coarsely.",
                "timer_seconds": 480,
                "tips": "Keep potato texture slightly chunky."
            },
            {
                "step_number": 2,
                "instruction": "Heat 1 tbsp oil, temper mustard seeds and curry leaves. Sauté sliced onions and green chili till translucent.",
                "timer_seconds": 180,
                "tips": "Add turmeric powder for yellow color."
            },
            {
                "step_number": 3,
                "instruction": "Add crushed potatoes, 3 tbsp water, salt, stir well and cook for 3 minutes for potato masala.",
                "timer_seconds": 180,
                "tips": "Masala should be spreadable."
            },
            {
                "step_number": 4,
                "instruction": "Heat tawa pan, pour ladle of dosa batter, spread thin in spiral. Drizzle oil around edges.",
                "timer_seconds": 120,
                "tips": "Cook on medium heat till golden brown."
            },
            {
                "step_number": 5,
                "instruction": "Place potato masala in center, fold dosa into half, and serve hot with chutney and sambar.",
                "timer_seconds": None,
                "tips": "Wipe tawa with damp cloth between dosas."
            }
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
            {"name": "chickpeas", "quantity": 1.5, "unit": "cups (soaked)", "is_optional": False},
            {"name": "tea bag", "quantity": 1, "unit": "piece", "is_optional": False},
            {"name": "onion", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "chole masala powder", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "amchur powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook soaked chickpeas with tea bag, salt, and 3.5 cups water for 6 whistles till very tender.",
                "timer_seconds": 900,
                "tips": "Tea bag gives classic dark color."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in pan, add cumin seeds, chopped onions, and cook until deep golden.",
                "timer_seconds": 360,
                "tips": "Deep brown onions give authentic Amritsari flavor."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, pureed tomatoes, chole masala, amchur powder, salt. Cook till oil separates.",
                "timer_seconds": 360,
                "tips": "Cook masala thoroughly."
            },
            {
                "step_number": 4,
                "instruction": "Add cooked chickpeas (discard tea bag). Mash a few chickpeas to thicken gravy, simmer for 10 minutes.",
                "timer_seconds": 600,
                "tips": "Serve hot with bhature or naan."
            }
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
            {"name": "basmati rice", "quantity": 2, "unit": "cups", "is_optional": False},
            {"name": "mixed vegetables", "quantity": 2, "unit": "cups", "is_optional": False},
            {"name": "curd", "quantity": 0.5, "unit": "cup", "is_optional": False},
            {"name": "biryani masala", "quantity": 1.5, "unit": "tbsp", "is_optional": False},
            {"name": "onion", "quantity": 2, "unit": "large", "is_optional": False},
            {"name": "mint leaves", "quantity": 0.25, "unit": "cup", "is_optional": False},
            {"name": "ghee", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "saffron milk", "quantity": 3, "unit": "tbsp", "is_optional": True},
            {"name": "salt", "quantity": 1.5, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Boil basmati rice with whole spices until 70% cooked. Drain water and set aside.",
                "timer_seconds": 420,
                "tips": "Do not overcook rice at this stage."
            },
            {
                "step_number": 2,
                "instruction": "Thinly slice onions and fry in ghee/oil until crispy golden brown (birista).",
                "timer_seconds": 480,
                "tips": "Remove onions onto paper towel."
            },
            {
                "step_number": 3,
                "instruction": "Marinate veggies in curd, biryani masala, mint, and salt. Sauté in pan for 8 minutes.",
                "timer_seconds": 480,
                "tips": "Veggies should be slightly crunchy."
            },
            {
                "step_number": 4,
                "instruction": "Layer cooked veggies at bottom, top with rice, fried onions, mint, and saffron milk.",
                "timer_seconds": 180,
                "tips": "Seal pot with tight lid or aluminum foil."
            },
            {
                "step_number": 5,
                "instruction": "Cook on low flame (dum) for 15 minutes. Rest 5 minutes before fluffing gently.",
                "timer_seconds": 900,
                "tips": "Fluff with a fork from edges."
            }
        ]
    },
    {
        "id": "rec-009",
        "name": "Egg Roast (Kerala Style)",
        "region": "Kerala",
        "category": "Curry",
        "cook_time_mins": 25,
        "servings": 3,
        "description": "Hard-boiled eggs coated in a caramelized spicy onion-tomato gravy with black pepper and curry leaves.",
        "ingredients": [
            {"name": "egg", "quantity": 4, "unit": "large", "is_optional": False},
            {"name": "onion", "quantity": 3, "unit": "large (sliced)", "is_optional": False},
            {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "black pepper", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander powder", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coconut oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 12, "unit": "leaves", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Boil eggs for 10 minutes, peel shell, and make light vertical slits on each egg.",
                "timer_seconds": 600,
                "tips": "Slits help absorption of gravy flavors."
            },
            {
                "step_number": 2,
                "instruction": "Heat coconut oil, add curry leaves, sliced onions, salt, and sauté until deep caramelized brown.",
                "timer_seconds": 600,
                "tips": "Caramelizing onions is crucial for Kerala egg roast."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, chopped tomato, chili powder, coriander powder, pepper powder. Cook 4 minutes.",
                "timer_seconds": 240,
                "tips": "Add 2 tbsp water to prevent spices burning."
            },
            {
                "step_number": 4,
                "instruction": "Add boiled eggs to gravy, roast together for 3 minutes to coat thoroughly, and serve hot.",
                "timer_seconds": 180,
                "tips": "Tastes amazing with appam or parotta."
            }
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
            {"name": "cauliflower", "quantity": 1, "unit": "medium head", "is_optional": False},
            {"name": "potato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": True},
            {"name": "ginger", "quantity": 1, "unit": "inch finely chopped", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "coriander powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Cut cauliflower into medium florets and potatoes into small cubes.",
                "timer_seconds": None,
                "tips": "Blanch florets in warm salted water for 3 minutes."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in pan, add cumin seeds, ginger, green chilies. Add potato cubes and cover cook for 5 mins.",
                "timer_seconds": 300,
                "tips": "Potatoes take longer to cook than cauliflower."
            },
            {
                "step_number": 3,
                "instruction": "Add cauliflower florets, turmeric, coriander powder, salt. Mix gently without breaking florets.",
                "timer_seconds": 120,
                "tips": "Keep flame on medium."
            },
            {
                "step_number": 4,
                "instruction": "Cover and cook on low heat for 10 minutes until veggies are tender. Sprinkle garam masala before serving.",
                "timer_seconds": 600,
                "tips": "Garnish with fresh cilantro."
            }
        ]
    },
    {
        "id": "rec-011",
        "name": "Vegetable Kurma",
        "region": "Tamil Nadu",
        "category": "Curry",
        "cook_time_mins": 30,
        "servings": 4,
        "description": "Mildly spiced, aromatic coconut-cashew gravy stewed with mixed vegetables and herbs.",
        "ingredients": [
            {"name": "mixed vegetables", "quantity": 1.5, "unit": "cups", "is_optional": False},
            {"name": "coconut", "quantity": 0.5, "unit": "cup grated", "is_optional": False},
            {"name": "cashews", "quantity": 8, "unit": "pieces", "is_optional": False},
            {"name": "fennel seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Grind grated coconut, cashews, green chili, and fennel seeds into a smooth paste with 1/4 cup water.",
                "timer_seconds": None,
                "tips": "Cashews make the gravy rich and thick."
            },
            {
                "step_number": 2,
                "instruction": "Boil mixed vegetables (carrots, beans, peas, potatoes) in 2 cups salted water until tender.",
                "timer_seconds": 600,
                "tips": "Do not overcook to keep veggies colorful."
            },
            {
                "step_number": 3,
                "instruction": "Heat oil in a pan, sauté onions and ginger garlic paste until fragrant.",
                "timer_seconds": 180,
                "tips": "Sauté till raw smell disappears."
            },
            {
                "step_number": 4,
                "instruction": "Add chopped tomatoes, turmeric powder, and cook until tomatoes turn soft.",
                "timer_seconds": 240,
                "tips": "Mash tomatoes with spoon."
            },
            {
                "step_number": 5,
                "instruction": "Add boiled vegetables and ground coconut paste to the pan. Mix well and simmer on low heat for 6 minutes.",
                "timer_seconds": 360,
                "tips": "Adjust water if gravy is too thick."
            },
            {
                "step_number": 6,
                "instruction": "Garnish with fresh coriander leaves and serve hot with parotta or chapati.",
                "timer_seconds": None,
                "tips": "Best served piping hot."
            }
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
            {"name": "raw rice", "quantity": 1, "unit": "cup", "is_optional": False},
            {"name": "curd", "quantity": 1.5, "unit": "cups", "is_optional": False},
            {"name": "milk", "quantity": 0.25, "unit": "cup", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "chopped", "is_optional": False},
            {"name": "ginger", "quantity": 1, "unit": "tsp finely chopped", "is_optional": False},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False},
            {"name": "oil", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "pomegranate seeds", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook 1 cup raw rice with 4 cups water for 5 whistles until soft and mushy.",
                "timer_seconds": 600,
                "tips": "Overcooked mushy rice gives best texture."
            },
            {
                "step_number": 2,
                "instruction": "Mash the hot cooked rice thoroughly using a ladle. Allow it to cool down to room temperature.",
                "timer_seconds": 300,
                "tips": "Never add curd to boiling hot rice or it turns sour."
            },
            {
                "step_number": 3,
                "instruction": "Mix cooled rice with fresh curd, milk, and salt until smooth and creamy.",
                "timer_seconds": None,
                "tips": "Milk prevents curd from souring quickly."
            },
            {
                "step_number": 4,
                "instruction": "Heat oil in a small pan, temper mustard seeds, finely chopped green chili, ginger, and curry leaves.",
                "timer_seconds": 60,
                "tips": "Add a pinch of hing if desired."
            },
            {
                "step_number": 5,
                "instruction": "Pour tempering over curd rice, garnish with pomegranate seeds, and serve chilled or at room temperature.",
                "timer_seconds": None,
                "tips": "Serve with pickle or vadam."
            }
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
            {"name": "urad dal", "quantity": 1, "unit": "cup", "is_optional": False},
            {"name": "black pepper", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "ginger", "quantity": 1, "unit": "inch", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "cups for frying", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "tamarind", "quantity": 1, "unit": "small ball", "is_optional": False},
            {"name": "mustard seeds", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": False},
            {"name": "hing", "quantity": 0.25, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Soak urad dal in water for 2 hours, then drain and grind into a thick, fluffy batter with minimal water.",
                "timer_seconds": 7200,
                "tips": "Whip batter to trap air for light vadas."
            },
            {
                "step_number": 2,
                "instruction": "Add crushed black pepper, chopped green chili, ginger, and salt to batter. Whisk vigorously for 3 minutes.",
                "timer_seconds": 180,
                "tips": "Check batter fluffiness by dropping a dollop in water."
            },
            {
                "step_number": 3,
                "instruction": "Shape batter into small donuts/vadas and deep fry in hot oil on medium heat until golden brown.",
                "timer_seconds": 480,
                "tips": "Do not fry on very high flame."
            },
            {
                "step_number": 4,
                "instruction": "Prepare fresh pepper rasam by simmering tamarind extract, tomatoes, cumin-pepper powder, and mustard tempering.",
                "timer_seconds": 300,
                "tips": "Froth rasam gently."
            },
            {
                "step_number": 5,
                "instruction": "Soak fried vadas in warm water for 2 minutes, squeeze gently, and place into hot pepper rasam bowl.",
                "timer_seconds": 120,
                "tips": "Warm water soak removes excess surface oil."
            },
            {
                "step_number": 6,
                "instruction": "Allow vadas to absorb rasam for 10 minutes before serving.",
                "timer_seconds": 600,
                "tips": "Serve warm in deep bowls."
            }
        ]
    },
    {
        "id": "rec-014",
        "name": "Coconut Chutney",
        "region": "South Indian",
        "category": "Chutney",
        "cook_time_mins": 10,
        "servings": 4,
        "description": "Classic South Indian coconut dip blended with green chili, roasted gram, and tempered with mustard.",
        "ingredients": [
            {"name": "coconut", "quantity": 1, "unit": "cup grated", "is_optional": False},
            {"name": "roasted chana dal", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "ginger", "quantity": 0.5, "unit": "inch", "is_optional": False},
            {"name": "salt", "quantity": 0.75, "unit": "tsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "urad dal", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 8, "unit": "leaves", "is_optional": False},
            {"name": "oil", "quantity": 1, "unit": "tbsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "In a blender jar, combine fresh grated coconut, roasted chana dal, green chili, ginger, salt, and 1/3 cup water.",
                "timer_seconds": None,
                "tips": "Adjust green chili according to spice preference."
            },
            {
                "step_number": 2,
                "instruction": "Grind into a smooth chutney texture. Transfer to a serving bowl.",
                "timer_seconds": None,
                "tips": "Add extra splash of water if too thick."
            },
            {
                "step_number": 3,
                "instruction": "Heat oil in a tadka pan, add mustard seeds, urad dal, and curry leaves until mustard crackles.",
                "timer_seconds": 60,
                "tips": "Let urad dal turn light golden."
            },
            {
                "step_number": 4,
                "instruction": "Pour hot tempering over chutney and stir well before serving with idli or dosa.",
                "timer_seconds": None,
                "tips": "Pairs best with hot crispy dosas."
            }
        ]
    },
    {
        "id": "rec-015",
        "name": "Vatha Kuzhambu",
        "region": "Tamil Nadu",
        "category": "Curry",
        "cook_time_mins": 25,
        "servings": 4,
        "description": "Tangy and spicy Tamil Brahmin style tamarind gravy simmered with fried turkey berries and sesame oil.",
        "ingredients": [
            {"name": "tamarind", "quantity": 1, "unit": "large lemon size", "is_optional": False},
            {"name": "sundakai", "quantity": 2, "unit": "tbsp dried", "is_optional": False},
            {"name": "sesame oil", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "fenugreek seeds", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "toor dal", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "sambar powder", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "hing", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "jaggery", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "salt", "quantity": 1.25, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Extract thick tamarind juice using 2 cups warm water.",
                "timer_seconds": 300,
                "tips": "Ensure tamarind liquid is free of seeds."
            },
            {
                "step_number": 2,
                "instruction": "Heat sesame oil in a clay pot or pan. Fry dried sundakai vathal until dark brown, then set aside.",
                "timer_seconds": 120,
                "tips": "Do not burn the vathal."
            },
            {
                "step_number": 3,
                "instruction": "In remaining hot oil, temper mustard seeds, fenugreek seeds, toor dal, hing, and curry leaves.",
                "timer_seconds": 60,
                "tips": "Fenugreek gives traditional aroma."
            },
            {
                "step_number": 4,
                "instruction": "Pour tamarind juice, add sambar powder, red chili powder, turmeric, and salt. Boil on medium heat for 10 minutes until oil floats on top.",
                "timer_seconds": 600,
                "tips": "Gravy will reduce and thicken."
            },
            {
                "step_number": 5,
                "instruction": "Add fried vathal and jaggery, simmer for another 4 minutes until thick and glossy.",
                "timer_seconds": 240,
                "tips": "Jaggery balances the sharp tanginess."
            }
        ]
    },
    {
        "id": "rec-016",
        "name": "Rajma Masala",
        "region": "Punjabi",
        "category": "Curry",
        "cook_time_mins": 40,
        "servings": 4,
        "description": "Rich Punjabi red kidney bean curry cooked in onion-tomato gravy and aromatic warm spices.",
        "ingredients": [
            {"name": "kidney beans", "quantity": 1.5, "unit": "cups soaked", "is_optional": False},
            {"name": "onion", "quantity": 2, "unit": "medium chopped", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "large pureed", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander powder", "quantity": 1.5, "unit": "tsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "amchur powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "butter", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook soaked kidney beans (rajma) with 4 cups water and 1 tsp salt for 6-8 whistles until melt-in-mouth tender.",
                "timer_seconds": 900,
                "tips": "Soak rajma overnight for 8 hours minimum."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil and butter in a pan. Add cumin seeds and chopped onions, sautéing until deep golden brown.",
                "timer_seconds": 360,
                "tips": "Well-browned onions give deep color."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, tomato puree, red chili powder, coriander powder, and cook until oil separates.",
                "timer_seconds": 420,
                "tips": "Cook masala thoroughly."
            },
            {
                "step_number": 4,
                "instruction": "Add boiled rajma along with its cooking liquid to the pan. Mash a few beans with back of spoon to thicken gravy.",
                "timer_seconds": 180,
                "tips": "Mashing beans creates natural thickness."
            },
            {
                "step_number": 5,
                "instruction": "Simmer on low heat for 12 minutes to allow flavors to meld together.",
                "timer_seconds": 720,
                "tips": "Stir occasionally to avoid sticking."
            },
            {
                "step_number": 6,
                "instruction": "Sprinkle garam masala and amchur powder, garnish with fresh coriander, and serve hot with steamed rice.",
                "timer_seconds": None,
                "tips": "Best enjoyed as Rajma Chawal."
            }
        ]
    },
    {
        "id": "rec-017",
        "name": "Palak Paneer",
        "region": "North Indian",
        "category": "Curry",
        "cook_time_mins": 25,
        "servings": 4,
        "description": "Vibrant green spinach curry loaded with soft cottage cheese cubes, garlic, and fresh cream.",
        "ingredients": [
            {"name": "spinach", "quantity": 1, "unit": "large bunch", "is_optional": False},
            {"name": "paneer", "quantity": 200, "unit": "grams cubed", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "garlic", "quantity": 6, "unit": "cloves finely chopped", "is_optional": False},
            {"name": "ginger", "quantity": 1, "unit": "inch", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "fresh cream", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "butter", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Blanch spinach leaves in boiling salted water for 2 minutes, then immediately transfer to ice water.",
                "timer_seconds": 120,
                "tips": "Ice water shock preserves bright green color."
            },
            {
                "step_number": 2,
                "instruction": "Blend blanched spinach with green chili and ginger into a smooth bright green puree.",
                "timer_seconds": None,
                "tips": "Do not over-blend."
            },
            {
                "step_number": 3,
                "instruction": "Heat 1 tbsp butter in a pan. Add cumin seeds, chopped garlic, and fine chopped onions, sautéing till golden.",
                "timer_seconds": 300,
                "tips": "Garlic adds aromatic flavor to palak."
            },
            {
                "step_number": 4,
                "instruction": "Add pureed tomatoes and cook for 3 minutes, then pour in spinach puree, salt, and 1/4 cup water. Simmer for 5 minutes.",
                "timer_seconds": 300,
                "tips": "Keep flame low."
            },
            {
                "step_number": 5,
                "instruction": "Add paneer cubes, fresh cream, and garam masala. Gently stir and simmer for 2 minutes before serving hot.",
                "timer_seconds": 120,
                "tips": "Serve hot with garlic naan."
            }
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
            {"name": "chicken", "quantity": 500, "unit": "grams boneless", "is_optional": False},
            {"name": "curd", "quantity": 0.5, "unit": "cup", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1.5, "unit": "tbsp", "is_optional": False},
            {"name": "kashmiri red chili powder", "quantity": 1.5, "unit": "tbsp", "is_optional": False},
            {"name": "butter", "quantity": 4, "unit": "tbsp", "is_optional": False},
            {"name": "tomato", "quantity": 4, "unit": "large pureed", "is_optional": False},
            {"name": "cashews", "quantity": 15, "unit": "pieces", "is_optional": False},
            {"name": "fresh cream", "quantity": 3, "unit": "tbsp", "is_optional": False},
            {"name": "kasuri methi", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Marinate chicken pieces in curd, 1 tbsp ginger garlic paste, 1 tbsp chili powder, and salt for 30 minutes.",
                "timer_seconds": 1800,
                "tips": "Longer marination makes chicken tender."
            },
            {
                "step_number": 2,
                "instruction": "Pan-sear or grill marinated chicken in 1 tbsp oil until lightly charred and 80% cooked. Set aside.",
                "timer_seconds": 480,
                "tips": "Charred spots add smoky flavor."
            },
            {
                "step_number": 3,
                "instruction": "In a pot, cook pureed tomatoes, cashews, and remaining ginger garlic paste with 1/2 cup water for 10 minutes, then blend into a silky smooth gravy.",
                "timer_seconds": 600,
                "tips": "Strain gravy for smooth restaurant texture."
            },
            {
                "step_number": 4,
                "instruction": "Melt 3 tbsp butter in pan, add blended tomato-cashew gravy, remaining chili powder, garam masala, and salt. Simmer for 6 minutes.",
                "timer_seconds": 360,
                "tips": "Cook until butter glistens."
            },
            {
                "step_number": 5,
                "instruction": "Add grilled chicken, fresh cream, and crushed kasuri methi. Simmer gently on low heat for 5 minutes.",
                "timer_seconds": 300,
                "tips": "Stir gently."
            },
            {
                "step_number": 6,
                "instruction": "Top with a dollop of butter and serve warm with naan or butter roti.",
                "timer_seconds": None,
                "tips": "Best served hot."
            }
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
            {"name": "basmati rice", "quantity": 1.5, "unit": "cups", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1.5, "unit": "tsp", "is_optional": False},
            {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "bay leaf", "quantity": 1, "unit": "piece", "is_optional": False},
            {"name": "cloves", "quantity": 3, "unit": "pieces", "is_optional": False},
            {"name": "cinnamon", "quantity": 1, "unit": "stick", "is_optional": False},
            {"name": "green chili", "quantity": 1, "unit": "slit", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Rinse basmati rice and soak in water for 20 minutes. Drain thoroughly.",
                "timer_seconds": 1200,
                "tips": "Soaking makes rice grains long."
            },
            {
                "step_number": 2,
                "instruction": "Heat ghee in a pot. Add cumin seeds, bay leaf, cloves, cinnamon, and slit green chili. Sauté until cumin crackles.",
                "timer_seconds": 60,
                "tips": "Cumin seeds should sizzle in ghee."
            },
            {
                "step_number": 3,
                "instruction": "Add drained rice and sauté gently in ghee for 2 minutes without breaking grains.",
                "timer_seconds": 120,
                "tips": "Sautéing coats grains with ghee."
            },
            {
                "step_number": 4,
                "instruction": "Pour 3 cups water and salt. Bring to boil, cover with tight lid, and cook on low heat for 12 minutes until water is absorbed.",
                "timer_seconds": 720,
                "tips": "Do not open lid while cooking."
            },
            {
                "step_number": 5,
                "instruction": "Turn off heat, let rice rest covered for 5 minutes, then fluff with fork and garnish with coriander.",
                "timer_seconds": 300,
                "tips": "Resting prevents mushiness."
            }
        ]
    },
    {
        "id": "rec-020",
        "name": "Kadai Paneer",
        "region": "North Indian",
        "category": "Curry",
        "cook_time_mins": 25,
        "servings": 4,
        "description": "Paneer cubes and crunchy bell peppers tossed in a spicy, freshly ground Kadai masala tomato gravy.",
        "ingredients": [
            {"name": "paneer", "quantity": 250, "unit": "grams cubed", "is_optional": False},
            {"name": "capsicum", "quantity": 1, "unit": "large diced", "is_optional": False},
            {"name": "onion", "quantity": 2, "unit": "medium diced", "is_optional": False},
            {"name": "tomato", "quantity": 3, "unit": "large pureed", "is_optional": False},
            {"name": "ginger", "quantity": 1, "unit": "inch julienned", "is_optional": False},
            {"name": "coriander seeds", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "dry red chili", "quantity": 2, "unit": "pieces", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "kasuri methi", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Dry roast coriander seeds and dry red chili in a pan for 2 minutes, then coarsely crush into Kadai Masala.",
                "timer_seconds": 120,
                "tips": "Freshly ground spice gives signature flavor."
            },
            {
                "step_number": 2,
                "instruction": "Heat 1 tbsp oil, sauté diced capsicum and onion cubes on high heat for 3 minutes until crunchy. Set aside.",
                "timer_seconds": 180,
                "tips": "Keep capsicum crunchy."
            },
            {
                "step_number": 3,
                "instruction": "In same pan, add pureed tomatoes, freshly ground Kadai Masala, and salt. Cook until oil separates.",
                "timer_seconds": 360,
                "tips": "Cook gravy till dark red."
            },
            {
                "step_number": 4,
                "instruction": "Add paneer cubes, sautéed capsicum, onions, julienned ginger, and 1/4 cup water. Simmer for 4 minutes.",
                "timer_seconds": 240,
                "tips": "Mix gently."
            },
            {
                "step_number": 5,
                "instruction": "Sprinkle crushed kasuri methi and garam masala before serving hot with naan or paratha.",
                "timer_seconds": None,
                "tips": "Serve hot."
            }
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
            {"name": "basmati rice", "quantity": 1.5, "unit": "cups", "is_optional": False},
            {"name": "mixed vegetables", "quantity": 1.5, "unit": "cups chopped", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "bay leaf", "quantity": 1, "unit": "piece", "is_optional": False},
            {"name": "ghee", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1.25, "unit": "tsp", "is_optional": False},
            {"name": "mint leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Soak basmati rice in water for 20 minutes, then drain.",
                "timer_seconds": 1200,
                "tips": "Soaking ensures fluffy rice."
            },
            {
                "step_number": 2,
                "instruction": "Heat ghee in pressure cooker. Sauté cumin seeds, bay leaf, sliced onions, and green chilies until golden.",
                "timer_seconds": 300,
                "tips": "Sauté onions well."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, mixed vegetables (carrots, peas, potatoes, beans), and salt. Sauté for 3 minutes.",
                "timer_seconds": 180,
                "tips": "Coat vegetables in ghee."
            },
            {
                "step_number": 4,
                "instruction": "Add soaked rice and 2.5 cups water. Mix gently, cover lid, and cook for 2 whistles on medium heat.",
                "timer_seconds": 480,
                "tips": "Do not add excessive water."
            },
            {
                "step_number": 5,
                "instruction": "Allow pressure to release naturally, fluff rice with fork, garnish with mint leaves, and serve with raita.",
                "timer_seconds": 300,
                "tips": "Serve with onion raita."
            }
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
            {"name": "chickpeas", "quantity": 1.5, "unit": "cups soaked", "is_optional": False},
            {"name": "onion", "quantity": 2, "unit": "medium chopped", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "medium pureed", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "amchur powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander powder", "quantity": 1.5, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "garam masala", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Pressure cook soaked chickpeas with 4 cups water and salt for 6 whistles until very soft.",
                "timer_seconds": 900,
                "tips": "Chickpeas should mash easily between fingers."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in pan, crackle cumin seeds, add chopped onions, and sauté until golden brown.",
                "timer_seconds": 360,
                "tips": "Cook onions patiently."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, pureed tomatoes, coriander powder, chili powder, and cook until masala thickens.",
                "timer_seconds": 360,
                "tips": "Cook till oil separates."
            },
            {
                "step_number": 4,
                "instruction": "Add cooked chickpeas with liquid, mash a few chickpeas, and simmer on medium-low heat for 10 minutes.",
                "timer_seconds": 600,
                "tips": "Mashing thickens gravy."
            },
            {
                "step_number": 5,
                "instruction": "Add amchur powder and garam masala, garnish with fresh cilantro, and serve with rice or chapati.",
                "timer_seconds": None,
                "tips": "Serve hot."
            }
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
            {"name": "bhindi", "quantity": 300, "unit": "grams sliced", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "amchur powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "cumin seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2.5, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Wash bhindi and dry thoroughly with towel before chopping into 1/2-inch round slices.",
                "timer_seconds": None,
                "tips": "Ensure bhindi is completely dry to prevent stickiness."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in wide pan. Add cumin seeds and sliced onions, sautéing for 3 minutes.",
                "timer_seconds": 180,
                "tips": "Use a wide pan."
            },
            {
                "step_number": 3,
                "instruction": "Add sliced bhindi, turmeric powder, and salt. Stir gently and cook uncovered on medium heat for 10 minutes, stirring occasionally.",
                "timer_seconds": 600,
                "tips": "Do NOT cover pan with lid."
            },
            {
                "step_number": 4,
                "instruction": "Sprinkle red chili powder and amchur powder. Roast for another 4 minutes until crispy and sticky-free.",
                "timer_seconds": 240,
                "tips": "Amchur powder cuts stickiness."
            }
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
            {"name": "mixed vegetables", "quantity": 2, "unit": "cups", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium", "is_optional": False},
            {"name": "tomato", "quantity": 2, "unit": "medium", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.5, "unit": "tsp", "is_optional": False},
            {"name": "red chili powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander powder", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Parboil mixed vegetables (carrots, beans, peas, potatoes) in salted water for 6 minutes. Drain.",
                "timer_seconds": 360,
                "tips": "Keep vegetables colorful."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in pan, temper mustard seeds and curry leaves. Sauté chopped onions until translucent.",
                "timer_seconds": 180,
                "tips": "Let mustard crackle."
            },
            {
                "step_number": 3,
                "instruction": "Add ginger garlic paste, chopped tomatoes, turmeric, chili powder, coriander powder. Cook till soft.",
                "timer_seconds": 240,
                "tips": "Cook till tomato turns juicy."
            },
            {
                "step_number": 4,
                "instruction": "Add parboiled vegetables and 1/2 cup water. Cover and simmer on low heat for 8 minutes.",
                "timer_seconds": 480,
                "tips": "Stir gently."
            },
            {
                "step_number": 5,
                "instruction": "Garnish with fresh coriander and serve warm with chapati or rice.",
                "timer_seconds": None,
                "tips": "Serve hot."
            }
        ]
    },
    {
        "id": "rec-025",
        "name": "Tomato Rice (Thakkali Sadam)",
        "region": "Tamil Nadu",
        "category": "Rice",
        "cook_time_mins": 25,
        "servings": 4,
        "description": "Tangy and spicy South Indian rice cooked with fresh juicy tomatoes, green chili, and mustard tempering.",
        "ingredients": [
            {"name": "raw rice", "quantity": 1, "unit": "cup", "is_optional": False},
            {"name": "tomato", "quantity": 3, "unit": "large chopped", "is_optional": False},
            {"name": "onion", "quantity": 1, "unit": "medium sliced", "is_optional": False},
            {"name": "ginger garlic paste", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "green chili", "quantity": 2, "unit": "slit", "is_optional": False},
            {"name": "mustard seeds", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "urad dal", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "curry leaves", "quantity": 10, "unit": "leaves", "is_optional": False},
            {"name": "sambar powder", "quantity": 1, "unit": "tbsp", "is_optional": False},
            {"name": "turmeric powder", "quantity": 0.25, "unit": "tsp", "is_optional": False},
            {"name": "oil", "quantity": 2, "unit": "tbsp", "is_optional": False},
            {"name": "salt", "quantity": 1, "unit": "tsp", "is_optional": False},
            {"name": "coriander leaves", "quantity": 2, "unit": "tbsp", "is_optional": True}
        ],
        "steps": [
            {
                "step_number": 1,
                "instruction": "Rinse rice and cook in pressure cooker with 2 cups water for 3 whistles until cooked but firm. Cool slightly.",
                "timer_seconds": 480,
                "tips": "Rice grains should remain separate."
            },
            {
                "step_number": 2,
                "instruction": "Heat oil in a pan, add mustard seeds, urad dal, green chili, and curry leaves until golden.",
                "timer_seconds": 60,
                "tips": "Let urad dal turn crispy."
            },
            {
                "step_number": 3,
                "instruction": "Sauté sliced onions until soft, then add ginger garlic paste, chopped tomatoes, sambar powder, turmeric, and salt.",
                "timer_seconds": 300,
                "tips": "Ripe red tomatoes give vibrant color."
            },
            {
                "step_number": 4,
                "instruction": "Cook tomato masala on medium flame for 6 minutes until soft and oil separates.",
                "timer_seconds": 360,
                "tips": "Cook till tomato juices reduce."
            },
            {
                "step_number": 5,
                "instruction": "Add cooked rice to tomato masala, gently fold together until evenly coated, and simmer for 2 minutes.",
                "timer_seconds": 120,
                "tips": "Garnish with fresh coriander leaves."
            }
        ]
    }
]

# Simple mapping of ingredient synonyms for clean matching
SYNONYM_MAP = {
    "pyaz": "onion",
    "vengayam": "onion",
    "tamatar": "tomato",
    "thakkali": "tomato",
    "aloo": "potato",
    "urulaikizhangu": "potato",
    "arhar dal": "toor dal",
    "thuvaram paruppu": "toor dal",
    "chana": "chickpeas",
    "kondaikadala": "chickpeas",
    "jeera": "cumin seeds",
    "jeeragam": "cumin seeds",
    "kadugu": "mustard seeds",
    "rai": "mustard seeds",
    "manjal": "turmeric powder",
    "haldi": "turmeric powder",
    "gobi": "cauliflower",
    "poondhu": "garlic",
    "lahsun": "garlic",
    "inji": "ginger",
    "adrak": "ginger",
    "oil": "oil",
    "ghee": "ghee",
    "paneer": "paneer",
    "egg": "egg",
    "muttai": "egg",
    "curd": "curd",
    "dahi": "curd",
    "tayir": "curd",
    "coriander": "coriander leaves",
    "cilantro": "coriander leaves",
    "malliyilai": "coriander leaves",
    "palak": "spinach",
    "bhindi": "okra",
    "rajma": "kidney beans",
    "chicken": "chicken",
    "murgh": "chicken",
    "capsicum": "capsicum",
    "shimla mirch": "capsicum",
    "turkey berry": "sundakai"
}
