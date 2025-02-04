'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

import { searchSchema } from '@/schemas/search-schema'
import { ActionState, fromErrorToActionState } from '@/utils/form-helper'

type State = ActionState<string[]> | null

type FnSearchAction = (state: State, data: FormData | null) => Promise<State>

export const searchAction: FnSearchAction = async (_actionState, formData) => {
  try {
    if (formData === null) return null

    const { search } = searchSchema.parse(Object.fromEntries(formData))

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

    return { data: suggestions, message: '', fieldErrors: {}, formKey: Date.now().toString() }
  } catch (error) {
    const { message, fieldErrors } = fromErrorToActionState(error)

    return {
      data: null,
      message,
      fieldErrors,
      formKey: Date.now().toString(),
    }
  }
}
