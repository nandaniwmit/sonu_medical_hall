import React, { useState } from 'react';
import { X, MessageSquare, Phone, Send, Upload, FileText, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    hasPrescription: 'Yes',
    prescriptionFileName: '',
    message: '',
    deliveryTime: 'Immediate (Within 60-90 Mins)'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update when prefilledMedicine prop changes
  React.useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name field is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile contact is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, ''))) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.medicineName.trim()) {
      newErrors.medicineName = 'Specify medicine name or note "Per Rx upload"';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Delivery locality in Bodhgaya / Gaya required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        prescriptionFileName: e.target.files![0].name,
        hasPrescription: 'Yes (Ready to share)'
      }));
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const messageLines = [
      `*💊 New Medicine Order - ${SITE_CONFIG.name}*`,
      `-----------------------------------------`,
      `*Customer Name:* ${formData.name}`,
      `*Phone Number:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Delivery Address:* ${formData.address}`,
      `*Medicine Required:* ${formData.medicineName}`,
      `*Prescription Attached:* ${formData.hasPrescription} ${formData.prescriptionFileName ? `(${formData.prescriptionFileName})` : ''}`,
      `*Preferred Delivery Time:* ${formData.deliveryTime}`,
      formData.message ? `*Additional Notes:* ${formData.message}` : null,
      `-----------------------------------------`,
      `_Sent via Sonu Medical Hall High-Density Dispatch_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto font-mono" id="whatsapp-order-modal">
      <div 
        className="bg-[#111216] rounded border border-[#2D2E32] max-w-lg w-full p-5 sm:p-6 shadow-2xl relative text-gray-200 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded bg-[#18191E] border border-[#2D2E32] transition"
          aria-label="Close modal"
          id="close-order-modal-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#2D2E32]">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 id="order-modal-title" className="text-base font-bold text-white uppercase tracking-tight">
              [DISPATCH_DISPATCH: WHATSAPP_ORDER]
            </h3>
            <p className="text-[11px] text-gray-400">
              Direct pharmacist dispatch to Bodhgaya &amp; Gaya
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="space-y-3 text-left text-xs">
          {/* Customer Name */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
              Patient / Customer Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="order-name-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
            />
            {errors.name && <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
          </div>

          {/* Phone & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Contact Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="tel"
                id="order-phone-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile"
                className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
              />
              {errors.phone && <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="order-email-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="patient@gmail.com"
                className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
              />
            </div>
          </div>

          {/* Medicine Name / Requirements */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
              Medicine Names &amp; Quantity <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="order-medicine-input"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              placeholder="e.g. Dolo 650 (2 strips), Pantocid DSR, Accu-Chek"
              className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
            />
            {errors.medicineName && <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.medicineName}</p>}
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
              Delivery Locality / Landmark <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="order-address-input"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="e.g. Near Mastipur More, Pachhati, Bodhgaya"
              className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
            />
            {errors.address && <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.address}</p>}
          </div>

          {/* Prescription & Preferred Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Doctor Prescription
              </label>
              <select
                id="order-prescription-select"
                value={formData.hasPrescription}
                onChange={(e) => setFormData({ ...formData, hasPrescription: e.target.value })}
                className="w-full px-2.5 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-300 focus:border-blue-500 outline-none"
              >
                <option value="Yes">Yes, will share via WhatsApp</option>
                <option value="No (OTC item)">No, OTC / General wellness</option>
                <option value="Already on file with shop">Already in pharmacy archive</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
                Dispatch Window
              </label>
              <select
                id="order-time-select"
                value={formData.deliveryTime}
                onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                className="w-full px-2.5 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-300 focus:border-blue-500 outline-none"
              >
                <option value="Immediate (Within 60-90 Mins)">Immediate (Within 60-90 Mins)</option>
                <option value="Today Evening (6 PM - 9 PM)">Today Evening (6 PM - 9 PM)</option>
                <option value="Tomorrow Morning (8 AM - 11 AM)">Tomorrow Morning (8 AM - 11 AM)</option>
                <option value="Self Store Pickup">Self Store Pickup</option>
              </select>
            </div>
          </div>

          {/* Upload Prescription / File picker preview */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
              Upload Prescription (Photo / Scan)
            </label>
            <div className="relative border border-dashed border-[#2D2E32] rounded p-2.5 text-center hover:border-blue-500 transition cursor-pointer bg-[#14151B]">
              <input
                type="file"
                id="prescription-file-upload"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Upload className="w-3.5 h-3.5 text-blue-400" />
                {formData.prescriptionFileName ? (
                  <span className="font-bold text-emerald-400 flex items-center gap-1 truncate max-w-xs">
                    <CheckCircle2 className="w-3 h-3 inline" /> {formData.prescriptionFileName}
                  </span>
                ) : (
                  <span>Click to select prescription photo or attach directly in WhatsApp</span>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase">
              Special Handling Notes
            </label>
            <textarea
              id="order-notes-textarea"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Call upon arrival, bring change for cash on delivery"
              className="w-full px-3 py-1.5 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none font-mono"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono">
            <button
              type="submit"
              disabled={isSubmitting}
              id="whatsapp-submit-order-btn"
              className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded shadow flex items-center justify-center gap-2 transition border border-blue-400/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_TO_WHATSAPP'}</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              id="call-now-order-btn"
              className="w-full py-2.5 px-3 bg-[#18191E] hover:bg-[#232429] text-gray-200 font-bold rounded border border-[#2D2E32] flex items-center justify-center gap-2 transition text-center"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>CALL_DIRECT</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
