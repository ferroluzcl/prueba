import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OrderProcessProps {
  onOpenCheckout: () => void;
}

export const OrderProcess: React.FC<OrderProcessProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0f382a] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-600/10 pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Fácil y Sin Tarjetas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-3">
            ¿Qué pasa cuando haces tu pedido hoy?
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Comprar en BioCuidado es rápido, transparente y 100% protegido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Step 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-xl mb-4">
              1
            </div>
            <h3 className="text-base font-bold text-white">Completas tus Datos</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Eliges tu tono y pack. Solo ingresas tu nombre, dirección y comuna. <strong>No necesitas ingresar tarjetas de crédito ni transferir ahora.</strong>
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black text-xl mb-4">
              2
            </div>
            <h3 className="text-base font-bold text-white">Coordinamos por WhatsApp</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Un asesor oficial de BioCuidado te contacta para confirmar la entrega y coordinar el rango horario más cómodo para ti.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-black text-xl mb-4">
              3
            </div>
            <h3 className="text-base font-bold text-white">Recibes y Pagas en Casa</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              El repartidor llega a tu puerta en 24 a 48 hrs hábiles. Recibes tu shampoo y le pagas directamente en efectivo o transferencia.
            </p>
          </div>

        </div>

        <div className="mt-10 text-center relative z-10">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#09261c] font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all transform active:scale-95 cursor-pointer"
          >
            <span>Hacer mi Pedido Ahora con Pago al Recibir</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
