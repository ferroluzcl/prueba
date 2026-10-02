import React from 'react';
import { DELIVERIES_PROOF } from '../data/productData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface CustomerDeliveriesProps {
  onOpenImageModal: (url: string) => void;
}

export const CustomerDeliveries: React.FC<CustomerDeliveriesProps> = ({ onOpenImageModal }) => {
  return (
    <section id="testimonios" className="py-16 bg-[#F4F6F3] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
            Transparencia y Confianza
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Clientes recibiendo su pedido en todo Chile
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Entregas 100% reales en Santiago y regiones. Compras con total tranquilidad y pagas cuando el paquete está seguro en tus manos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERIES_PROOF.map((delivery) => (
            <div
              key={delivery.id}
              className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md group hover:shadow-lg transition-all"
            >
              <div
                onClick={() => onOpenImageModal(delivery.image)}
                className="rounded-2xl overflow-hidden aspect-[3/4] mb-3 bg-slate-100 cursor-zoom-in relative"
              >
                <img
                  src={delivery.image}
                  alt={`Entrega real a ${delivery.name} en ${delivery.city}`}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {delivery.deliveryTime}
                </span>
              </div>

              <div className="p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-slate-900 text-sm">
                    {delivery.name} ({delivery.age} años)
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {delivery.city}
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{delivery.comment}"
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pago verificado contra entrega</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
