import { ColorVariant, ProductPack, ReviewItem, DeliveryProof, ChileanRegion } from '../types';

export const PRODUCT_IMAGES = {
  mainPoster: 'https://lh3.googleusercontent.com/aida/AEtjO1XUziDN-VhEUM8JXAThLUsnWPF7kA97JEkqRZAnIlOjkKSZwaR750mSzi_lXU5RTjuWzKbm6C79io3LDrlUWIzkwkafwcrMN-44XOT4Wpj5UAnB1RhNTHhuJjmLOMhIvCKeXanK6Ty1dyBcFrY2y8i4ir78rkWuVcgJTv5CbQBumiX0RyM3bvMMcKp6eWb6iflRNSZiE3sEt3_uVTEIlmTaXrZMUYFLuuKkuMl3hDBP7xaS4QNC8iBgibM',
  tonesChart: 'https://lh3.googleusercontent.com/aida/AEtjO1WJ54ugdnjBXSVzjEqsN-6PvTPhucs84Qzngg7bTQ694pIy5l-ztd9pCa-9Vakbh6fQUEPgCJF67Nab9MbK29jFXx4l3WNa0TNhie7lNtE3SQPejqETEqsb1TKT6kItLIKnGvPEbmYobqu70_Dr8qcyIOz56EY_KFejHsaCt5w8RXW2xJ52FMXPlDzl2ee7ipCZFus80MPECsQej9QXq_X_0bc6UjPZYhKumWQtErYZKiSPG_MoCPcn7yY',
  womanBeforeAfter: 'https://lh3.googleusercontent.com/aida/AEtjO1VWOfriWhU6AqhBVgKpQIwFjILTiRWAqrwWkuqs0FLPRb1dWMKSKhktzCPKcP2X-pw51NAzztL-7jjxmpSEA_R-9QmgYub6j0KAvyhjTR4RF_-YTy-31l_1HdRDpAyFRk1kof7YfEyRxvq6T4bCVo6eW-d1UX5yxR-kZqec4fKFeNOq-MVBXfacKXGT0fSg24GT5lNqA0AVPMBWAgwp5FNChwkx7f_5IIRz0h26H2qDlFb0sL5D1Z_p58g',
  manBeforeAfter: 'https://lh3.googleusercontent.com/aida/AEtjO1WIqD3SPJywH5f4lknwF9kv5u6N_TNUkeHI8dZZ9VVO_nB-VuwmFR9Uquc7tPR2U1LoGsm0_dcLDe1iOA0A_h-HibN1z6I99v7KXHD5hfg49JmhRCO1FvBUAx6TpWuXkWMIsc8wFAC4FHwFueqAcBXJSH9ucgNxqLEp9KXjUN9sY1F3XDY3Z06n2Ma7NCuBIWFcBB_21dLqwecrGEyGfiQ2K429k5SFRg9WoL9YrjPk_UI4AptPqM6R4Q',
  fourBottlesRange: 'https://lh3.googleusercontent.com/aida/AEtjO1VKx9YVhoVmI9Jo8uTw5Iqf2Td_EPheg_jPBRcNhvAW-Qr3kQXHIiM1LD2CSqe4Ta5SsqlfbKtIE84V4gm2aE1xdOlHIgSpUML_KHUaS1IG_mIgbI9tpCyUOWRCZx9hx1AWMO6_8_RSG9--Y3R4ZGaj5OhfCxPrg390xydSOxRv_BDJ43-gk48VeDg93jAwAsHdVvjBVvn7bhERHPzguy3bGu_flGQci9OFjGCcNv8zn44AxdxKN3FG1HE',
};

export const COLOR_VARIANTS: ColorVariant[] = [
  {
    id: 'negro',
    name: 'Negro Natural',
    shortName: 'Negro',
    hex: '#171717',
    description: 'Cobertura profunda y máxima intensidad. Ideal para cabellos oscuros o canas rebeldes que buscan un tono uniforme y sobrio.',
    recommendedFor: 'Cabellos negros o castaños muy oscuros con más del 40% de canas.',
    image: PRODUCT_IMAGES.mainPoster,
  },
  {
    id: 'cafe-oscuro',
    name: 'Café / Marrón Oscuro',
    shortName: 'Café Oscuro',
    hex: '#3B2219',
    description: 'Tono chocolate cálido, elegante y luminoso. Sin matices rojizos no deseados, brinda un rejuvenecimiento muy sutil y natural.',
    recommendedFor: 'Cabellos castaños oscuros o personas que no quieren el pelo excesivamente negro.',
    image: PRODUCT_IMAGES.womanBeforeAfter,
  },
  {
    id: 'castano',
    name: 'Castaño Claro Natural',
    shortName: 'Castaño',
    hex: '#6B4B3E',
    description: 'El tono más versátil para cabellos claros y medios. Proporciona reflejos avellana y cobertura suave sin efecto casco.',
    recommendedFor: 'Cabellos castaño claro o castaño medio con canas dispersas.',
    image: PRODUCT_IMAGES.fourBottlesRange,
  },
  {
    id: 'rojo-burdeo',
    name: 'Rojo Burdeo Intenso',
    shortName: 'Rojo Burdeo',
    hex: '#591C2B',
    description: 'Reflejos cobrizos, cereza y borgoña radiantes. Otorga un brillo satinado y mucha personalidad con nutrición profunda.',
    recommendedFor: 'Cabellos teñidos previamente en tonos caoba, rojizos o castaños con reflejos cálidos.',
    image: PRODUCT_IMAGES.fourBottlesRange,
  },
  {
    id: 'rubio-gold',
    name: 'Rubio / Dorado Gold',
    shortName: 'Rubio Gold',
    hex: '#C29858',
    description: 'Ideal para iluminar, disimular canas en cabellos claros y matizar con reflejos miel y trigo relucientes.',
    recommendedFor: 'Cabellos rubios oscuros, castaños muy claros o personas con mechas claras.',
    image: PRODUCT_IMAGES.fourBottlesRange,
  },
];

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: 'pack-2',
    title: 'Pack x2 Unidades (Tratamiento Completo)',
    subtitle: 'Ahorra $5.000 adicional + Envío Prioritario Gratis',
    bottles: 2,
    price: 34990,
    originalPrice: 70000,
    savingsPercentage: 50,
    isPopular: true,
    tag: '🔥 MÁS POPULAR (83% COMPRA ESTE)',
  },
  {
    id: 'pack-1',
    title: '1 Botella Shampoo Disaar (400ml)',
    subtitle: 'Rinde más de 15 a 20 aplicaciones completas en casa',
    bottles: 1,
    price: 19990,
    originalPrice: 35000,
    savingsPercentage: 43,
  },
  {
    id: 'pack-3',
    title: 'Pack x3 Unidades (Mega Ahorro Familiar)',
    subtitle: 'El mejor precio por botella + Despacho Exprés Gratis',
    bottles: 3,
    price: 48990,
    originalPrice: 105000,
    savingsPercentage: 53,
    tag: '💎 MEJOR PRECIO UNITARIO',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ignacia M.',
    age: 48,
    city: 'Santiago Centro',
    rating: 5,
    verified: true,
    date: 'Hace 3 días',
    comment: 'Antes me veía con tantas canas en la parte superior. Ahora con el shampoo, el pelo se ve parejo, con un tono castaño piola, como el que tenía antes. ¡Notable el cambio!',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1U1e9jx0etSEXSgbKO0Q26iVhNQNdFe0WvVk_b-nM9U2zicrms3idSBfDp9yQUTNhA_d_nasfwWFIl2Y69HL_S12OtatHt9WFMsZO8TQCFdUdHtjcnMDy0tkiubUH9ulNmOhAxdJvZDpXveq4hbZkLDNDY7828l2cMqf-v8SmwgI0suLb_-4R_O1Ofn_UaHojUnReXv6l9_TMEqUs4N84pLmPg0gucnZZBMb-sxnoyiy--IYDVightWjoo',
    toneUsed: 'Castaño Natural',
  },
  {
    id: 'rev-2',
    author: 'Claudia R.',
    city: 'Providencia, RM',
    rating: 5,
    verified: true,
    date: 'Hace 5 días',
    comment: 'Tenía las canas súper marcadas en las raíces. Con el shampoo el pelo agarró un tono marrón piola, natural y sin parecer teñido de peluquería. ¡Quedé feliz y el envío llegó en menos de 24 horas!',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WSATe_GkhduOao_5oSLQBKQa_ykvXoxltkvT70EfipGWmKAJ4jZk_1cRVfMhDPNOPm9PeLyQKjK5Var7HncCbfRtcMY4npjiEfIWJSxJWj8ccOXjroYb7aRTIHRrIeIWfaB8k5IO5hq4ORFzx7V4vq3VJ_205GBjuOrCDRXTF0iNLpk2UriVpN9QduiRkHVSgy2CXLZxJUXdQt-7Np_SxckUMI8Ej6Xz3M-fKlI5e4CNsBV0nBCc4wvA',
    toneUsed: 'Café Oscuro',
  },
  {
    id: 'rev-3',
    author: 'Francisca V.',
    age: 35,
    city: 'Concepción',
    rating: 5,
    verified: true,
    date: 'Hace 1 semana',
    comment: 'El color de mi cabello quedó súper bello, la verdad no creí hasta que lo probé. ¡Muy recomendado para quienes no queremos tintes con amoníaco que resecan las puntas!',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XaVMSrC_mcwhkTlagv0Em3aw4YVtHUQBKjKKgSVDiUuaeszJEv0-0OlUOoz1kBgXBwnFwuvn6kTbAYb9oXA9t9hfNbBUuvPER6PavY9jWclQdsSh3jBzpYAuEWiusQ9tG1o3zcMOHFOnPC88_4Cf3psjHqWXlDjOrvawQ6slIo6T2Lm-vzlulxV8QC_oYdllp3Jfxx5qZyhi0XmGmw37tStUzxjVE_qEr1Dzlilnq4zqk3oVhEsVA2F44',
    toneUsed: 'Negro Natural',
  },
  {
    id: 'rev-4',
    author: 'Gonzalo H.',
    age: 52,
    city: 'Viña del Mar',
    rating: 5,
    verified: true,
    date: 'Hace 1 semana',
    comment: 'Lo uso tanto para el cabello como para rebajar las canas de la barba. Me quita 10 años de encima en 10 minutos en la ducha, sin olores fuertes ni manchas en las orejas. Excelente.',
    toneUsed: 'Café Oscuro',
  },
  {
    id: 'rev-5',
    author: 'Mariela Soto',
    age: 43,
    city: 'La Florida',
    rating: 5,
    verified: true,
    date: 'Hace 2 semanas',
    comment: 'Increíble cómo rinde el frasco grande. Ya llevo 4 aplicaciones y el frasco sigue casi lleno. Dejé de gastar $40.000 mensuales en salón.',
    toneUsed: 'Castaño Claro',
  },
];

export const DELIVERIES_PROOF: DeliveryProof[] = [
  {
    id: 'del-1',
    name: 'Nancy',
    age: 38,
    city: 'Maipú, RM',
    comment: 'Pedí la promoción de 2 y me llegó al día siguiente. Súper confiable el pago contra entrega.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VKiX4mkYdj2jvm7G79_LhSMRbK1e1RyvKNkuN6ydAYXSs69d3PEweTjvdteV16a3ucXwBnZ-bZxh1VJaOUIynCXN1V0jJsR3RNBn9Z0TN-UHudgYasJg1rt6qiqKFuoYojMKc3Cdbq5BjFZYlW6st2_rur1EmOEW866qtsJNkKkLzAaYlivDQZhH7OwEPdqrDETHBk5FSWaY5c9Z9vqY3Gbpzp60f421DcOihn1cjxWUBlsCntyMx8l18',
    deliveryTime: 'Entregado en 24h',
  },
  {
    id: 'del-2',
    name: 'Ivonn',
    age: 45,
    city: 'Puente Alto, RM',
    comment: 'El repartidor muy amable, pude revisar la bolsa antes de pagar. El producto es 100% original.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wl9vC3h1SQ-JVeGgXQkkkEmfzpZVnuGnHuSm465wa-ecDSLrWQO01GE5GRzMspqgcUJc0c-t_xSgwas4s1QUMQtjZKkMSWt9Drw5EapurkDpwb8yn79JGTC7QYjW76dT0SA--uD-FOmqmb32tGQQT8LmEYTs-1dIfS8AIGoW4H5XgxXdrNfbwaaJ6naxuh2-lkH7Y6IGN-K7nY3MClS1KvZsRhy3AF81p5j7D8GxB90x4o7ScdFD5ER6I',
    deliveryTime: 'Entregado en 24h',
  },
  {
    id: 'del-3',
    name: 'Fabricio',
    age: 50,
    city: 'Ñuñoa, RM',
    comment: 'Dudaba de la publicidad, pero me llegó en un solo día. La entrega en 24 horas es real, recomendado.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1W9Wc6DR2BNnLGlFbRDaJEbRrgoqAqoDkX0xkhSX9bouV6xdvRuHG705AIQkUTXwQP_Ks1JkjCtgeZG2dH--Y0IgJ3uX5iBpCwkb6yFOAf_e8GCUfZTmapSgxQzpLcBTyZbXnCrxW87HriggZ_KSuVTB6lpLfH32348-NcsEM8Vnyp5F5fofyS-6A7jkfEWMrB2GYMqFZKuFBkJz7n4VYhNq2fLeKVE8S30FTJaZ5BciCuLLLNKIhzLnbQ',
    deliveryTime: 'Entregado en 24h',
  },
];

export const CHILE_REGIONS: ChileanRegion[] = [
  {
    name: 'Región Metropolitana de Santiago',
    comunas: [
      'Santiago Centro', 'Providencia', 'Las Condes', 'Ñuñoa', 'La Florida', 'Maipú', 'Puente Alto', 
      'San Miguel', 'La Reina', 'Vitacura', 'Lo Barnechea', 'Macul', 'Peñalolén', 'San Joaquín', 
      'Estación Central', 'Quinta Normal', 'Recoleta', 'Independencia', 'Huechuraba', 'Conchalí',
      'Quilicura', 'Renca', 'Cerro Navia', 'Pudahuel', 'Lo Prado', 'Cerrillos', 'Pedro Aguirre Cerda',
      'San Bernardo', 'Buin', 'Paine', 'Colina', 'Lampa', 'Talagante', 'Peñaflor', 'Melipilla'
    ],
  },
  {
    name: 'Región de Valparaíso',
    comunas: ['Viña del Mar', 'Valparaíso', 'Concón', 'Quilpué', 'Villa Alemana', 'Quillota', 'San Antonio', 'Los Andes', 'San Felipe'],
  },
  {
    name: 'Región del Biobío',
    comunas: ['Concepción', 'San Pedro de la Paz', 'Talcahuano', 'Chiguayante', 'Coronel', 'Hualpén', 'Los Ángeles', 'Chillán'],
  },
  {
    name: 'Región de Coquimbo',
    comunas: ['La Serena', 'Coquimbo', 'Ovalle', 'Illapel'],
  },
  {
    name: 'Región de Antofagasta',
    comunas: ['Antofagasta', 'Calama', 'Mejillones', 'Tocopilla'],
  },
  {
    name: 'Región de O’Higgins',
    comunas: ['Rancagua', 'Machalí', 'San Fernando', 'Rengo', 'Graneros'],
  },
  {
    name: 'Región del Maule',
    comunas: ['Talca', 'Curicó', 'Linares', 'Constitución'],
  },
  {
    name: 'Región de La Araucanía',
    comunas: ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón', 'Angol'],
  },
  {
    name: 'Región de Los Lagos',
    comunas: ['Puerto Montt', 'Puerto Varas', 'Osorno', 'Castro', 'Ancud'],
  },
  {
    name: 'Otras Regiones de Chile',
    comunas: ['Arica', 'Iquique', 'Copiapó', 'Valdivia', 'Coyhaique', 'Punta Arenas'],
  },
];

export const FAQS = [
  {
    q: '¿Cuánto dura el color en el cabello?',
    a: 'Aproximadamente entre 15 a 20 días dependiendo de la frecuencia de lavados habituales. Al no contener amoníaco abrasivo, va desvaneciéndose de forma muy pareja y natural sin dejar cortes notorios en la raíz.',
  },
  {
    q: '¿Contiene amoníaco, parabenos o químicos agresivos?',
    a: 'No. Su fórmula está totalmente libre de amoníaco, PPD fuerte, sulfatos abrasivos y parabenos. Es dermatológicamente segura para personas con cuero cabelludo sensible.',
  },
  {
    q: '¿Cuánto tiempo debo dejarlo actuar?',
    a: 'De 8 a 15 minutos para una cobertura óptima de canas rebeldes. Para canas muy blancas o cabello muy grueso, puedes dejarlo hasta 20 minutos en la primera aplicación.',
  },
  {
    q: '¿Puedo usar acondicionador o mascarilla después?',
    a: '¡Sí, totalmente! Una vez enjuagado el shampoo con abundante agua tibia, puedes aplicar tu acondicionador, mascarilla o serum habitual para dejarlo aún más sedoso y sellar la nutrición.',
  },
  {
    q: '¿Cómo funciona el envío y el pago contra entrega en Chile?',
    a: 'Realizamos envíos en 24 a 48 horas hábiles a la mayor parte de las comunas del país. No tienes que pagar nada por anticipado: pagas al repartidor en efectivo o transferencia cuando recibas tu pedido en mano.',
  },
  {
    q: '¿Mancha las manos, orejas o cuero cabelludo?',
    a: 'El kit incluye guantes protectores de regalo para facilitar la aplicación. Gracias a sus pigmentos de adsorción capilar botánica, no mancha la piel ni deja marcas oscuras en la frente si enjuagas con agua durante la ducha.',
  },
  {
    q: '¿Sirve también para la barba en hombres?',
    a: 'Sí, miles de clientes hombres lo utilizan para cubrir canas en la barba y bigote en solo 5 a 8 minutos, logrando un tono uniforme y rejuvenecido.',
  },
];
