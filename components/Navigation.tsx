import React from 'react';
import { ArrowLeft, ArrowRight } from './Icons';
import { GRADIENT_MAIN } from '../types';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  isCover?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ onNext, onPrev, canNext, canPrev, isCover }) => {
  return (
    <div className="absolute bottom-8 right-8 flex gap-4 z-50">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
          ${!canPrev ? 'opacity-0 cursor-default' : 'hover:scale-110 cursor-pointer shadow-lg'}
          ${isCover ? 'bg-white/20 text-white hover:bg-white/30' : `bg-gradient-to-r ${GRADIENT_MAIN} text-white`}
        `}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
          ${!canNext ? 'opacity-0 cursor-default' : 'hover:scale-110 cursor-pointer shadow-lg'}
          ${isCover ? 'bg-white/20 text-white hover:bg-white/30' : `bg-gradient-to-r ${GRADIENT_MAIN} text-white`}
        `}
      >
        <ArrowRight />
      </button>
    </div>
  );
};