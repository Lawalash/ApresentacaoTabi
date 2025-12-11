import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';
import nubankBg from "./assets/nubank-bg.svg";

export const Slide1: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout 
      {...props} 
      showSidebar={false} 
      backgroundImage={nubankBg}
    >
      {/* Dynamic Gradient Overlay with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#225B8E] via-[#2A898D] to-[#1a4a5a] z-0 pointer-events-none" />
      
      {/* Animated background blobs */}
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-80 h-80 bg-[#45C5DE]/15 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3BC2C7]/10 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 w-full h-full flex flex-row items-center px-16 gap-12">
        
        {/* Left Content */}
        <motion.div 
          className="w-1/2 flex flex-col justify-center text-white space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge/Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <div className="w-2 h-2 rounded-full bg-[#45C5DE]" />
            <span className="font-poppins text-sm font-medium text-[#45C5DE] uppercase tracking-widest">Novo Sistema</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="font-rubik text-7xl font-bold leading-tight text-white">
              TABI
            </h1>
            <h2 className="font-poppins text-3xl font-light text-[#45C5DE]">
              Controle de Horas Extras
            </h2>
          </motion.div>

          {/* Animated line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1.5 bg-gradient-to-r from-[#3BC2C7] to-[#45C5DE] rounded-full"
          />

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3 pt-2"
          >
            <p className="font-poppins text-lg font-medium text-white leading-relaxed">
              Jornada, pausas e hora extra sob governança do início ao fim
            </p>
            <p className="font-poppins text-base opacity-80 leading-relaxed">
              Visão integrada para TÁTICO, NOC e Supervisão – com trilha completa de auditoria.
            </p>
          </motion.div>


        </motion.div>

        {/* Right Content - Enhanced Card */}
        <motion.div 
          className="w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="w-[85%] aspect-square relative"
          >
            {/* Card Background with border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Animated gradient border effect */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-[#45C5DE] via-[#3BC2C7] to-[#225B8E] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl"
              />
            </div>

            {/* Decorative animated shapes */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-[#45C5DE]/40 to-[#3BC2C7]/20 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#225B8E]/30 to-transparent rounded-full blur-3xl"
            />

            {/* Content inside card */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center space-y-4"
              >
                {/* Icon/Visual element */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#45C5DE] to-[#3BC2C7] flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-rubik text-2xl font-bold text-white leading-tight">
                  Visão Única da Operação
                </h3>
                <p className="font-poppins text-sm text-white/80 leading-relaxed max-w-xs">
                  Planejamento, validação e atribuição de HE em um único painel integrado.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};