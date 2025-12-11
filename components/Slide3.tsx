import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide3: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout
      {...props}
      title="TABI · Como funciona na prática"
      subtitle="Fluxo TÁTICO → NOC → Supervisão → Logs"
    >
      <div className="relative h-full flex flex-col">
        {/* Background Ambient Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-nu-sky/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nu-mid/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 flex-1">
          
          {/* Card TÁTICO */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-mid hover:shadow-xl transition-shadow h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-rubik text-2xl text-nu-primary">TÁTICO · Planejamento</h3>
              <span className="bg-nu-sky/20 text-nu-primary text-xs font-bold px-3 py-1 rounded-full">Registro diário</span>
            </div>

            <ul className="space-y-4 font-poppins text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Registra necessidades de HE por data, operação, segmento e intervalos de 10 minutos.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Inclusão manual ou por importação de CSV para grandes volumes.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Cálculo automático de HC e minutos de HE (1 HC = 10 minutos).</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Organização por grupos (data + operação + segmento) para consolidar volumes.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Visão de demanda permite planejar pausas e HE com antecedência.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Histórico por grupo facilita replanejar e ajustar o quadro.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-cyan rounded-full mt-2" />
                 <span>Mensagem central: base de planejamento única para o restante do fluxo.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card NOC/Supervisão */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-nu-secondary hover:shadow-xl transition-shadow h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-rubik text-2xl text-nu-secondary">NOC & Supervisores · Validação e atribuição</h3>
              <span className="bg-nu-secondary/20 text-nu-secondary text-xs font-bold px-3 py-1 rounded-full">Fluxo diário</span>
            </div>

            <ul className="space-y-4 font-poppins text-gray-600 flex-1">
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>NOC consolida os grupos (data + operação + segmento) e valida volumes de HE.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Associação de supervisores e aprovador por grupo com registro de decisões.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Supervisores atribuem HC por colaborador, garantindo limite máximo de horas por pessoa.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Distribuição respeita disponibilidade do colaborador e intervalo aprovado.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Visualização consolidada das HCs atribuídas por colaborador e intervalo.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Boas práticas: consolidar pedidos, validar regras e evitar controles paralelos em planilhas.</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 bg-nu-mid rounded-full mt-2" />
                 <span>Logs registram quem planejou, validou e atribuiu cada HE.</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-center font-poppins text-gray-500 text-sm mt-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fluxo integrado para planejar, validar e registrar HE com rapidez e rastreabilidade.
        </motion.p>
      </div>
    </SlideLayout>
  );
};
