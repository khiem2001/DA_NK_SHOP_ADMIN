import Notification from '@/components/Notification';
import { useLockOrUnLockUserMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useLockOrUnLock = () => {
  const queryClient = useQueryClient();

  const { mutate: lockOrUnLock, isLoading } = useLockOrUnLockUserMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data.lockOrUnLockUser.success) {
        queryClient.invalidateQueries(['listUser']);
        Notification.Success('Thành công!');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleLockOrUnLock = useCallback(
    (values: any) => {
      return lockOrUnLock({
        input: values
      });
    },
    [lockOrUnLock]
  );

  return { handleLockOrUnLock, isLoading };
};
export default useLockOrUnLock;
