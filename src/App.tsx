import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatMockup: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "こんにちは！私はAIアシスタントの「〇〇」だよ。何か相談したいことはある？", isUser: false },
    { text: "最近、仕事のストレスが溜まってて…", isUser: true },
    { text: "そうか、仕事のストレスか。辛いよな。でも、お前ならきっと乗り越えられるぜ！具体的にどんなことがストレスになってるんだ？", isUser: false },
  ]);
  const [input, setInput] = useState<string>('');

  const handleSend = (): void => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">AI_ラバーダック</h1>
      <div className="flex-1 overflow-y-auto mb-4 bg-white rounded-lg shadow p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              <div className="flex items-center mb-2">
                {message.isUser ? <User className="mr-2" size={20} /> : <Bot className="mr-2" size={20} />}
                <span className="font-bold">{message.isUser ? 'あなた' : '〇〇'}</span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
          className="flex-1 border rounded-l-lg p-2"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r-lg">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatMockup;
