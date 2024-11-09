import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { playBeep } from '../services/audioService';
import type { Flashcard } from '../types';

interface FlashcardItemProps {
  flashcard: Flashcard;
}

export default function FlashcardItem({ flashcard }: FlashcardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    setIsPlaying(true);
    await playBeep();
    setIsPlaying(false);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all cursor-pointer select-none"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="min-h-[2rem] transform transition-all duration-300">
            <div
              className={`transform transition-opacity duration-300 ${
                isFlipped ? 'opacity-0 absolute' : 'opacity-100'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {flashcard.english}
              </h3>
            </div>
            <div
              className={`transform transition-opacity duration-300 ${
                isFlipped ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h3 className="text-lg font-semibold text-indigo-600">
                {flashcard.translation}
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Click to {isFlipped ? 'hide' : 'show'} translation
          </p>
        </div>
        
        <button
          onClick={handleAudioClick}
          className={`p-3 rounded-full transition-colors ${
            isPlaying
              ? 'bg-indigo-100 text-indigo-600'
              : 'bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          aria-label={isPlaying ? 'Playing' : 'Play sound'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}