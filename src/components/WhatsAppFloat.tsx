import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppFloatProps {
  onOpen: () => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ onOpen }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 max-w-xs animate-bounce">
          <span>¿Tienes dudas? Escríbenos a WhatsApp 💬</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <button
        onClick={onOpen}
        className="w-13 h-13 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-white/80"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
};
