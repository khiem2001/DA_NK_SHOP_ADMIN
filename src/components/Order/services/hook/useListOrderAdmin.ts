import { useListOrderAdminQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useListOrderAdmin = () => {
  const { data, isLoading } = useListOrderAdminQuery(graphqlClientRequest(true), {});

  const listOrder = useMemo(() => {
    return data?.listOrderAdmin.orders || [];
  }, [data]);

  return { listOrder, isLoading };
};
