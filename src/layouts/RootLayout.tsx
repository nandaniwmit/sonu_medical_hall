import React, { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { QuickInquiryModal } from '../components/QuickInquiryModal';
import { IOSInstallGuide } from '../components/IOSInstallGuide';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const RootLayout: React.FC = () => {
  const pwaState = usePWAInstall();
  const [whatsappOrderOpen, setWhatsappOrderOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [quickInquiryOpen, setQuickInquiryOpen] = useState(false);

  const handleOpenWhatsAppOrder = (medicineName?: string) => {
    setPrefilledMedicine(medicineName || '');
    setWhatsappOrderOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0D] text-[#E0E0E0] selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Sticky High-Density Header Navigation */}
      <Navbar
        pwaState={pwaState}
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
      />

      {/* Main Outlet with High-Density Layout */}
      <main className="flex-1 pb-16 sm:pb-8">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#0A0B0D]">
              <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-sm animate-spin mb-4 font-mono"></div>
              <p className="text-xs font-mono tracking-wider text-gray-400 uppercase">
                [SYS_INIT: LOADING_SONU_MEDICAL_PORTAL...]
              </p>
            </div>
          }
        >
          <Outlet context={{ onOpenWhatsAppOrder: handleOpenWhatsAppOrder, onOpenQuickInquiry: () => setQuickInquiryOpen(true) }} />
        </Suspense>
      </main>

      {/* Mandatory Footer with global tracking & exact WMIT popup trigger */}
      <Footer />

      {/* Floating Buttons: WhatsApp, Call, Back-to-top, Sticky bar */}
      <FloatingActions
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        onOpenQuickInquiry={() => setQuickInquiryOpen(true)}
      />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={whatsappOrderOpen}
        onClose={() => setWhatsappOrderOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={quickInquiryOpen}
        onClose={() => setQuickInquiryOpen(false)}
      />

      {/* iOS Installation Visual Guide Modal */}
      <IOSInstallGuide
        isOpen={pwaState.showIOSGuide}
        onClose={pwaState.closeIOSGuide}
      />
    </div>
  );
};
