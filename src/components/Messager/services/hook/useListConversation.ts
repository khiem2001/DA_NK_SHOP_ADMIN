import { useMemo } from 'react';
import { useListConversationQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';

interface IProps {
  userId: string;
}
export const useListConversation = (props: IProps) => {
  const { data, isLoading } = useListConversationQuery(graphqlClientRequest(), {
    input: { ...props }
  });

  const listConversation = useMemo(() => {
    return data?.listConversation?.data || [];
  }, [data]);

  return { listConversation, isLoading };
};
