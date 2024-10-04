import { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import axios from "axios";

type Message = {
  text: string;
  isUser: boolean;
};

type ApiResponse = {
  body: {
    content: {
      text: string;
    }[];
  };
};

export default function ChatMockup() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  async function sendMessage() {
    const userMessage = { text: input, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post<ApiResponse>(
        import.meta.env.VITE_BEDROCK_API_URL,
        { message: input },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": import.meta.env.VITE_BEDROCK_API_KEY,
          },
        },
      );
      const botMessage = { text: response.data.body.content[0].text, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col bg-gray-100 p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">AI_ラバーダック</h1>
      <div className="mb-4 flex-1 overflow-y-auto rounded-lg bg-white p-4 shadow">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <div className="mb-2 flex items-center">
                {message.isUser ? <User className="mr-2" size={20} /> : <Bot className="mr-2" size={20} />}
                <span className="font-bold">{message.isUser ? "あなた" : "〇〇"}</span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <textarea
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
          className="flex-1 resize-none rounded-l-lg border p-2"
        />
        <button
          type="button"
          onClick={() => {
            void sendMessage();
          }}
          className="rounded-r-lg bg-blue-500 p-2 text-white"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
