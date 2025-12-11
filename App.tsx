import React, { useState, useEffect } from 'react';
import { SlideIndex } from './types';
import { Navigation } from './components/Navigation';
import { Slide1Cover } from './components/Slide1_Cover';
import { Slide2Principles } from './components/Slide2_Principles';
import { Slide3Improvements } from './components/Slide3_Improvements';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(SlideIndex.COVER);
  const totalSlides = 3;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins text-gray-800">
      <div className="w-full h-full transition-opacity duration-500 ease-in-out">
        {currentSlide === SlideIndex.COVER && <Slide1Cover />}
        {currentSlide === SlideIndex.PRINCIPLES && <Slide2Principles />}
        {currentSlide === SlideIndex.IMPROVEMENTS && <Slide3Improvements />}
      </div>

      <Navigation
        onNext={handleNext}
        onPrev={handlePrev}
        canNext={currentSlide < totalSlides - 1}
        canPrev={currentSlide > 0}
        isCover={currentSlide === SlideIndex.COVER}
      />
    </div>
  );
};

export default App;
