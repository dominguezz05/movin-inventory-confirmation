import React from 'react';

interface HeaderProps {
  propertyId?: string;
  totalVolume: number;
}

export const Header: React.FC<HeaderProps> = ({ propertyId, totalVolume }) => (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-4 py-3 flex items-center justify-between">
    <div>
      <h1 className="text-base font-bold text-slate-900">MOVIN — Confirmación</h1>
      <p className="text-xs text-slate-500">Inmueble: {propertyId ?? 'Cargando...'}</p>
    </div>
    <div className="text-right bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg">
      <span className="block text-[10px] uppercase font-semibold text-sky-600">Volumen Total</span>
      <span className="text-lg font-extrabold text-sky-700">{totalVolume.toFixed(2)} m³</span>
    </div>
  </header>
);  