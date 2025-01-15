import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.number(),
  serviceName: z.string().min(1, {
    message: 'Service name is required',
  }),
  description: z.string().min(1, { message: 'Service Description is required' }),
  categoryId: z.number().min(1, { message: 'Service Category is required' }),
  categoryName: z.string(),
  basePrice: z.coerce.number().positive("Base price must be positive"),
  costEstimate: z.coerce.number().positive("Cost estimate must be positive"),
  profitMarginTarget: z.number().min(1, { message: 'Profit Margin is required' }),
  pricingModel: z.string().min(1, { message: 'Pricing Model is required' }),
}).refine((data) => data.basePrice > data.costEstimate, {
  message: 'Base price must be greater than cost estimate',
  path: ['basePrice'],
});

export type Service = z.infer<typeof serviceSchema>;

/*
* const formSchema = z.object({
  basePrice: z.string().refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num > 0;
  }, {
    message: "Base price must be a positive number",
  }),
  costEstimate: z.string().refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num > 0;
  }, {
    message: "Cost estimate must be a positive number",
  }),
}).refine((data) => {
  const basePrice = parseFloat(data.basePrice);
  const costEstimate = parseFloat(data.costEstimate);
  return basePrice > costEstimate;
}, {
  message: "Base price must be greater than cost estimate",
  path: ["basePrice"],
});
*
* */
