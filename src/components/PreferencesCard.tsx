import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

type Preference = {
  label: string;
  options: string[];
  value: string;
};

export default function PreferencesCard() {
  const [preferences, setPreferences] = useState<Preference[]>([
    { label: 'Age', options: ['Any', '0-1 year', '1-3 years', '3-5 years', '5+ years'], value: 'Any' },
    { label: 'Breed', options: ['Any', 'Labrador', 'German Shepherd', 'Golden Retriever', 'Bulldog', 'Poodle'], value: 'Any' },
    { label: 'Gender', options: ['Any', 'Male', 'Female'], value: 'Any' },
    { label: 'Native Country', options: ['Any', 'USA', 'Canada', 'UK', 'Australia'], value: 'USA' },
  ]);

  const handlePreferenceChange = (index: number, value: string) => {
    const newPreferences = [...preferences];
    newPreferences[index].value = value;
    setPreferences(newPreferences);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">John Doe</h2>
      <p className="mb-4">Hi there, John!</p>
      <h3 className="font-semibold mb-4">Preferences</h3>
      <div className="space-y-4">
        {preferences.map((pref, index) => (
          <div key={pref.label} className="relative">
            <label className="text-sm text-gray-600 mb-1 block">{pref.label}</label>
            <div className="relative">
              <select
                value={pref.value}
                onChange={(e) => handlePreferenceChange(index, e.target.value)}
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {pref.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin size={16} />
          Your Location
        </p>
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400"
          alt="Map"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}