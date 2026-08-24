import React, { useState } from 'react';
import { X, Send, HelpCircle, CheckCircle2, Phone, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Medicine Availability',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send via WhatsApp
    const msg = `*Quick Inquiry - ${SITE_CONFIG.name}*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Inquiry Type:* ${formData.inquiryType}\n*Message:* ${formData.message || 'Need assistance'}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono" id="quick-inquiry-modal">
      <div 
        className="bg-[#111216] rounded border border-[#2D2E32] max-w-md w-full p-5 sm:p-6 shadow-2xl relative text-gray-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded bg-[#18191E] border border-[#2D2E32] transition"
          aria-label="Close inquiry modal"
          id="close-inquiry-modal-btn"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#2D2E32]">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 id="inquiry-modal-title" className="text-sm font-bold text-white uppercase tracking-tight">
              [INQUIRY_PORTAL: LIVE_HELP]
            </h3>
            <p className="text-[11px] text-gray-400">
              Direct response from Sonu Medical Hall staff
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-white uppercase">[TRANSMISSION_COMPLETE]</h4>
            <p className="text-xs text-gray-400 mt-1 font-mono">Opening direct WhatsApp chat channel...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-left text-xs font-mono">
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Customer Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter customer name"
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

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Inquiry Topic
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-2.5 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-300 focus:border-blue-500 outline-none"
              >
                <option value="Medicine Availability">Medicine Availability</option>
                <option value="Home Delivery Timing">Home Delivery in Bodhgaya</option>
                <option value="Medical Equipment / BP Monitor">Medical Equipment / BP Monitor</option>
                <option value="Bulk / Clinic Order">Clinic / Bulk Purchase</option>
                <option value="Other Question">Other Question</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Details / Medicine Names
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify medicine names, dosages or questions..."
                className="w-full px-3 py-1.5 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              id="submit-quick-inquiry-btn"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded shadow transition flex items-center justify-center gap-2 text-xs border border-blue-400/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SEND_INQUIRY_VIA_WHATSAPP</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
