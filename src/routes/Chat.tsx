import { useState, useEffect } from "react";
import { Send, User, Bot, LoaderCircle } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { aiId } = useParams<{ aiId: string }>();
  const [apiUrl, setApiUrl] = useState<string>("");

  useEffect(() => {
    if (aiId === "aiA") {
      setApiUrl(import.meta.env.VITE_BEDROCK_API_AiA);
    } else if (aiId === "aiB") {
      setApiUrl(import.meta.env.VITE_BEDROCK_API_AiB);
    }
  }, [aiId]);

  async function sendMessage() {
    setIsLoading(true);
    const userMessage = { text: input, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post<ApiResponse>(
        apiUrl,
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
      setIsLoading(false);
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
                <span className="font-bold">{message.isUser ? "あなた" : aiId === "aiA" ? "龍神" : "ドラゴン"}</span>
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
          placeholder="相談内容を入力..."
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
      {isLoading && (
        <div className="fixed left-0 top-0 z-50 grid size-full place-items-center bg-gray-200 opacity-40">
          <LoaderCircle className="size-12 animate-spin" />
        </div>
      )}
    </div>
  );
}
