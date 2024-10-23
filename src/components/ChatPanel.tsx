import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
};

type ChatPanelProps = {
  activeChatUser: string | null;
  setActiveChatUser: (user: string | null) => void;
};

export default function ChatPanel({ activeChatUser, setActiveChatUser }: ChatPanelProps) {
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
  const [newMessage, setNewMessage] = useState('');

  const contacts = [
    { name: 'Mother NGO', status: 'online' },
    { name: 'Gokuldham', status: 'online' },
    { name: 'Whitney', status: 'offline' },
  ];

  const sendMessage = () => {
    if (activeChatUser && newMessage.trim()) {
      setMessages((prev) => ({
        ...prev,
        [activeChatUser]: [
          ...(prev[activeChatUser] || []),
          {
            id: Date.now(),
            text: newMessage.trim(),
            sender: 'user',
            timestamp: new Date(),
          },
        ],
      }));
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[600px]">
      {!activeChatUser ? (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Messages</h3>
          <ul className="space-y-3">
            {contacts.map((contact) => (
              <li
                key={contact.name}
                onClick={() => setActiveChatUser(contact.name)}
                className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
              >
                <span className="font-medium">{contact.name}</span>
                <span className={`text-sm ${contact.status === 'online' ? 'text-green-500' : 'text-gray-400'}`}>
                  {contact.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 p-4 border-b">
            <button
              onClick={() => setActiveChatUser(null)}
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-bold">Chat with {activeChatUser}</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages[activeChatUser]?.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-xs opacity-75 mt-1 block">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}