import { usePrintOrderQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const usePrintOrder = (orderId: string) => {
  const { data, isLoading } = usePrintOrderQuery(graphqlClientRequest(), {
    input: {
      orderId
    }
  });

  const printOrder = useMemo(() => {
    return data?.printOrder;
  }, [data]);

  return { printOrder, isLoading };
};
