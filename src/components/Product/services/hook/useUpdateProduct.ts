import Notification from '@/components/Notification';
import { useUpdateProductMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useUpdateProduct = () => {
  const { mutate: updateProduct, isLoading: UpdateProductLoading } = useUpdateProductMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data.updateProduct.success) {
        Notification.Success('Cập nhật sản phẩm thành công!');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleUpdateProduct = useCallback(
    (values: any) => {
      return updateProduct({
        input: values
      });
    },
    [updateProduct]
  );

  return { handleUpdateProduct, UpdateProductLoading };
};
export default useUpdateProduct;
