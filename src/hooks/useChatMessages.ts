import { atom, useAtom } from "jotai";

type ChatMessages = {
  content: string;
  role: "user" | "assistant";
};

const chatAtom = atom<ChatMessages[]>([]);

export const useChatMessages = () => {
  const [chatMessages, setChatMessages] = useAtom(chatAtom);

  const addUserMessages = (input: string) => {
    const newMessage: ChatMessages = { content: input, role: "user" };
    setChatMessages(prev => [...prev, newMessage]);
  };

  const addAiMessages = (input: string) => {
    const newMessage: ChatMessages = { content: input, role: "assistant" };
    setChatMessages(prev => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setChatMessages([]);
  };

  function createChatContext(input: string) {
    // 会話の一貫性を持たせるため、最新の10件(暫定)のメッセージを取得して、新しいメッセージを追加する
    const recentMessages = chatMessages.slice(-10);
    const newMessage: ChatMessages = { content: input, role: "user" };
    recentMessages.push(newMessage);

    const context = recentMessages.map(message => ({
      content: message.content,
      role: message.role,
    }));

    return context;
  }

  return { chatMessages, addUserMessages, addAiMessages, clearMessages, createChatContext };
};
