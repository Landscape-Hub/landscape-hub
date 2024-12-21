import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.number(),
  serviceName: z.string().min(1, {
    message: 'Service name is required',
  }),
  description: z.string().min(1, { message: 'Service Description is required' }),
  categoryId: z.number().min(1, { message: 'Service Category is required' }),
  categoryName: z.string().min(1, { message: 'Service Category is required' }),
  basePrice: z.number().min(1, { message: 'Base Price is required' }),
  costEstimate: z.number().min(1, { message: 'Cost Estimate is required' }),
  profitMarginTarget: z.number().min(1, { message: 'Profit Margin is required' }),
  pricingModel: z.string().min(1, { message: 'Pricing Model is required' }),
});

export type Service = z.infer<typeof serviceSchema>;
