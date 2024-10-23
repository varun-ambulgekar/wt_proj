import { useState } from 'react';
import { PawPrint, Heart, X } from 'lucide-react';
import PreferencesCard from '../components/PreferencesCard';
import ChatPanel from '../components/ChatPanel';

const pets = [
  {
    name: 'Rock',
    age: 2,
    description: "Rock is a good boy who loves to play in the park, and he's very energetic and smart!",
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
  },
  {
    name: 'Milo',
    age: 1,
    description: 'Milo is very friendly and enjoys belly rubs!',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
  },
  {
    name: 'Bella',
    age: 4,
    description: 'Bella is calm and loves cuddles.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
  }
];

export default function HomePage() {
  const [currentPetIndex, setCurrentPetIndex] = useState(0);
  const [activeChatUser, setActiveChatUser] = useState<string | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const handleLikeDislike = (action: 'like' | 'dislike') => {
    setSwipeDirection(action === 'like' ? 'right' : 'left');
    setTimeout(() => {
      setCurrentPetIndex((prev) => (prev + 1) % pets.length);
      setSwipeDirection(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#fef4d9] px-12 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <PawPrint className="text-[#151111]" />
          <span className="text-xl font-bold">PawMatch</span>
        </div>
        <ul className="flex gap-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Rate Us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-[300px,1fr,300px] gap-6">
        <PreferencesCard />

        <div className="flex flex-col items-center justify-center">
          <div
            className={`bg-white rounded-lg shadow-md p-6 w-[400px] transition-transform duration-500 ${
              swipeDirection === 'right' ? 'translate-x-full opacity-0' : 
              swipeDirection === 'left' ? '-translate-x-full opacity-0' : ''
            }`}
          >
            <img
              src={`${pets[currentPetIndex].image}?auto=format&fit=crop&w=800`}
              alt={pets[currentPetIndex].name}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {pets[currentPetIndex].name}, {pets[currentPetIndex].age}
            </h3>
            <p className="text-gray-600 text-lg">{pets[currentPetIndex].description}</p>
          </div>
          <div className="flex gap-6 mt-6">
            <button
              onClick={() => handleLikeDislike('dislike')}
              className="bg-red-400 hover:bg-red-500 text-white p-4 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            <button
              onClick={() => handleLikeDislike('like')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full transition-colors"
            >
              <Heart size={32} />
            </button>
          </div>
        </div>

        <ChatPanel
          activeChatUser={activeChatUser}
          setActiveChatUser={setActiveChatUser}
        />
      </div>

      <footer className="bg-black text-white text-center py-6 mt-12">
        <p>footer.co | Follow us:</p>
      </footer>
    </div>
  );
}