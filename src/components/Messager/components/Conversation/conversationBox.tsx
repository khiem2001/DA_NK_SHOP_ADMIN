import useUserStore, { UserStore } from '@/store/useUserStore';
import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { MdSend } from 'react-icons/md';
import MessageBox from './messageBox';
import { useListMessage } from '../../services/hook/useListMessage';
import { LoadingCenter } from '@/components/Loading';

interface Message {
  from: string;
  message: string;
}

const ConversationBox = ({ props }: any) => {
  const { user } = useUserStore(store => store) as UserStore;
  const [socket, setSocket] = useState<Socket>();
  const [messageOfUsers, setMessageOfUsers] = useState<any[]>([]);
  const [message, setMessage] = useState('');
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const { listMessage, isLoading } = useListMessage({
    conversationId: props._id,
    pagination: { limit: 100, page: 1 }
  });

  useEffect(() => {
    if (listMessage) {
      setMessageOfUsers(listMessage);
    }
  }, [listMessage]);

  useEffect(() => {
    console.log('aaa');
    const newSocket = io('http://localhost:8000');
    newSocket.on('connect', () => {
      console.log('Connected to server', props._id);

      newSocket.emit('joinRoom', props._id);
    });

    newSocket.on('connect_error', (error: Error) => {
      console.log('Connection error:', error);
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [props._id]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: Message) => {
        setMessageOfUsers(prevMessages => [
          ...prevMessages,
          {
            senderId: data.from,
            content: data.message,
            createdAt: new Date().getTime()
          }
        ]);
      });
    }
  }, [socket]);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      to: props._id,
      from: { _id: user?._id, avatarId: { url: '/images/account/admin.jpg' }, fullName: 'Admin' },
      message: message
    };
    socket && socket.emit('sendMessage', payload);
    setMessage('');
  };
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messageOfUsers]);

  return (
    <div className="flex flex-col h-[680px]">
      <div className=" h-5/6 p-5 overflow-y-auto scroll-auto" ref={messageContainerRef}>
        {isLoading ? (
          <LoadingCenter />
        ) : messageOfUsers.length !== 0 ? (
          messageOfUsers.map(obj => <MessageBox props={obj} key={obj._id} />)
        ) : (
          <div className="text-center">Hãy gửi tin nhắn bắt đầu cuộc trò chuyện...</div>
        )}
      </div>
      <div className="h-1/6 pt-5 border-t-2">
        <form className="max-w-xxl m-auto px-20" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              className="flex-1 px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Nhập tin nhắn..."
              value={message}
              onChange={handleMessageChange}
            />
            <button
              type="submit"
              className="flex items-center ml-5 justify-center px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            >
              <MdSend className="w-7 h-7" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConversationBox;
