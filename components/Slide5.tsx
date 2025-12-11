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
      <div className="h-full flex flex-col justify-center items-center relative py-12">
        
        {/* Main Message */}
        <motion.div 
          className="text-center mb-12 max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-poppins text-lg text-nu-primary font-semibold mb-4 uppercase tracking-widest">
            Demonstração do Sistema
          </p>
          <h1 className="font-rubik text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Centralização, Transparência e Conformidade
          </h1>
          <p className="font-poppins text-lg text-gray-700 leading-relaxed">
            O TABI integra planejamento, validação e atribuição de HE em um único painel, garantindo rastreabilidade completa e aderência às regras operacionais.
          </p>
        </motion.div>

        {/* CTA Button - Main Focus */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.button
            onClick={handleOpenMockup}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 rounded-xl font-poppins font-bold text-lg overflow-hidden shadow-2xl"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-nu-primary to-nu-secondary rounded-xl" />
            
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Text with relative positioning */}
            <span className="relative z-10 text-white flex items-center gap-3">
              Explorar Mockup do TABI
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>

          {/* Animated glow effect around button */}
          <motion.div
            className="absolute inset-0 rounded-xl blur-xl"
            style={{
              background: "linear-gradient(to right, #225B8E, #2A898D)",
              opacity: 0.3,
              filter: "blur(20px)"
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Info Grid - 3 Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {[
            {
              icon: "📋",
              title: "Governança Centralizada",
              desc: "Registro único para TÁTICO, NOC e Supervisão"
            },
            {
              icon: "🔍",
              title: "Trilha de Auditoria",
              desc: "Logs completos de todas as ações realizadas"
            },
            {
              icon: "⚡",
              title: "Fluxo Integrado",
              desc: "Planejar, validar e atribuir em um painel"
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h4 className="font-rubik font-bold text-gray-900 mb-2">
                {pillar.title}
              </h4>
              <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Block */}
        <motion.div
          className="bg-gradient-to-br from-nu-primary/5 to-nu-secondary/5 rounded-xl p-8 border border-nu-primary/20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-rubik text-2xl font-bold text-nu-primary mb-2">Dúvidas ou Sugestões?</h3>
          <p className="font-poppins text-base text-gray-700 mb-4">
            Estamos à disposição para responder e evoluir o TABI junto com vocês.
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-lg border-2 border-nu-primary/30">
            <p className="font-poppins font-semibold text-nu-primary">
                AeC - Contact Center - Eficiencia Fora da PA
            </p>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.p
          className="mt-12 font-poppins text-xl font-semibold text-nu-primary text-center max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          100% de governança das horas extras, do planejamento ao registro final. 🎯
        </motion.p>

        {/* Copyright */}
        <motion.div 
          className="absolute bottom-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-gray-400 font-poppins">TRANSFORMAÇÃO DIGITAL & IA © 2025</p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};