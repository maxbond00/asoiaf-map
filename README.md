# ASOIAF Interactive Map

An interactive map, character relationship graph, historical timeline, and AI chat for *A Song of Ice and Fire* by George R.R. Martin.

**Live site:** https://maxbond00.github.io/asoiaf-map/

---

## Features

- **Map** — Track character locations across all five books
- **Relations** — Interactive force-directed character relationship graph
- **History** — Illustrated timeline of major ASOIAF eras
- **Ask** — Free AI chatbot with deep ASOIAF lore knowledge (no login required for visitors)

---

## Enabling the AI Chat Tab — Free Setup

The Ask tab uses Google Gemini (completely free, no credit card) to answer lore questions. The API key is kept server-side on Netlify — visitors never see it and never need to log in.

---

### Step 1 — Get a free Gemini API key (no credit card required)

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and sign in with your Google account
2. Click **Create API key**
3. Copy the key — it starts with `AIza`

That's it. Google's free tier allows **1,500 requests per day** — more than enough for a fan site.

---

### Step 2 — Deploy to Netlify (free hosting)

1. Go to [netlify.com](https://netlify.com) and sign up / log in with GitHub
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** → select **asoiaf-map**
4. Leave all build settings blank (it's a static site, no build command needed)
5. Click **Environment variables** and add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** paste your `AIza…` key from Step 1
6. Click **Deploy site**

Netlify builds and hosts it in about 30 seconds. Your URL will be something like `asoiaf-map.netlify.app`.

---

### Step 3 — Share the Netlify URL

Use the Netlify URL as your shareable link. The Ask tab works for every visitor — no login, no key, no cost to them.

> The GitHub Pages URL (`maxbond00.github.io/asoiaf-map/`) still works for the map, relations, and history tabs — just not AI chat, since GitHub Pages can't run server-side code.

---

### Updating the site later

Any `git push` to the `main` branch automatically redeploys on Netlify. The GitHub Pages link also updates automatically.

---

## Alternative: paid AI providers

If you prefer a different AI model, you can also set:
- `ANTHROPIC_API_KEY` (starts with `sk-ant-`) — uses claude-haiku, ~$0.001/query
- `OPENAI_API_KEY` is **not** supported server-side (use a personal key in the UI instead)

The server checks for `GEMINI_API_KEY` first, then `ANTHROPIC_API_KEY`.

---

## Local development

```bash
npx serve .
# open http://localhost:3000
```

The Ask tab won't work locally (the `/api/ask` endpoint requires a deployed server), but everything else does.
