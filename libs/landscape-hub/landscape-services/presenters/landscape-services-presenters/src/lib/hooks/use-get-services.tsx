import { useQuery } from '@tanstack/react-query';
import { getServicesOptions } from '@landscape/api';
import { ServiceDto } from '@landscape/api';

export function useGetServices() {

  const services = useQuery(getServicesOptions());

  return {
    serviceList: (services.data as ServiceDto[]) ?? [],
    isLoading: services.isLoading,
    IsError: services.isError,
    error: services.error?.message,
    refetch: services.refetch,
  }
}
