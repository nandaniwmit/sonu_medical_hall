import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  ShoppingBag, 
  Navigation, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Search, 
  Activity, 
  Pill, 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Home as HomeIcon, 
  ChevronDown, 
  Mail, 
  Send, 
  HelpCircle, 
  Cpu,
  Terminal,
  Radio,
  Layers,
  Database
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { FEATURED_PRODUCTS } from '../data/productsData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { FAQ_DATA, HEALTH_TIPS_DATA } from '../data/faqData';
import { useSEO } from '../hooks/useSEO';

interface HomeProps {
  onOpenWhatsAppOrder: () => void;
  onOpenQuickInquiry: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppOrder, onOpenQuickInquiry }) => {
  useSEO({
    title: 'Sonu Medical Hall | Trusted Pharmacy & Genuine Medicines in Bodhgaya',
    description: 'Providing 100% genuine medicines, healthcare devices, surgical supplies, baby care & fast WhatsApp home delivery at Pachhati More, Bodhgaya, Gaya.',
    keywords: 'Sonu Medical Hall, pharmacy Bodhgaya, medicine home delivery Gaya, Pachhati More chemist, genuine medicines Bihar, healthcare products Gaya'
  });

  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredProducts = FEATURED_PRODUCTS.slice(0, 4);
  const reviewsPreview = REVIEWS_DATA.slice(0, 3);
  const faqPreview = FAQ_DATA.slice(0, 4);
  const tipsPreview = HEALTH_TIPS_DATA.slice(0, 2);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSuccess(false);
      }, 3000);
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'Baby': return <Baby className="w-5 h-5 text-amber-400" />;
      case 'Home': return <HomeIcon className="w-5 h-5 text-blue-400" />;
      default: return <Pill className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12 font-sans">
      
      {/* 1. HERO COMMAND SECTION (High Density Layout) */}
      <section className="relative overflow-hidden bg-[#0D0E12] border-b border-[#2D2E32] text-gray-200 pt-6 pb-12 sm:pt-10 sm:pb-16" id="hero-banner-section">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-15 tech-dot-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/80 via-transparent to-[#0A0B0D] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Top Telemetry Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2.5 rounded bg-[#111216] border border-[#2D2E32] font-mono text-[11px] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>[DISPATCH_SYSTEM: ONLINE]</span>
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">EST. 2014 &bull; PACHHATI MORE, BODHGAYA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">COLD_CHAIN: ACTIVE (2-8°C)</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">LATENCY: 12ms</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16171D] border border-[#2D2E32] text-blue-400 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>PHARMACEUTICAL_DISPATCH &bull; BIHAR LICENSED #2014-GAYA</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white leading-tight">
                Your Trusted Medical Store for <span className="text-blue-400">Genuine Medicines</span> &amp; Healthcare Needs
              </h1>

              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed font-sans">
                Providing verified prescription medicines, surgical supplies, medical diagnostics, baby care, and daily healthcare essentials at regulated rates in Bodhgaya.
              </p>

              {/* Action Buttons: Call Now, WhatsApp Order, Get Directions */}
              <div className="pt-2 flex flex-wrap gap-2.5 font-mono text-xs">
                {/* Call Now */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  id="hero-call-btn"
                  className="px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-sm flex items-center justify-center gap-2 transition border border-blue-400/40"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL_NOW</span>
                </a>

                {/* WhatsApp Order */}
                <button
                  onClick={onOpenWhatsAppOrder}
                  id="hero-whatsapp-btn"
                  className="px-4 py-2.5 rounded bg-[#16171D] hover:bg-[#232429] text-gray-100 font-bold border border-[#2D2E32] hover:border-emerald-500/50 flex items-center justify-center gap-2 transition"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>WHATSAPP_ORDER</span>
                </button>

                {/* Get Directions */}
                <a
                  href={SITE_CONFIG.geo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-directions-btn"
                  className="px-4 py-2.5 rounded bg-[#16171D] hover:bg-[#232429] text-gray-300 font-bold border border-[#2D2E32] flex items-center justify-center gap-2 transition"
                >
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span>GPS_LOCATION</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#2D2E32] text-left font-mono">
                <div className="p-2.5 rounded bg-[#111216] border border-[#232429]">
                  <div className="text-base sm:text-lg font-bold text-white">{SITE_CONFIG.stats.yearsOfTrust}</div>
                  <div className="text-[10px] text-gray-500 uppercase">YEARS_IN_SERVICE</div>
                </div>
                <div className="p-2.5 rounded bg-[#111216] border border-[#232429]">
                  <div className="text-base sm:text-lg font-bold text-emerald-400">{SITE_CONFIG.stats.happyCustomers}</div>
                  <div className="text-[10px] text-gray-500 uppercase">PATIENTS_SERVED</div>
                </div>
                <div className="p-2.5 rounded bg-[#111216] border border-[#232429]">
                  <div className="text-base sm:text-lg font-bold text-blue-400">100%</div>
                  <div className="text-[10px] text-gray-500 uppercase">GENUINE_CERTIFIED</div>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Prescription Upload / Search Box preview */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded bg-[#111216] border border-[#2D2E32] shadow-xl space-y-4 text-left font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-[#2D2E32]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs text-white uppercase">[INSTANT_DISPATCH_CONSOLE]</h3>
                      <p className="text-[10px] text-gray-400">Prescription Upload &amp; Inventory Check</p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>

                {/* Quick Medicine Search Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-400 uppercase">LIVE_INVENTORY_LOOKUP</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type medicine name (e.g. Dolo 650, BP monitor)..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') navigate('/services');
                      }}
                      className="w-full px-3 py-2 rounded bg-[#14151B] border border-[#2D2E32] text-white placeholder-gray-600 text-xs focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={() => navigate('/services')}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded text-xs shrink-0 transition border border-blue-400/40"
                    >
                      QUERY
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#16171D] border border-[#232429] text-[11px] text-gray-300 flex items-start gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-emerald-400 font-bold">DOORSTEP DISPATCH: </span>
                    <span className="text-gray-400 font-sans">60-90 mins delivery window across Bodhgaya, Pachhati &amp; Gaya town.</span>
                  </div>
                </div>

                <button
                  onClick={onOpenWhatsAppOrder}
                  className="w-full py-2.5 bg-[#18191E] hover:bg-[#232429] text-gray-200 hover:text-white font-bold rounded text-xs shadow-sm flex items-center justify-center gap-2 transition border border-[#2D2E32] hover:border-emerald-500"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>UPLOAD_PRESCRIPTION_ON_WHATSAPP</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="about-preview-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded overflow-hidden shadow-xl border border-[#2D2E32] bg-[#111216]">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop"
                alt="Sonu Medical Hall Pharmacy Store Front"
                className="w-full h-72 object-cover opacity-80 filter brightness-90 hover:brightness-100 transition duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded bg-[#111216]/95 border border-[#2D2E32] font-mono">
                <p className="text-[10px] font-bold text-blue-400 uppercase">
                  [LOCATION_VERIFIED]
                </p>
                <p className="text-xs text-gray-200">
                  Pachhati More, Bodhgaya, Gaya, Bihar 824231
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5 text-left font-sans">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#111216] border border-[#2D2E32] text-blue-400 text-xs font-mono font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>[PHARMACY_PROFILE: SONU_MEDICAL]</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              A Decade of Caring for Bodhgaya's Health &amp; Well-being
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Established in 2014 at the prominent Pachhati More junction in Bodhgaya, Sonu Medical Hall has grown to become one of the most trusted neighborhood medical stores. We take pride in delivering 100% genuine medicines, verified batch procurement, and ethical pharmacist guidance.
            </p>

            <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
              <li className="flex items-center gap-2 p-1.5 rounded bg-[#111216] border border-[#232429]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Fully registered retail pharmacy with certified pharmacist on staff</span>
              </li>
              <li className="flex items-center gap-2 p-1.5 rounded bg-[#111216] border border-[#232429]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Cold-chain temperature control for insulin, vaccines and biologicals</span>
              </li>
              <li className="flex items-center gap-2 p-1.5 rounded bg-[#111216] border border-[#232429]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Comprehensive range of surgical, baby care and diagnostic equipment</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/about"
                id="view-more-about-btn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono transition border border-blue-400/40"
              >
                <span>VIEW_FULL_STORY_&amp;_LICENSE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="featured-services-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 text-left border-b border-[#2D2E32] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
              [SYSTEM_CAPABILITIES]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              Featured Healthcare Services
            </h2>
          </div>
          <Link
            to="/services"
            id="view-all-services-top-btn"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 hover:text-blue-300"
          >
            <span>VIEW_ALL_SERVICES_&amp;_STOCK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="p-4 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition duration-150 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#18191E] text-gray-300 border border-[#2D2E32]">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold font-mono text-white group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-sans">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#232429] flex items-center justify-between font-mono text-xs">
                <Link
                  to="/services"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold text-[11px]"
                >
                  <span>DETAILS</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={onOpenWhatsAppOrder}
                  className="text-gray-400 hover:text-white text-[11px]"
                >
                  [INQUIRE]
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono rounded transition border border-blue-400/40"
          >
            <span>EXPLORE_ALL_SERVICES_&amp;_CHECK_STOCK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#0D0E12] py-10 border-y border-[#2D2E32]" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 font-mono">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
              [STANDARDS_AND_PROTOCOLS]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Why Bodhgaya Relies on Sonu Medical Hall
            </h2>
            <p className="text-xs text-gray-400 mt-1 font-sans">
              Patient safety, genuine pharmaceutical products, and prompt customer care guide every single prescription we dispense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            <div className="p-4 rounded bg-[#111216] border border-[#2D2E32]">
              <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-emerald-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm font-mono text-white">100% Genuine Medicines</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                Direct procurement from licensed pharmaceutical manufacturers with valid GST bills and verifiable batch numbers.
              </p>
            </div>

            <div className="p-4 rounded bg-[#111216] border border-[#2D2E32]">
              <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm font-mono text-white">Fast Doorstep Delivery</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                Quick 60-90 minute delivery across Bodhgaya, Mastipur, and Gaya town via seamless WhatsApp prescription ordering.
              </p>
            </div>

            <div className="p-4 rounded bg-[#111216] border border-[#2D2E32]">
              <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-cyan-400 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm font-mono text-white">24/7 Emergency Support</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                Always available for urgent nighttime prescription fulfillment and emergency medical dispatch when you need it most.
              </p>
            </div>

            <div className="p-4 rounded bg-[#111216] border border-[#2D2E32]">
              <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-amber-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm font-mono text-white">Certified Pharmacists</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                Personalized advice on medicine dosages, drug interactions, storage guidelines, and affordable generic alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="featured-products-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 text-left border-b border-[#2D2E32] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
              [INVENTORY_HIGHLIGHTS]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              Featured Health &amp; Diagnostic Essentials
            </h2>
          </div>
          <Link
            to="/services"
            id="view-more-products-btn"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 hover:text-blue-300"
          >
            <span>VIEW_COMPLETE_INVENTORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-3.5 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative h-36 rounded overflow-hidden mb-2.5 bg-[#18191E] border border-[#232429]">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#111216]/90 border border-[#2D2E32] text-blue-400 text-[9px] font-mono font-bold uppercase">
                    {prod.category}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs mb-1 font-mono">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-bold text-gray-200">{prod.rating}</span>
                  <span className="text-gray-500 text-[10px]">({prod.brand})</span>
                </div>

                <h4 className="font-bold text-xs font-mono text-white line-clamp-2">
                  {prod.title}
                </h4>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#232429] flex items-center justify-between font-mono">
                <div>
                  <span className="text-sm font-bold text-white">₹{prod.price}</span>
                  <span className="text-[10px] text-gray-500 line-through ml-1">₹{prod.mrp}</span>
                </div>
                <button
                  onClick={onOpenWhatsAppOrder}
                  className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded border border-blue-400/40"
                >
                  ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="bg-[#0D0E12] py-10 border-y border-[#2D2E32]" id="reviews-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8 font-mono">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
              [COMMUNITY_FEEDBACK]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              What Bodhgaya Residents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            {reviewsPreview.map((rev) => (
              <div
                key={rev.id}
                className="p-4 rounded bg-[#111216] border border-[#2D2E32] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed italic font-sans">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#232429] flex items-center justify-between font-mono">
                  <div>
                    <h5 className="font-bold text-xs text-white">{rev.name}</h5>
                    <p className="text-[10px] text-gray-500">{rev.location}</p>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded">
                    [VERIFIED]
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/about"
              className="text-xs font-mono text-blue-400 hover:underline"
            >
              READ_MORE_COMMUNITY_TRUST_METRICS &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-left font-mono" id="faq-preview-section">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
            [KNOWLEDGE_BASE]
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqPreview.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded border border-[#2D2E32] bg-[#111216] overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-3.5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-white hover:text-blue-400 transition font-mono"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400' : 'text-gray-500'}`} />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-4 text-xs text-gray-400 leading-relaxed border-t border-[#232429] pt-2.5 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/contact"
            className="text-xs font-mono text-blue-400 hover:underline"
          >
            HAVE_MORE_QUESTIONS? CONTACT_OUR_PHARMACY_TEAM &rarr;
          </Link>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-left" id="health-tips-preview-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 border-b border-[#2D2E32] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
              [CLINICAL_ADVISORIES]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              Latest Health &amp; Medicine Tips
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-400 hover:text-blue-300"
          >
            <span>VIEW_ALL_ADVISORIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {tipsPreview.map((tip) => (
            <div
              key={tip.id}
              className="p-4 rounded bg-[#111216] border border-[#2D2E32] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1.5">
                  <span className="font-bold text-blue-400 bg-[#18191E] border border-[#2D2E32] px-2 py-0.5 rounded uppercase">
                    {tip.category}
                  </span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="font-bold text-sm font-mono text-white mt-1.5">
                  {tip.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-sans">
                  {tip.summary}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#232429] text-[10px] font-mono text-gray-500 flex items-center justify-between">
                <span>PUBLISHED_BY: PHARMACIST_TEAM</span>
                <span className="text-emerald-400">{tip.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. HIGH CONVERSION CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="home-cta-section">
        <div className="relative rounded bg-[#111216] border border-[#2D2E32] text-white p-6 sm:p-8 text-center sm:text-left font-mono">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="inline-block px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-[10px] font-bold uppercase">
                [URGENT_&amp;_REGULAR_PRESCRIPTION_DISPATCH]
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Order Your Medicines on WhatsApp Today
              </h2>
              <p className="text-xs text-gray-400 max-w-xl font-sans">
                Just send a photo of your prescription. We will verify the batch, pack safely, and deliver to your address in Bodhgaya.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center font-mono">
              <button
                onClick={onOpenWhatsAppOrder}
                id="cta-whatsapp-order-btn"
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow flex items-center justify-center gap-2 text-xs transition border border-blue-400/40"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>SEND_PRESCRIPTION</span>
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                id="cta-call-phone-btn"
                className="w-full py-2.5 px-4 bg-[#18191E] hover:bg-[#232429] text-gray-200 font-bold rounded border border-[#2D2E32] flex items-center justify-center gap-2 text-xs transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>CALL_{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center pb-6 font-mono" id="newsletter-section">
        <div className="p-6 rounded bg-[#111216] border border-[#2D2E32] space-y-3">
          <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center mx-auto">
            <Mail className="w-4 h-4" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white uppercase">
            [NEWSLETTER: CLINICAL_UPDATES_FEED]
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto font-sans">
            Get seasonal wellness updates, new medical equipment arrivals, and healthy living tips directly in your inbox.
          </p>

          {newsletterSuccess ? (
            <div className="p-2.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> [SUBSCRIPTION_RECORDED_SUCCESSFULLY]
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-1 text-xs">
              <input
                type="email"
                required
                id="newsletter-email-input"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                id="newsletter-submit-btn"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition border border-blue-400/40"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
