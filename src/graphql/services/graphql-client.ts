import { LOCAL_STORAGE_TOKEN_KEY } from '@/constants';
import { getTokens } from '@/utils/auth';
import { isBrowser } from '@/utils/browser';
import { GraphQLClient } from 'graphql-request';

const endPoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';
export const graphqlClientRequest = (isAuth = false) => {
  const headers: any = {};
  if (isAuth && isBrowser) {
    const tokens = getTokens();

    if (tokens?.access) {
      headers.authorization = `Bearer ${tokens.access}`;
    }
  }
  return new GraphQLClient(endPoint, {
    headers
  });
};

export const getHeaders = async (isAuth = false) => {
  const headers: any = {};
  if (isAuth && isBrowser) {
    let tokens = getTokens();
    if (tokens?.access) {
      headers.authorization = `Bearer ${tokens.access}`;
    }
  }
  return headers;
};
