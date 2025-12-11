import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { SlideLayout } from './SlideLayout';

export const Slide4: React.FC<SlideProps> = (props) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <SlideLayout
      {...props}
      title="TABI · Principais Melhorias"
      subtitle="O que mudamos na gestão de hora extra"
    >
      <div className="flex flex-col h-full justify-center pb-8">
        
        {/* Grid Layout: 2 Top, 1 Bottom Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
          
          {/* Card 1: Governança e padronização */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="font-rubik text-xl text-nu-primary mb-3 font-semibold">Governança e padronização</h3>
            <p className="font-poppins text-gray-600 mb-2 leading-relaxed">
              Regras claras de HE, centralização dos registros e validação pelo NOC.
            </p>
            <p className="font-poppins text-sm text-gray-400">
              Aprovações registradas e rastreáveis por grupo (data, operação, segmento).
            </p>
          </motion.div>

          {/* Card 2: Eficiência operacional */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="font-rubik text-xl text-nu-mid mb-3 font-semibold">Eficiência operacional</h3>
            <p className="font-poppins text-gray-600 leading-relaxed">
              Menos planilha manual, visão consolidada por segmento/operadora e filtros por período.
            </p>
          </motion.div>

          {/* Card 3: Resultados esperados - Centered */}
          <div className="md:col-span-2 md:w-2/3 md:mx-auto w-full">
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-nu-primary to-nu-secondary text-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="font-rubik text-2xl mb-4 font-semibold">Resultados esperados</h3>
              <p className="font-poppins text-lg leading-relaxed">
                Redução de erros e retrabalho, menor risco trabalhista pela trilha de auditoria e mais agilidade para TÁTICO, NOC e Supervisão decidirem sobre HE.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="font-poppins text-nu-primary/80 text-sm font-medium border-t border-gray-200 pt-6 inline-block px-8">
            Próximos passos: consolidar HE em um único fluxo, com reports periódicos e decisões baseadas em dados.
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};
