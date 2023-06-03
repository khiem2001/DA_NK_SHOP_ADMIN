import { useMemo } from 'react';
import { ListMessageInput, useListMessageQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';

export const useListMessage = (props: ListMessageInput) => {
  const { data, isLoading } = useListMessageQuery(graphqlClientRequest(), {
    input: { ...props }
  });

  const listMessage = useMemo(() => {
    return data?.listMessage?.data || [];
  }, [data]);

  return { listMessage, isLoading };
};
