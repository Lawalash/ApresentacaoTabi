import React from 'react';
import { GRADIENT_MAIN } from '../types';
import timeLogo from "./assets/time-logo.png";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, showSidebar = true }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-poppins text-nu-primary selection:bg-nu-sky selection:text-white flex">
      {/* Sidebar */}
      {showSidebar && (
        <aside className="h-full w-[4%] min-w-[60px] bg-gradient-to-b from-nu-primary to-nu-secondary flex flex-col justify-end items-center pb-8 shadow-lg z-20 shrink-0">
          {/* Logo Vertical */}
          <img 
            src={timeLogo} 
            alt="Time Logo" 
            className="object-contain rotate-90"
            style={{ maxWidth: '300%', height: 'auto', marginBottom: '70px' }}
          />
        </aside>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col relative z-10 ${showSidebar ? 'px-12 py-10' : ''}`}>
        
        {/* Header for Content Slides */}
        {showSidebar && title && (
          <header className="mb-8">
            <h1 className="font-rubik text-4xl font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <h2 className="font-poppins text-xl text-nu-mid mt-1 font-medium">
                {subtitle}
              </h2>
            )}
            <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-nu-primary to-nu-sky opacity-60 rounded-full" />
          </header>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-4 relative">
          {children}
        </div>
      </main>
    </div>
  );
};