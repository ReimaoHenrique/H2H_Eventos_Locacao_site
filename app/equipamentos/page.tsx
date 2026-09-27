import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CatalogContent } from '@/components/equipment/CatalogContent';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catálogo de Equipamentos — H2H Eventos',
  description: 'Confira nosso catálogo de equipamentos para locação: som, iluminação, moving heads, palcos, Box Truss, painéis de LED e tendas para eventos.',
};

export default function EquipamentosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
          <p className="text-sm font-medium">Carregando catálogo de equipamentos...</p>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
