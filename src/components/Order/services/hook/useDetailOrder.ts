import { useDetailOrderQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useDetailOrder = (orderId: string) => {
  const { data, isLoading } = useDetailOrderQuery(graphqlClientRequest(), {
    input: {
      orderId
    }
  });

  const detailOrder = useMemo(() => {
    return data?.detailOrder || {};
  }, [data]);

  return { detailOrder, isLoading };
};
