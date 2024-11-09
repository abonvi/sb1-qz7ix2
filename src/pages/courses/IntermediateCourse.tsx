import React from 'react';
import FlashcardItem from '../../components/FlashcardItem';
import type { Flashcard } from '../../types';

const intermediateFlashcards: Flashcard[] = [
  {
    id: '1',
    english: 'Could you please send me the report?',
    translation: '¿Podría enviarme el informe, por favor?'
  },
  {
    id: '2',
    english: 'I would like to schedule a meeting',
    translation: 'Me gustaría programar una reunión'
  },
  {
    id: '3',
    english: 'What is the project deadline?',
    translation: '¿Cuál es la fecha límite del proyecto?'
  },
  {
    id: '4',
    english: 'Let\'s discuss this in detail',
    translation: 'Discutamos esto en detalle'
  },
  {
    id: '5',
    english: 'I agree with your proposal',
    translation: 'Estoy de acuerdo con su propuesta'
  }
];

export default function IntermediateCourse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Spanish</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional Spanish phrases for effective business communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {intermediateFlashcards.map((flashcard) => (
          <FlashcardItem key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </div>
  );
}