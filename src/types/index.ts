export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  brand: string;
  category: string;
  dosage: string;
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Ointment' | 'Drops' | 'Powder' | 'Device';
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  requiresPrescription: boolean;
  indications: string[];
  manufacturer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  badge?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  rating: number;
  inStock: boolean;
  brand: string;
  prescriptionRequired: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves & Inventory' | 'Medical Equipment' | 'Health Devices' | 'Customer Desk';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
