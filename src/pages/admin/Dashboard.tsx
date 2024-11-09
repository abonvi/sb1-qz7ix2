import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { Plus, Trash2, Edit2, Upload } from 'lucide-react';
import type { Product, Flashcard } from '../../types';

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchFlashcards();
  }, []);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
  };

  const fetchFlashcards = async () => {
    const querySnapshot = await getDocs(collection(db, 'flashcards'));
    setFlashcards(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Flashcard)));
  };

  const handleCsvUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const text = await file.text();
      const rows = text.split('\n').map(row => row.split(','));
      
      for (const [english, translation, audioUrl] of rows.slice(1)) {
        await addDoc(collection(db, 'flashcards'), {
          english: english.trim(),
          translation: translation.trim(),
          audioUrl: audioUrl?.trim(),
        });
      }
      
      fetchFlashcards();
    } catch (error) {
      console.error('Error uploading CSV:', error);
      alert('Error uploading CSV file');
    } finally {
      setIsUploading(false);
    }
  };

  const handleAudioUpload = async (file: File, flashcardId: string) => {
    const storageRef = ref(storage, `audio/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await updateDoc(doc(db, 'flashcards', flashcardId), { audioUrl: url });
    fetchFlashcards();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-600 hover:border-indigo-500 hover:text-indigo-500">
            <Plus className="h-8 w-8 mb-2" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Flashcards</h2>
          <div className="flex space-x-4">
            <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
              <Upload className="h-5 w-5 mr-2" />
              Upload CSV
              <input
                type="file"
                accept=".csv"
                onChange={handleCsvUpload}
                className="hidden"
                disabled={isUploading}
              />
            </label>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <Plus className="h-5 w-5 mr-2" />
              Add Flashcard
            </button>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  English
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Translation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {flashcards.map(flashcard => (
                <tr key={flashcard.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {flashcard.english}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {flashcard.translation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <label className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                      {flashcard.audioUrl ? 'Update Audio' : 'Add Audio'}
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleAudioUpload(file, flashcard.id);
                        }}
                        className="hidden"
                      />
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}