import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { NextRequest, NextResponse } from 'next/server'

import { searchSchema } from '@/schemas/search-schema'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { success, data, error } = searchSchema.safeParse(body)

  if (!success) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  const { search } = data

  try {
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: 'Gere 5 sugestões populares e diretas, sem introduções ou conclusões.',
      prompt: `Liste 5 sugestões do termo "${search}"`,
      maxTokens: 100,
      temperature: 0,
    })

    const suggestions = text
      .split('\n')
      .filter(Boolean)
      .map((line) => line.replace(/^\d+\.\s*/, '').trim())

    return NextResponse.json({ result: suggestions })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to generate suggestions' }, { status: 500 })
  }
}
