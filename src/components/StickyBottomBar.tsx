import React from 'react';
import { ShoppingBag } from 'lucide-react';
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
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 z-40 shadow-2xl flex items-center justify-between max-w-7xl mx-auto sm:px-8">
      <div className="flex items-center gap-3">
        <img
          src={PRODUCT_IMAGES.mainPoster}
          alt="Shampoo Disaar"
          className="w-10 h-10 object-cover rounded-lg border border-slate-200 hidden sm:block flex-shrink-0"
          referrerPolicy="no-referrer"
        />
        <div className="leading-tight">
          <p className="text-xs font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
            Shampoo Disaar® ({selectedColor.shortName})
          </p>
          <p className="text-[11px] text-emerald-700 font-semibold">
            ${selectedPack.price.toLocaleString('es-CL')} CLP{' '}
            <span className="text-slate-400 line-through text-[10px]">
              ${selectedPack.originalPrice.toLocaleString('es-CL')}
            </span>{' '}
            · Despacho Exprés
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenCheckout}
          className="bg-[#0f382a] hover:bg-[#09261c] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-amber-300" />
          <span>Pagar Contra Entrega</span>
        </button>
      </div>
    </div>
  );
};
