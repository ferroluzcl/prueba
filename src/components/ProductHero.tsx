import React, { useState } from 'react';
import { Star, Truck, CheckCircle2, ShieldCheck, Clock, Flame, ChevronRight, Maximize2 } from 'lucide-react';
import { COLOR_VARIANTS, PRODUCT_PACKS, PRODUCT_IMAGES } from '../data/productData';
import { ColorVariant, ProductPack } from '../types';

interface ProductHeroProps {
  selectedColor: ColorVariant;
  onSelectColor: (color: ColorVariant) => void;
  selectedPack: ProductPack;
  onSelectPack: (pack: ProductPack) => void;
  onOpenCheckout: () => void;
  onOpenImageModal: (imgUrl: string) => void;
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  selectedColor,
  onSelectColor,
  selectedPack,
  onSelectPack,
  onOpenCheckout,
  onOpenImageModal,
}) => {
  const galleryImages = [
    { url: PRODUCT_IMAGES.mainPoster, label: 'Shampoo Disaar 500ml' },
    { url: PRODUCT_IMAGES.tonesChart, label: 'Carta de Tonos' },
    { url: PRODUCT_IMAGES.womanBeforeAfter, label: 'Antes y Después Mujer' },
    { url: PRODUCT_IMAGES.manBeforeAfter, label: 'Antes y Después Hombre' },
    { url: PRODUCT_IMAGES.fourBottlesRange, label: 'Gama de Variantes' },
  ];

  const [activeImage, setActiveImage] = useState<string>(galleryImages[0].url);

  // When color changes, we can also gently highlight or sync active image if user selects
  const handleColorChange = (variant: ColorVariant) => {
    onSelectColor(variant);
    if (variant.image) {
      setActiveImage(variant.image);
    }
  };

  return (
    <section id="comprar" className="py-6 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Miga de pan" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <a href="#" className="hover:text-slate-800 transition-colors">Inicio</a>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <a href="#beneficios" className="hover:text-slate-800 transition-colors">Cuidado Capilar</a>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-slate-900 font-semibold truncate">Shampoo Disaar® Cubridor de Canas</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Image Gallery */}
        <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-28">
          <div className="relative bg-white rounded-3xl p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden group">
            {/* Badges on image */}
            <div className="absolute top-5 left-5 z-10 flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#0f382a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Fórmula 100% Natural
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                <Clock className="w-3.5 h-3.5" />
                Actúa en 8-15 Min
              </span>
            </div>

            {/* Zoom / Lightbox Trigger */}
            <button
              onClick={() => onOpenImageModal(activeImage)}
              className="absolute top-5 right-5 z-10 p-2 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-md transition-all hover:scale-105"
              title="Ampliar imagen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Main Image */}
            <div
              onClick={() => onOpenImageModal(activeImage)}
              className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center cursor-zoom-in relative"
            >
              <img
                src={activeImage}
                alt="Shampoo Disaar Cubre Canas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
            {galleryImages.map((img, index) => {
              const isSelected = activeImage === img.url;
              return (
                <button
                  key={index}
                  onClick={() => setActiveImage(img.url)}
                  className={`aspect-square rounded-xl overflow-hidden bg-white p-1 transition-all focus:outline-none ${
                    isSelected
                      ? 'border-2 border-[#0f382a] ring-2 ring-emerald-500/30 scale-102'
                      : 'border border-slate-200 opacity-75 hover:opacity-100 hover:border-slate-400'
                  }`}
                  aria-label={img.label}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </button>
              );
            })}
          </div>

          {/* Viral Social Proof Box */}
          <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between text-xs text-emerald-950 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-bold text-base">📈</span>
              <span>Tendencia número 1 en cuidado capilar en <strong>Chile</strong></span>
            </div>
            <span className="bg-emerald-200/80 text-emerald-950 font-bold px-2.5 py-0.5 rounded-full text-[11px]">
              ✓ Original Garantizado
            </span>
          </div>
        </div>

        {/* Right Column: High-Converting Purchase Module */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/40">
          
          {/* Rating & Stock Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9/5</span>
              <span className="text-xs text-slate-500">(+180 opiniones)</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              ¡Últimas 14 unidades!
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Shampoo Disaar® 400ml <br />
            <span className="text-[#0f382a]">Fórmula Natural Que Cubre Las Canas Al Instante</span>
          </h1>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            Recupera tu color natural en casa sin tintes abrasivos con amoníaco ni costosas visitas a la peluquería. Enriquecido con aceite de argán, colágeno y extractos botánicos milenarios.
          </p>

          {/* Pricing Box */}
          <div className="my-5 p-4 rounded-2xl bg-[#F7F9F6] border border-slate-200/80 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
                Precio de Oferta Hoy:
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0f382a] tracking-tight tabular-nums">
                  ${selectedPack.price.toLocaleString('es-CL')}
                </span>
                <span className="text-base sm:text-lg text-slate-400 line-through font-semibold tabular-nums">
                  ${selectedPack.originalPrice.toLocaleString('es-CL')}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-emerald-600 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">
                AHORRAS {selectedPack.savingsPercentage}%
              </span>
              <span className="block text-[11px] text-emerald-800 font-semibold mt-1">
                ¡Envío prioritario incluido!
              </span>
            </div>
          </div>

          {/* Color Variant Selector */}
          <div id="tonos-selector" className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <span>Selecciona tu Tono:</span>
                <span className="text-emerald-700 font-extrabold">{selectedColor.name}</span>
              </label>
              <a href="#guia-tonos" className="text-xs text-[#0f382a] underline font-medium hover:text-emerald-600">
                Ver carta de colores
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {COLOR_VARIANTS.map((variant) => {
                const isSelected = selectedColor.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => handleColorChange(variant)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'border-2 border-[#0f382a] bg-emerald-50/50 shadow-sm'
                        : 'border border-slate-200 hover:border-slate-400 bg-white'
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                      style={{ backgroundColor: variant.hex }}
                    />
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {variant.shortName}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 mt-2 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              💡 <strong>Recomendación:</strong> {selectedColor.recommendedFor}
            </p>
          </div>

          {/* Promotion Packs Selector */}
          <div className="space-y-2.5 mb-6">
            <label className="text-sm font-bold text-slate-800 block">
              Elige tu Promoción:
            </label>

            {PRODUCT_PACKS.map((pack) => {
              const isSelected = selectedPack.id === pack.id;
              return (
                <div
                  key={pack.id}
                  onClick={() => onSelectPack(pack)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-2 border-[#0f382a] bg-emerald-50/30 shadow-sm'
                      : 'border border-slate-200 hover:border-slate-400 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="promo_pack"
                      checked={isSelected}
                      onChange={() => onSelectPack(pack)}
                      className="w-4 h-4 text-[#0f382a] focus:ring-emerald-500 accent-[#0f382a]"
                    />
                    <div>
                      {pack.tag && (
                        <span className="text-[10px] font-black text-white bg-[#0f382a] px-2 py-0.5 rounded-md uppercase mr-1.5 inline-block">
                          {pack.tag}
                        </span>
                      )}
                      <span className="text-sm font-bold text-slate-900 block sm:inline">
                        {pack.title}
                      </span>
                      <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                        {pack.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <span className="text-lg font-black text-[#0f382a] tabular-nums">
                      ${pack.price.toLocaleString('es-CL')}
                    </span>
                    <span className="block text-[11px] text-slate-400 line-through tabular-nums">
                      ${pack.originalPrice.toLocaleString('es-CL')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Big High-Converting CTA Button: Pago Contra Entrega */}
          <div className="space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] transition-all text-white py-4 px-6 rounded-2xl font-extrabold text-base sm:text-lg flex flex-col items-center justify-center gap-0.5 shadow-xl shadow-emerald-600/30 group"
            >
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>PIDE AHORA Y PAGA AL RECIBIR 💸</span>
              </div>
              <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wide">
                Pagas en efectivo o transferencia en la puerta de tu casa
              </span>
            </button>

            {/* Safe checkout guarantees */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100 text-slate-600 text-[11px]">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Sin cobro previo</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Entrega 24/48h</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Garantía de calidad</span>
              </div>
            </div>
          </div>

          {/* Bullet Highlights */}
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Cobertura Total al Instante:</strong> Pigmenta canas y raíces rebeldes desde el primer lavado.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Sin Amoníaco ni Sulfatos Químicos:</strong> No irrita el cuero cabelludo ni reseca las puntas.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Repara y Aporta Brillo:</strong> Con extracto de ginseng, aceite de argán y colágeno natural.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Larga Duración:</strong> Tono impecable y uniforme durante 15 a 20 días por aplicación.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
