'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Search, 
  X, 
  ShoppingCart, 
  Sparkles, 
  ArrowUpDown
} from 'lucide-react';
import { EQUIPMENTS, CATEGORIES } from '@/lib/data/equipment';
import { EquipmentCategory } from '@/lib/types';
import { EquipmentCard } from '@/components/equipment/EquipmentCard';
import { CategoryFilter } from '@/components/equipment/CategoryFilter';
import { useCart } from '@/context/cart-context';
import { formatCurrency } from '@/lib/pricing';
import Link from 'next/link';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name';

export function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = (searchParams.get('categoria') as EquipmentCategory | null) || null;
  const initialSearch = searchParams.get('busca') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const { totalItemsCount, summary, isLoaded } = useCart();

  const handleCategorySelect = (categoryId: EquipmentCategory | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set('categoria', categoryId);
    } else {
      params.delete('categoria');
    }
    router.push(`/equipamentos?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortBy('featured');
    router.push('/equipamentos', { scroll: false });
  };

  const filteredEquipments = useMemo(() => {
    let list = [...EQUIPMENTS];

    // Filter category
    if (selectedCategory) {
      list = list.filter((item) => item.categoryId === selectedCategory);
    }

    // Filter search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.shortDescription.toLowerCase().includes(term) ||
          item.categoryName.toLowerCase().includes(term) ||
          item.specs.some((spec) => spec.toLowerCase().includes(term))
      );
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      }
      if (sortBy === 'price-asc') {
        const priceA = a.priceInCents ?? 99999999;
        const priceB = b.priceInCents ?? 99999999;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.priceInCents ?? -1;
        const priceB = b.priceInCents ?? -1;
        return priceB - priceA;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return list;
  }, [selectedCategory, searchTerm, sortBy]);

  const activeCategoryInfo = useMemo(() => {
    if (!selectedCategory) return null;
    return CATEGORIES.find((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Locação Direta</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Catálogo de Equipamentos
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Selecione os equipamentos necessários para seu evento, defina as quantidades e receba um orçamento detalhado.
          </p>
        </div>

        {/* Floating Quick Bar for Cart if items present */}
        {isLoaded && totalItemsCount > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/10 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Você tem {totalItemsCount} {totalItemsCount === 1 ? 'item selecionado' : 'itens selecionados'}
                </h4>
                <p className="text-xs text-slate-300">
                  Total estimado: <strong className="text-amber-400 font-extrabold">{formatCurrency(summary.totalEstimatedInCents)}</strong> (para 1 diária)
                </p>
              </div>
            </div>

            <Link
              href="/orcamento"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 text-center transition-all whitespace-nowrap"
            >
              Conferir Orçamento Completo →
            </Link>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-5 mb-8">
          
          {/* Category Tabs */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          {/* Search and Sort Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por caixa de som, moving head, tenda, palco..."
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-xs text-slate-400 whitespace-nowrap flex items-center gap-1.5 font-medium">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ordenar:</span>
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-white outline-none cursor-pointer"
              >
                <option value="featured">Destaques Primeiro</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Active Category Description Banner if filtered */}
          {activeCategoryInfo && (
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Filtrando por {activeCategoryInfo.name}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeCategoryInfo.description}
                </p>
              </div>
              <button
                onClick={() => handleCategorySelect(null)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                <X className="w-3.5 h-3.5" />
                <span>Remover filtro</span>
              </button>
            </div>
          )}

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>
            Exibindo <strong className="text-white">{filteredEquipments.length}</strong> {filteredEquipments.length === 1 ? 'equipamento' : 'equipamentos'}
          </span>
          {(selectedCategory || searchTerm) && (
            <button
              onClick={clearFilters}
              className="text-amber-400 hover:underline font-semibold"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>

        {/* Equipment Grid */}
        {filteredEquipments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredEquipments.map((equipment, index) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800/80 my-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Nenhum equipamento encontrado
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Não encontramos nenhum equipamento correspondente aos filtros selecionados.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              Ver todos os equipamentos
            </button>
          </div>
        )}

        {/* Stock and Price Transparency Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs leading-relaxed">
          <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Informações sobre Valores e Disponibilidade
          </h4>
          <p>
            Os valores informados no catálogo são estimativas base para locação unitária. O orçamento final é consolidado levando em consideração a data e horário do evento, endereço de montagem, logística e necessidades técnicas específicas. Itens marcados como &quot;Consulte o valor&quot; requerem dimensionamento estrutural sob medida.
          </p>
        </div>

      </div>
    </div>
  );
}
