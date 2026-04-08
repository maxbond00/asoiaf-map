// Netlify Edge Function — ASOIAF Maester AI proxy
// Uses GEMINI_API_KEY (free tier) if set, falls back to ANTHROPIC_API_KEY.

const SYSTEM_PROMPT = `You are a master maester and lore scholar of the world of A Song of Ice and Fire — the complete book series by George R.R. Martin. You have encyclopedic knowledge of the books, not the TV show (though you can discuss the show if asked).

Your knowledge covers:
- All five published novels: A Game of Thrones (AGoT), A Clash of Kings (ACoK), A Storm of Swords (ASoS), A Feast for Crows (AFfC), A Dance with Dragons (ADwD)
- The World of Ice and Fire, Fire & Blood, the Tales of Dunk and Egg, published Winds of Winter sample chapters
- Semi-canon sources: GRRM's blog posts, convention Q&As, So Spake Martin

Discuss characters, history, geography, magic, houses, and all major theories (R+L=J, Azor Ahai/TPTWP, the Hooded Man, Euron's sorcery, Young Griff's heritage, the Others, CLEGANEBOWL, etc.). Distinguish canon from theory. Be enthusiastic, treat the user as a fellow fan, use markdown for clarity. No spoiler warnings needed.`;

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body;
  try { body = await req.json(); } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('Invalid messages', { status: 400 });
  }

  const clean = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content || '').slice(0, 4000),
  }));

  const geminiKey    = Deno.env.get('GEMINI_API_KEY');
  const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY');

  if (geminiKey) {
    // ── Gemini (free tier) ─────────────────────────────────────────────────
    const contents = clean.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { maxOutputTokens: 1200 },
        }),
      }
    );

    if (!upstream.ok) {
      const errText = await upstream.text();
      return new Response(errText, {
        status: upstream.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    return new Response(upstream.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'X-AI-Provider': 'gemini',
      },
    });
  }

  if (anthropicKey) {
    // ── Anthropic fallback ─────────────────────────────────────────────────
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1200,
        stream: true,
        system: SYSTEM_PROMPT,
        messages: clean,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      return new Response(errText, {
        status: upstream.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    return new Response(upstream.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'X-AI-Provider': 'anthropic',
      },
    });
  }

  return new Response(
    JSON.stringify({ error: { message: 'No API key configured on server.' } }),
    { status: 500, headers: { 'Content-Type': 'application/json' } }
  );
}
