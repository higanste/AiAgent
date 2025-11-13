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

  // Clean the site URL (remove trailing slash)
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yuriai.vercel.app'
  if (siteUrl.endsWith('/')) {
    siteUrl = siteUrl.slice(0, -1)
  }

  // Validate messages
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    throw new Error('Messages array is required and must not be empty')
  }

  // Ensure all messages have required fields
  const validMessages = messages.map((msg) => {
    if (!msg.role || !msg.content) {
      throw new Error('Each message must have role and content')
    }
    return {
      role: msg.role,
      content: String(msg.content)
    }
  })

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': siteUrl,
        'X-Title': 'Rtrvr AI Agent',
      },
      body: JSON.stringify({
        model: model || DEFAULT_MODEL,
        messages: validMessages,
        temperature: 0.7,
        max_tokens: 2000,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorMessage = `OpenRouter API error (${response.status}): ${errorText}`
      
      // Try to parse as JSON for better error message
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.error?.message || errorJson.error || errorMessage
      } catch {
        // Keep the text error
      }
      
      throw new Error(errorMessage)
    }

    const data = await response.json()
    
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      throw new Error('Invalid response format from OpenRouter API')
    }

    const content = data.choices[0]?.message?.content
    if (!content || content.trim() === '') {
      throw new Error('Empty response from AI model')
    }

    return content
  } catch (error: any) {
    // Re-throw with more context
    if (error.message) {
      throw error
    }
    throw new Error(`Failed to call OpenRouter API: ${error.message || 'Unknown error'}`)
  }
}

