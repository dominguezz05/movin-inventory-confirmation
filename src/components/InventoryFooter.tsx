import React, { useState } from 'react';

interface InventoryFooterProps {
  totalVolume: number;
  onConfirm: () => void;
}

export const InventoryFooter: React.FC<InventoryFooterProps> = ({ totalVolume, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfClick = () => {
    setIsConfirmed(true);
    onConfirm();

    setTimeout(() => setIsConfirmed(false), 3000);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-4 shadow-xl">
      <div className="max-w-md mx-auto w-full">
        <button
          onClick={handleConfClick}
          disabled={isConfirmed}
          className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer select-none shadow-lg ${
            isConfirmed
              ? 'bg-emerald-600 text-white scale-[0.99] shadow-emerald-200'
              : 'bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white shadow-slate-900/10'
          }`}
        >
          {isConfirmed ? (
            <>
              <span className="animate-bounce">🎉</span>
              <span>¡Inventario Confirmado con Éxito!</span>
            </>
          ) : (
            <>
              <span>Confirmar Inventario</span>
              <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2.5 py-1 rounded-lg border border-emerald-500/30">
                {totalVolume.toFixed(2)} m³
              </span>
            </>
          )}
        </button>
      </div>
    </footer>
  );
};