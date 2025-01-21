import { deleteServicesByIdMutation } from '@landscape/api';
import { useMutation } from '@tanstack/react-query';

export function useDeleteService() {
  return useMutation(deleteServicesByIdMutation());
}
