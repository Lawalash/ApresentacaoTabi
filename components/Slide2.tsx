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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {/* Left Column: KPIs + Resumo Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-secondary shadow-sm h-full flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-rubik font-bold text-nu-primary mb-2">
                Cenário atual da HE
              </h3>
              <p className="text-xs font-poppins text-gray-600">
                Planilhas manuais, pouca visibilidade por segmento/operadora e dificuldade de cruzar TÁTICO, NOC e Supervisão,
                com risco trabalhista por falta de trilha de auditoria.
              </p>
            </div>

            {/* Chips de segmentos */}
            <div className="flex flex-wrap gap-2">
              {['TÁTICO', 'NOC', 'SUPERVISÃO', 'AUDITORIA'].map((seg) => (
                <span
                  key={seg}
                  className="px-3 py-1 rounded-full text-[11px] font-medium font-poppins bg-nu-surface text-nu-primary border border-nu-primary/10"
                >
                  {seg}
                </span>
              ))}
            </div>

            {/* KPIs principais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* KPI Locker Ativos */}
              <div className="bg-gradient-to-br from-nu-primary/10 to-nu-secondary/5 rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  Redução de retrabalho
                </span>
                <span className="text-2xl font-rubik font-bold text-nu-primary mt-1">
                  80%
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  Menos erros manuais na distribuição de HE
                </span>
              </div>

              {/* KPI TABI Liderança */}
              <div className="bg-gradient-to-br from-nu-secondary/10 to-nu-primary/5 rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  Aderência às regras de HE
                </span>
                <span className="text-2xl font-rubik font-bold text-nu-secondary mt-1">
                  100%
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  Meta: registrar regras e aprovações com rastreabilidade
                </span>
              </div>

              {/* KPI Pendências no Click */}
              <div className="bg-gradient-to-br from-gray-50 to-nu-surface rounded-xl p-3 flex flex-col">
                <span className="text-[11px] font-poppins text-gray-500">
                  Agilidade de decisão
                </span>
                <span className="text-2xl font-rubik font-bold text-amber-500 mt-1">
                  2x
                </span>
                <span className="text-[11px] font-poppins text-gray-600 mt-1">
                  Mais velocidade para planejar, validar e atribuir HE
                </span>
              </div>
            </div>

            {/* Próximos passos super objetivos */}
            <div className="mt-auto pt-3 border-t border-gray-100 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">Problema:</span> registros dispersos, controles manuais e pouca visibilidade integrada.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">Objetivo:</span> governança única de HE conectando TÁTICO, NOC e Supervisão.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-nu-primary shrink-0" />
                <span className="text-[11px] font-poppins text-gray-700">
                  <span className="font-semibold">TABI entrega:</span> registro centralizado, validação por grupo e trilha completa de auditoria.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Gráficos de aderência */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="bg-white rounded-2xl p-6 border-l-4 border-nu-primary shadow-sm h-full flex flex-col gap-6">
            <h3 className="text-xl font-rubik font-bold text-nu-primary">
              Objetivos do TABI
            </h3>

            <div className="flex-1 space-y-6">
              {/* Locker por segmento */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-poppins font-medium text-gray-700">
                    Padronização
                  </span>
                  <span className="text-[11px] font-poppins text-gray-500">
                    Governança única de HE
                  </span>
                </div>

                <div className="space-y-3">
                  {/* PJ_CHAT */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-poppins text-gray-600">Regras claras</span>
                      <span className="font-poppins font-semibold text-nu-primary">
                        Meta: 100%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-primary to-nu-secondary w-full" />
                    </div>
                    <p className="text-[11px] font-poppins text-gray-500 mt-1">Processo único para registrar, validar e aprovar HE.</p>
                  </div>

                  {/* PJ_CHAT_N2 */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-poppins text-gray-600">Rastreabilidade</span>
                      <span className="font-poppins font-semibold text-nu-primary">
                        Logs
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-primary to-nu-secondary w-full" />
                    </div>
                    <p className="text-[11px] font-poppins text-gray-500 mt-1">Trilha de auditoria com ações do TÁTICO, NOC e Supervisão.</p>
                  </div>
                </div>
              </div>

              {/* TABI Lideranças */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-poppins font-medium text-gray-700">
                    Agilidade
                  </span>
                  <span className="text-[11px] font-poppins text-gray-500">
                    Fluxo fim a fim
                  </span>
                </div>
                <div className="h-3 rounded-full bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nu-secondary to-nu-primary w-[85%]" />
                </div>
                <p className="text-[11px] font-poppins text-gray-500 mt-1">
                  Planejar, validar e atribuir HE em um único painel com importação de CSV e limites por pessoa.
                </p>
              </div>
            </div>

            {/* Nota de rodapé bem curta */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[10px] font-poppins text-gray-600 leading-relaxed">
                <span className="font-semibold">Nota:</span> TABI integra planejamento, validação e atribuição de HE, reduzindo retrabalho e trazendo segurança jurídica com logs completos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
