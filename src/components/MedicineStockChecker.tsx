import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Pill, Filter, RefreshCw, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import stockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Typed inventory data
  const inventory: MedicineItem[] = stockData as MedicineItem[];

  // Get distinct categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(inventory.map((item) => item.category)));
    return ['All', ...cats];
  }, [inventory]);

  // Filter logic
  const filteredMedicines = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.indications.some((ind) => ind.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [inventory, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            [IN_STOCK]
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            [LOW_STOCK]
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950/80 text-rose-300 border border-rose-800">
            <XCircle className="w-3 h-3 text-rose-400" />
            [DEPLETED]
          </span>
        );
    }
  };

  const handleOrder = (med: MedicineItem) => {
    if (onOrderClick) {
      onOrderClick(`${med.name} (${med.brand})`);
    } else {
      const msg = encodeURIComponent(`Hello Sonu Medical Hall, I would like to inquire/order: ${med.name} (${med.brand})`);
      window.open(`https://wa.me/919934483645?text=${msg}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-[#111216] rounded border border-[#2D2E32] p-4 sm:p-6 shadow-xl" id="medicine-stock-checker-section">
      {/* Header with High-Density Telemetry Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#2D2E32]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] text-blue-400 text-[10px] font-mono font-bold mb-1.5 uppercase">
            <Cpu className="w-3 h-3" />
            <span>SYS_INVENTORY: REALTIME_INDEX</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            Medicine Stock &amp; Price Checker
          </h3>
          <p className="text-xs text-gray-400 mt-0.5 font-sans">
            Search genuine pharmaceutical formulations, diagnostic gear, batch expiry, and live shelf status at Sonu Medical Hall.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 bg-[#16171D] border border-[#2D2E32] px-3 py-1.5 rounded self-start md:self-auto">
          <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin-slow" />
          <span>SYNC: STORE_POS_ACTIVE</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 mb-4">
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine, salt name, or manufacturer (e.g., Dolo, Augmentin, Omron)..."
            className="w-full pl-9 pr-14 py-2 rounded border border-[#2D2E32] bg-[#14151B] text-xs font-mono text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 hover:text-white"
            >
              [CLEAR]
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="md:col-span-3">
          <select
            id="category-filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by Medicine Category"
            className="w-full py-2 px-3 rounded border border-[#2D2E32] bg-[#14151B] text-xs font-mono text-gray-300 focus:border-blue-500 outline-none transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'ALL_CATEGORIES' : cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="md:col-span-3">
          <select
            id="status-filter-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            aria-label="Filter by Stock Availability Status"
            className="w-full py-2 px-3 rounded border border-[#2D2E32] bg-[#14151B] text-xs font-mono text-gray-300 focus:border-blue-500 outline-none transition"
          >
            <option value="All">ALL_STATUSES</option>
            <option value="Available">AVAILABLE_ONLY</option>
            <option value="Limited Stock">LIMITED_STOCK</option>
            <option value="Out of Stock">OUT_OF_STOCK</option>
          </select>
        </div>
      </div>

      {/* Results Count & Quick Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-[11px] font-mono text-gray-400">
        <div>
          QUERY_MATCHES: <span className="font-bold text-blue-400">[{filteredMedicines.length} ITEMS]</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="text-gray-500">POPULAR_TAGS:</span>
          {['Dolo 650', 'Augmentin', 'Omron BP', 'Pantocid', 'Becosules'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2 py-0.5 rounded bg-[#18191E] border border-[#2D2E32] hover:border-blue-500 hover:text-blue-400 text-gray-300 transition text-[10px]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Medicine Grid */}
      {filteredMedicines.length === 0 ? (
        <div className="p-10 text-center bg-[#14151B] rounded border border-dashed border-[#2D2E32] font-mono">
          <Pill className="w-8 h-8 text-gray-600 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-gray-300 uppercase">[RECORD_NOT_FOUND_IN_BUFFER]</h4>
          <p className="text-xs text-gray-500 max-w-md mx-auto mt-1 mb-4 font-sans">
            We likely have this in our physical pharmacy or can procure it within 2 hours. Submit a direct dispatch request:
          </p>
          <button
            onClick={() => {
              const msg = encodeURIComponent(`Hello Sonu Medical Hall, do you have ${searchTerm || 'this medicine'} in stock?`);
              window.open(`https://wa.me/919934483645?text=${msg}`, '_blank');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono font-bold shadow transition border border-blue-400/40"
          >
            INQUIRE_VIA_WHATSAPP
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="group p-3.5 rounded border border-[#2D2E32] bg-[#16171D] hover:bg-[#18191E] hover:border-blue-500/50 transition duration-150 flex flex-col justify-between"
              id={`medicine-card-${med.id}`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-blue-400 bg-[#111216] border border-[#2D2E32] px-1.5 py-0.5 rounded">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="font-bold text-sm font-mono text-white group-hover:text-blue-400 transition line-clamp-1">
                  {med.name}
                </h4>

                <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-mono">
                  <span className="text-gray-500">SALT:</span> {med.genericName}
                </p>

                <div className="mt-2 space-y-1 text-[11px] font-mono text-gray-300 bg-[#111216] p-2 rounded border border-[#232429]">
                  <div className="flex justify-between">
                    <span className="text-gray-500">MFG:</span>
                    <span className="font-medium text-gray-300">{med.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">FORM:</span>
                    <span className="font-medium text-gray-300">{med.dosage} ({med.form})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">EXP_DATE:</span>
                    <span className="font-medium text-gray-300">{med.expiry}</span>
                  </div>
                  {med.requiresPrescription && (
                    <div className="text-[10px] text-amber-400 font-bold pt-0.5 flex items-center gap-1">
                      <span>⚠ RX_REQUIRED</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#232429] flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-gray-500">STORE_PRICE</div>
                  <div className="flex items-baseline gap-1.5 font-mono">
                    <span className="text-base font-bold text-white">
                      ₹{med.discountedPrice || med.mrp}
                    </span>
                    {med.discountedPrice && (
                      <span className="text-[10px] text-gray-500 line-through">
                        ₹{med.mrp}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleOrder(med)}
                  disabled={med.status === 'Out of Stock'}
                  id={`order-med-btn-${med.id}`}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                    med.status === 'Out of Stock'
                      ? 'bg-[#18191E] border border-[#2D2E32] text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm border border-blue-400/40'
                  }`}
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>{med.status === 'Out of Stock' ? 'DEPLETED' : 'ORDER'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
