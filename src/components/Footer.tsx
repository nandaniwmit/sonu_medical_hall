import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  // === STEP 11 MANDATORY GLOBAL TRACKING HOOK ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0E12] text-gray-300 pt-12 pb-10 border-t border-[#2D2E32] relative z-10 font-sans" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* High Density Status Header */}
        <div className="bg-[#111216] border border-[#2D2E32] p-3 rounded mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5" />
              <span>CORE_SERVICE: ACTIVE [24/7]</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">
              DISPATCH_STATUS: <span className="text-blue-400 font-bold">READY</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">
              COLD_CHAIN_MONITOR: <span className="text-emerald-400 font-bold">2.4°C - 4.1°C</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500">[ENCRYPTED_ENDPOINT: TLS 1.3]</span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#2D2E32]">
          
          {/* Col 1: Business Overview */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center shrink-0">
                <Pill className="w-4 h-4 rotate-45" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight font-mono uppercase">
                  {SITE_CONFIG.name}
                </span>
                <p className="text-[10px] text-blue-400 font-mono">
                  {SITE_CONFIG.category}
                </p>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Serving Bodhgaya &amp; Gaya with genuine prescription medicines, emergency healthcare supplies, surgical devices, and fast doorstep delivery.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-[#14151B] p-2.5 rounded border border-[#2D2E32] font-mono">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>LICENSED PHARMACY &bull; BATCH VERIFIED &bull; TAX INVOICED</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-3 text-blue-400">
              [SYSTEM_NAVIGATION]
            </h4>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 01_Home_Portal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 02_About_Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 03_Healthcare_Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 font-bold transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 04_Live_Stock_Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 05_Store_Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 06_Contact_&amp;_Location
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" /> 07_Secure_Staff_Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Emergency */}
          <div>
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-3 text-blue-400">
              [DISPATCH_SCHEDULE]
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded bg-[#14151B] border border-[#2D2E32]">
                <p className="text-[10px] text-gray-500 uppercase">Store Operating Window</p>
                <p className="font-bold text-gray-200 mt-0.5">{SITE_CONFIG.workingHours.timing}</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">{SITE_CONFIG.workingHours.days}</p>
              </div>

              <div className="p-2.5 rounded bg-[#14151B] border border-[#2D2E32]">
                <p className="text-[10px] text-gray-500 uppercase">Emergency Protocol</p>
                <p className="text-gray-300 mt-0.5 text-[11px]">{SITE_CONFIG.workingHours.emergency}</p>
                <a 
                  href={`tel:${SITE_CONFIG.phone}`} 
                  className="text-xs font-bold text-blue-400 hover:underline mt-1 block"
                >
                  CALL: {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Address & Direct Contact */}
          <div>
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-3 text-blue-400">
              [TERMINAL_COORDINATES]
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {SITE_CONFIG.address.full}
                  <span className="block text-[10px] text-gray-500 mt-0.5">({SITE_CONFIG.address.landmark})</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-300 hover:text-white transition">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 hover:text-white transition">
                  {SITE_CONFIG.email}
                </a>
              </li>

              <li className="pt-1">
                <a
                  href={SITE_CONFIG.geo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#18191E] hover:bg-[#232429] text-blue-400 text-xs font-mono rounded border border-[#2D2E32] transition"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>GPS_ROUTING: GOOGLE_MAPS</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal, Disclaimer, & Privacy Note */}
        <div className="py-4 border-b border-[#2D2E32] text-[11px] text-gray-500 font-mono leading-relaxed space-y-1.5">
          <p>
            <strong className="text-gray-400">STATUTORY_DISCLAIMER:</strong> All scheduled prescription drugs require a valid prescription issued by a registered medical practitioner prior to dispensation under the Drugs and Cosmetics Act &amp; PCI regulations.
          </p>
          <div className="flex flex-wrap gap-3 text-gray-500 pt-0.5">
            <span className="hover:text-gray-300 cursor-pointer">PRIVACY_POLICY</span>
            <span>&bull;</span>
            <span className="hover:text-gray-300 cursor-pointer">TERMS_OF_SERVICE</span>
            <span>&bull;</span>
            <span className="hover:text-gray-300 cursor-pointer">RETURN_POLICY</span>
            <span>&bull;</span>
            <span className="hover:text-gray-300 cursor-pointer">DRUG_LICENSE_VERIFICATION</span>
          </div>
        </div>

        {/* Copyright Bar + REQUIRED WMIT POPUP TRIGGER (PRESERVED EXACTLY) */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-500">
          <div>
            &copy; {currentYear} {SITE_CONFIG.name}. ALL RIGHTS RESERVED.
          </div>

          {/* EXACT REQUIRED WMIT POPUP TRIGGER - PRESERVED EXACTLY IN CENTER */}
          <div className="text-center">
            <a href="#" className="wmit-popup-trigger text-gray-400 hover:text-blue-400 transition font-medium">
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <span>BODHGAYA HEALTHCARE TELEMETRY</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
