import React from 'react';
import { LogoTDIA } from './Icons';
import { GRADIENT_MAIN } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="w-full h-screen bg-white flex overflow-hidden">
      {/* Sidebar - Approx 2cm width relative to viewport, full height */}
      <div className={`h-full w-16 md:w-20 lg:w-24 bg-gradient-to-b ${GRADIENT_MAIN} flex flex-col justify-end items-center pb-8 flex-shrink-0 relative`}>
        {/* IA Stickers Pattern (Decorational) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 left-2 text-4xl text-white">AI</div>
            <div className="absolute top-40 right-2 text-2xl text-white">TD</div>
            <div className="absolute bottom-40 left-2 text-3xl text-white">⚙️</div>
        </div>
        
        {/* Logo Area */}
        <div className="w-10 h-10 md:w-12 md:h-12 mb-4">
           <LogoTDIA className="w-full h-full" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-16 h-full relative">
        {/* Header */}
        <header className="mb-8">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${GRADIENT_MAIN} bg-clip-text text-transparent mb-2 ${title.split(' ').length > 10 ? 'font-poppins' : 'font-rubik'}`}>
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl font-poppins text-gray-600 mb-4 font-light">
            {subtitle}
          </h2>
          {/* Divider Line */}
          <div className={`h-[2px] w-full bg-gradient-to-r ${GRADIENT_MAIN} opacity-50`}></div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};