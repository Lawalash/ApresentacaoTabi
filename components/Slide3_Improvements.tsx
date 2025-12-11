import React from 'react';
import { Layout } from './Layout';
import { COLORS } from '../types';

export const Slide3Improvements: React.FC = () => {
  return (
    <Layout 
      title="Melhorias propostas no TABI" 
      subtitle="Do planejamento à execução – tudo no mesmo fluxo"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        
        {/* Block A: What changes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-[${COLORS.lapis}] text-white font-rubik font-bold text-xl shadow-md`}>
              A
            </div>
            <h3 className={`font-poppins font-semibold text-xl text-[${COLORS.lapis}]`}>
              O QUE MUDA NA PRÁTICA
            </h3>
          </div>

          <ul className="space-y-4 flex-1">
            {[
              "Centralizamos no TABI todo o fluxo de hora extra, eliminando planilhas e trocas de e-mail entre Tático, NOC e operação.",
              "O Tático registra a necessidade por data, DMM, operação, segmento e intervalos de 10 em 10 minutos, onde cada HC representa 10 minutos.",
              "O NOC visualiza bolsões de HE por data/segmento/operadora, consolidados em grupos com HE (horas) e HC (unidades), podendo validar tudo de forma massiva.",
              "O Supervisor recebe apenas os grupos validados e distribui HE por colaborador, respeitando o limite de 1h45 por operador e os períodos.",
              "Incluímos importação de CSV, exportação de dados e logs de auditoria com usuário, ação e horário para garantir rastreabilidade."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className={`mt-1.5 w-2 h-2 rounded-full bg-[${COLORS.skyblue}] flex-shrink-0`} />
                <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Block B: Gains */}
        <div className="bg-gradient-to-br from-[#f8fcfd] to-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-[${COLORS.darkcyan}] text-white font-rubik font-bold text-xl shadow-md`}>
              B
            </div>
            <h3 className={`font-poppins font-semibold text-xl text-[${COLORS.darkcyan}]`}>
              GANHOS ESPERADOS
            </h3>
          </div>

          <ul className="space-y-4 flex-1">
             {[
              "Menos retrabalho manual e mais rapidez na correção de rota e na distribuição das horas extras.",
              "Redução de erros de cálculo e menor risco de liberar HE em intervalos inadequados.",
              "Rastreabilidade completa por matrícula, intervalo e aprovador, facilitando auditoria e governança."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                 {/* Check icon for gains */}
                 <svg className={`mt-1 w-4 h-4 text-[${COLORS.cyan}] flex-shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <button 
              onClick={() => alert("Abrindo Mockup do TABI...")}
              className={`
                group relative overflow-hidden rounded-full px-8 py-3 
                bg-gradient-to-r from-[${COLORS.lapis}] to-[${COLORS.darkcyan}] 
                text-white font-poppins font-semibold text-sm tracking-wide shadow-lg
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                VER MOCKUP
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </Layout>
  );
};