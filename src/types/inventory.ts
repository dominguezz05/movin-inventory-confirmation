export interface Item {
  id: string;
  label: string;
  quantity: number;
  volumeM3: number | null;
  confidence: number;
  movable: boolean;
}

export interface Room {
  roomId: string;
  name: string;
  photoCount: number;
  items: Item[];
}

export interface PropertyInventory {
  propertyId: string;
  generatedAt: string;
  rooms: Room[];
}