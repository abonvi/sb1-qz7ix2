import React from 'react';
import FlashcardItem from '../../components/FlashcardItem';
import type { Flashcard } from '../../types';

const beginnerFlashcards: Flashcard[] = [
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
    english: 'Please',
    translation: 'Por favor'
  },
  {
    id: '4',
    english: 'Thank you',
    translation: 'Gracias'
  },
  {
    id: '5',
    english: 'You\'re welcome',
    translation: 'De nada'
  }
];

export default function BeginnerCourse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Spanish Essentials</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Master the basics of everyday Spanish conversation with these essential phrases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beginnerFlashcards.map((flashcard) => (
          <FlashcardItem key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </div>
  );
}