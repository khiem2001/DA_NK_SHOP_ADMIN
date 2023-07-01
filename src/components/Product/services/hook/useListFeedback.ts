import { ListFeedbackInput, useGetListFeedbackQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useListFeedback = (parentId: string) => {
  const { data, isLoading } = useGetListFeedbackQuery(graphqlClientRequest(), {
    input: {
      parentId
    }
  });

  const listFeedback = useMemo(() => {
    return data?.listFeedback || {};
  }, [data]);

  return { listFeedback, isLoading };
};
