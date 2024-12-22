import { z } from 'zod'

export const updateTaskSchema = z.object({
  id: z
    .string({
      required_error: 'ID da tarefa é obrigatório',
    })
    .min(1, 'ID da tarefa é obrigatório'),
  title: z
    .string({
      required_error: 'Título da tarefa é obrigatório',
    })
    .min(1, 'Título da tarefa é obrigatório')
    .transform((value) => value.trim()),
})

export type UpdateTaskForm = z.infer<typeof updateTaskSchema>
