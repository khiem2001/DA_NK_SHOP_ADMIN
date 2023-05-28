import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { GetAdminDocument } from '@/graphql/generated';

export const getUserInfo = async () => {
  const queryClient = graphqlClientRequest(true);
  return queryClient.request(GetAdminDocument);
};
