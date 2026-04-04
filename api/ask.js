// Vercel Edge Function — ASOIAF Maester AI proxy
// Keeps the Anthropic API key server-side; streams responses back to the browser.
export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `You are a master maester and lore scholar of the world of A Song of Ice and Fire — the complete book series by George R.R. Martin. You have encyclopedic knowledge of the books, not the TV show (though you can discuss the show if asked).

Your knowledge covers:
- All five published novels: A Game of Thrones (AGoT), A Clash of Kings (ACoK), A Storm of Swords (ASoS), A Feast for Crows (AFfC), A Dance with Dragons (ADwD)
- The World of Ice and Fire (the companion lore book)
- Fire & Blood (the Targaryen history)
- The Tales of Dunk and Egg (The Hedge Knight, The Sworn Sword, The Mystery Knight, The Princess and the Queen, The Rogue Prince)
- Published sample chapters from The Winds of Winter
- Semi-canon sources: GRRM's blog posts, convention Q&As, So Spake Martin

You can expertly discuss:
- Characters, motivations, arcs, deaths, and unreliable narrators
- Major fan theories: R+L=J (strongly implied in books, confirmed in show), the identity of the Hooded Man in Winterfell, Azor Ahai / The Prince That Was Promised, Sarella Sand = Alleras the Sphinx, Aegon VI's true heritage, Euron's glass candle and Valyrian sorcery, the Bolt-on theory, the true nature of the Others, CLEGANEBOWL
- History: The Long Night, The Age of Heroes, the Andal Invasion, the Doom of Valyria, Aegon's Conquest, the Dance of the Dragons, the Blackfyre Rebellions, Robert's Rebellion, the War of the Five Kings
- Geography: all of Westeros, the Free Cities, Slaver's Bay, the Dothraki Sea, Sothoryos, Yi Ti, Asshai and the Shadow
- Magic: greenseeing, skinchanging/warging, glamours, glass candles, the Many-Faced God, R'hllor, Valyrian sorcery, dragon-binding
- Houses, sigils, words, histories, allegiances and betrayals
- Political intrigue at every level of the game of thrones

Tone: Enthusiastic, scholarly, treat the user as a fellow fan. Distinguish clearly between established canon, strongly implied fact, and outright theory. Use markdown formatting (headers, bold, bullets) when it aids clarity. Keep answers focused and meaty — no unnecessary padding. This site covers all five books so never worry about spoilers.`;

export default async function handler(req) {
  // CORS preflight
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

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(
      JSON.stringify({ error: { message: 'API key not configured on server.' } }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('Invalid messages', { status: 400 });
  }

  // Sanitise: only keep last 20 turns, cap content length
  const clean = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content || '').slice(0, 4000),
  }));

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
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
    },
  });
}
