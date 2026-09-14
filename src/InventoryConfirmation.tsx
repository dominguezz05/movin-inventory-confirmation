import React from 'react';
import { useInventory } from './hooks/useInventory';
import { Header } from './components/Header';
import { RoomSection } from './components/RoomSection';
import { InventoryFooter } from './components/InventoryFooter';

export default function InventoryConfirmation() {
  const { data, isLoading, handleQuantityChange, handleDeleteItem, calculateTotalVolume } = useInventory();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
        <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-medium text-sm">Cargando inventario de la propiedad...</p>
      </div>
    );
  }

  const totalVolume = calculateTotalVolume();

  const handleConfirm = () => {
    console.log("Inventario confirmado por el cliente:", data);
    alert("¡Inventario confirmado correctamente! Revisa la consola para ver los datos.");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 pb-24">
      <Header propertyId={data?.propertyId} totalVolume={totalVolume} />

      <main className="max-w-md mx-auto p-4 space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
          💡 Revisa los elementos detectados. Puedes ajustar cantidades, eliminar elementos erróneos o confirmar tu mudanza.
        </div>

        {data?.rooms.map(room => (
          <RoomSection
            key={room.roomId}
            room={room}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDeleteItem}
          />
        ))}
      </main>

      <InventoryFooter totalVolume={totalVolume} onConfirm={handleConfirm} />
    </div>
  );
}