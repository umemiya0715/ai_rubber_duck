import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("送信されたデータ:", { name, email, message });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-green-100 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-green-800">送信完了</h2>
        <p className="text-green-700">
          お問い合わせありがとうございます。内容を確認の上、後ほどご連絡させていただきます。
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">〇〇へのお問い合わせ</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            お名前
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:opacity-50 focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:opacity-50 focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:opacity-50 focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            送信
          </button>
          <p className="text-sm text-gray-500">※ 送信には数秒かかる場合があります</p>
        </div>
      </form>
      <div className="mt-8 text-sm text-gray-500">
        <p>
          ご入力いただいた個人情報は、お問い合わせへの対応のみに使用し、
          <a href="#privacy-policy" className="text-blue-600 hover:underline">
            プライバシーポリシー
          </a>
          に従って適切に取り扱います。
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
