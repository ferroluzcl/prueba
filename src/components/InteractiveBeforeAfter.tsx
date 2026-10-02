import React, { useState, useRef } from 'react';
import { Star, Sparkles, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { REVIEWS_DATA, PRODUCT_IMAGES, COLOR_VARIANTS } from '../data/productData';
import { ColorVariant } from '../types';

interface InteractiveBeforeAfterProps {
  onSelectToneAndScroll: (variant: ColorVariant) => void;
  onOpenImageModal: (url: string) => void;
}

export const InteractiveBeforeAfter: React.FC<InteractiveBeforeAfterProps> = ({
  onSelectToneAndScroll,
  onOpenImageModal,
}) => {
  // Slider state for interactive comparison
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeModel, setActiveModel] = useState<'woman' | 'man'>('woman');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const updateSliderPos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateSliderPos(e.clientX);
  };

  const activeImage = activeModel === 'woman' ? PRODUCT_IMAGES.womanBeforeAfter : PRODUCT_IMAGES.manBeforeAfter;

  return (
    <section id="resultados" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Evidencia Comprobada
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Resultados reales desde la primera aplicación
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-3">
          Mira cómo miles de personas en Chile le dicen adiós a las canas en 8 a 15 minutos, obteniendo un tono brillante, sedoso y sin aspecto teñido artificial.
        </p>
      </div>

      {/* Interactive Drag Before/After Demonstration Showcase */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/40 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-emerald-700" />
              <h3 className="text-lg font-bold text-slate-900">
                Transformación en 1 Lavado (Interactivo)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Desliza la barra con el mouse o dedo para comparar la raíz antes y después del tratamiento.
            </p>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveModel('woman')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeModel === 'woman'
                  ? 'bg-white text-[#0f382a] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Femenino (Castaño)
            </button>
            <button
              onClick={() => setActiveModel('man')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeModel === 'man'
                  ? 'bg-white text-[#0f382a] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Masculino (Pelo y Barba)
            </button>
          </div>
        </div>

        {/* Visual Comparison Card with Labels */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 max-w-3xl mx-auto shadow-inner">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerUp}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none cursor-ew-resize overflow-hidden"
          >
            {/* The main Before/After graphic provided in the asset */}
            <img
              src={activeImage}
              alt="Comparativa Antes y Después"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Splitter Line with draggable handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 -ml-4 bg-[#0f382a] text-white rounded-full shadow-lg border-2 border-white flex items-center justify-center text-xs font-bold pointer-events-auto">
                <span className="text-[10px] tracking-tighter">◀▶</span>
              </div>
            </div>

            {/* Float Badges */}
            <div className="absolute top-4 left-4 bg-amber-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md pointer-events-none uppercase tracking-wider">
              ANTES (Canas Visibles)
            </div>
            <div className="absolute top-4 right-4 bg-emerald-700 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md pointer-events-none uppercase tracking-wider">
              DESPUÉS (Color Natural)
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Cobertura de raíz completa, sin manchar la piel ni alterar el cuero cabelludo.</span>
            </span>
            <a
              href="#comprar"
              className="font-bold text-[#0f382a] hover:text-emerald-700 underline inline-flex items-center gap-1"
            >
              Pedir este resultado al instante
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Real Reviews Cards Grid with Real Client Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS_DATA.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-lg shadow-slate-200/40 flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            <div>
              {/* Photo Box */}
              {review.image && (
                <div
                  onClick={() => onOpenImageModal(review.image!)}
                  className="rounded-2xl overflow-hidden mb-4 aspect-[4/5] bg-slate-100 cursor-zoom-in relative"
                >
                  <img
                    src={review.image}
                    alt={`Caso de éxito de ${review.author}`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {review.toneUsed && (
                    <span className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      Tono: {review.toneUsed}
                    </span>
                  )}
                </div>
              )}

              {/* Review Meta */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-bold text-slate-900">
                  {review.author} {review.age ? `(${review.age} años)` : ''} · {review.city}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{review.comment}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                ✓ Compra verificada en Chile
              </span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
