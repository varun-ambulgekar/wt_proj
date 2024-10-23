import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PawPrint, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff8c6b] to-[#ff6b6b] p-8 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left Side - Forms */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8">
              <PawPrint size={32} className="text-[#ff8c6b]" />
              <h1 className="text-2xl font-bold">PawMatch</h1>
            </div>

            <div className="relative">
              {/* Sign In Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className={`space-y-6 transition-all duration-500 ${
                  isSignUp ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                }`}
                style={{ position: isSignUp ? 'absolute' : 'relative', width: '100%' }}
              >
                <h2 className="text-3xl font-bold mb-8">Welcome Back</h2>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c6b]"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c6b]"
                  />
                </div>

                <button
                  onClick={() => navigate('/home')}
                  className="w-full py-3 bg-[#ff8c6b] hover:bg-[#ff7b5a] text-white rounded-xl font-semibold transition-colors"
                >
                  Sign In
                </button>
              </form>

              {/* Sign Up Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className={`space-y-6 transition-all duration-500 ${
                  isSignUp ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
                style={{ position: isSignUp ? 'relative' : 'absolute', width: '100%' }}
              >
                <h2 className="text-3xl font-bold mb-8">Create Account</h2>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c6b]"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c6b]"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8c6b]"
                  />
                </div>

                <button
                  onClick={() => navigate('/home')}
                  className="w-full py-3 bg-[#ff8c6b] hover:bg-[#ff7b5a] text-white rounded-xl font-semibold transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>

            <p className="text-center mt-6">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#ff8c6b] hover:text-[#ff7b5a] font-semibold"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block w-1/2 relative overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-700 ${
                isSignUp ? 'translate-x-full' : 'translate-x-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
                alt="Dog"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <h2 className="text-white text-3xl font-bold">Find Your Perfect Pet Match</h2>
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-transform duration-700 ${
                isSignUp ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
                alt="Cat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <h2 className="text-white text-3xl font-bold">Join Our Pet-Loving Community</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}