import React from 'react';
import { Truck, Banknote, Sparkles, ShieldCheck } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Envíos en 24 Horas</h4>
              <p className="text-xs text-slate-500">Despacho exprés y seguimiento</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Paga al Recibir</h4>
              <p className="text-xs text-slate-500">100% seguro contra entrega</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Fórmula 100% Natural</h4>
              <p className="text-xs text-slate-500">Libre de amoníaco y parabenos</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Certificación Sanitaria</h4>
              <p className="text-xs text-slate-500">Cumple normativas vigentes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
