import React from 'react';
import { GRADIENT_MAIN, COLORS } from '../types';
import { TabiIllustration } from './Icons';

export const Slide1Cover: React.FC = () => {
  return (
    <div className={`w-full h-screen bg-gradient-to-r ${GRADIENT_MAIN} flex items-center justify-center p-8 md:p-16 relative overflow-hidden`}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-white z-10 space-y-6">
          <h1 className="font-rubik font-bold text-5xl md:text-7xl leading-tight">
            TABI <br />
            <span className="font-light text-4xl md:text-6xl">Controle de Horas Extras</span>
          </h1>
          
          <h2 className="font-poppins text-xl md:text-3xl font-medium opacity-90">
            Planejamento tático, NOC e liderança na mesma visão
          </h2>

          <div className="w-24 h-1 bg-white/50 rounded-full my-6"></div>

          <p className="font-poppins text-lg md:text-xl font-light opacity-90 max-w-xl leading-relaxed">
            Centralizamos o fluxo de hora extra: da correção de rota à atribuição por matrícula, com mais segurança, rastreabilidade e velocidade.
          </p>
        </div>

        {/* Illustration Content */}
        <div className="flex justify-center md:justify-end z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
            {/* Recolor SVG on the fly by passing props or class logic in component */}
             <TabiIllustration className="w-full max-w-md h-auto drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
    </div>
  );
};