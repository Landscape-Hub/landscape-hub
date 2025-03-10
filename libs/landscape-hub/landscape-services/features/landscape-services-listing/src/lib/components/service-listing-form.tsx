import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { serviceSchema } from '../data/schema'; // Adjust the import path
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Textarea,
} from '@landscape/shadcn';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';
import { useSheet } from '@landscape/contexts';
type Service = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
  service?: Service | null;
  isEditing?: boolean | null;
}

const ServiceListingForm: React.FC<ServiceFormProps> = ({
  service,
  isEditing,
}: ServiceFormProps) => {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: service || {},
    mode: 'onBlur'
  });

  const { handleUpdateService, handleCreateService } = useServicePresenter();

  // onSubmit handler
  async function onSubmit(serviceFormData: z.infer<typeof serviceSchema>) {
    try {
      if (isEditing) {
        await handleUpdateService(serviceFormData);
      } else {
        await handleCreateService(serviceFormData);
        console.log('create');
      }

      toast(`Service ${isEditing ? 'Updated' : 'Created'} Successfully`, {
        position: 'top-center',
        description: (
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
            <span>
              Service <strong>{serviceFormData.serviceName}</strong>{' '}
              {` has been ${isEditing ? 'updated' : 'created'}.`}
            </span>
          </div>
        ),
        duration: 5000,
        className: 'bg-green-50 border-green-200',
      });
    } catch (error: any) {
      toast.error(`Failed to update service`, {
        description: `Error while updating service ${error.message}`,
        position: 'top-right',
      });
    }
  }


  const {closeSheet} = useSheet();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/*Service Name */}
        <FormField
          name="serviceName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="serviceName">Service Name</FormLabel>
              <FormControl>
                <Input
                  id="serviceName"
                  type="text"
                  placeholder="Enter Service Name"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="serviceName">Description</FormLabel>
              <FormControl>
                <Textarea
                  id="description"
                  placeholder="Service description"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*/!* Category Name (Updated to use Select dropdown) *!/*/}
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="categoryId">Category Name</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={service?.categoryId?.toString() ?? '1'}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Plumbing Category</SelectItem>
                  <SelectItem value="2">Landscape Design Category</SelectItem>
                  <SelectItem value="3">Painting Category</SelectItem>
                  <SelectItem value="4">Roofing Category</SelectItem>
                  <SelectItem value="5">Flooring Category</SelectItem>
                  <SelectItem value="6">Electrical Category</SelectItem>
                  <SelectItem value="7">Pest Category</SelectItem>
                  <SelectItem value="8">Building Category</SelectItem>
                  <SelectItem value="9">Cleaning Category</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Base Price */}
        <FormField
          control={form.control}
          name="basePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="basePrice">Base Price (£)</FormLabel>
              <FormControl>
                <Input
                  id="basePrice"
                  type="number"
                  placeholder="Enter Base Price"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  value={
                    field.value
                      ? parseFloat(field.value.toString()).toFixed(2)
                      : ''
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*/!* Cost Estimate *!/*/}
        <FormField
          control={form.control}
          name="costEstimate"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="costEstimate">Cost Estimate (£)</FormLabel>
              <FormControl>
                <Input
                  id="costEstimate"
                  type="number"
                  placeholder="Enter Cost Estimate"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  value={
                    field.value
                      ? parseFloat(field.value.toString()).toFixed(2)
                      : ''
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*/!* Profit Margin Target *!/*/}
        <FormField
          control={form.control}
          name="profitMarginTarget"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="profitMarginTarget">
                Profit Margin Target %
              </FormLabel>
              <FormControl>
                <Input
                  id="profitMarginTarget"
                  type="number"
                  placeholder="Enter Profit Margin Target"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*/!* Pricing Model *!/*/}
        <FormField
          control={form.control}
          name="pricingModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="pricingModel">Pricing Model</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={service?.pricingModel ?? 'Fixed'}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Pricing Model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Fixed">Fixed</SelectItem>
                    <SelectItem value="Hourly">Hourly</SelectItem>
                    <SelectItem value="Project Based">Project Based</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 justify-end">
          {/* Submit Button */}
          <Button variant="outline"
                  onClick={()=> closeSheet()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
);
};

export default ServiceListingForm;
