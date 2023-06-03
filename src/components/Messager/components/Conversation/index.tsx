import useMessageStore, { MessageStore } from '@/store/useMessageStore';
import React from 'react';
import Avatar from '../Avatar';
import ConversationBox from './conversationBox';
import { FaWindowClose } from 'react-icons/fa';

const Conversation = () => {
  const { conversation, setConversationData } = useMessageStore(store => store) as MessageStore;

  return (
    <div className="w-full mt-5 border-2 border-slate-300 border-l-0 flex flex-col align-middle  justify-center">
      {conversation ? (
        <div className="bg-white w-full pt-5 border-l-2 flex flex-col h-full">
          <div className="flex py-2 px-10 border-b-2 justify-between">
            <div className="flex  align-middle items-center">
              <Avatar props={{ image: conversation.avatarUrl }} />
              <p className="text-black ml-5 mb-2 text-xl">{conversation.nameUser}</p>
            </div>
            <button onClick={() => setConversationData(null)}>
              <FaWindowClose className="text-3xl mb-7" />
            </button>
          </div>

          <ConversationBox props={{ _id: conversation._id }} />
        </div>
      ) : (
        <p className="text-slate-700 text-center">Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới</p>
      )}
    </div>
  );
};

export default Conversation;
