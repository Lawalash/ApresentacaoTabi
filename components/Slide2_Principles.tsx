import React from 'react';
import { Layout } from './Layout';
import { COLORS } from '../types';

export const Slide2Principles: React.FC = () => {
  const principles = [
    "ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
    "FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
    "SÓ ACREDITAMOS NO SIMPLES.",
    "SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
    "TEMOS FOCO.",
    "ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
    "NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
    "SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
    "SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
    "SOMOS FELIZES COM O QUE FAZEMOS."
  ];

  return (
    <Layout 
      title="Princípios Innegociáveis" 
      subtitle="Base para decisão, execução e liderança"
    >
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Left Intro Column */}
        <div className="lg:w-1/4">
          <div className={`p-6 rounded-xl bg-[${COLORS.lapis}]/5 border-l-4 border-[${COLORS.lapis}]`}>
            <p className="font-poppins text-lg text-gray-700 leading-relaxed italic">
              "O TABI nasce alinhado aos nossos princípios: simplicidade, inovação constante e excelência na entrega."
            </p>
          </div>
          
          <div className="mt-8 hidden lg:block">
            <p className="font-poppins text-sm text-gray-400">
              O TABI é a materialização prática desses princípios no processo de hora extra.
            </p>
          </div>
        </div>

        {/* Principles List */}
        <div className="lg:w-3/4">
          <ul className="space-y-3">
            {principles.map((principle, index) => {
              const isHighlight = index === 1; // 2nd principle (index 1)
              return (
                <li key={index} className="flex items-start gap-3">
                  <span className={`font-poppins font-bold text-lg min-w-[1.5rem] ${isHighlight ? `text-[${COLORS.darkcyan}]` : `text-[${COLORS.lapis}]/60`}`}>
                    {index + 1}.
                  </span>
                  <span 
                    className={`font-poppins text-base md:text-lg uppercase leading-snug
                      ${isHighlight 
                        ? `font-bold text-[${COLORS.lapis}] scale-[1.02] origin-left transition-transform` 
                        : 'font-normal text-gray-600'
                      }
                    `}
                  >
                    {principle}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      {/* Mobile-only footer text */}
      <div className="mt-8 lg:hidden block">
        <p className="font-poppins text-sm text-gray-400 text-center border-t pt-4">
          O TABI é a materialização prática desses princípios no processo de hora extra.
        </p>
      </div>
    </Layout>
  );
};