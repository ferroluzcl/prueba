export interface ColorVariant {
  id: string;
  name: string;
  shortName: string;
  hex: string;
  badgeHex?: string;
  description: string;
  recommendedFor: string;
  image: string;
}

export interface ProductPack {
  id: string;
  title: string;
  subtitle: string;
  bottles: number;
  price: number;
  originalPrice: number;
  savingsPercentage: number;
  isPopular?: boolean;
  tag?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  age?: number;
  city: string;
  rating: number;
  verified: boolean;
  date: string;
  comment: string;
  image?: string;
  toneUsed?: string;
}

export interface DeliveryProof {
  id: string;
  name: string;
  age: number;
  city: string;
  comment: string;
  image: string;
  deliveryTime: string;
}

export interface ChileanRegion {
  name: string;
  comunas: string[];
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  email?: string;
  region: string;
  comuna: string;
  address: string;
  extraInfo?: string;
  paymentMethod: 'efectivo' | 'transferencia';
  packId: string;
  toneId: string;
}
