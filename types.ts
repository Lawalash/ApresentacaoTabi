import React from 'react';

// Colors
export const COLORS = {
  lapis: '#225B8E',
  bluegreen: '#3699BA',
  skyblue: '#45C5DE',
  cyan: '#3BC2C7',
  darkcyan: '#2A898D',
};

// Gradients
export const GRADIENT_MAIN = `from-[#225B8E] to-[#2A898D]`;

// Slide Index Enum
export enum SlideIndex {
  COVER = 0,
  PRINCIPLES = 1,
  IMPROVEMENTS = 2
}

// Props Interfaces
export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  slideNumber: number;
  totalSlides: number;
}

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showSidebar?: boolean;
  slideNumber: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export interface SlideLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  slideNumber: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}