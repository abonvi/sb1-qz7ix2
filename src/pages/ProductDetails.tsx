import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, BookOpen, BarChart, ArrowLeft } from 'lucide-react';
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

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isStarting, setIsStarting] = useState(false);
  const product = sampleProducts.find(p => p.id === id);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      switch (product?.level) {
        case 'Beginner':
          navigate('/course/beginner');
          break;
        case 'Intermediate':
          navigate('/course/intermediate');
          break;
        case 'Advanced':
          navigate('/course/advanced');
          break;
        default:
          navigate('/pronunciation');
      }
    }, 500);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/')}
        className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Products
      </button>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {product.level}
            </span>
          </div>
          <p className="mt-4 text-lg text-gray-600">{product.description}</p>
          
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <BookOpen className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="block mt-2 text-sm font-medium text-gray-900">{product.cardCount} Cards</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Play className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="block mt-2 text-sm font-medium text-gray-900">Audio Included</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <BarChart className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="block mt-2 text-sm font-medium text-gray-900">Progress Tracking</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={isStarting}
            className={`mt-8 w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-all ${
              isStarting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isStarting ? 'Loading...' : 'Start Learning'}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Key Topics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Essential vocabulary for daily conversations</li>
              <li>• Common phrases and expressions</li>
              <li>• Basic grammar structures</li>
              <li>• Cultural insights and usage context</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Learning Goals</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Build confidence in speaking</li>
              <li>• Improve pronunciation</li>
              <li>• Expand vocabulary range</li>
              <li>• Master practical expressions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}