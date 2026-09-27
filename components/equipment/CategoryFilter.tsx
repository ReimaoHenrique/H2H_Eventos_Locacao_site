'use client';

import React from 'react';
import { 
  Volume2, 
  Sparkles, 
  Layers, 
  MonitorPlay, 
  Tent, 
  Armchair, 
  LayoutGrid 
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/equipment';
import { EquipmentCategory } from '@/lib/types';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: EquipmentCategory | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return <Volume2 className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-4 h-4" />;
      case 'Tent':
        return <Tent className="w-4 h-4" />;
      case 'Armchair':
        return <Armchair className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        <button
          type="button"
          onClick={() => onSelectCategory(null)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
            selectedCategory === null
              ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Todos os Equipamentos</span>
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
