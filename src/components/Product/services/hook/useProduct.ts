import { useMemo } from 'react';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useGetProductQuery } from '@/graphql/generated';

interface IProps {
  productId: string;
}
const useProduct = (props: IProps) => {
  const { data, isLoading } = useGetProductQuery(graphqlClientRequest(), {
    input: { ...props }
  });

  const result = useMemo(() => {
    return data?.getProduct || {};
  }, [data]);

  return { result, isLoading };
};
export default useProduct;
