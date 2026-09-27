import React from 'react';
import Link from 'next/link';
import { 
  Volume2, 
  Sparkles, 
  Layers, 
  MonitorPlay, 
  Tent, 
  Armchair, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES, EQUIPMENTS } from '@/lib/data/equipment';

export function CategoryShowcase() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return <Volume2 className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6" />;
      case 'Tent':
        return <Tent className="w-6 h-6" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-3">
              <span>Catálogo Completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Categorias de Equipamentos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Equipamentos de alta tecnologia e estruturas certificadas para elevar o nível da sua produção.
            </p>
          </div>

          <Link
            href="/equipamentos"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>Ver todos os itens</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const count = EQUIPMENTS.filter((e) => e.categoryId === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/equipamentos?categoria=${cat.id}`}
                className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800">
                      {count} {count === 1 ? 'equipamento' : 'equipamentos'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-amber-400">
                  <span>Explorar categoria</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
