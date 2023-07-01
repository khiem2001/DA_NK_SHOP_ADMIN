import { ListCommentInput, useGetListCommentQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useListComment = (input: ListCommentInput) => {
  const { data, isLoading } = useGetListCommentQuery(graphqlClientRequest(), {
    input: input
  });

  const listComment = useMemo(() => {
    return data?.listComment || {};
  }, [data]);

  return { listComment, isLoading };
};
