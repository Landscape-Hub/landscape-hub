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

type Service = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
  service: Service | null;
}

const ServiceListingForm: React.FC<ServiceFormProps> = ({
  service,
}: ServiceFormProps) => {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: service || {},
  });

  const { handleUpdateService } = useServicePresenter();

  // onSubmit handler
  function onSubmit(values: z.infer<typeof serviceSchema>) {
    console.log(values);
    handleUpdateService(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-200"
      >
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
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : undefined
                    )
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
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : undefined
                    )
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
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : undefined
                    )
                  } // <-- Convert string to number here
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
                  defaultValue={service?.pricingModel ?? 'Hourly'}
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

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ServiceListingForm;
