import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { BudgetSimulatorClient } from '@/components/budget/BudgetSimulatorClient';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simulador de Orçamento de Locação — H2H Eventos',
  description: 'Simule o custo total de locação de som, iluminação, palcos, Box Truss, tendas e mobiliário para seu evento e envie sua solicitação direta para o WhatsApp.',
};

export default function OrcamentoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
          <p className="text-sm font-medium">Carregando simulador de orçamento...</p>
        </div>
      }
    >
      <BudgetSimulatorClient />
    </Suspense>
  );
}
