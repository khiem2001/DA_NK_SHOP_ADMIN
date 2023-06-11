import User from '@/components/User';
import useUserStore, { UserStore } from '@/store/useUserStore';
import React from 'react';

const UserPage = () => {
  const { user } = useUserStore(store => store) as UserStore;

  return (
    <div className="flex flex-col">
      <div className="m-10 text-amber-600 font-bold">
        <h1>DANH SÁCH Khách Hàng</h1>
      </div>
      {user ? <User /> : <></>}
    </div>
  );
};

export default UserPage;
