import { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
}