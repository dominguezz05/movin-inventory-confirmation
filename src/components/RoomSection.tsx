import React from 'react';
import { Room } from '../types/inventory';
import { ItemRow } from './ItemRow';

interface RoomSectionProps {
  room: Room;
  onQuantityChange: (roomId: string, itemId: string, delta: number) => void;
  onDelete: (roomId: string, itemId: string) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ room, onQuantityChange, onDelete }) => (
  <section className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden transition-all duration-200 hover:shadow-md">
    {/* Cabecera de la Estancia */}
    <div className="bg-slate-50/80 px-4 sm:px-5 py-3.5 border-b border-slate-100 flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <h2 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight font-sans">
          {room.name}
        </h2>
      </div>
      
      {/* Contador de ítems con diseño corporativo */}
      <span className="text-xs font-mono font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
        {room.items.length} {room.items.length === 1 ? 'ítem' : 'ítems'}
      </span>
    </div>

    {/* Listado de ítems de la estancia */}
    <div className="divide-y divide-slate-100">
      {room.items.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-xs text-slate-400 italic font-medium">
            No se han detectado objetos en esta estancia.
          </p>
        </div>
      ) : (
        room.items.map(item => (
          <ItemRow 
            key={item.id} 
            item={item} 
            roomId={room.roomId} 
            onQuantityChange={onQuantityChange} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  </section>
);