'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, `You: ${trimmed}`, `Bot: (応答予定)`]);
    setInput('');
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition z-50 cursor-pointer"
        >
          Ask AI Agent
        </button>
      )}

      {/* チャットウィンドウ */}
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
          <div className="flex-1 overflow-y-auto px-3 py-2 text-sm text-black space-y-1 md:text-lg">
            {messages.map((msg, i) => (
              <p key={i}>{msg}</p>
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
