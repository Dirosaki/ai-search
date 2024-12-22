'use server'

import { createTaskSchema } from '@/schemas/create-task-schema'
import { TaskProps } from '@/store/slices/task-slice'
import { ActionState, fromErrorToActionState } from '@/utils/form-helper'

type State = ActionState<TaskProps> | null

type FnCreateTaskAction = (state: State, data: FormData | null) => Promise<State>

export const createTaskAction: FnCreateTaskAction = async (_, formData) => {
  try {
    if (formData === null) return null

    const { title } = createTaskSchema.parse(Object.fromEntries(formData))

    const task = {
      id: crypto.randomUUID(),
      title,
      checked: false,
    } satisfies TaskProps

    return { data: task, message: '', fieldErrors: {}, formKey: Date.now().toString() }
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
