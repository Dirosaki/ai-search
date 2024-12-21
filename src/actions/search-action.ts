'use server'

import axios from 'axios'

import { searchSchema } from '@/schemas/search-schema'
import { ActionState, fromErrorToActionState } from '@/utils/form-helper'

type SearchResponse = {
  result: string[]
}

export const searchAction = async (
  _actionState: ActionState | string[] | null,
  formData: FormData | null
) => {
  try {
    if (formData === null) return null

    const { search } = searchSchema.parse(Object.fromEntries(formData))

    const { data } = await axios.post<SearchResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/suggestions`,
      {
        search,
      }
    )

    return data.result
  } catch (error) {
    return fromErrorToActionState(error)
  }
}
