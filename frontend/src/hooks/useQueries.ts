import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { DealerInquiry } from '../backend';

export function useSubmitDealerInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, phone }: { name: string; email: string; phone: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitDealerInquiry(name, email, phone);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dealerInquiries'] });
    },
  });
}

export function useGetDealerInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<DealerInquiry[]>({
    queryKey: ['dealerInquiries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDealerInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}
