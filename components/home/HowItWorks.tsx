import React from 'react';
import Link from 'next/link';
import { Search, PlusCircle, Calculator, MessageSquare, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Navegue no Catálogo',
      description: 'Explore caixas de som, iluminação, moving heads, palcos, estruturas e tendas.',
    },
    {
      step: '02',
      icon: PlusCircle,
      title: 'Adicione ao Orçamento',
      description: 'Escolha a quantidade desejada de cada equipamento e adicione à sua seleção.',
    },
    {
      step: '03',
      icon: Calculator,
      title: 'Simule o Custo Total',
      description: 'Informe a data e os dias de locação para visualizar a estimativa financeira em tempo real.',
    },
    {
      step: '04',
      icon: MessageSquare,
      title: 'Envie pelo WhatsApp',
      description: 'Finalize com 1 clique. Nossa equipe recebe a lista detalhada e confirma a reserva.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            Simples & Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Como funciona a locação na H2H
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Sem burocracia ou cadastros demorados: selecione, estime e fale direto com nossos especialistas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between group hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-700/60 group-hover:text-amber-500/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/equipamentos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95"
          >
            <span>Iniciar Seleção de Equipamentos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
