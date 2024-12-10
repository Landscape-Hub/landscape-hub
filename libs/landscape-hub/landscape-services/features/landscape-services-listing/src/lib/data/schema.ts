import { z } from "zod"

export const serviceSchema = z.object({
  id: z.number().optional(),
  serviceName: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  categoryName: z.string().nullable().optional(),
})

export type Service = z.infer<typeof serviceSchema>
