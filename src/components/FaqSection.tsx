import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
          Resolvemos tus Dudas
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
          Preguntas Frecuentes
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Todo lo que necesitas saber antes de recibir tu shampoo en casa.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-bold text-slate-900 text-sm">¿Tienes una pregunta específica sobre tu cabello?</h4>
          <p className="text-xs text-slate-500">Nuestras asesoras capilares te responden en minutos en WhatsApp.</p>
        </div>
        <button
          onClick={onOpenWhatsApp}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all flex-shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar por WhatsApp</span>
        </button>
      </div>
    </section>
  );
};
