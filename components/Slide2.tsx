import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide2: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout
      {...props}
      title="TABI · Contexto & Objetivos"
      subtitle="Por que precisamos de um sistema de governança de hora extra"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 h-full">
        
        {/* Left Column: Problema Atual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-gray-400 shadow-lg h-full flex flex-col justify-between">
            
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-rubik font-bold text-gray-700 mb-2">
                Cenário Atual
              </h3>
              <div className="w-16 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Icon/Visual */}
            <div className="flex justify-center my-4">
              <div className="w-20 h-20 rounded-full bg-gray-300/40 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Problem Points */}
            <div className="space-y-4 flex-1">
              {[
                { icon: '📋', text: 'Planilhas manuais dispersas' },
                { icon: '❌', text: 'Pouca visibilidade entre segmentos' },
                { icon: '⚠️', text: 'Risco trabalhista por falta de auditoria' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <p className="text-base font-poppins text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer text */}
            <div className="pt-6 mt-6 border-t border-gray-200">
              <p className="text-sm font-poppins text-gray-600 italic">
                "Controles descentralizados aumentam erros e riscos."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Solução TABI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-gradient-to-br from-nu-primary/5 to-nu-secondary/5 rounded-2xl p-8 border-l-4 border-nu-primary shadow-lg h-full flex flex-col justify-between">
            
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-rubik font-bold bg-gradient-to-r from-nu-primary to-nu-secondary bg-clip-text text-transparent mb-2">
                Solução TABI
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-nu-primary to-nu-secondary rounded-full" />
            </div>

            {/* Icon/Visual */}
            <div className="flex justify-center my-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nu-primary/20 to-nu-secondary/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-nu-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Solution Points */}
            <div className="space-y-4 flex-1">
              {[
                { icon: '🎯', label: 'Governança Única', desc: 'Registro centralizado de HE para TÁTICO, NOC e Supervisão' },
                { icon: '🔍', label: 'Rastreabilidade Total', desc: 'Trilha completa de auditoria com logs de todas as ações' },
                { icon: '⚡', label: 'Agilidade de Decisão', desc: 'Planejar, validar e atribuir HE em um único painel' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <h4 className="font-rubik font-bold text-nu-primary text-base">
                      {item.label}
                    </h4>
                  </div>
                  <p className="text-sm font-poppins text-gray-700 leading-relaxed ml-6">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer benefits */}
            <div className="pt-6 mt-6 border-t border-nu-primary/20">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '80%', label: 'Menos erros' },
                  { value: '100%', label: 'Rastreabilidade' },
                  { value: '2x', label: 'Mais ágil' }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="text-center"
                  >
                    <p className="text-lg font-rubik font-bold text-nu-primary">
                      {metric.value}
                    </p>
                    <p className="text-xs font-poppins text-gray-600">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};