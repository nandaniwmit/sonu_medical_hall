import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  Filter, 
  Image as ImageIcon, 
  MapPin, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Terminal,
  Camera
} from 'lucide-react';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';

export const Gallery: React.FC = () => {
  useSEO({
    title: 'Store Photos & Gallery | Sonu Medical Hall - Bodhgaya Pharmacy',
    description: 'View photos of Sonu Medical Hall at Pachhati More, Bodhgaya: well-organized medicine shelves, temperature-controlled storage, diagnostic health equipment and customer desks.',
    keywords: 'Sonu Medical Hall photos, Bodhgaya medical store images, pharmacy interior Pachhati More, Gaya chemist photos'
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Store Front',
    'Shelves & Inventory',
    'Health Devices',
    'Medical Equipment',
    'Customer Desk'
  ];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_DATA.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  const activeItem = activeLightboxIndex !== null ? GALLERY_DATA[activeLightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 text-left font-sans">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Store Gallery' }]} />

      {/* Header Banner */}
      <section className="relative rounded bg-[#111216] border border-[#2D2E32] text-gray-200 p-6 sm:p-10 font-mono shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-xs font-bold uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>[FACILITY_SURVEILLANCE: STORE_INFRASTRUCTURE]</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Store Gallery &amp; Pharmacy Infrastructure
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Take a visual tour of Sonu Medical Hall at Pachhati More, Bodhgaya. Experience our clean, organized dispensing racks, diagnostic equipment displays, and cold-chain storage setup.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2D2E32] pb-3 font-mono">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Filter className="w-3.5 h-3.5 text-blue-400" />
          <span>FILTER_BY_ZONE:</span>
        </div>

        <div className="flex flex-wrap gap-1" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`px-3 py-1 rounded text-xs font-bold transition border ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white border-blue-400/50 shadow'
                  : 'bg-[#14151B] text-gray-400 hover:text-white border-[#2D2E32]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative rounded overflow-hidden bg-[#111216] border border-[#2D2E32] hover:border-blue-500/50 transition duration-200 cursor-pointer flex flex-col justify-between"
            id={`gallery-item-${item.id}`}
          >
            <div className="relative h-56 overflow-hidden bg-[#14151B]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="p-2 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 shadow">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#111216]/90 border border-[#2D2E32] text-blue-400 font-mono text-[9px] font-bold uppercase">
                {item.category}
              </span>
            </div>

            <div className="p-3.5 font-mono">
              <h3 className="font-bold text-xs text-white group-hover:text-blue-400 transition">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed font-sans line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP LIGHTBOX MODAL */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in font-mono"
          role="dialog"
          aria-modal="true"
          id="gallery-lightbox-modal"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded bg-[#18191E] border border-[#2D2E32] text-gray-300 hover:text-white transition z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded bg-[#18191E] border border-[#2D2E32] text-gray-300 hover:text-white transition z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded bg-[#18191E] border border-[#2D2E32] text-gray-300 hover:text-white transition z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-3xl w-full bg-[#111216] rounded border border-[#2D2E32] overflow-hidden shadow-2xl text-white text-left">
            <div className="max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full max-h-[65vh] object-contain"
              />
            </div>
            <div className="p-4 bg-[#111216] border-t border-[#2D2E32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  [{activeItem.category}]
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 max-w-xl font-sans">
                  {activeItem.description}
                </p>
              </div>

              <div className="text-[10px] text-gray-500 font-bold shrink-0">
                FRAME: {(activeLightboxIndex ?? 0) + 1} / {GALLERY_DATA.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
