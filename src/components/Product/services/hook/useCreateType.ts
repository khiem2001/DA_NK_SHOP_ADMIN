import { useCreateTypeMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useCreateType = () => {
  const queryClient = useQueryClient();

  const { mutate: createType, isLoading } = useCreateTypeMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data.createType.success) {
        queryClient.invalidateQueries(['ListType']);
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleCreateType = useCallback(
    (values: any) => {
      return createType({
        input: values
      });
    },
    [createType]
  );

  return { handleCreateType, isLoading };
};
export default useCreateType;
