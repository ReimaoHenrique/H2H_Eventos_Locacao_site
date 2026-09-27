'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Check, ShoppingCart, Info, ArrowUpRight } from 'lucide-react';
import { Equipment } from '@/lib/types';
import { formatCurrency, formatBillingUnit } from '@/lib/pricing';
import { useCart } from '@/context/cart-context';

interface EquipmentCardProps {
  equipment: Equipment;
  priority?: boolean;
}

export function EquipmentCard({ equipment, priority = false }: EquipmentCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, items } = useCart();

  const cartItem = items.find((i) => i.equipment.id === equipment.id);
  const currentInCart = cartItem ? cartItem.quantity : 0;

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(equipment, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden">
      {/* Top Image & Badges */}
      <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
        <Image
          src={equipment.image}
          alt={equipment.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category & Demo Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
            {equipment.categoryName}
          </span>
          {equipment.isDemo && (
            <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700/60" title="Item do catálogo base para orçamento prévio">
              Catálogo Base
            </span>
          )}
        </div>

        {/* Quantity currently in cart badge */}
        {currentInCart > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 shadow-md">
              {currentInCart} no orçamento
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <Link
          href={`/equipamentos/${equipment.slug}`}
          className="group/title flex items-start justify-between gap-2"
        >
          <h3 className="font-bold text-lg text-white group-hover/title:text-amber-400 transition-colors line-clamp-1">
            {equipment.name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/title:text-amber-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform flex-shrink-0 mt-1" />
        </Link>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
          {equipment.shortDescription}
        </p>

        {/* Specs Highlights */}
        {equipment.specs && equipment.specs.length > 0 && (
          <ul className="mt-3 space-y-1">
            {equipment.specs.slice(0, 2).map((spec, index) => (
              <li key={index} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price & Quantity & Actions at bottom */}
        <div className="mt-auto pt-4 border-t border-slate-800/80 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                Valor estimado
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-extrabold text-white">
                  {formatCurrency(equipment.priceInCents)}
                </span>
                {equipment.priceInCents !== null && (
                  <span className="text-xs text-slate-400 font-medium">
                    {formatBillingUnit(equipment.billingUnit)}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity Controller */}
            <div className="flex items-center rounded-lg bg-slate-950 border border-slate-800 p-1">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`col-span-4 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 shadow-md ${
                justAdded
                  ? 'bg-emerald-500 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/10 hover:shadow-amber-500/20'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Adicionar ao Orçamento</span>
                </>
              )}
            </button>

            <Link
              href={`/equipamentos/${equipment.slug}`}
              className="col-span-1 flex items-center justify-center rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Ver detalhes completos"
            >
              <Info className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
