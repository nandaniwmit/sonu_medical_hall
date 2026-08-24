import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Compass, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  Phone, 
  ShoppingBag,
  MapPin,
  Terminal,
  Activity,
  Layers
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';

interface AboutProps {
  onOpenWhatsAppOrder: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppOrder }) => {
  useSEO({
    title: 'About Us | Sonu Medical Hall - Trusted Pharmacy in Bodhgaya',
    description: 'Learn about Sonu Medical Hall, our 12+ years journey, certified pharmacists, cold-chain storage standards and commitment to genuine healthcare in Bodhgaya, Gaya.',
    keywords: 'About Sonu Medical Hall, Bodhgaya medical store history, Sonu Kumar pharmacy Gaya, genuine pharmacy Bihar'
  });

  const timeline = [
    {
      year: '2014',
      title: 'Foundation at Pachhati More',
      desc: 'Sonu Medical Hall was established with a singular objective: providing 100% genuine, certified allopathic medicines to the citizens of Bodhgaya.'
    },
    {
      year: '2017',
      title: 'Expansion of Surgical & Diagnostic Equipment',
      desc: 'Introduced medical-grade BP monitors, glucometers, nebulizers, orthopaedic braces, and dedicated infant formula aisles.'
    },
    {
      year: '2020',
      title: 'Cold-Chain Infrastructure & 24/7 Helpline',
      desc: 'Installed specialized 2°C - 8°C pharmaceutical refrigeration units for temperature-sensitive insulins, vaccines, and emergency on-call service.'
    },
    {
      year: '2023',
      title: 'Digital WhatsApp Prescription Ordering',
      desc: 'Launched doorstep medicine delivery across Bodhgaya, Mastipur, and surrounding Gaya neighborhoods with digital invoice generation.'
    },
    {
      year: '2026 & Beyond',
      title: 'PWA & Live Stock Transparency',
      desc: 'Enabled real-time online medicine stock search, PWA installation for smartphones, and enhanced chronic medication refill support.'
    }
  ];

  const milestones = [
    { number: '12+', label: 'Years of Community Trust' },
    { number: '35,000+', label: 'Registered Local Customers' },
    { number: '10,000+', label: 'Genuine Medicines & Molecules' },
    { number: '100%', label: 'Licensed Batch Transparency' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-8 text-left font-sans">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <section className="relative rounded bg-[#111216] border border-[#2D2E32] text-gray-200 p-6 sm:p-10 font-mono shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-xs font-bold uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>[ORGANIZATION_PROFILE: CLINICAL_CARE]</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Serving Bodhgaya with Authentic Medicines, Integrity &amp; Care
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            From emergency nighttime fever medications to monthly chronic diabetes and cardiac management, Sonu Medical Hall has been the dependable pharmacy at Pachhati More, Bodhgaya for over a decade.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
        {milestones.map((ms, index) => (
          <div key={index} className="p-4 rounded bg-[#111216] border border-[#2D2E32] text-center">
            <div className="text-xl sm:text-3xl font-bold text-blue-400">
              {ms.number}
            </div>
            <div className="text-[11px] text-gray-400 mt-1 uppercase">
              {ms.label}
            </div>
          </div>
        ))}
      </section>

      {/* Business Story & Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#111216] border border-[#2D2E32] text-blue-400 text-xs font-mono font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>[ORIGIN_&amp;_EVOLUTION]</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-bold font-mono text-white">
            Built on the Pillar of Genuine Pharmaceutical Care
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Founded with a vision to eliminate counterfeit medicines and bring organized, hospital-grade retail pharmacy services to Bodhgaya, Sonu Medical Hall has maintained an uncompromising policy on product genuineness since day one.
          </p>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Located right at Pachhati More, near major transport connections and the historical heart of Bodhgaya, we maintain close relationships with leading pharmaceutical companies like Sun Pharma, Cipla, GSK, Abbott, Glenmark, Torrent, and Micro Labs.
          </p>

          <div className="p-3.5 rounded bg-[#111216] border border-[#232429] space-y-2 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full compliance with Drugs &amp; Cosmetics Act (Form 20 &amp; 21 Licenses)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>24-hour monitored cold-chain storage for biologics and temperature-sensitive drops</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Free consultation on correct dosage timings, food interactions and storage instructions</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded overflow-hidden shadow-xl border border-[#2D2E32] bg-[#111216]">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop"
              alt="Sonu Medical Hall Pharmacist Team at Work"
              className="w-full h-72 sm:h-80 object-cover filter brightness-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-5 rounded bg-[#111216] border border-[#2D2E32] space-y-2">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold font-mono text-white uppercase">[MISSION_DIRECTIVE]</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            To provide every family and visitor in Bodhgaya and Gaya immediate access to 100% authentic medicines, vital healthcare equipment, and supportive clinical advice at fair, transparent prices.
          </p>
        </div>

        <div className="p-5 rounded bg-[#111216] border border-[#2D2E32] space-y-2">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-emerald-400 flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold font-mono text-white uppercase">[LONG_TERM_VISION]</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            To be recognized as the premier benchmark for pharmacy excellence, digital accessibility, and ethical medical care across the Magadh region of Bihar.
          </p>
        </div>

        <div className="p-5 rounded bg-[#111216] border border-[#2D2E32] space-y-2">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-cyan-400 flex items-center justify-center">
            <Heart className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold font-mono text-white uppercase">[CORE_PRINCIPLES]</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Authenticity above all, empathetic patient care, continuous quality verification, rapid local responsiveness, and community service without compromise.
          </p>
        </div>
      </section>

      {/* Owner / Head Pharmacist Message */}
      <section className="p-6 sm:p-8 rounded bg-[#111216] border border-[#2D2E32] text-gray-300 font-mono">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 rounded bg-[#18191E] border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">
            SM
          </div>
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
              [COMMUNIQUE: STORE_FOUNDER_&amp;_CHIEF_PHARMACIST]
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              &ldquo;Your family&apos;s health is a sacred responsibility that we honor every day.&rdquo;
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed italic font-sans">
              &ldquo;When someone walks into Sonu Medical Hall with a doctor prescription, they are trusting us with their healing. We ensure that not a single tablet leaves our shelves without rigorous batch inspection, valid expiry verification, and clear guidance. We are proud to serve Bodhgaya and invite you to reach out anytime you need healthcare support.&rdquo;
            </p>
            <div className="pt-1">
              <p className="font-bold text-xs text-white">Sonu Kumar</p>
              <p className="text-[10px] text-gray-500">Founder &amp; Registered Pharmacist, Sonu Medical Hall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey Timeline */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto font-mono">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
            [HISTORICAL_LOG]
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            Our Decade of Growth &amp; Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-[#2D2E32] ml-4 md:ml-24 space-y-4 font-mono">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-[#0A0B0D]"></div>

              <div className="p-4 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition">
                <span className="inline-block px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-[10px] font-bold mb-1">
                  YEAR: {item.year}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer inside About */}
      <section className="p-5 sm:p-6 rounded bg-[#111216] border border-[#2D2E32] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white uppercase">[NEED_PRESCRIPTION_DELIVERY_OR_ADVICE?]</h3>
          <p className="text-xs text-gray-400 font-sans">Connect directly with our pharmacists at Pachhati More, Bodhgaya.</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={onOpenWhatsAppOrder}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded shadow transition flex items-center gap-2 border border-blue-400/40"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ORDER_ON_WHATSAPP</span>
          </button>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="px-4 py-2 bg-[#18191E] hover:bg-[#232429] text-gray-200 text-xs font-bold rounded border border-[#2D2E32] transition flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
