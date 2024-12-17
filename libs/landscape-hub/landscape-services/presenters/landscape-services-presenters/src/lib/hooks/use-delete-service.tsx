import { deleteServicesByIdMutation } from '@landscape/api';
import { useMutation } from '@tanstack/react-query';

export function useDeleteService() {
  const deleteServiceMutation = useMutation(deleteServicesByIdMutation());

  return deleteServiceMutation;
}
