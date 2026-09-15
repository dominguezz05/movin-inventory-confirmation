import { useState, useEffect } from "react";
import { PropertyInventory } from "../types/inventory";
import { initialInventoryData } from "../data/initialData";

export function useInventory() {
  const [data, setData] = useState<PropertyInventory | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulación de carga inicial de red / API (craft frontend)
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(initialInventoryData);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (
    roomId: string,
    itemId: string,
    delta: number,
  ) => {
    if (!data) return;
    setData({
      ...data,
      rooms: data.rooms.map((room) => {
        if (room.roomId !== roomId) return room;
        return {
          ...room,
          items: room.items.map((item) => {
            if (item.id !== itemId) return item;
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }),
        };
      }),
    });
  };

  const handleDeleteItem = (roomId: string, itemId: string) => {
    if (!data) return;
    setData({
      ...data,
      rooms: data.rooms.map((room) => {
        if (room.roomId !== roomId) return room;
        return {
          ...room,
          items: room.items.filter((item) => item.id !== itemId),
        };
      }),
    });
  };

  const calculateTotalVolume = (): number => {
    if (!data) return 0;
    let total = 0;
    data.rooms.forEach((room) => {
      room.items.forEach((item) => {
        if (item.movable && item.volumeM3 !== null) {
          total += item.volumeM3 * item.quantity;
        }
      });
    });
    return total;
  };

  return {
    data,
    isLoading,
    handleQuantityChange,
    handleDeleteItem,
    calculateTotalVolume,
  };
}
