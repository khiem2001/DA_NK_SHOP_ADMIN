import { create } from 'zustand';
import { clearAuthTokens, saveAdminToken } from '../utils/auth';
import { AdminPayLoad } from '@/graphql/generated';

export interface UserStore {
  token: {
    accessToken: string;
    refreshToken: string;
  };
  isLogin: boolean;
  user?: AdminPayLoad;
  setUserData: (user: AdminPayLoad | any) => void;
  logout: () => void;
  login: (
    token: {
      accessToken: string;
      refreshToken: string;
    },
    user: AdminPayLoad
  ) => void;
}

const useUserStore = create((set, get) => ({
  user: null,
  isLogin: false,

  setUserData: (user: any) => {
    set({
      user,
      isLogin: true
    });
  },
  login: (
    token: {
      accessToken: string;
      refreshToken: string;
    },
    user: any
  ) => {
    saveAdminToken({
      access: token.accessToken,
      refresh: token.refreshToken
    });
    set({
      token,
      user,
      isLogin: true
    });
  },
  logout: () => {
    set({
      user: null,
      isLogin: false
    });
    clearAuthTokens();
  }
}));
export default useUserStore;
