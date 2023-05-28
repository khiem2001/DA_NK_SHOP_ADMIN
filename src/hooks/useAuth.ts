import { getUserInfo } from '@/graphql/apis/getUserInfo';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { isBrowser } from '@/utils/browser';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

const useAuth = () => {
  const { setUserData } = useUserStore(store => store) as UserStore;
  const { mutate: getUserMutate } = useMutation({
    mutationFn: getUserInfo,
    mutationKey: ['getUserInfo_'],
    onSuccess: (response: any) => {
      const info = response?.getAdmin;
      if (info) {
        setUserData(info);
      }
    },
    onError: () => {}
  });

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    (async () => {
      getUserMutate();
    })();
  }, []);

  return {};
};
export default useAuth;
