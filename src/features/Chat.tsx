import { useState, useEffect } from "react";
import { BsFillSendArrowUpFill, BsPersonCircle } from "react-icons/bs";
import { GiSeaDragon, GiSpikedDragonHead } from "react-icons/gi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useChangeAi } from "../hooks/useChangeAi";
import { useChatMessages } from "../hooks/useChatMessages";

type ApiResponse = {
  body: {
    content: {
      text: string;
    }[];
  };
};

export default function ChatMockup() {
  const { chatMessages, addChatMessages } = useChatMessages();
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { currentAi } = useChangeAi();
  const [apiUrl, setApiUrl] = useState<string>("");

  useEffect(() => {
    if (currentAi === "aiA") {
      setApiUrl(import.meta.env.VITE_BEDROCK_API_AiA);
    } else if (currentAi === "aiB") {
      setApiUrl(import.meta.env.VITE_BEDROCK_API_AiB);
    }
  }, [currentAi]);

  async function sendMessage() {
    setIsLoading(true);
    const userMessage = { text: input, isUser: true };
    addChatMessages(userMessage);
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
      addChatMessages(botMessage);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col bg-gray-100 p-4">
      <div className="mb-4 flex-1 overflow-y-auto rounded-lg bg-white p-4 shadow">
        {chatMessages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <div className="mb-2 flex items-center">
                {message.isUser ? (
                  <BsPersonCircle className="mr-2" size={20} />
                ) : currentAi === "aiA" ? (
                  <GiSeaDragon className="mr-2" size={20} />
                ) : (
                  <GiSpikedDragonHead className="mr-2" size={20} />
                )}
                <span className="font-bold">
                  {message.isUser ? "あなた" : currentAi === "aiA" ? "龍神" : "ドラゴン"}
                </span>
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
          <BsFillSendArrowUpFill size={20} />
        </button>
      </div>
      {isLoading && (
        <div className="fixed left-0 top-0 z-50 grid size-full place-items-center bg-gray-200 opacity-40">
          <AiOutlineLoading3Quarters className="size-12 animate-spin" />
        </div>
      )}
    </div>
  );
}
