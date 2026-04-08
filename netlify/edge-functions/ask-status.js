// Debug endpoint — tells you which key is configured without revealing the key itself.
// Visit /api/ask-status in your browser to check.
export default async function handler(req) {
  const geminiKey    = (Deno.env.get('GEMINI_API_KEY') || '').trim();
  const anthropicKey = (Deno.env.get('ANTHROPIC_API_KEY') || '').trim();

  const info = {
    gemini:    geminiKey    ? `set (starts with "${geminiKey.slice(0,6)}…", length ${geminiKey.length})` : 'NOT SET',
    anthropic: anthropicKey ? `set (starts with "${anthropicKey.slice(0,6)}…", length ${anthropicKey.length})` : 'NOT SET',
    activeProvider: geminiKey ? 'gemini' : anthropicKey ? 'anthropic' : 'none — add GEMINI_API_KEY to Netlify env vars',
  };

  return new Response(JSON.stringify(info, null, 2), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
