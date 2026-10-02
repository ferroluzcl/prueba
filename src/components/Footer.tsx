import React from 'react';
import { Leaf, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-[#09261c] text-slate-300 pt-14 pb-28 sm:pb-24 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-900 text-emerald-400 flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                BIOCUIDADO
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Especialistas en soluciones capilares botánicas y no invasivas. Brindamos productos auténticos de máxima calidad con despacho exprés y pago contra entrega en todo Chile.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Producto elaborado bajo las normativas sanitarias vigentes en Chile.</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Garantías & Envíos
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>🚚 Envíos 24-48 horas hábiles</li>
              <li>💸 Pago Contra Entrega Seguro</li>
              <li>🔄 Garantía de Satisfacción</li>
              <li>📦 Despachos a todo Chile</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Atención al Cliente
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <button
                  onClick={onOpenWhatsApp}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>📱 WhatsApp: +56 9 2700 4716</span>
                </button>
              </li>
              <li>🕒 Lunes a Sábado: 9:00 a 19:00 hrs</li>
              <li>📍 Distribución Central: Santiago, Chile</li>
              <li>✉️ contacto@biocuidado.cl</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 BioCuidado SpA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Términos y Condiciones
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Políticas de Privacidad
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Seguimiento de Envío
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
