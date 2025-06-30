'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'I can assist your job interview or answer about how to use this app.' },
  ]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // メッセージ送信ハンドラー
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  };

  // 初期化
  useEffect(() => {
    const saved = sessionStorage.getItem("chat_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        console.warn("Failed to parse chat messages from sessionStorage");
      }
    } else {
      // sessionStorageが空のときだけ初期メッセージ
      setMessages([
        {
          sender: 'bot',
          text: `🎤 Welcome to the AI Interview Assistant.

      This channel addresses questions about using the application and participating in mock interviews.
      ※ Interview generation and keyword analysis are not supported.

      ★ Guidance for effective inquiries
      • Submit one question at a time
      • Write concisely and specifically
      • Provide relevant context when appropriate

      📘 All responses reference the official product documentation.
      ❓ Comprehensive user guide → /help`
        }
      ]);
    }
  }, []);

  // メッセージが更新されたときにスクロールして、セッションストレージに保存
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    sessionStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 flex bg-indigo-600 text-black px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition z-50 cursor-pointer"
        >
          <Image
            src="/ai-agent.png"
            alt="Bot"
            width={32}
            height={32}
            className="mr-2 rounded-full"
          />
          Ask AI Agent
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 md:bottom-0 right-4 sm:right-6 w-[90vw] max-w-md h-[80vh] bg-white rounded-xl shadow-xl flex flex-col z-40">
          {/* ヘッダー */}
          <div className="flex justify-between items-center p-3 border-b bg-gray-400 rounded-t-xl">
            <span className="font-bold text-indigo-700">AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black text-2xl hover:text-black"
            >
              ×
            </button>
          </div>

          {/* メッセージエリア */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
            {messages.map((msg, i) => (
              <div key={i}>
                {/* ① 各メッセージ表示 */}
                <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end`}>
                  {msg.sender === 'bot' && (
                    <Image
                      src="/ai-agent.png"
                      alt="Bot"
                      width={32}
                      height={32}
                      className="mr-2 rounded-full"
                    />
                  )}
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm md:text-base break-words ${
                    msg.sender === 'user'
                      ? 'bg-indigo-100 text-black rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                {msg.text.split('\n').map((line, index) => (
                  <p key={index} className="text-inherit leading-relaxed">{line}</p>
                ))}
                </div>
                </div>

                {/* ★ ② 初期メッセージの直後にのみ表示されるチップエリア */}
                {i === 0 && msg.sender === 'bot' && (
                  <div className="ml-10 mt-2 p-1 flex flex-wrap gap-2 text-black text-2x">
                    {['What can I do with this app?', 'How to use this app?', 'About the pricing plan.'].map((q) => (
                      <button
                        key={q}
                        onClick={() => setInput(q)}
                        className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-full transition text-gray-900 border border-gray-400 hover:border-gray-400"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div ref={messageEndRef} />
          </div>

          {/* 入力エリア */}
          <div className="p-2 border-t flex gap-2 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none resize-none md:text-lg"
              placeholder="Type a message..."
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 flex items-center justify-center"
            >
              <Image
                src="/sendbtn.png"
                alt="Send"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
