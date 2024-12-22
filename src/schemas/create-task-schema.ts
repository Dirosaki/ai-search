import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: 'Título da tarefa é obrigatório',
    })
    .min(1, 'Título da tarefa é obrigatório')
    .transform((value) => value.trim()),
})

export type CreateTaskForm = z.infer<typeof createTaskSchema>
