import React from 'react';
import { Leaf, MessageCircle, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, onOpenWhatsApp }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-[39px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#0f382a] text-emerald-400 flex items-center justify-center shadow-md shadow-emerald-950/10 group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="leading-tight">
            <span className="text-xl font-extrabold tracking-tight text-[#0f382a] block">
              BIOCUIDADO
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 tracking-wider uppercase block">
              Cosmética Capilar Natural
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#beneficios" className="hover:text-[#0f382a] transition-colors">
            Beneficios
          </a>
          <a href="#tonos" className="hover:text-[#0f382a] transition-colors">
            Tonos Disponibles
          </a>
          <a href="#resultados" className="hover:text-[#0f382a] transition-colors">
            Antes y Después
          </a>
          <a href="#testimonios" className="hover:text-[#0f382a] transition-colors">
            Clientes Reales
          </a>
          <a href="#cobertura" className="hover:text-[#0f382a] transition-colors">
            Cobertura Chile
          </a>
          <a href="#faqs" className="hover:text-[#0f382a] transition-colors">
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWhatsApp}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Asesoría WhatsApp</span>
          </button>
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-[#0f382a] hover:bg-[#09261c] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-950/15 hover:shadow-emerald-950/25 transition-all transform active:scale-95 whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>Pagar al Recibir</span>
          </button>
        </div>
      </div>
    </header>
  );
};
