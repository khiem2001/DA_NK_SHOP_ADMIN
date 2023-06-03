import React from 'react';
import UserBox from './userBox';
import { useListConversation } from '../../services/hook/useListConversation';
import useUserStore, { UserStore } from '@/store/useUserStore';
import LoadingModal from '@/components/LoadingModal';

const UserList = () => {
  const { user } = useUserStore(store => store) as UserStore;
  const { listConversation, isLoading } = useListConversation({ userId: user?._id || '' });

  return (
    <div className="bg-white mt-5 pt-5 pl-5 border-2 border-slate-300">
      <div className="w-1/3 border-b-2">
        <p className="text-blue-700 mb-5  bg-blue-200 text-center py-2">Hộp thư</p>
      </div>
      <div className=" h-[680px] p-2 overflow-y-auto pr-7">
        {isLoading && <LoadingModal />}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
        {listConversation.map(obj => {
          if (obj.type === 'PERSONAL') {
            return <UserBox props={obj} key={obj._id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default UserList;
