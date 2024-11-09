import React from 'react';
import { Users, BookOpen, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About LinguaFlash</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're passionate about making language learning accessible, effective, and enjoyable for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">
            Our team consists of language experts and native speakers dedicated to your success.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Proven Method</h3>
          <p className="text-gray-600">
            Our flashcard system is designed based on proven learning methodologies.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Globe2 className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Global Community</h3>
          <p className="text-gray-600">
            Join thousands of learners from around the world on their language journey.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          LinguaFlash was born from a simple idea: make language learning more accessible and effective. 
          We believe that everyone should have the opportunity to learn new languages, connect with different 
          cultures, and expand their horizons.
        </p>
        <p className="text-gray-600">
          What started as a small collection of Spanish flashcards has grown into a comprehensive platform 
          offering multiple languages and learning levels. Our commitment to quality content and effective 
          learning methods remains at the heart of everything we do.
        </p>
      </div>
    </div>
  );
}