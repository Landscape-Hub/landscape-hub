import { z } from "zod"

export const serviceSchema = z.object({
  id: z.string(),
  serviceName: z.string(),
  description: z.string(),
})

export type Service = z.infer<typeof serviceSchema>
