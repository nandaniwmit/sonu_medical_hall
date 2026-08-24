import { HealthTip, FAQItem } from '../types';

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'How to Store Insulin & Temperature-Sensitive Medicines at Home',
    category: 'Medication Safety',
    readTime: '3 min read',
    summary: 'Essential guidelines for storing unopened insulin vials, syrups, and eye drops safely in Indian summer conditions.',
    content: 'Unopened insulin should always be kept in the middle shelf of a refrigerator between 2°C to 8°C. Never freeze insulin or place it in the freezer compartment. Once opened, an insulin vial or pen can typically be maintained at controlled room temperature below 25°C away from direct sunlight for up to 28 days.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tip-2',
    title: 'Managing Blood Pressure: Best Practices for Digital BP Monitoring',
    category: 'Cardiovascular Health',
    readTime: '4 min read',
    summary: 'Tips on cuff positioning, resting before measurement, and recording consistent morning readings.',
    content: 'To achieve accurate readings with a digital BP machine, rest silently for at least 5 minutes before measurement. Fasten the cuff on bare skin 2 cm above the elbow crease, ensuring the hose runs down the center of your forearm. Take readings at the same hour each morning.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tip-3',
    title: 'Understanding Generic vs. Branded Medicines: Safety & Potency',
    category: 'Pharmacy Insights',
    readTime: '3 min read',
    summary: 'Learn how generic active pharmaceutical ingredients (APIs) match branded equivalents in therapeutic effectiveness.',
    content: 'Generic medicines undergo stringent bioequivalence testing to ensure identical chemical composition, dosage, strength, and therapeutic outcome as originator brands, often at a significant cost savings for long-term chronic treatment.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How do I place a medicine order via WhatsApp at Sonu Medical Hall?',
    answer: 'Simply click the "WhatsApp Order" button on any page or tap the floating WhatsApp button. Take a clear photo of your doctor\'s prescription, enter your name and address, and click send. Our pharmacist will verify the prescription, check batch availability, and share the total bill before dispatch.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'Do you offer home delivery in Bodhgaya and surrounding areas?',
    answer: 'Yes! We deliver medicines across Bodhgaya (Pachhati, Mastipur, Miya Bigha, Tikuna Farm, Kalachakra vicinity) and Gaya town. Express orders are typically delivered within 60-90 minutes.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'Are all medicines 100% genuine and sourced from licensed distributors?',
    answer: 'Absolutely. Sonu Medical Hall is a fully licensed retail pharmacy. We source 100% of our products directly from certified pharmaceutical companies and authorized distributors with verifiable GST invoices and batch tracking.',
    category: 'Authenticity & Quality'
  },
  {
    question: 'Can I check whether a specific medicine is in stock before visiting?',
    answer: 'Yes! Use our real-time online Medicine Stock Checker on the Services page. You can search by brand name, generic molecule, or health category to see live stock availability, MRP, and expiry dates.',
    category: 'Inventory'
  },
  {
    question: 'What are your working hours and do you have emergency service?',
    answer: 'Our physical store at Pachhati More, Bodhgaya is open 7 days a week from 7:00 AM to 10:30 PM. For emergency prescription needs outside regular hours, you can contact our 24/7 helpline at +91 99344 83645.',
    category: 'Store & Timing'
  },
  {
    question: 'What payment methods do you accept for medicine purchases?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit/Debit Cards, and Net Banking. Cash on Delivery is also available for local deliveries.',
    category: 'Payments'
  }
];
