"use client"
import React, { createContext, useContext, useState } from 'react';

type Pet = {
  name: string;
  breed: string;
  age: string;
  gender: string;
  photo: string | null;
  remarks: string;
}

type Order = {
  serviceType: 'feed' | 'walk';
  date: Date | undefined;
  address: string;
}

interface PrototypeContextType {
  pet: Pet;
  setPet: (pet: Pet) => void;
  order: Order;
  setOrder: (order: Order) => void;
}

const defaultPet: Pet = { name: '', breed: '', age: '', gender: '', photo: null, remarks: '' };
const defaultOrder: Order = { serviceType: 'walk', date: undefined, address: '' };

const PrototypeContext = createContext<PrototypeContextType | undefined>(undefined);

export function PrototypeProvider({ children }: { children: React.ReactNode }) {
  const [pet, setPet] = useState<Pet>(defaultPet);
  const [order, setOrder] = useState<Order>(defaultOrder);

  return (
    <PrototypeContext.Provider value={{ pet, setPet, order, setOrder }}>
      {children}
    </PrototypeContext.Provider>
  );
}

export function usePrototype() {
  const context = useContext(PrototypeContext);
  if (context === undefined) {
    throw new Error('usePrototype must be used within a PrototypeProvider');
  }
  return context;
}
