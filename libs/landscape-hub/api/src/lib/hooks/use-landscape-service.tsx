import { getServicesOptions } from '../api/@tanstack/react-query.gen';
import {
  useQuery
} from '@tanstack/react-query';
export function useLandscapeService() {
  return useQuery(getServicesOptions());
}
