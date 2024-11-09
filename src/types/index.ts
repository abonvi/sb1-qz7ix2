export interface Flashcard {
  id: string;
  english: string;
  translation: string;
  audioUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cardCount: number;
  language: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}