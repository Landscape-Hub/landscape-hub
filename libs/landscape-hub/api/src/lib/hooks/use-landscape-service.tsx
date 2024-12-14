import {
  deleteServicesByIdMutation,
  getServiceQueryKey,
  getServicesOptions,
  postServicesMutation,
  postServicesQueryKey,
  putServicesByIdMutation,
} from '../api/@tanstack/react-query.gen';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ServiceDto } from '@landscape/api';

export function useLandscapeService() {
   // return useQuery(getServicesOptions());

  const queryClient = useQueryClient();

  const services = useQuery(getServicesOptions());

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
      console.error('Failed to create Service ', error);
    }
  };

  return {
    serviceList: (services.data as ServiceDto[]) ?? [],
    isLoading: services.isLoading,
    isError: services.isError,
    error: services.error,
    refetch: services.refetch,
    handleDeleteService,
  };
}
