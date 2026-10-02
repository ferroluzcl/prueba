import React, { useState } from 'react';
import { ArrowUp, Sparkles, Check } from 'lucide-react';
import { COLOR_VARIANTS, PRODUCT_IMAGES } from '../data/productData';
import { ColorVariant } from '../types';

interface ToneGuideProps {
  selectedColor: ColorVariant;
  onSelectColorAndScroll: (variant: ColorVariant) => void;
  onOpenImageModal: (url: string) => void;
}

export const ToneGuide: React.FC<ToneGuideProps> = ({
  selectedColor,
  onSelectColorAndScroll,
  onOpenImageModal,
}) => {
  // Mini quiz state for Tone Advisor
  const [currentBase, setCurrentBase] = useState<string>('oscuro');
  const [greyPercentage, setGreyPercentage] = useState<string>('media');
  const [advisorRecommendation, setAdvisorRecommendation] = useState<ColorVariant>(COLOR_VARIANTS[1]);

  const handleCalculateRecommendation = (base: string, greys: string) => {
    setCurrentBase(base);
    setGreyPercentage(greys);

    let rec: ColorVariant = COLOR_VARIANTS[1]; // default Cafe Oscuro
    if (base === 'negro') {
      rec = COLOR_VARIANTS[0]; // Negro
    } else if (base === 'oscuro') {
      rec = greys === 'alta' ? COLOR_VARIANTS[0] : COLOR_VARIANTS[1];
    } else if (base === 'castano') {
      rec = COLOR_VARIANTS[2]; // Castano
    } else if (base === 'rojo') {
      rec = COLOR_VARIANTS[3]; // Rojo burdeo
    } else if (base === 'rubio') {
      rec = COLOR_VARIANTS[4]; // Rubio gold
    }
    setAdvisorRecommendation(rec);
  };

  return (
    <section id="tonos" className="py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Tone Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Tone Details */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
              Carta de Tonos
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Elige el matiz que mejor se adapta a tu cabello
            </h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Nuestros pigmentos botánicos se mezclan armoniosamente con tu tono natural para dar un resultado parejo, brillante y sin efecto casco. Disponible en 5 variantes exclusivas.
            </p>
            
            <div className="mt-6 space-y-3">
              {COLOR_VARIANTS.map((tone) => {
                const isSelected = selectedColor.id === tone.id;
                return (
                  <button
                    key={tone.id}
                    onClick={() => onSelectColorAndScroll(tone)}
                    className={`w-full flex items-start gap-3 p-3 rounded-2xl text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-50 border-2 border-[#0f382a] shadow-sm'
                        : 'border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full mt-0.5 border border-white shadow-sm flex-shrink-0"
                      style={{ backgroundColor: tone.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-extrabold text-slate-900">
                          {tone.name}
                        </strong>
                        {isSelected && (
                          <span className="text-[11px] font-bold text-[#0f382a] flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            Seleccionado
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        {tone.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href="#comprar"
                className="inline-flex items-center gap-2 bg-[#0f382a] hover:bg-[#09261c] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <span>Seleccionar mi Tono Arriba</span>
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image from User's Graphic */}
          <div className="lg:col-span-7 space-y-6">
            <div
              onClick={() => onOpenImageModal(PRODUCT_IMAGES.tonesChart)}
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 cursor-zoom-in group relative"
            >
              <img
                src={PRODUCT_IMAGES.tonesChart}
                alt="Carta visual de tonos y colores"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Haz clic para ampliar la carta</span>
              </div>
            </div>

            {/* Asesor de Tono Interactivo en 2 Pasos */}
            <div className="bg-[#FAFBF9] border border-emerald-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-3">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>¿Dudas sobre cuál tono elegir? Asesor Rápido</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    1. Tu color de base habitual:
                  </label>
                  <select
                    value={currentBase}
                    onChange={(e) => handleCalculateRecommendation(e.target.value, greyPercentage)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="negro">Negro Azabache</option>
                    <option value="oscuro">Castaño Oscuro / Chocolate</option>
                    <option value="castano">Castaño Claro / Medio</option>
                    <option value="rojo">Rojizo / Caoba</option>
                    <option value="rubio">Rubio / Dorado Claro</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    2. Cantidad de canas aproximada:
                  </label>
                  <select
                    value={greyPercentage}
                    onChange={(e) => handleCalculateRecommendation(currentBase, e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="poca">Pocas (Menos del 25%)</option>
                    <option value="media">Moderadas en sienes y raíz (25% a 50%)</option>
                    <option value="alta">Muchas canas (Más del 50%)</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-emerald-100/70 border border-emerald-300/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-emerald-950 font-medium">Tono ideal recomendado para ti:</span>
                  <p className="text-sm font-extrabold text-[#0f382a]">
                    {advisorRecommendation.name}
                  </p>
                </div>
                <button
                  onClick={() => onSelectColorAndScroll(advisorRecommendation)}
                  className="bg-[#0f382a] hover:bg-[#09261c] text-white font-bold px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap"
                >
                  Aplicar {advisorRecommendation.shortName}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
