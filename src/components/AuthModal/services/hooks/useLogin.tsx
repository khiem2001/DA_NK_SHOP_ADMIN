import Notification from '@/components/Notification';
import { AdminLoginMutation, useAdminLoginMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useLogin = () => {
  const { setUserData, login } = useUserStore(store => store) as UserStore;

  const onLogin = (response?: AdminLoginMutation | any) => {
    const token = response?.token;
    const refreshToken = response?.refreshToken;
    const user = response?.payload;
    if (token && user) {
      setUserData(user);
      login(
        {
          accessToken: token,
          refreshToken: refreshToken
        },
        user
      );
      Notification.Success('Đăng nhập thành công');
    } else {
      Notification.Error('Xảy ra lỗi không xác định');
    }
  };

  const { mutate: loginAdmin, isLoading } = useAdminLoginMutation(graphqlClientRequest(), {
    onSuccess: data => {
      const res = data.adminLogin;
      onLogin(res);
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleSubmitLogin = useCallback(
    (values: { userName: string; password: string }) => {
      const variables = {
        input: { userName: values.userName, password: values.password }
      };
      loginAdmin(variables);
    },
    [loginAdmin]
  );
  return {
    handleSubmitLogin,
    isLoading
  };
};
export default useLogin;
