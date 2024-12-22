import { ZodError } from 'zod'

type ErrorState = {
  message: string
  fieldErrors: Record<string, string[] | undefined>
}

export type ActionState<T> = ErrorState & {
  formKey: string
  data: T | null
}

export const fromErrorToActionState = (error: unknown): ErrorState => {
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

export const toActionState = (message: string): ErrorState => ({
  message,
  fieldErrors: {},
})
