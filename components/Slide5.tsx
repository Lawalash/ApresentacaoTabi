import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide5: React.FC<SlideProps> = (props) => {
  const handleOpenMockup = () => {
    window.open("http://127.0.0.1:5500/html/merged.html", "_blank");
  };

  return (
    <SlideLayout
      {...props}
      title="TABI · Próximos Passos"
      subtitle="Vamos ver o TABI na prática"
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        
        {/* Thank You Message */}
        <motion.h1
          className="font-rubik text-7xl md:text-8xl font-bold text-center mb-16 bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent"
          style={{ lineHeight: "inherit" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Obrigado
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button
            onClick={handleOpenMockup}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 rounded-xl font-poppins font-bold text-lg text-white overflow-hidden shadow-2xl"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-nu-primary to-nu-secondary rounded-xl" />
            
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Text */}
            <span className="relative z-10 flex items-center gap-2">
              Explorar Mockup do TABI
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl blur-2xl -z-10"
            style={{
              background: "linear-gradient(to right, #225B8E, #2A898D)",
              opacity: 0.3
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Contact Block */}
        <motion.div
          className="bg-white rounded-2xl p-10 border-l-4 border-nu-primary shadow-lg max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="font-rubik text-2xl font-bold text-nu-primary mb-3">Dúvidas ou Sugestões?</h3>
          <p className="font-poppins text-base text-gray-700 mb-6">
            Estamos à disposição para responder e evoluir o TABI junto com vocês.
          </p>
          <div className="inline-block">
            <p className="font-poppins font-semibold text-nu-primary text-lg">
              AeC - Contact Center - Eficiência Fora da PA
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="absolute bottom-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-gray-400 font-poppins">TRANSFORMAÇÃO DIGITAL & IA © 2025</p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};