import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Pill, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Phone,
  Terminal,
  KeyRound
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';

export const Login: React.FC = () => {
  useSEO({
    title: 'Customer & Staff Portal Login | Sonu Medical Hall',
    description: 'Secure customer & staff login portal for Sonu Medical Hall Bodhgaya. Access prescription order histories, refill requests, and account profiles.',
    keywords: 'Sonu Medical Hall login, pharmacy portal Bodhgaya, customer login Gaya'
  });

  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string; general?: string }>({});
  const [forgotModal, setForgotModal] = useState(false);
  const [forgotPhone, setForgotPhone] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const validate = () => {
    const errs: { identifier?: string; password?: string; general?: string } = {};
    if (!identifier.trim()) {
      errs.identifier = 'Please enter your registered Email or 10-digit Mobile number';
    }
    if (!password) {
      errs.password = 'Please enter your password';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    // Realistic authentication simulation with graceful handling
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotPhone) {
      setForgotSubmitted(true);
      setTimeout(() => {
        setForgotSubmitted(false);
        setForgotModal(false);
      }, 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 text-left font-sans">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Login Portal' }]} />

      <div className="max-w-md mx-auto">
        
        {/* Card Container */}
        <div className="p-6 sm:p-8 rounded bg-[#111216] border border-[#2D2E32] shadow-2xl relative overflow-hidden font-mono" id="login-card">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2 mb-6 pb-4 border-b border-[#2D2E32]">
            <div className="w-10 h-10 rounded bg-[#18191E] border border-blue-500/40 text-blue-400 flex items-center justify-center shadow mx-auto">
              <KeyRound className="w-5 h-5" />
            </div>

            <div>
              <h1 className="text-base font-bold text-white tracking-tight uppercase">
                [ACCESS_PORTAL: SONU_MEDICAL]
              </h1>
              <p className="text-[11px] text-blue-400 font-semibold mt-0.5">
                Customer &amp; Pharmacist Secure Terminal
              </p>
            </div>

            <p className="text-xs text-gray-400 font-sans">
              Sign in to manage prescription orders, check refill schedules, or access staff dashboard.
            </p>
          </div>

          {/* Login Success State */}
          {loginSuccess ? (
            <div className="p-5 rounded bg-[#14151B] border border-[#2D2E32] text-center space-y-2 animate-fade-in font-mono">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-sm font-bold text-white uppercase">[AUTHENTICATION_CONFIRMED]</h3>
              <p className="text-xs text-gray-400 font-sans">
                Welcome back! Routing to central command terminal...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-3.5 text-xs">
              
              {/* Email / Mobile Field */}
              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase" htmlFor="login-identifier">
                  Email or Mobile <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    id="login-identifier"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="9934483645 or user@email.com"
                    className={`w-full pl-9 pr-3 py-2 rounded border ${
                      errors.identifier
                        ? 'border-rose-500 bg-rose-950/20'
                        : 'border-[#2D2E32] bg-[#14151B]'
                    } text-xs text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none`}
                  />
                </div>
                {errors.identifier && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.identifier}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1 uppercase" htmlFor="login-password">
                  Password <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter security password"
                    className={`w-full pl-9 pr-9 py-2 rounded border ${
                      errors.password
                        ? 'border-rose-500 bg-rose-950/20'
                        : 'border-[#2D2E32] bg-[#14151B]'
                    } text-xs text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-200 transition"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-[11px] text-gray-400">
                  <input
                    type="checkbox"
                    id="login-remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded bg-[#14151B] border-[#2D2E32] text-blue-600 focus:ring-0"
                  />
                  <span>PERSIST_SESSION</span>
                </label>

                <button
                  type="button"
                  onClick={() => setForgotModal(true)}
                  className="text-[11px] font-bold text-blue-400 hover:text-blue-300"
                >
                  RECOVER_PASSWORD?
                </button>
              </div>

              {/* Submit Button with Loading state */}
              <button
                type="submit"
                disabled={isLoading}
                id="login-submit-btn"
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded shadow flex items-center justify-center gap-2 text-xs transition border border-blue-400/40 disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>VERIFYING_KEY...</span>
                  </div>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>AUTHENTICATE</span>
                  </>
                )}
              </button>

            </form>
          )}

          {/* Quick Notice for Non-Registered Users */}
          <div className="mt-5 pt-4 border-t border-[#2D2E32] text-center text-xs text-gray-400 font-sans">
            <p>
              New customer? You don&apos;t need an account to order!
            </p>
            <Link
              to="/services"
              className="font-mono text-[11px] font-bold text-blue-400 hover:underline mt-1 inline-block"
            >
              ORDER_VIA_WHATSAPP_PRESCRIPTION &rarr;
            </Link>
          </div>

        </div>

        {/* Security Badge */}
        <div className="mt-4 text-center text-[11px] font-mono text-gray-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>[ENCRYPTION_PROTOCOL: 256-BIT_SSL_ENABLED]</span>
        </div>

      </div>

      {/* Forgot Password Modal */}
      {forgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono">
          <div className="bg-[#111216] rounded border border-[#2D2E32] max-w-sm w-full p-5 shadow-2xl space-y-3 text-left">
            <h3 className="text-sm font-bold text-white uppercase">[RESET_CREDENTIALS]</h3>
            <p className="text-xs text-gray-400 font-sans">
              Enter your registered mobile number. We will send an OTP via SMS or WhatsApp.
            </p>

            {forgotSubmitted ? (
              <div className="p-3 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold text-center">
                OTP TRANSMITTED SUCCESSFULLY!
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3 text-xs">
                <input
                  type="tel"
                  required
                  value={forgotPhone}
                  onChange={(e) => setForgotPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  className="w-full px-3 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-gray-100 placeholder-gray-600 focus:border-blue-500 outline-none"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition border border-blue-400/40"
                  >
                    SEND_OTP
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotModal(false)}
                    className="px-3 py-2 bg-[#18191E] border border-[#2D2E32] text-gray-300 rounded text-xs font-bold transition"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
