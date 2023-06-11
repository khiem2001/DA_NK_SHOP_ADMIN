import Notification from '@/components/Notification';
import { useDeleteProductMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct, isLoading } = useDeleteProductMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data.deleteProduct.success) {
        queryClient.invalidateQueries(['getListProduct']);
        Notification.Success('Xoá thành công!');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleDeleteProduct = useCallback(
    (values: any) => {
      return deleteProduct({
        input: values
      });
    },
    [deleteProduct]
  );

  return { handleDeleteProduct, isLoading };
};
export default useDeleteProduct;
