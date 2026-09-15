import React from 'react';
import logo from '../assets/logo-movin.png';

interface HeaderProps {
  propertyId?: string;
  totalVolume: number;
}

export const Header: React.FC<HeaderProps> = ({ propertyId, totalVolume }) => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 sm:px-6 py-3.5 flex items-center justify-between transition-all">
    
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2.5">
     
        <img 
          src={logo}     
          alt="MOVIN Logo" 
          className="h-7 w-auto object-contain select-none"
        />
        <span className="text-slate-300 font-light hidden sm:inline">|</span>
        <span className="text-[11px] uppercase tracking-widest font-extrabold text-slate-400 hidden sm:inline">
          Confirmación
        </span>
      </div>

      <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

      <p className="text-xs font-medium text-slate-500">
        Inmueble: <span className="font-mono text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">{propertyId ?? 'Cargando...'}</span>
      </p>
    </div>


    <div className="text-right bg-emerald-50/70 border border-emerald-200/60 px-3.5 py-1.5 rounded-xl shadow-xs transition-transform hover:scale-[1.02] cursor-pointer select-none">
      <span className="block text-[10px] uppercase tracking-wider font-bold text-emerald-700">
        Volumen Total
      </span>
      <span className="text-base sm:text-lg font-black text-emerald-900 font-mono">
        {totalVolume.toFixed(2)} m³
      </span>
    </div>
  </header>
);