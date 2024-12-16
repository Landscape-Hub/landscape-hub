import {
  deleteServicesByIdMutation,
  getServiceQueryKey,
  getServicesOptions,
} from '../api/@tanstack/react-query.gen';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ServiceDto } from '../api/types.gen';
import { useState, useCallback } from 'react';

export function useLandscapeService() {

  const queryClient = useQueryClient();

  const services = useQuery(getServicesOptions());

  const [selectedService, setSelectedService] = useState<ServiceDto | null>(null);
  const handleSelectService = useCallback((service: ServiceDto) => {
    setSelectedService(service);
  }, []);

  const deleteService = useMutation(deleteServicesByIdMutation());

  const handleDeleteService = async (serviceId: number) => {
    try {
      await deleteService.mutateAsync({
        path: {
          id: serviceId,
        },
      });

      const serviceQueryKey = getServiceQueryKey({
        path: {
          id: serviceId,
        },
      });

      await queryClient.invalidateQueries({
        queryKey: serviceQueryKey,
      });
    } catch (error) {
      console.error('Failed to delete Service ', error);
    }
  };

  return {
    serviceList: (services.data as ServiceDto[]) ?? [],
    isLoading: services.isLoading,
    aervivcesIsError: services.isError,
    error: services.error,
    refetch: services.refetch,
    handleDeleteService,
    selectedService,
    handleSelectService
  };
}
