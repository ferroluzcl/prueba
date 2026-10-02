import React from 'react';
import { Flower2, Droplets, CheckCircle, Sparkles } from 'lucide-react';

export const BotanicalFormula: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Ponte los guantes de regalo',
      desc: 'Colócate los guantes incluidos y presiona el dosificador para verter la cantidad adecuada según el largo de tu pelo.',
    },
    {
      step: '2',
      title: 'Masajea durante 5 minutos',
      desc: 'Aplica sobre cabello seco o ligeramente humedecido, frotando bien la raíz y las canas hasta formar espuma abundante.',
    },
    {
      step: '3',
      title: 'Deja actuar 8 a 15 minutos',
      desc: 'Permite que los pigmentos botánicos y el colágeno penetren la cutícula mientras te bañas o realizas tu rutina.',
    },
    {
      step: '4',
      title: 'Enjuaga con agua tibia',
      desc: 'Aclara hasta que el agua salga transparente. Disfruta un cabello sin canas, suave, nutrido y con brillo de salón.',
    },
  ];

  return (
    <section id="beneficios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
          Innovación Botánica
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
          No solo cubre canas: repara y nutre tu fibra capilar
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-3">
          A diferencia de las tinturas comunes que queman y debilitan el pelo con amoníaco abrasivo, Shampoo Disaar combina extractos botánicos milenarios con colágeno nutritivo.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Pillar 1 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
            <Flower2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Extracto de Ginseng & Serpiente
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Estimula la raíz folicular, fortalece el cabello desde el nacimiento y previene la caída excesiva mientras fija los pigmentos de forma segura y duradera.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
            <Droplets className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Aceite Puro de Argán & Keratina
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Sella la cutícula abierta, repara las puntas secas y otorga una sedosidad y luminosidad como un tratamiento de salón profesional en cada lavado.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            0% Manchas en Piel ni Toallas
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Fórmula inteligente desarrollada para adherirse exclusivamente a la fibra de queratina del cabello, sin manchar tu frente, orejas ni dejar residuos pegajosos.
          </p>
        </div>
      </div>

      {/* Step by Step Guide: Modo de Uso */}
      <div className="bg-[#FAFBF9] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Fácil de usar en la ducha</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-8">
          ¿Cómo se aplica? En 4 simples pasos:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div key={st.step} className="relative bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-[#0f382a] text-white font-extrabold text-sm flex items-center justify-center mb-3">
                {st.step}
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">{st.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
