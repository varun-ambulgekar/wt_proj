import { useNavigate } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center p-5">
          <div className="flex items-center gap-2">
            <PawPrint size={40} className="text-[#3498db]" />
            <span className="text-2xl font-bold">PawMatch</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-3 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </header>

        <main className="relative h-[calc(100vh-80px)]">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2070"
            alt="Dogs playing"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white text-center drop-shadow-lg">
            Find Your Perfect Pet Match
          </h1>
        </main>
      </div>
    </div>
  );
}