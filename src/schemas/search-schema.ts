import { z } from 'zod'

export const searchSchema = z.object({
  search: z
    .string()
    .min(1, 'Nenhum termo de busca foi inserido')
    .transform((value) => value.trim()),
})

export type SearchFormData = z.infer<typeof searchSchema>
