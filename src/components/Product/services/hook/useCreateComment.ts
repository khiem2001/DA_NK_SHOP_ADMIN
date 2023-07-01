import Notification from '@/components/Notification';
import { useCreateCommentAdminMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useCreateCommentAdmin = () => {
  const queryClient = useQueryClient();
  const { mutate: createCommentAdmin, isLoading } = useCreateCommentAdminMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data?.createCommentAdmin?.productId) {
        Notification.Success('Phản hồi thành công!');
        queryClient.invalidateQueries(['getListComment']);
        queryClient.invalidateQueries(['getListFeedback']);
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleCreateCommentAdmin = useCallback(
    (message: string, productId: string, parentId: string) => {
      return createCommentAdmin({
        input: {
          message,
          productId,
          parentId
        }
      });
    },
    [createCommentAdmin]
  );

  return { handleCreateCommentAdmin, isLoading };
};
export default useCreateCommentAdmin;
