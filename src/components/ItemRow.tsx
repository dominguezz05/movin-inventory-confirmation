import React from 'react';
import { Item } from '../types/inventory';

interface ItemRowProps {
  item: Item;
  roomId: string;
  onQuantityChange: (roomId: string, itemId: string, delta: number) => void;
  onDelete: (roomId: string, itemId: string) => void;
}

export const ItemRow: React.FC<ItemRowProps> = ({ item, roomId, onQuantityChange, onDelete }) => {
  const isUncertain = item.confidence < 0.5;

  return (
    <div className="p-4 sm:p-4.5 bg-white hover:bg-slate-50/80 border-b border-slate-100 last:border-none transition-colors flex flex-col gap-3 group">
   
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 flex-1">
          <span className={`text-sm sm:text-base font-semibold tracking-tight block ${!item.movable ? 'line-through text-slate-400' : 'text-slate-900'}`}>
            {item.label}
          </span>
          
          {/* Badges de estado corporativos */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {!item.movable && (
              <span className="text-[10px] uppercase font-bold tracking-wider bg-rose-50 text-rose-700 border border-rose-200/60 px-2 py-0.5 rounded-md">
                Se queda en casa
              </span>
            )}
            {isUncertain && (
              <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                <span>⚠️</span> A revisar (Baja certeza)
              </span>
            )}
            {item.volumeM3 === null && (
              <span className="text-[10px] uppercase font-bold tracking-wider bg-purple-50 text-purple-700 border border-purple-200/60 px-2 py-0.5 rounded-md">
                Volumen pendiente
              </span>
            )}
          </div>
        </div>

     
        <div className="text-right">
          <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/50 inline-block">
            {item.volumeM3 !== null ? `${(item.volumeM3 * item.quantity).toFixed(2)} m³` : 'N/D'}
          </span>
        </div>
      </div>

        
      {item.movable && (
        <div className="flex items-center justify-between pt-2.5 mt-0.5 border-t border-slate-100/80">
          {/* Grupo de incremento / decremento */}
          <div className="flex items-center bg-slate-100/70 border border-slate-200/60 rounded-xl p-0.5 shadow-2xs">
            <button
              onClick={() => onQuantityChange(roomId, item.id, -1)}
              aria-label={`Disminuir cantidad de ${item.label}`}
              className="w-7 h-7 flex items-center justify-center bg-white hover:bg-slate-50 active:scale-90 text-slate-700 font-bold rounded-lg shadow-2xs transition-all duration-150 cursor-pointer select-none"
            >
              −
            </button>
            <span className="w-9 text-center text-xs font-mono font-extrabold text-slate-900">
              {item.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(roomId, item.id, 1)}
              aria-label={`Aumentar cantidad de ${item.label}`}
              className="w-7 h-7 flex items-center justify-center bg-white hover:bg-slate-50 active:scale-90 text-slate-700 font-bold rounded-lg shadow-2xs transition-all duration-150 cursor-pointer select-none"
            >
              +
            </button>
          </div>

          <button
            onClick={() => onDelete(roomId, item.id)}
            className="text-xs font-medium text-rose-500 hover:text-rose-700 hover:bg-rose-50/50 px-2.5 py-1 rounded-lg transition-all duration-150 cursor-pointer select-none flex items-center gap-1"
          >
            <span>Eliminar</span>
          </button>
        </div>
      )}
    </div>
  );
};