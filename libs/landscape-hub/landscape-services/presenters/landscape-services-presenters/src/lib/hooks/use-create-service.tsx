import { postServicesMutation } from '@landscape/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateService() {
  const createServiceMutation = useMutation(postServicesMutation());

  return createServiceMutation;
}
