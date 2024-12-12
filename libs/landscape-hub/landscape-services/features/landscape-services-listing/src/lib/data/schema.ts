import { z } from "zod"

export const serviceSchema = z.object({
  id: z.number().optional(),
  serviceName: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  categoryName: z.string().nullable().optional(),
  basePrice: z.number().optional(),
  costEstimate: z.number().optional(),
  profitMarginTarget: z.number().optional(),
  pricingModel: z.string().nullable().optional(),
})

export type Service = z.infer<typeof serviceSchema>
