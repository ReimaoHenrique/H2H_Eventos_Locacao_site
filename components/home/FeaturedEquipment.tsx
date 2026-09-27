'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedEquipments } from '@/lib/data/equipment';
import { EquipmentCard } from '@/components/equipment/EquipmentCard';

export function FeaturedEquipment() {
  const featured = getFeaturedEquipments();

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Destaques da Locação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Equipamentos Mais Solicitados
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Monte seu pacote adicionando os itens desejados ao carrinho para obter uma estimativa imediata.
            </p>
          </div>

          <Link
            href="/equipamentos"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-amber-400 font-bold text-sm transition-colors group"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid of Equipment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((equipment, index) => (
            <EquipmentCard
              key={equipment.id}
              equipment={equipment}
              priority={index < 3}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
