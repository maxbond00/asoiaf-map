# ASOIAF Interactive Map

An interactive map, character relationship graph, historical timeline, and AI chat for *A Song of Ice and Fire* by George R.R. Martin.

**Live site:** https://maxbond00.github.io/asoiaf-map/

---

## Features

- **Map** — Track character locations across all five books
- **Relations** — Interactive force-directed character relationship graph
- **History** — Illustrated timeline of major ASOIAF eras
- **Ask** — AI-powered chatbot with deep ASOIAF lore knowledge (no login required when deployed to Vercel)

---

## Enabling the AI Chat Tab (one-time setup)

The Ask tab uses Claude (by Anthropic) to answer lore questions. The API key is kept **server-side** on Vercel — visitors never see it and never need to log in.

### What you need
- A free [Vercel](https://vercel.com) account
- A free [Anthropic](https://console.anthropic.com) account (you'll need to add a small credit — roughly $5 lasts thousands of questions at ~$0.001 each)

---

### Step 1 — Get an Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com) and sign up (free)
2. Click **API Keys** in the left sidebar
3. Click **Create Key**, give it a name (e.g. `asoiaf-map`), copy the key — it starts with `sk-ant-`
4. Go to **Billing** and add a small credit ($5 is plenty)

---

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in with your GitHub account
2. Click **Add New → Project**
3. Find **asoiaf-map** in your repository list and click **Import**
4. Before clicking Deploy, open the **Environment Variables** section:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste your `sk-ant-…` key from Step 1
   - Click **Add**
5. Click **Deploy**

Vercel will build and host the site in about 60 seconds. Your new URL will be something like `asoiaf-map.vercel.app`.

---

### Step 3 — Share the Vercel URL

Use the Vercel URL (`asoiaf-map.vercel.app`) instead of the GitHub Pages link. The Ask tab will work for every visitor with no login, no API key prompt, and no cost to them.

> **GitHub Pages URL** (`maxbond00.github.io/asoiaf-map/`) still works for the map, relations, and history tabs — just not the AI chat, since GitHub Pages can't run server-side code.

---

### Updating the site later

Any `git push` to the `main` branch automatically redeploys on Vercel within ~30 seconds. The GitHub Pages link also updates automatically.

---

## Local development

```bash
npx serve .
# open http://localhost:3000
```

The Ask tab won't work locally (the `/api/ask` endpoint requires Vercel), but everything else does.
