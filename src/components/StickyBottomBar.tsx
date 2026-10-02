import React from 'react';
import { ShoppingBag, PackageCheck } from 'lucide-react';
import { ColorVariant, ProductPack } from '../types';
import { PRODUCT_IMAGES } from '../data/productData';

interface StickyBottomBarProps {
  selectedColor: ColorVariant;
  selectedPack: ProductPack;
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  selectedColor,
  selectedPack,
  onOpenCheckout,
}) => {
  const bottleText = selectedPack.bottles === 1 ? '1 Botella (400ml)' : `${selectedPack.bottles} Botellas (${selectedPack.bottles * 400}ml)`;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8 z-40 shadow-2xl flex items-center justify-between max-w-7xl mx-auto">
      {/* Product & Quantity details */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
        <div className="relative hidden xs:block sm:block flex-shrink-0">
          <img
            src={PRODUCT_IMAGES.mainPoster}
            alt="Shampoo Disaar"
            className="w-10 h-10 sm:w-11 sm:h-11 object-cover rounded-lg border border-slate-200"
            referrerPolicy="no-referrer"
          />
          <span className="absolute -top-1.5 -right-1.5 bg-[#0f382a] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
            {selectedPack.bottles}x
          </span>
        </div>

        <div className="leading-tight min-w-0">
          {/* Quantity clear highlight */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-slate-900 bg-amber-100/90 text-amber-950 px-2 py-0.5 rounded-md">
              <PackageCheck className="w-3 h-3 text-emerald-800" />
              Llevas: {bottleText}
            </span>
            <span className="text-[11px] text-slate-500 font-medium truncate">
              · Tono: <strong>{selectedColor.shortName}</strong>
            </span>
          </div>

          {/* Total Price with clear explanation */}
          <p className="text-[12px] sm:text-[13px] text-slate-800 font-bold mt-0.5">
            Total:{' '}
            <span className="text-emerald-700 font-black tabular-nums">
              ${selectedPack.price.toLocaleString('es-CL')} CLP
            </span>{' '}
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-normal">
              ({selectedPack.bottles === 1 ? 'precio final 1 unidad' : `total por las ${selectedPack.bottles} unidades`})
            </span>
          </p>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <button
          onClick={onOpenCheckout}
          className="bg-[#0f382a] hover:bg-[#09261c] text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          <span className="hidden sm:inline">Pagar Contra Entrega</span>
          <span className="sm:hidden">Pedir ({selectedPack.bottles}x)</span>
        </button>
      </div>
    </div>
  );
};
