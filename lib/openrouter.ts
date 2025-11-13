// Free models on OpenRouter
export const FREE_MODELS = [
  'google/gemini-pro',
  'google/gemini-pro-vision',
  'meta-llama/llama-3.2-3b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
  'qwen/qwen-2.5-7b-instruct:free',
]

export const DEFAULT_MODEL = 'google/gemini-pro'

export async function callOpenRouter(
  messages: Array<{ role: string; content: string }>,
  model: string = DEFAULT_MODEL
) {
  const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || 
    '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'

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://rtrvr.vercel.app',
      'X-Title': 'Rtrvr AI Agent',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`OpenRouter API error: ${error}`)
  }

  const data = await response.json()
  return data.choices[0]?.message?.content || ''
}

