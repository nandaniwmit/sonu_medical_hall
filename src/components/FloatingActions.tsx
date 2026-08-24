import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Zap, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppOrder: () => void;
  onOpenQuickInquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenWhatsAppOrder,
  onOpenQuickInquiry
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* High Density Floating Action Cluster - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-none font-mono" id="floating-actions-container">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            id="back-to-top-btn"
            className="pointer-events-auto p-2.5 rounded bg-[#16171D] text-gray-300 shadow-xl border border-[#2D2E32] hover:bg-[#232429] hover:text-blue-400 hover:border-blue-500/50 transition duration-150 focus:outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label={`Call ${SITE_CONFIG.name} at ${SITE_CONFIG.phoneDisplay}`}
          id="floating-call-btn"
          className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded bg-[#16171D] hover:bg-[#232429] text-gray-200 shadow-xl border border-[#2D2E32] hover:border-blue-500/50 transition duration-150 group text-xs font-mono"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-[11px] font-bold pl-0.5 text-gray-300">
            CALL_DISPATCH
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppOrder}
          aria-label="Order medicine on WhatsApp"
          id="floating-whatsapp-btn"
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-900/30 border border-blue-400/40 transition duration-150 group text-xs font-mono font-bold"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="tracking-wide uppercase text-[11px]">
            WHATSAPP_ORDER
          </span>
        </button>
      </div>

      {/* Mobile Bottom Sticky CTA Bar (Visible on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#111216]/95 backdrop-blur-md border-t border-[#2D2E32] p-2 sm:hidden flex items-center gap-2 shadow-2xl font-mono">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          id="mobile-sticky-call-btn"
          className="flex-1 py-2 px-2.5 bg-[#18191E] text-gray-200 rounded text-[11px] font-bold flex items-center justify-center gap-1.5 border border-[#2D2E32] active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>CALL_SHOP</span>
        </a>

        <button
          onClick={onOpenWhatsAppOrder}
          id="mobile-sticky-whatsapp-btn"
          className="flex-1 py-2 px-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition border border-blue-400/40"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>ORDER_RX</span>
        </button>
      </div>
    </>
  );
};
