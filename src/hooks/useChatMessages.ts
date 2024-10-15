import { atom, useAtom } from "jotai";

type ChatMessages = {
  text: string;
  isUser: boolean;
};

const chatAtom = atom<ChatMessages[]>([]);

export const useChatMessages = () => {
  const [chatMessages, setChatMessages] = useAtom(chatAtom);

  const addChatMessages = (ChatMessages: ChatMessages) => {
    setChatMessages(prev => [...prev, ChatMessages]);
  };

  const clearMessages = () => {
    setChatMessages([]);
  };

  return { chatMessages, addChatMessages, clearMessages };
};
