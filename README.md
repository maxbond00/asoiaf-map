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
- An API key from **one** of these providers (your choice):
  - [Anthropic](https://console.anthropic.com) — key starts with `sk-ant-` — ~$0.001/query with claude-haiku
  - [OpenAI](https://platform.openai.com/api-keys) — key starts with `sk-` — ~$0.002/query with gpt-4o-mini
  - [Google Gemini](https://aistudio.google.com/apikey) — key starts with `AIza` — free tier available

---

### Step 1 — Get an API key

Pick any one provider:

**Anthropic (recommended — cheapest)**
1. Go to [console.anthropic.com](https://console.anthropic.com) and sign up
2. Click **API Keys → Create Key**, copy the `sk-ant-…` key
3. Add a small credit under **Billing** ($5 lasts thousands of chats)

**OpenAI**
1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and sign up
2. Click **Create new secret key**, copy the `sk-…` key
3. Add credit under **Billing**

**Google Gemini**
1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and sign in
2. Click **Create API key**, copy the `AIza…` key
3. Gemini has a free tier — no billing required to start

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
