import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    category: 'Pharmacy',
    shortDesc: '100% genuine allopathic medicines from top Indian and international pharmaceutical manufacturers.',
    fullDesc: 'We stock comprehensive inventories of prescription medications for chronic and acute conditions including Cardiology, Diabetology, Pulmonology, Neurology, Oncology, and Gastroenterology with strict batch tracing.',
    icon: 'Pill',
    badge: 'Verified Genuine',
    features: [
      'Authentic certified batch sourcing',
      'Cold-chain temperature monitoring (2°C - 8°C)',
      'Qualified pharmacist verification',
      'Refill alerts for chronic disease patients'
    ]
  },
  {
    id: 'otc-medicines',
    title: 'OTC & Daily First Aid',
    category: 'Pharmacy',
    shortDesc: 'Immediate relief over-the-counter medications, pain relievers, antacids, cold & cough remedies.',
    fullDesc: 'A complete range of self-care OTC medicines, band-aids, antiseptics, pain sprays, digestive solutions, and daily wellness items ready for immediate purchase without waiting.',
    icon: 'ShieldCheck',
    badge: 'Quick Access',
    features: [
      'Fever, cold, allergy & digestion care',
      'Comprehensive emergency first-aid kits',
      'Sterile dressing & wound healing ointments',
      'Topical analgesics & pain management sprays'
    ]
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Diagnostics',
    category: 'Equipment',
    shortDesc: 'Digital BP monitors, glucometers, pulse oximeters, nebulizers, digital thermometers, and test strips.',
    fullDesc: 'Certified diagnostic tools from industry leaders like Omron, Accu-Chek, Dr. Morepen, and Beurer. Perfect for routine monitoring of blood pressure, blood glucose, oxygen levels, and body temperature at home.',
    icon: 'Activity',
    badge: 'Warranty Guaranteed',
    features: [
      'Omron & Dr. Morepen BP monitors',
      'Accu-Chek & OneTouch glucometers & lancets',
      'Fingertip pulse oximeters with OLED display',
      'Ultrasonic nebulizers & digital vaporizers'
    ]
  },
  {
    id: 'surgical-equipment',
    title: 'Medical Equipment & Surgical Supplies',
    category: 'Equipment',
    shortDesc: 'Surgical disposables, syringes, IV cannulas, orthopaedic belts, cervical collars, and mobility aids.',
    fullDesc: 'Supplying hospitals, clinics, and home-care patients across Gaya with sterile surgical grade items, orthopaedic supports, lumbar belts, knee braces, walkers, adult diapers, and catheter care supplies.',
    icon: 'Stethoscope',
    badge: 'Clinical Grade',
    features: [
      'Orthopaedic braces, splints & cervical collars',
      'Mobility walkers, walking sticks & commode chairs',
      'Sterile gloves, syringes, IV sets & cannulas',
      'Adult incontinence briefs & underpads'
    ]
  },
  {
    id: 'supplements-vitamins',
    title: 'Supplements & Nutritional Care',
    category: 'Wellness',
    shortDesc: 'Immunity boosters, multivitamin capsules, calcium supplements, protein powders, and herbal tonics.',
    fullDesc: 'Scientifically formulated health supplements for athletes, elderly individuals, growing teenagers, and expectant mothers. High-grade multivitamins, Omega-3 fish oils, Vitamin D3, and Ayurvedic formulations.',
    icon: 'HeartPulse',
    badge: '100% Pure',
    features: [
      'High-potency Multivitamins & Minerals',
      'Calcium with Vitamin D3 & Zinc',
      'Clinically tested protein powders & meal shakes',
      'Authentic Ayurvedic liver, digestion & immunity tonics'
    ]
  },
  {
    id: 'baby-maternal-care',
    title: 'Baby Care & Maternal Health',
    category: 'Maternal',
    shortDesc: 'Pediatric drops, baby formula, diapers, gentle skincare, lactation supplements, and maternal care.',
    fullDesc: 'Comprehensive care for mothers and infants. Certified pediatric formulas, gentle rash creams, tear-free baby washes, BPA-free feeding accessories, and pre/post-natal maternal supplements.',
    icon: 'Baby',
    badge: 'Gentle & Safe',
    features: [
      'Top baby formula brands (Nan Pro, Similac, Lactogen)',
      'Premium diapers & hypoallergenic baby wipes',
      'Pediatric drops, teething gels & gripe waters',
      'Maternal lactation teas, calcium & iron supplements'
    ]
  },
  {
    id: 'home-care-elderly',
    title: 'Home Care & Elderly Support',
    category: 'Home Care',
    shortDesc: 'Specialized healthcare solutions designed for seniors, bedridden patients, and recovery care at home.',
    fullDesc: 'Everything needed to establish a sterile, comfortable recuperation environment at home. From anti-decubitus air mattresses to suction units and specialized diabetic footwear.',
    icon: 'Home',
    badge: 'Compassionate Care',
    features: [
      'Anti-bedsore air mattresses with pumps',
      'Diabetic friendly socks & protective care',
      'Portable oxygen can & respiratory support',
      'Scheduled monthly chronic medicine deliveries'
    ]
  },
  {
    id: 'whatsapp-prescription',
    title: 'WhatsApp Prescription Home Delivery',
    category: 'Delivery',
    shortDesc: 'Send your doctor prescription on WhatsApp and get verified medicines delivered to your doorstep in Bodhgaya.',
    fullDesc: 'Fast, hassle-free doorstep medicine delivery across Bodhgaya, Mastipur, Pachhati, and surrounding Gaya localities. Just snap a clear photo of your prescription and message our team.',
    icon: 'Truck',
    badge: 'Express Service',
    features: [
      'Order dispatch within 60 to 90 minutes',
      'Pharmacist bill review & expiry check',
      'Cash on Delivery (COD) & UPI payment options',
      '24/7 urgent emergency medical support'
    ]
  }
];
