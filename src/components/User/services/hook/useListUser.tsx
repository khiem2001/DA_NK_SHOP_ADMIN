import { useMemo } from 'react';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useListUserQuery } from '@/graphql/generated';

export const useListUser = () => {
  const { data, isLoading } = useListUserQuery(graphqlClientRequest(true), {});

  const listUser = useMemo(() => {
    return data?.listUser.user || [];
  }, [data]);

  return { listUser, isLoading };
};
