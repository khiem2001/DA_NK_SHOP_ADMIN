import { LS_ADMIN_REFRESH_TOKEN, LS_ADMIN_TOKEN } from '@/constants';
import { MyLocalStorage } from './localStorage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUserStore, { UserStore } from '@/store/useUserStore';
import useAuth from '@/hooks/useAuth';

const localStorage = MyLocalStorage();
export const saveAdminToken = (tokens: { access: string; refresh: string }) => {
  localStorage.setItem(LS_ADMIN_TOKEN, tokens.access);
  localStorage.setItem(LS_ADMIN_REFRESH_TOKEN, tokens.refresh);
};
export const clearAuthTokens = () => {
  localStorage.removeItem(LS_ADMIN_TOKEN);
  localStorage.removeItem(LS_ADMIN_REFRESH_TOKEN);
};
export const getTokens = () => {
  return {
    access: localStorage.getItem(LS_ADMIN_TOKEN),
    refresh: localStorage.getItem(LS_ADMIN_REFRESH_TOKEN)
  };
};

export const useRequireAuth = () => {
  const router = useRouter();
  const { user } = useUserStore(store => store) as UserStore;

  useEffect(() => {
    console.log('user', user);
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return null;
};
