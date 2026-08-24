export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  owner: string;
  established: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    full: string;
    landmark: string;
  };
  geo: {
    lat: number;
    lng: number;
    mapUrl: string;
    embedMapUrl: string;
  };
  workingHours: {
    days: string;
    timing: string;
    emergency: string;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    googleBusiness: string;
  };
  stats: {
    yearsOfTrust: string;
    happyCustomers: string;
    genuineMedicines: string;
    healthcareProducts: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  name: "Sonu Medical Hall",
  shortName: "Sonu Medical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Healthcare Store",
  owner: "Sonu Kumar & Certified Pharmacist Team",
  established: "2014",
  phone: "+919934483645",
  phoneDisplay: "+91 99344 83645",
  whatsapp: "919934483645",
  whatsappDisplay: "+91 99344 83645",
  email: "contact@sonumedicalhall.com",
  address: {
    street: "Pachhati More",
    locality: "Bodhgaya",
    city: "Bodhgaya",
    district: "Gaya",
    state: "Bihar",
    pincode: "824231",
    full: "Pachhati More, Bodhgaya, Gaya, Bihar - 824231",
    landmark: "Near Main Road & Bodhgaya Junction vicinity"
  },
  geo: {
    lat: 24.6961,
    lng: 84.9913,
    mapUrl: "https://maps.google.com/?q=Pachhati+More+Bodhgaya+Gaya+Bihar+824231",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.433299719468!2d84.98031!3d24.69614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c3f81e3a6a9%3A0x6b86f4a56a64bb65!2sBodh%20Gaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  workingHours: {
    days: "Monday - Sunday (7 Days Open)",
    timing: "7:00 AM - 10:30 PM",
    emergency: "24/7 Emergency Medicine Dispatch on Call"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919934483645",
    googleBusiness: "https://maps.google.com/?q=Pachhati+More+Bodhgaya+Gaya+Bihar+824231"
  },
  stats: {
    yearsOfTrust: "12+ Years",
    happyCustomers: "35,000+",
    genuineMedicines: "10,000+",
    healthcareProducts: "2,500+"
  },
  pwa: {
    enabled: true,
    appName: "Sonu Medical Hall",
    shortName: "Sonu Medical",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};
