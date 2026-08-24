import React from 'react';
import { X, Share, PlusSquare, ArrowDown, Smartphone, Terminal } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono" id="ios-install-modal">
      <div 
        className="bg-[#111216] rounded border border-[#2D2E32] max-w-md w-full p-5 sm:p-6 shadow-2xl relative text-gray-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded bg-[#18191E] border border-[#2D2E32] transition"
          aria-label="Close installation guide"
          id="ios-install-close-btn"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#2D2E32]">
          <div className="w-9 h-9 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 flex items-center justify-center font-bold">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h3 id="ios-modal-title" className="text-sm font-bold text-white uppercase tracking-tight">
              [PWA_INSTALL: APPLE_SAFARI_GUIDE]
            </h3>
            <p className="text-[11px] text-gray-400">
              For Apple iPhone &amp; iPad devices
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-300 mb-4 font-sans">
          Execute these 3 steps in Mobile Safari to register Sonu Medical Hall as a native app:
        </p>

        <div className="space-y-3 mb-5 font-mono text-xs">
          <div className="flex items-start gap-3 p-2.5 rounded bg-[#14151B] border border-[#2D2E32]">
            <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              1
            </div>
            <div>
              <p className="font-bold text-white flex items-center gap-1.5 text-xs">
                TAP_SHARE_BUTTON <Share className="w-3.5 h-3.5 text-blue-400 inline" />
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 font-sans">
                Located on the bottom navigation strip in Mobile Safari.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 rounded bg-[#14151B] border border-[#2D2E32]">
            <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              2
            </div>
            <div>
              <p className="font-bold text-white flex items-center gap-1.5 text-xs">
                SELECT_ADD_TO_HOME <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" />
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 font-sans">
                Scroll the Safari actions panel and tap &ldquo;Add to Home Screen&rdquo;.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 rounded bg-[#14151B] border border-[#2D2E32]">
            <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              3
            </div>
            <div>
              <p className="font-bold text-white text-xs">
                CONFIRM_&ldquo;ADD&rdquo;
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 font-sans">
                Tap &ldquo;Add&rdquo; top-right. The Sonu Medical icon launches fullscreen.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#2D2E32]">
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" /> FAST 1-TAP ACCESS
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded shadow transition border border-blue-400/40"
            id="ios-got-it-btn"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
};
