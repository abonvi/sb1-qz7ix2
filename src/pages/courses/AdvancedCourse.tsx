import React from 'react';
import FlashcardItem from '../../components/FlashcardItem';
import type { Flashcard } from '../../types';

const advancedFlashcards: Flashcard[] = [
  {
    id: '1',
    english: 'The current economic situation has led to significant changes in the market',
    translation: 'La situación económica actual ha llevado a cambios significativos en el mercado'
  },
  {
    id: '2',
    english: 'It goes without saying that we need to adapt to these changes',
    translation: 'Ni que decir tiene que necesitamos adaptarnos a estos cambios'
  },
  {
    id: '3',
    english: 'Let\'s get down to brass tacks',
    translation: 'Vamos al grano'
  },
  {
    id: '4',
    english: 'That\'s easier said than done',
    translation: 'Del dicho al hecho hay mucho trecho'
  },
  {
    id: '5',
    english: 'Time will tell if this was the right decision',
    translation: 'El tiempo dirá si esta fue la decisión correcta'
  }
];

export default function AdvancedCourse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Conversations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Master complex phrases and idioms for fluent Spanish conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advancedFlashcards.map((flashcard) => (
          <FlashcardItem key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </div>
  );
}