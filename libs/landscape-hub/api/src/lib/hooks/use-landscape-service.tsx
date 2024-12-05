import { getServicesOptions } from '../api/@tanstack/react-query.gen';
import {
  useQuery
} from '@tanstack/react-query';
import { ServiceDto } from '../api';
export function useLandscapeService() {
  const landscapeServices = useQuery(getServicesOptions());

  return {
    landscapeServices: landscapeServices.data as ServiceDto[],
  }
}
