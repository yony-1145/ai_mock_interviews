'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `You: ${input}`]);
    setInput('');
    // 仮のBot応答（後でAPI連携可）
    setMessages((prev) => [...prev, `Bot: (応答予定)`]);
  };

  return (
    <>
      {/* モーダル起動ボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        Chat
      </button>

      {/* モーダル本体 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
            {/* 閉じるボタン */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
            >
              ×
            </button>

            {/* チャット履歴 */}
            <div className="h-64 overflow-y-auto border p-3 mb-4 space-y-2 text-sm">
              {messages.map((msg, i) => (
                <p key={i}>{msg}</p>
              ))}
            </div>

            {/* 入力フォーム */}
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border px-3 py-2 rounded-l"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
