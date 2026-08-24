import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Navigation, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';

interface ContactProps {
  onOpenWhatsAppOrder: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppOrder }) => {
  useSEO({
    title: 'Contact Us & Location | Sonu Medical Hall - Bodhgaya Pharmacy',
    description: 'Visit Sonu Medical Hall at Pachhati More, Bodhgaya, Gaya, Bihar 824231. Call +91 9934483645, get directions on Google Maps, or send a prescription order.',
    keywords: 'Contact Sonu Medical Hall, Sonu Medical Bodhgaya phone, pharmacy Pachhati More Gaya, Bodhgaya chemist address'
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter both your name and phone number.');
      return;
    }
    setErrorMsg('');

    // Format WhatsApp message
    const msg = [
      `*📬 New Contact Inquiry - ${SITE_CONFIG.name}*`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Subject:* ${formData.subject}`,
      `*Message:* ${formData.message || 'I would like to inquire about healthcare services.'}`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 text-left font-sans">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact & Location' }]} />

      {/* Header Banner */}
      <section className="relative rounded bg-[#111216] border border-[#2D2E32] text-gray-200 p-6 sm:p-10 font-mono shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-xs font-bold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>[COMMUNICATION_PORTAL: CONTACT_DESK]</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Contact Sonu Medical Hall
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Have a prescription to fill, need medicine stock confirmation, or seeking health device guidance? Our team is here to help you 7 days a week.
          </p>
        </div>
      </section>

      {/* Quick Action CTA Bar: Call, WhatsApp, Directions */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
        {/* Call Now */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          id="contact-call-btn"
          className="p-4 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block">[DIRECT_PHONE]</span>
            <span className="text-sm font-bold text-white block mt-0.5">{SITE_CONFIG.phoneDisplay}</span>
          </div>
          <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center text-blue-400 group-hover:scale-105 transition">
            <Phone className="w-4 h-4" />
          </div>
        </a>

        {/* WhatsApp Order */}
        <button
          onClick={onOpenWhatsAppOrder}
          id="contact-whatsapp-btn"
          className="p-4 rounded bg-[#111216] border border-[#2D2E32] hover:border-emerald-500/50 transition flex items-center justify-between group text-left"
        >
          <div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">[WHATSAPP_DISPATCH]</span>
            <span className="text-sm font-bold text-white block mt-0.5">Instant Chat Order</span>
          </div>
          <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
            <MessageSquare className="w-4 h-4" />
          </div>
        </button>

        {/* Directions */}
        <a
          href={SITE_CONFIG.geo.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="contact-directions-btn"
          className="p-4 rounded bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">[GEO_LOCATION]</span>
            <span className="text-sm font-bold text-white block mt-0.5">Google Maps GPS</span>
          </div>
          <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center text-blue-400 group-hover:scale-105 transition">
            <Navigation className="w-4 h-4" />
          </div>
        </a>
      </section>

      {/* Main Grid: Contact Information & Interactive Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Business Info & Working Hours */}
        <div className="lg:col-span-5 space-y-4 font-mono">
          <div className="p-5 rounded bg-[#111216] border border-[#2D2E32] space-y-4">
            <h3 className="text-sm font-bold text-white pb-2.5 border-b border-[#2D2E32] uppercase">
              [TELEMETRY: FACILITY_INFO]
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white uppercase">Store Address</h4>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-sans">
                  {SITE_CONFIG.address.full}
                </p>
                <p className="text-[11px] text-blue-400 font-medium mt-0.5 font-mono">
                  Landmark: {SITE_CONFIG.address.landmark}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white uppercase">Helpline Numbers</h4>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-xs font-semibold text-blue-400 hover:underline block mt-0.5 font-mono">
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <p className="text-[10px] text-gray-500 mt-0.5">Available for 24/7 emergency dispatch on call</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white uppercase">Email Address</h4>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs font-semibold text-gray-300 hover:text-blue-400 block mt-0.5 font-mono">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3 pt-3 border-t border-[#2D2E32]">
              <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-emerald-400 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white uppercase">Operating Hours</h4>
                <p className="text-xs font-bold text-gray-200 mt-0.5">
                  {SITE_CONFIG.workingHours.timing}
                </p>
                <p className="text-[11px] text-emerald-400 mt-0.5">
                  {SITE_CONFIG.workingHours.days}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-5 sm:p-6 rounded bg-[#111216] border border-[#2D2E32] space-y-4 font-mono">
            <div>
              <h3 className="text-sm font-bold text-white uppercase">
                [INQUIRY_FORM: NEW_TRANSMISSION]
              </h3>
              <p className="text-xs text-gray-400 mt-0.5 font-sans">
                Fill out the details below to connect with our pharmacist immediately.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded bg-[#14151B] border border-[#2D2E32] text-center space-y-2 font-mono">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white uppercase">[TRANSMISSION_DISPATCHED]</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto font-sans">
                  Your inquiry has been formulated for direct WhatsApp response. Our team will review and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition border border-blue-400/40"
                >
                  NEW_INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                {errorMsg && (
                  <div className="p-2 rounded bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                      Mobile Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@example.com"
                      className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-2.5 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-300 focus:border-blue-500 outline-none"
                    >
                      <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                      <option value="Prescription Delivery in Bodhgaya">Prescription Delivery in Bodhgaya</option>
                      <option value="Medical Equipment / Diagnostics">Medical Equipment / Diagnostics</option>
                      <option value="Monthly Chronic Refill">Monthly Chronic Refill</option>
                      <option value="Corporate / Clinic Supplies">Clinic / Institutional Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                    Your Message / Required Medicines
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify medicines, quantities, or special requests..."
                    className="w-full px-3 py-1.5 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded shadow transition flex items-center justify-center gap-2 text-xs border border-blue-400/40"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT_INQUIRY_TO_SONU_MEDICAL</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Google Map Section */}
      <section className="rounded border border-[#2D2E32] bg-[#111216] p-4 sm:p-5 space-y-3 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2D2E32] pb-2.5">
          <div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>[RADAR_COORDINATES: STORE_MAP]</span>
            </h3>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Pachhati More, Bodhgaya, Gaya, Bihar 824231
            </p>
          </div>
          <a
            href={SITE_CONFIG.geo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-blue-300"
          >
            <ExternalLink className="w-3 h-3" />
            <span>OPEN_IN_GOOGLE_MAPS</span>
          </a>
        </div>

        {/* Embedded Map Container */}
        <div className="w-full h-72 sm:h-80 rounded overflow-hidden bg-[#14151B] relative border border-[#232429]">
          <iframe
            src={SITE_CONFIG.geo.embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sonu Medical Hall Location Map"
            className="w-full h-full filter invert hue-rotate-180 contrast-90"
          ></iframe>
        </div>
      </section>

    </div>
  );
};
