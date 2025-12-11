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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 h-full">
        
        {/* Left Column: Cenário Atual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-gray-400 shadow-md h-full flex flex-col">
            
            <div className="mb-6">
              <h3 className="text-2xl font-rubik font-bold text-gray-800 mb-3">
                Cenário Atual da HE
              </h3>
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Descrição contexto */}
            <p className="text-base font-poppins text-gray-700 leading-relaxed mb-8">
              Planilhas manuais, pouca visibilidade por segmento/operadora e dificuldade de cruzar TÁTICO, NOC e Supervisão, com risco trabalhista por falta de trilha de auditoria.
            </p>

            {/* Problema principal */}
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-1">📋</span>
                <div>
                  <h4 className="font-rubik font-bold text-gray-800 text-base">Registros dispersos</h4>
                  <p className="text-sm font-poppins text-gray-600 mt-1">Controles manuais em planilhas diferentes para cada segmento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-1">❌</span>
                <div>
                  <h4 className="font-rubik font-bold text-gray-800 text-base">Pouca visibilidade integrada</h4>
                  <p className="text-sm font-poppins text-gray-600 mt-1">Dificuldade em cruzar informações entre TÁTICO, NOC e Supervisão.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-1">⚠️</span>
                <div>
                  <h4 className="font-rubik font-bold text-gray-800 text-base">Risco trabalhista</h4>
                  <p className="text-sm font-poppins text-gray-600 mt-1">Falta de trilha de auditoria completa das ações realizadas.</p>
                </div>
              </div>
            </div>

            {/* Footer quote */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-poppins text-gray-700 italic">
                "Controles descentralizados aumentam erros e riscos."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Objetivos do TABI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col"
        >
          <div className="bg-white rounded-2xl p-8 border-l-4 border-nu-primary shadow-md h-full flex flex-col">
            
            <div className="mb-6">
              <h3 className="text-2xl font-rubik font-bold text-nu-primary mb-3">
                Objetivos do TABI
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-nu-primary to-nu-secondary rounded-full" />
            </div>

            {/* Padronização */}
            <div className="mb-8">
              <h4 className="font-rubik font-bold text-nu-primary text-lg mb-4">Padronização</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-poppins font-medium text-gray-700">Regras claras</span>
                    <span className="text-xs font-poppins font-semibold text-nu-primary">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-nu-primary to-nu-secondary rounded-full" />
                  </div>
                  <p className="text-xs font-poppins text-gray-600 mt-2">Processo único para registrar, validar e aprovar HE.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-poppins font-medium text-gray-700">Rastreabilidade</span>
                    <span className="text-xs font-poppins font-semibold text-nu-primary">Logs</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-nu-primary to-nu-secondary rounded-full" />
                  </div>
                  <p className="text-xs font-poppins text-gray-600 mt-2">Trilha de auditoria com ações do TÁTICO, NOC e Supervisão.</p>
                </div>
              </div>
            </div>

            {/* Agilidade */}
            <div className="mb-8">
              <h4 className="font-rubik font-bold text-nu-primary text-lg mb-4">Agilidade</h4>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-poppins font-medium text-gray-700">Fluxo fim a fim</span>
                  <span className="text-xs font-poppins font-semibold text-nu-secondary">2x mais rápido</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-nu-secondary to-nu-primary rounded-full" />
                </div>
                <p className="text-xs font-poppins text-gray-600 mt-2">Planejar, validar e atribuir HE em um único painel com importação de CSV e limites por pessoa.</p>
              </div>
            </div>

            {/* KPIs em cards */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="bg-gradient-to-br from-nu-primary/10 to-nu-primary/5 rounded-lg p-4 text-center"
                >
                  <p className="text-2xl font-rubik font-bold text-nu-primary">80%</p>
                  <p className="text-xs font-poppins text-gray-600 mt-1">Menos erros</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-nu-secondary/10 to-nu-secondary/5 rounded-lg p-4 text-center"
                >
                  <p className="text-2xl font-rubik font-bold text-nu-secondary">100%</p>
                  <p className="text-xs font-poppins text-gray-600 mt-1">Rastreabilidade</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="bg-gradient-to-br from-amber-100/50 to-amber-50/50 rounded-lg p-4 text-center"
                >
                  <p className="text-2xl font-rubik font-bold text-amber-600">2x</p>
                  <p className="text-xs font-poppins text-gray-600 mt-1">Agilidade</p>
                </motion.div>
              </div>
            </div>

            {/* Nota final */}
            <div className="pt-4 mt-4">
              <p className="text-xs font-poppins text-gray-600 leading-relaxed">
                <span className="font-semibold">Nota:</span> TABI integra planejamento, validação e atribuição de HE, reduzindo retrabalho e trazendo segurança jurídica com logs completos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};