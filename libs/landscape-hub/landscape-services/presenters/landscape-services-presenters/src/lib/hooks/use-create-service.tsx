import { postServicesMutation } from '@landscape/api';
import { useMutation } from '@tanstack/react-query';

export function useCreateService() {
  return useMutation(postServicesMutation());
}
