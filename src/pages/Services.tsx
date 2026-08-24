import React, { useState } from 'react';
import { 
  Pill, 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Home as HomeIcon, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Phone,
  Sparkles,
  Search,
  Filter,
  Terminal,
  Layers
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';

interface ServicesProps {
  onOpenWhatsAppOrder: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppOrder }) => {
  useSEO({
    title: 'Healthcare Services & Live Medicine Stock Checker | Sonu Medical Hall',
    description: 'Explore comprehensive pharmacy services, surgical equipment, diagnostic devices, baby care & real-time live stock checker at Sonu Medical Hall Bodhgaya.',
    keywords: 'Sonu Medical Hall services, medicine availability checker Gaya, medical store stock Bodhgaya, surgical items Bodhgaya'
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Pharmacy', 'Equipment', 'Wellness', 'Maternal', 'Home Care', 'Delivery'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'Baby': return <Baby className="w-5 h-5 text-amber-400" />;
      case 'Home': return <HomeIcon className="w-5 h-5 text-blue-400" />;
      case 'Truck': return <Truck className="w-5 h-5 text-emerald-400" />;
      default: return <Pill className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-8 text-left font-sans">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services & Stock Checker' }]} />

      {/* Hero Header */}
      <section className="relative rounded bg-[#111216] border border-[#2D2E32] text-gray-200 p-6 sm:p-10 font-mono shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[SERVICE_CATALOG: DISPENSARY_OPERATIONS]</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Healthcare Services &amp; Inventory Solutions
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            We provide everything from critical allopathic prescription medicines and cold-chain vaccines to hospital-grade surgical items, baby nutrition, and instant home deliveries in Bodhgaya.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: REAL-TIME MEDICINE STOCK CHECKER */}
      <section className="space-y-4 font-mono" id="exclusive-stock-checker">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
            [LIVE_SYSTEM_TELEMETRY]
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            Search Medicine Stock Availability
          </h2>
          <p className="text-xs text-gray-400 mt-1 font-sans">
            Search our physical store inventory in real-time, view verified prices, batch expiries and place instant WhatsApp orders.
          </p>
        </div>

        {/* Embedded Stock Checker Component */}
        <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppOrder(medName)} />
      </section>

      {/* CATEGORY-WISE SERVICES BREAKDOWN */}
      <section className="space-y-5" id="all-services-list">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#2D2E32] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
              [DEPARTMENTAL_INDEX]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              Full Range of Healthcare Services
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1 font-mono text-xs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3 py-1 rounded text-xs font-bold transition border ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-400/50 shadow'
                    : 'bg-[#14151B] text-gray-400 hover:text-white border-[#2D2E32]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#18191E] text-blue-400 border border-[#2D2E32] uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-mono text-white">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
                  {service.fullDesc}
                </p>

                {/* Bullet Features */}
                <div className="mt-4 space-y-1.5 font-mono">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">SYSTEM_HIGHLIGHTS:</p>
                  <ul className="space-y-1">
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} className="text-xs text-gray-300 flex items-start gap-2 p-1 rounded bg-[#14151B] border border-[#232429]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="mt-5 pt-3 border-t border-[#232429] flex flex-wrap items-center justify-between gap-2 font-mono">
                <button
                  onClick={() => onOpenWhatsAppOrder(service.title)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded shadow transition flex items-center gap-1.5 border border-blue-400/40"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>INQUIRE_/_ORDER</span>
                </button>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CALL_{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency & Home Care Callout */}
      <section className="p-6 sm:p-8 rounded bg-[#111216] border border-[#2D2E32] text-white text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6 font-mono shadow-xl">
        <div className="space-y-1.5 max-w-xl">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
            [24/7_EMERGENCY_DISPATCH_PROTOCOL]
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Need Urgent Medicine in Bodhgaya During Late Hours?
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Our on-call pharmacist assists with emergency prescriptions, nebulizers, anti-venom/tetanus, and cardiac medicines at any time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto font-mono text-xs">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow flex items-center justify-center gap-2 transition border border-blue-400/40"
          >
            <Phone className="w-4 h-4" />
            <span>CALL_24/7_EMERGENCY</span>
          </a>
          <button
            onClick={() => onOpenWhatsAppOrder()}
            className="px-4 py-2.5 bg-[#18191E] hover:bg-[#232429] text-gray-200 font-bold rounded border border-[#2D2E32] flex items-center justify-center gap-2 transition"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP_PRESCRIPTION</span>
          </button>
        </div>
      </section>

    </div>
  );
};
