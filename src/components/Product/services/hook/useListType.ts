import { useListTypeQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useListType = () => {
  const { data, isLoading } = useListTypeQuery(graphqlClientRequest());

  const listType = useMemo(() => {
    return data?.listType?.data || [];
  }, [data]);

  return { listType, isLoading };
};
