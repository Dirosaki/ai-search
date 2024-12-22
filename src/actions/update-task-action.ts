'use server'

import { updateTaskSchema } from '@/schemas/update-task-schema'
import { TaskProps } from '@/store/slices/task-slice'
import { ActionState, fromErrorToActionState } from '@/utils/form-helper'

type State = ActionState<Omit<TaskProps, 'checked'>> | null

type FnUpdateTaskAction = (state: State, data: FormData | null) => Promise<State>

export const updateTaskAction: FnUpdateTaskAction = async (_, formData) => {
  try {
    if (formData === null) return null

    const { id, title } = updateTaskSchema.parse(Object.fromEntries(formData))

    return { data: { id, title }, message: '', fieldErrors: {}, formKey: Date.now().toString() }
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
