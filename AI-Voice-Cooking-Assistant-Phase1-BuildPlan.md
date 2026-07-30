# AI Voice Cooking Assistant — Phase 1 Build Plan
### Project codename: (pick one — "RasoiAI", "PakaSaar", "SwaadAI", or your own)

---

## 1. Project Scope (Phase 1 only)

**Goal:** A working web app (PWA-ready) where a user either:
- **Mode A (Recipe-first):** picks an Indian recipe → gets step-by-step instructions with TTS voice narration
- **Mode B (Ingredient-first):** types/speaks a list of ingredients they have → app matches against a curated recipe dataset and returns the best-fit recipe(s)

**Explicitly OUT of scope for Phase 1** (saved for later phases):
- Camera-based cup/measurement calibration
- Full two-way voice conversation (STT commands like "next step", "repeat")
- LLM-generated fallback recipes (hybrid matching — Phase 2)
- Multi-language voice (Tamil/Hindi) — nice-to-have later

Keeping scope tight here is what makes this buildable solo in 3-4 weekends without touching your DSA study time.

---

## 2. Tech Stack (matches your existing setup)

| Layer | Tool |
|---|---|
| Frontend | React + Vite + Tailwind |
| Backend | FastAPI |
| Database | Supabase (Postgres) — store recipes + ingredients |
| Voice (TTS only, Phase 1) | Web Speech API (`speechSynthesis`) — free, browser-native, no API cost |
| Hosting | Vercel (frontend) + Render (backend) — your usual free-tier combo |
| IDE | Google Antigravity |

No LLM API needed yet for Phase 1 — matching is pure algorithm, not AI-generated. This keeps Phase 1 fast, free, and predictable.

---

## 3. Data Model (Supabase tables)

### `recipes`
| Column | Type | Notes |
|---|---|---|
| id | uuid | primary key |
| name | text | e.g. "Sambar" |
| region | text | e.g. "Tamil Nadu" |
| cook_time_mins | int | |
| servings | int | default serving size |
| steps | jsonb | array of `{step_number, instruction, timer_seconds (nullable)}` |
| created_at | timestamp | |

### `ingredients`
| Column | Type | Notes |
|---|---|---|
| id | uuid | primary key |
| name | text | normalized lowercase, e.g. "toor dal" |
| category | text | e.g. "lentil", "spice", "vegetable" |

### `recipe_ingredients` (join table)
| Column | Type | Notes |
|---|---|---|
| recipe_id | uuid | FK → recipes |
| ingredient_id | uuid | FK → ingredients |
| quantity | numeric | e.g. 1 |
| unit | text | e.g. "cup", "tsp", "piece" |
| is_optional | boolean | for garnish/optional items |

**Why this structure:** separating `ingredients` as its own table (instead of a text array inside recipes) is what makes the matching algorithm clean — you're joining on ingredient IDs, not fuzzy-matching strings every time.

---

## 4. Ingredient Matching Algorithm (core logic)

```
1. User submits ingredient list → normalize (lowercase, trim, map synonyms
   e.g. "onion" == "pyaz" == "vengayam")
2. For each recipe in DB:
     required = non-optional ingredients for that recipe
     matched = intersection(user_ingredients, required)
     match_percent = len(matched) / len(required) * 100
3. Sort recipes by match_percent descending
4. Return top 5 where match_percent >= 60%
5. If matched < 100%, show "You're missing: X, Y" so user knows the gap
```

This alone is enough to feel "smart" without needing any AI/LLM call — good for a fast, reliable MVP.

---

## 5. Voice Narration (Phase 1 — TTS only)

Use the browser's built-in Web Speech API — zero backend cost, works offline once page loaded:

```javascript
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // slightly slower for cooking clarity
  utterance.lang = "en-IN"; // Indian English accent if available
  window.speechSynthesis.speak(utterance);
}
```

Each recipe step gets a "🔊 Play" button (or auto-play sequentially with a "Next Step" button) that calls `speak(step.instruction)`.

---

## 6. Timer Feature (Phase 1)

Since each step in the `steps` jsonb can carry an optional `timer_seconds`, the frontend simply:
1. Detects if current step has a timer value
2. Shows a countdown UI component
3. On completion → plays a sound + optionally auto-speaks "Time's up, move to next step"

No backend needed for this — pure frontend state (`useState` + `setInterval`).

---

## 7. Build Order (recommended sequence)

**Weekend 1 — Backend + Data**
- Set up Supabase project, create the 3 tables above
- Manually seed 20-30 recipes (start with ones you know — Tamil Nadu dishes: sambar, rasam, poriyal, etc.)
- Build FastAPI endpoints:
  - `GET /recipes` — list all
  - `GET /recipes/{id}` — single recipe with steps + ingredients
  - `POST /match-ingredients` — takes ingredient list, returns ranked matches

**Weekend 2 — Frontend core**
- React/Vite setup, Tailwind styling (reuse your blueprint-grid aesthetic if you like the look)
- Recipe browse/list page (Mode A)
- Recipe detail page with step-by-step view + TTS play button

**Weekend 3 — Ingredient matching UI**
- Ingredient input page (Mode B) — simple multi-select or tag input
- Results page showing ranked recipe matches + "missing ingredients" note
- Wire matching logic to backend endpoint

**Weekend 4 — Timer + polish**
- Add timer component to step view
- Test full flow end-to-end
- Deploy: FastAPI → Render, React → Vercel
- Basic auth (optional) if you want saved favorites — can skip for MVP

---

## 8. What "Done" Looks Like for Phase 1

A user can:
1. Open the PWA
2. Either browse recipes OR type in ingredients they have
3. Get a recipe with clear steps
4. Hear each step read aloud
5. See a timer countdown for steps that need one

That's a complete, demoable, portfolio-worthy product — without touching computer vision at all.

---

## 9. What Comes Next (Phase 2 preview — don't build yet)

- Add STT (voice commands: "next", "repeat", "start timer")
- Add LLM (Groq/Gemini) fallback for ingredient combos not in curated dataset — this is where "hybrid" kicks in
- Expand recipe dataset (50 → 200+)

Phase 3 (camera cup calibration) stays parked until Phase 1 + 2 are solid and you have a real block of free time (semester break).

---

**Next step:** Once you're ready to start coding, come back and I'll help you scaffold the actual FastAPI + Supabase schema code, or the React project structure — whichever you want to tackle first.
