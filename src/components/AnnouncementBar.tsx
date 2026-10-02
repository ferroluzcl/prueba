import React from 'react';
import { Truck, ShieldCheck, Zap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Anuncios y despachos" className="bg-[#09261c] text-white text-xs py-2 sm:py-2.5 px-3 sm:px-4 relative sm:sticky sm:top-0 z-50 shadow-sm border-b border-emerald-900/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium">
          <span className="inline-flex items-center justify-center p-1 bg-emerald-500/20 text-emerald-300 rounded-full">
            <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
          </span>
          <span className="text-[11px] sm:text-xs"><strong>ENVÍOS EN 24HRS</strong> A TODO CHILE</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-300 font-bold text-sm">💵</span>
            <span>Paga al recibir en tu puerta</span>
          </div>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>+1.500 unidades entregadas</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] sm:text-xs tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Stock Disponible Hoy</span>
        </div>
      </div>
    </aside>
  );
};
