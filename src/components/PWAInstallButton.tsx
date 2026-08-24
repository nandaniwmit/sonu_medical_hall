import React from 'react';
import { Smartphone, CheckCircle, Download } from 'lucide-react';
import { PWAInstallState } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  pwaState: PWAInstallState;
  variant?: 'nav' | 'mobile-menu' | 'banner' | 'footer';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  pwaState,
  variant = 'nav',
  className = ''
}) => {
  const { isInstalled, isStandalone, installSuccess, triggerInstall } = pwaState;

  // Don't show if already installed in standalone mode
  if (isStandalone || isInstalled) {
    if (installSuccess) {
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-[11px] font-mono font-bold">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>[APP_INSTALLED]</span>
        </div>
      );
    }
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerInstall();
  };

  if (variant === 'banner') {
    return (
      <div className={`p-4 rounded bg-[#111216] border border-[#2D2E32] text-gray-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono ${className}`}>
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded bg-[#18191E] border border-[#2D2E32] flex items-center justify-center text-blue-400 shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white uppercase">[INSTALL_PWA_PORTAL]</h4>
            <p className="text-[11px] text-gray-400 font-sans">
              Instant offline access, live medicine inventory search &amp; 1-click WhatsApp orders.
            </p>
          </div>
        </div>
        <button
          onClick={handleClick}
          id="pwa-install-banner-btn"
          aria-label="Add Sonu Medical Hall app to Home Screen"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded border border-blue-400/40 shadow transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>📲 ADD_TO_HOME</span>
        </button>
      </div>
    );
  }

  if (variant === 'mobile-menu') {
    return (
      <button
        onClick={handleClick}
        id="pwa-install-mobile-menu-btn"
        aria-label="Add Sonu Medical Hall app to Home Screen"
        className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono font-bold border border-blue-400/40 shadow-sm transition ${className}`}
      >
        <Smartphone className="w-4 h-4" />
        <span>📲 ADD_TO_HOME_SCREEN</span>
      </button>
    );
  }

  // Default nav button
  return (
    <button
      onClick={handleClick}
      id="pwa-install-nav-btn"
      aria-label="Add Sonu Medical Hall app to Home Screen"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-bold bg-[#18191E] text-blue-400 hover:bg-[#232429] hover:text-blue-300 border border-[#2D2E32] hover:border-blue-500/50 transition shadow-sm whitespace-nowrap min-h-[34px] focus:outline-none ${className}`}
    >
      <span className="text-xs">📲</span>
      <span>ADD_APP</span>
    </button>
  );
};
