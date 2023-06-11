import { useConfirmOrderMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useConfirmOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: confirmOrder, isLoading: confirmOrderLoading } = useConfirmOrderMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data.confirmOrder) {
        queryClient.invalidateQueries(['listOrderAdmin']);
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleConfirmOrder = useCallback(
    (orderId: string) => {
      return confirmOrder({
        input: {
          orderId
        }
      });
    },
    [confirmOrder]
  );

  return { handleConfirmOrder, confirmOrderLoading };
};
export default useConfirmOrder;
