import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Pill, 
  Menu, 
  X, 
  Phone, 
  Search, 
  ShoppingBag, 
  LogIn, 
  MapPin, 
  Clock, 
  ShieldCheck,
  Activity,
  Terminal,
  Radio,
  Type
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';
import { PWAInstallState } from '../hooks/usePWAInstall';
import { useTheme, FONT_OPTIONS } from '../context/ThemeContext';

interface NavbarProps {
  pwaState: PWAInstallState;
  onOpenWhatsAppOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ pwaState, onOpenWhatsAppOrder }) => {
  const { fontStyle, setFontStyle, cycleFontStyle, currentFontConfig } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', tag: '01' },
    { name: 'About', path: '/about', tag: '02' },
    { name: 'Services', path: '/services', tag: '03' },
    { name: 'Gallery', path: '/gallery', tag: '04' },
    { name: 'Contact', path: '/contact', tag: '05' },
    { name: 'Login', path: '/login', tag: '06' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200 border-b border-[#2D2E32]">
      {/* Top High Density Telemetry Bar */}
      <div className="bg-[#0A0B0D] border-b border-[#2D2E32] text-gray-400 text-[11px] font-mono py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-gray-200">NODE_01:</span> OPERATIONAL
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3 h-3 text-blue-400" />
              PACHHATI MORE, BODHGAYA (24.6961° N, 84.9913° E)
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3 h-3 text-amber-400" />
              HOURS: 07:00 - 22:30 IST &bull; 24/7 DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Typography Style Switcher in Telemetry bar */}
            <div className="relative">
              <button
                onClick={() => setFontMenuOpen(!fontMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] hover:border-blue-500/50 text-blue-400 hover:text-blue-300 transition text-[10px] font-bold"
                title="Change font style across application"
                id="font-switcher-btn"
              >
                <Type className="w-3 h-3 text-blue-400" />
                <span className="text-gray-300 font-normal">FONT:</span>
                <span>{currentFontConfig.label}</span>
              </button>

              {fontMenuOpen && (
                <div 
                  className="absolute right-0 top-full mt-1.5 w-64 bg-[#111216] border border-[#2D2E32] rounded shadow-2xl p-1.5 z-50 space-y-1 font-mono text-left"
                  id="font-dropdown-menu"
                >
                  <div className="px-2 py-1 text-[10px] font-bold text-gray-400 border-b border-[#2D2E32] uppercase flex items-center justify-between">
                    <span>TYPOGRAPHY STYLE</span>
                    <span className="text-[9px] text-blue-400">SELECT PAIR</span>
                  </div>
                  {FONT_OPTIONS.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => {
                        setFontStyle(font.id);
                        setFontMenuOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition flex flex-col ${
                        fontStyle === font.id
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 font-bold'
                          : 'text-gray-300 hover:bg-[#18191E] border border-transparent'
                      }`}
                    >
                      <span className="text-xs font-semibold text-white">{font.label}</span>
                      <span className="text-[10px] text-gray-400">{font.subLabel}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-gray-600">|</span>
            <span className="text-gray-400">
              TIME: <span className="text-gray-200 font-bold">{liveTime || '00:00:00'} IST</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" /> PCI_CERTIFIED
            </span>
            <span className="text-gray-600">|</span>
            <a 
              href={`tel:${SITE_CONFIG.phone}`} 
              className="text-blue-400 hover:text-blue-300 font-bold transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-blue-400" /> {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#111216]/95 backdrop-blur-md shadow-lg shadow-black/40 py-2'
            : 'bg-[#111216] py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Branding */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-blue-500 rounded p-1"
            id="brand-logo-link"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-300 transition duration-150 shrink-0">
              <Pill className="w-5 h-5 rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors uppercase font-mono">
                  Sonu Medical Hall
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-blue-950/80 border border-blue-800/80 text-blue-300 text-[9px] font-mono font-bold uppercase rounded-sm">
                  RX_HUB
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-400 tracking-wider">
                BODHGAYA &bull; PHARMACY &amp; HEALTHCARE MATRIX
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links with High-Density Tab Look */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A0B0D] p-1 rounded border border-[#2D2E32]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#18191E] text-blue-400 border border-blue-500/40 shadow-sm'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-[#16171D] border border-transparent'
                  }`}
                >
                  <span className={`text-[9px] ${isActive ? 'text-blue-400' : 'text-gray-600'}`}>{link.tag}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action cluster: Install App + Stock Search + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* PWA Add to Home Button */}
            <PWAInstallButton pwaState={pwaState} variant="nav" />

            {/* Quick Stock Check Shortcut */}
            <button
              onClick={() => navigate('/services')}
              aria-label="Search Medicine Stock"
              className="px-2.5 py-1.5 rounded bg-[#18191E] border border-[#2D2E32] text-gray-300 hover:text-white hover:border-gray-500 transition text-xs font-mono flex items-center gap-1.5"
              title="Search Medicine Inventory"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xl:inline">INVENTORY</span>
            </button>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenWhatsAppOrder}
              id="nav-whatsapp-order-btn"
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-mono font-bold rounded border border-blue-400/40 flex items-center gap-2 shadow-sm transition"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ORDER_RX</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded bg-[#18191E] border border-[#2D2E32] text-gray-300 hover:text-white hover:border-gray-500 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with High-Density Panel styling */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#111216] border-b border-[#2D2E32] px-4 pt-3 pb-6 shadow-2xl animate-fade-in"
          id="mobile-menu-drawer"
        >
          {/* Add to Home Button inside Mobile Drawer */}
          <div className="mb-3">
            <PWAInstallButton pwaState={pwaState} variant="mobile-menu" />
          </div>

          {/* Typography Selector in Mobile Menu */}
          <div className="mb-3 p-2.5 rounded bg-[#18191E] border border-[#2D2E32]">
            <div className="text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center justify-between font-mono">
              <span className="flex items-center gap-1 text-blue-400">
                <Type className="w-3 h-3" /> FONT_STYLE
              </span>
              <span>{currentFontConfig.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 font-mono">
              {FONT_OPTIONS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFontStyle(f.id)}
                  className={`p-1.5 rounded text-[11px] text-left transition border ${
                    fontStyle === f.id
                      ? 'bg-blue-600/30 text-blue-300 border-blue-500/50 font-bold'
                      : 'bg-[#111216] text-gray-400 border-[#2D2E32] hover:text-white'
                  }`}
                >
                  <span className="block truncate font-semibold">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded transition flex items-center justify-between ${
                    isActive
                      ? 'bg-[#18191E] text-blue-400 border border-blue-500/40 font-bold'
                      : 'text-gray-300 hover:bg-[#18191E] hover:text-white border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-gray-500">SYS_VIEW_{link.tag}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#2D2E32] space-y-2 font-mono">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppOrder();
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold flex items-center justify-center gap-2 text-xs border border-blue-400/40"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>WHATSAPP MEDICINE ORDER</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full py-2.5 bg-[#18191E] hover:bg-[#232429] text-gray-200 rounded font-bold flex items-center justify-center gap-2 text-xs border border-[#2D2E32]"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>CALL DISPATCH: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
