import { NextRequest, NextResponse } from 'next/server'
import { callOpenRouter } from '@/lib/openrouter'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { messages, model } = body

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and must not be empty' },
        { status: 400 }
      )
    }

    // Validate each message
    for (const msg of messages) {
      if (!msg || typeof msg !== 'object') {
        return NextResponse.json(
          { error: 'Each message must be an object' },
          { status: 400 }
        )
      }
      if (!msg.role || !msg.content) {
        return NextResponse.json(
          { error: 'Each message must have role and content fields' },
          { status: 400 }
        )
      }
    }

    // Add system message if not present
    let enhancedMessages = [...messages]
    const hasSystemMessage = messages.some((msg: any) => msg.role === 'system')
    
    if (!hasSystemMessage) {
      enhancedMessages = [
        {
          role: 'system',
          content: 'You are a helpful AI assistant. Provide clear and helpful responses.'
        },
        ...messages
      ]
    }

    // Call OpenRouter API
    const response = await callOpenRouter(enhancedMessages, model)

    // Validate response
    if (!response || typeof response !== 'string' || response.trim() === '') {
      return NextResponse.json(
        { error: 'Empty response from AI' },
        { status: 500 }
      )
    }

    return NextResponse.json({ response })
  } catch (error: any) {
    // Log error for debugging
    console.error('Chat API error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })

    // Return user-friendly error
    return NextResponse.json(
      { 
        error: error.message || 'Failed to get AI response',
        // Only include stack in development
        ...(process.env.NODE_ENV === 'development' && { 
          details: error.stack,
          name: error.name 
        })
      },
      { status: 500 }
    )
  }
}
