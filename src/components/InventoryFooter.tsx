import React from 'react';

interface InventoryFooterProps {
  totalVolume: number;
  onConfirm: () => void;
}

export const InventoryFooter: React.FC<InventoryFooterProps> = ({ totalVolume, onConfirm }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3.5 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Resumen flotante opcional para móvil */}
        <div className="flex flex-col sm:hidden">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Total</span>
          <span className="text-sm font-mono font-extrabold text-slate-900">{totalVolume.toFixed(2)} m³</span>
        </div>

        {/* Botón de Confirmación Principal (Estilo MOVIN Pro) */}
        <button
          onClick={onConfirm}
          className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer select-none group"
        >
          <span>Confirmar Inventario</span>
          <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2 py-0.5 rounded-md border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
            {totalVolume.toFixed(2)} m³
          </span>
        </button>
      </div>
    </footer>
  );
};