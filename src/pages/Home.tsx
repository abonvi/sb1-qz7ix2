import React from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Spanish Essentials',
    description: 'Master everyday Spanish phrases and vocabulary with this comprehensive starter pack.',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    cardCount: 50,
    language: 'Spanish',
    level: 'Beginner',
  },
  {
    id: '2',
    name: 'Business Spanish',
    description: 'Professional vocabulary and phrases for business communication in Spanish.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    cardCount: 75,
    language: 'Spanish',
    level: 'Intermediate',
  },
  {
    id: '3',
    name: 'Advanced Conversations',
    description: 'Complex phrases and idioms for fluent Spanish conversations.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    cardCount: 100,
    language: 'Spanish',
    level: 'Advanced',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Master Languages with Confidence
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our curated flashcard collections designed to help you learn languages effectively and naturally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose LinguaFlash?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Native Pronunciations
              </h3>
              <p className="text-gray-600">
                Learn from authentic native speakers with clear audio recordings.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Structured Learning
              </h3>
              <p className="text-gray-600">
                Progressive difficulty levels to match your learning pace.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-600">
                New content added regularly to keep your learning fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}