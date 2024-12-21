import { ZodError } from 'zod'

export type ActionState = {
  message: string
  fieldErrors: Record<string, string[] | undefined>
}

export const EMPTY_STATE: ActionState = {
  message: '',
  fieldErrors: {},
}

export const fromErrorToActionState = (error: unknown): ActionState => {
  if (error instanceof ZodError) {
    return {
      message: 'Por favor, corrija os erros do formulário.',
      fieldErrors: error.flatten().fieldErrors,
    }
  }
  if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
    }
  }
  return {
    message: 'Um erro desconhecido ocorreu.',
    fieldErrors: {},
  }
}

export const toActionState = (message: string): ActionState => ({
  message,
  fieldErrors: {},
})
