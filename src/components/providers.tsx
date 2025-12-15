"use client"

import { PrototypeProvider } from "@/lib/prototype-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrototypeProvider>
      {children}
    </PrototypeProvider>
  );
}
