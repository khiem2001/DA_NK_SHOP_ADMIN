import Notification from '@/components/Notification';
import { useCreateProductMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: CreateProductLoading } = useCreateProductMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data.createProduct.success) {
        Notification.Success('Them san pham thanh cong');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleCreateProduct = useCallback(
    (values: any) => {
      return createProduct({
        input: values
      });
    },
    [createProduct]
  );

  return { handleCreateProduct, CreateProductLoading };
};
export default useCreateProduct;
