'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  ShoppingCart
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/20 via-cyan-500/15 to-purple-600/20 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 blur-[100px] -z-10 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Locação de Equipamentos & Produção de Eventos</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              A estrutura que seu evento precisa,{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                em um só lugar.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Encontre equipamentos para seu evento, monte sua seleção e estime o custo da locação de forma simples e rápida.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/equipamentos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <span>Explorar Equipamentos</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/orcamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-amber-500/40 shadow-lg shadow-black/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                <span>Montar meu Orçamento</span>
              </Link>
            </div>

            {/* Fast Features Under CTA */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Orçamento Rápido Online</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-400">Pro</div>
                <div className="text-xs text-slate-400 font-medium">Sonorização & Iluminação</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-purple-400">DJ</div>
                <div className="text-xs text-slate-400 font-medium">Atração Henkz DJ</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-950/90 p-1.5 ring-1 ring-white/10 shadow-2xl overflow-hidden group">
              
              {/* Internal Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[22px] overflow-hidden bg-slate-950">
                <Image
                  src="/logo.jpeg"
                  alt="H2H Eventos - Locação de Equipamentos"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Highlight Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-700/60 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                          Estrutura Completa
                        </h2>
                        <p className="text-[11px] text-slate-300">
                          Som • Luz • Palcos • Tendas • Vídeo
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/equipamentos"
                      className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors whitespace-nowrap"
                    >
                      Ver Itens
                    </Link>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
