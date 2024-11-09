import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FlashcardItem from '../components/FlashcardItem';
import type { Flashcard } from '../types';

const sampleFlashcards: Flashcard[] = [
  {
    id: '1',
    english: 'Hello',
    translation: 'Hola'
  },
  {
    id: '2',
    english: 'Good morning',
    translation: 'Buenos días'
  },
  {
    id: '3',
    english: 'Thank you',
    translation: 'Gracias'
  },
  {
    id: '4',
    english: 'Please',
    translation: 'Por favor'
  },
  {
    id: '5',
    english: 'How are you?',
    translation: '¿Cómo estás?'
  },
];

export default function Pronunciation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFlashcards, setFilteredFlashcards] = useState(sampleFlashcards);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = sampleFlashcards.filter(
      card =>
        card.english.toLowerCase().includes(term.toLowerCase()) ||
        card.translation.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFlashcards(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pronunciation Guide</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Practice your pronunciation with native speakers. Click or tap any card to reveal the translation.
        </p>
      </div>

      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search phrases..."
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlashcards.map((flashcard) => (
          <FlashcardItem key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>

      {filteredFlashcards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No flashcards found matching your search.</p>
        </div>
      )}
    </div>
  );
}