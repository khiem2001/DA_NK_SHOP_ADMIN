import React from 'react';
import clsx from 'clsx';
import useUserStore, { UserStore } from '@/store/useUserStore';
import Avatar from '../Avatar';
import { format } from 'date-fns';

const MessageBox = ({ props }: any) => {
  const { user } = useUserStore(store => store) as UserStore;
  const { senderId, content, createdAt } = props;
  let isOwn = true;
  if (senderId && senderId._id !== user?._id) {
    isOwn = false;
  }
  const imageUrl =
    senderId?.fullName === 'Admin'
      ? '/images/admin.jpg'
      : process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + senderId?.avatarId?.url;
  const container = clsx('flex gap-3 mb-5', isOwn && 'justify-end');
  const avatar = clsx(isOwn && 'order-2');
  const body = clsx('flex flex-col gap-2  w-[50%]', isOwn && 'items-end');
  const message = clsx('text-md p-4 rounded-xl w-fit', isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100 text-black');
  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar
          props={{ image: `${senderId ? (senderId.avatarId ? imageUrl : '/images/admin.jpg') : '/images/admin.jpg'}` }}
        />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {senderId?.fullName || 'Admin'}
            <span className="text-xl"> |</span>
          </div>
          <div className="text-xs text-gray-400">{format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss')}</div>
        </div>
        <div className={message}>{content}</div>
      </div>
    </div>
  );
};

export default MessageBox;
