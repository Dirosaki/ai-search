'use server'

import axios from 'axios'

import { searchSchema } from '@/schemas/search-schema'
import { ActionState, fromErrorToActionState } from '@/utils/form-helper'

type SearchResponse = {
  result: string[]
}

type State = ActionState<string[]> | null

type FnSearchAction = (state: State, data: FormData | null) => Promise<State>

export const searchAction: FnSearchAction = async (_actionState, formData) => {
  try {
    if (formData === null) return null

    const { search } = searchSchema.parse(Object.fromEntries(formData))

    const { data } = await axios.post<SearchResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/suggestions`,
      {
        search,
      }
    )

    return { data: data.result, message: '', fieldErrors: {}, formKey: Date.now().toString() }
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
