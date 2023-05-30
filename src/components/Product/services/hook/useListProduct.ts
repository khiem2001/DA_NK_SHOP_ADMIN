import { useMemo } from 'react';
import { FilterProductInput, PaginationBaseInput, useGetListProductQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';

interface IProducts {
  filter?: FilterProductInput;
  pagination: PaginationBaseInput;
}
export const useListProduct = (props: IProducts) => {
  const { data, isLoading } = useGetListProductQuery(graphqlClientRequest(), {
    input: { ...props }
  });

  const listProduct = useMemo(() => {
    return data?.getListProduct || {};
  }, [data]);

  return { listProduct, isLoading };
};
