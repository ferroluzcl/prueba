import React, { useState } from 'react';
import { MapPin, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { CHILE_REGIONS } from '../data/productData';

interface CoverageCheckerProps {
  onPreselectComunaAndOrder: (region: string, comuna: string) => void;
}

export const CoverageChecker: React.FC<CoverageCheckerProps> = ({ onPreselectComunaAndOrder }) => {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  const currentRegion = CHILE_REGIONS[selectedRegionIndex];
  const [selectedComuna, setSelectedComuna] = useState<string>(currentRegion.comunas[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleRegionChange = (idx: number) => {
    setSelectedRegionIndex(idx);
    setSelectedComuna(CHILE_REGIONS[idx].comunas[0]);
  };

  const isExpress24h = selectedRegionIndex === 0; // Región Metropolitana is 24h express, others 24-48h

  return (
    <section id="cobertura" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/50">
        
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
            Cobertura Nacional
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Consulta el tiempo de despacho en tu comuna
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Despachamos desde nuestra central en Santiago con repartidores propios y convenios de última milla con pago contra entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-center">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              1. Selecciona tu Región de Chile:
            </label>
            <select
              value={selectedRegionIndex}
              onChange={(e) => handleRegionChange(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {CHILE_REGIONS.map((reg, idx) => (
                <option key={reg.name} value={idx}>
                  {reg.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              2. Elige tu Comuna o Ciudad:
            </label>
            <select
              value={selectedComuna}
              onChange={(e) => setSelectedComuna(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {currentRegion.comunas.map((com) => (
                <option key={com} value={com}>
                  {com}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Result Feedback Box */}
        <div className="mt-8 max-w-3xl mx-auto p-5 sm:p-6 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-emerald-600 text-white rounded-xl flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {selectedComuna}
                </span>
                <span className="bg-emerald-200 text-emerald-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  {isExpress24h ? 'Despacho Exprés 24h' : 'Entrega 24-48h'}
                </span>
              </div>
              <p className="text-xs text-emerald-950 mt-1">
                ✓ <strong>Pago Contra Entrega disponible.</strong> Pagas cuando el repartidor llegue a tu casa en {selectedComuna}.
              </p>
            </div>
          </div>

          <button
            onClick={() => onPreselectComunaAndOrder(currentRegion.name, selectedComuna)}
            className="w-full sm:w-auto bg-[#0f382a] hover:bg-[#09261c] text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 flex-shrink-0 active:scale-95"
          >
            <span>Pedir con entrega en {selectedComuna}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
