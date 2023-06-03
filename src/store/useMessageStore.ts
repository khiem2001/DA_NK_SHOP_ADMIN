import { create } from 'zustand';

export interface MessageStore {
  conversation: {
    _id: string;
    avatarUrl: string;
    nameUser: string;
  };
  setConversationData: (conversation: any) => void;
}

const useMessageStore = create((set, get) => ({
  conversation: null,
  setConversationData: (conversation: any) => {
    set({
      conversation
    });
  }
}));
export default useMessageStore;
