import { putServicesByIdMutation } from '@landscape/api';
import { useMutation } from '@tanstack/react-query';

export function useUpdateService() {
  return useMutation(putServicesByIdMutation());
}
