import { NextRequest, NextResponse } from 'next/server'
import { callOpenRouter } from '@/lib/openrouter'

export async function POST(request: NextRequest) {
  try {
    const { messages, model } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Enhanced system prompt for web agent capabilities
    const enhancedMessages = messages.map((msg: any, index: number) => {
      if (index === 0 && msg.role === 'system') {
        return {
          ...msg,
          content: `${msg.content}\n\nYou are an AI web agent. When users ask you to interact with websites, provide clear instructions or JSON responses with actions like:
- {"action": "click", "selector": "button.search"}
- {"action": "type", "selector": "input[name='q']", "text": "search term"}
- {"action": "extract", "selector": ".results"}
- {"action": "navigate", "url": "https://example.com"}

Always be helpful and provide actionable responses.`
        }
      }
      return msg
    })

    const response = await callOpenRouter(enhancedMessages, model)

    return NextResponse.json({ response })
  } catch (error: any) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to get AI response' },
      { status: 500 }
    )
  }
}
