import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Truck, ShieldCheck, Banknote, CreditCard, MessageCircle, AlertCircle } from 'lucide-react';
import { ColorVariant, ProductPack, ChileanRegion } from '../types';
import { CHILE_REGIONS, COLOR_VARIANTS, PRODUCT_PACKS } from '../data/productData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: ColorVariant;
  onSelectColor: (c: ColorVariant) => void;
  selectedPack: ProductPack;
  onSelectPack: (p: ProductPack) => void;
  preselectedRegion?: string;
  preselectedComuna?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedColor,
  onSelectColor,
  selectedPack,
  onSelectPack,
  preselectedRegion,
  preselectedComuna,
}) => {
  // Region & Comuna state
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  const currentRegion = CHILE_REGIONS[selectedRegionIndex] || CHILE_REGIONS[0];
  const [comuna, setComuna] = useState<string>(currentRegion.comunas[0] || 'Santiago Centro');

  // Form Fields
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [extraInfo, setExtraInfo] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'efectivo' | 'transferencia'>('efectivo');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Sync preselected region/comuna if passed
  useEffect(() => {
    if (preselectedRegion) {
      const idx = CHILE_REGIONS.findIndex(r => r.name.toLowerCase() === preselectedRegion.toLowerCase());
      if (idx !== -1) {
        setSelectedRegionIndex(idx);
        if (preselectedComuna) {
          setComuna(preselectedComuna);
        }
      }
    }
  }, [preselectedRegion, preselectedComuna]);

  if (!isOpen) return null;

  const handleRegionChange = (newIdx: number) => {
    setSelectedRegionIndex(newIdx);
    setComuna(CHILE_REGIONS[newIdx].comunas[0] || '');
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Por favor ingresa tu nombre y apellido.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Por favor ingresa un teléfono o WhatsApp de contacto válido para la entrega.');
      return;
    }

    if (!address.trim()) {
      setErrorMessage('Por favor ingresa tu dirección de entrega (calle y número).');
      return;
    }

    setIsSubmitting(true);

    // Simulate order dispatch creation
    setTimeout(() => {
      const generatedOrderNum = `NP-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(generatedOrderNum);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hola BioCuidado! Acabo de hacer el pedido ${orderNumber} de Shampoo Disaar (${selectedPack.title}, Tono ${selectedColor.shortName}) para despacho en ${comuna}. Mi nombre es ${fullName}.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f382a] text-white p-5 sm:p-6 flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
              Despacho Exprés en Chile · Pago Contra Entrega
            </span>
            <h3 className="text-xl font-extrabold text-white mt-0.5">
              {isSuccess ? '¡Pedido Confirmado con Éxito!' : 'Finalizar Pedido (Pagas al Recibir)'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner animate-pulse-glow">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block bg-emerald-100 text-[#0f382a] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Orden #{orderNumber} Registrada
                </span>
                <h4 className="text-2xl font-black text-slate-900">
                  ¡Gracias, {fullName}!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Tu pedido de <strong>Shampoo Disaar®</strong> ha sido agendado. Nuestro equipo de logística ya está preparando tu paquete para entrega en <strong>24 a 48 hrs hábiles</strong>.
                </p>
              </div>

              {/* Order Receipt Box */}
              <div className="bg-[#FAFBF9] border border-slate-200 rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-slate-200 font-semibold text-slate-700">
                  <span>Detalle del Pedido:</span>
                  <span>Total al Repartidor:</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{selectedPack.title}</span>
                  <span className="text-emerald-700 text-sm">${selectedPack.price.toLocaleString('es-CL')}</span>
                </div>
                <div className="text-slate-600">
                  <span>Tono: <strong>{selectedColor.name}</strong></span>
                </div>
                <div className="text-slate-600">
                  <span>Destino: <strong>{address}, {comuna}</strong></span>
                </div>
                <div className="text-slate-600">
                  <span>Método de pago: <strong>{paymentMethod === 'efectivo' ? 'Efectivo en mano' : 'Transferencia directa'}</strong></span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-emerald-800 font-bold">
                  <span>Costo de Despacho:</span>
                  <span className="bg-emerald-200/80 px-2 py-0.5 rounded text-[11px]">GRATIS</span>
                </div>
              </div>

              {/* WhatsApp Notification & Coordination */}
              <div className="max-w-md mx-auto space-y-3">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar mi pedido a WhatsApp de Soporte</span>
                </button>
                <p className="text-[11px] text-slate-500">
                  Te escribiremos en breve desde nuestro número oficial para coordinar el horario más cómodo para tu entrega.
                </p>

                <button
                  onClick={resetAndClose}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Cerrar y volver a la tienda
                </button>
              </div>
            </div>
          ) : (
            /* Order Form */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              
              {/* Product Variant Quick Summary & Selectors */}
              <div className="bg-[#FAFBF9] border border-slate-200/90 rounded-2xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Producto Seleccionado:
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      {selectedPack.title}
                    </h4>
                    <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                      ✓ Cantidad: {selectedPack.bottles} {selectedPack.bottles === 1 ? 'Botella (400ml)' : `Botellas (${selectedPack.bottles * 400}ml en total)`}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-emerald-800">
                      ${selectedPack.price.toLocaleString('es-CL')} CLP
                    </span>
                    <span className="block text-[11px] text-emerald-600 font-semibold">
                      Envío Gratis
                    </span>
                  </div>
                </div>

                {/* Change Pack & Tone selectors inside modal if desired */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Cambiar Promoción:
                    </label>
                    <select
                      value={selectedPack.id}
                      onChange={(e) => {
                        const found = PRODUCT_PACKS.find(p => p.id === e.target.value);
                        if (found) onSelectPack(found);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {PRODUCT_PACKS.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.title} (${p.price.toLocaleString('es-CL')})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Tono Elegido:
                    </label>
                    <select
                      value={selectedColor.id}
                      onChange={(e) => {
                        const found = COLOR_VARIANTS.find(c => c.id === e.target.value);
                        if (found) onSelectColor(found);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {COLOR_VARIANTS.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Error Alert if any */}
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-rose-700 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Customer Shipping Information Form */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                  Datos de Entrega en Chile (Sin Tarjetas)
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Carolina Rojas"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +56 9 8765 4321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Región *
                    </label>
                    <select
                      value={selectedRegionIndex}
                      onChange={(e) => handleRegionChange(Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {CHILE_REGIONS.map((r, i) => (
                        <option key={r.name} value={i}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Comuna *
                    </label>
                    <select
                      value={comuna}
                      onChange={(e) => setComuna(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {currentRegion.comunas.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Dirección (Calle y Número) *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Av. Providencia 1234"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Depto / Casa / Condominio (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Depto 502, Torre B"
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Preferred Payment at Door */}
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5">
                    ¿Cómo prefieres pagar al recibir?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'efectivo'
                          ? 'border-[#0f382a] bg-emerald-50/50 font-bold text-slate-900'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="method"
                        checked={paymentMethod === 'efectivo'}
                        onChange={() => setPaymentMethod('efectivo')}
                        className="text-[#0f382a] accent-[#0f382a]"
                      />
                      <Banknote className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs">Efectivo en mano</span>
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'transferencia'
                          ? 'border-[#0f382a] bg-emerald-50/50 font-bold text-slate-900'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="method"
                        checked={paymentMethod === 'transferencia'}
                        onChange={() => setPaymentMethod('transferencia')}
                        className="text-[#0f382a] accent-[#0f382a]"
                      />
                      <CreditCard className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs">Transferencia directa</span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-200 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 active:scale-98 transition-all cursor-pointer"
                >
                  <Truck className="w-5 h-5" />
                  <span>
                    {isSubmitting ? 'Procesando despacho...' : `CONFIRMAR Y PAGAR AL RECIBIR ($${selectedPack.price.toLocaleString('es-CL')})`}
                  </span>
                </button>
                <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Compra 100% protegida. Solo pagas cuando tengas tu pedido en tus manos.</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
