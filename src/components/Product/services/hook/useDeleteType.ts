import Notification from '@/components/Notification';
import { useDeleteTypeMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useDeleteType = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteType, isLoading } = useDeleteTypeMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data.deleteType.success) {
        queryClient.invalidateQueries(['ListType']);
        Notification.Success('Xoá thành công!');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleDeleteType = useCallback(
    (values: any) => {
      return deleteType({
        input: values
      });
    },
    [deleteType]
  );

  return { handleDeleteType, isLoading };
};
export default useDeleteType;
