'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  ShoppingCart, 
  Check, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Layers, 
  Phone, 
  Clock, 
  Tag, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { Equipment } from '@/lib/types';
import { formatCurrency, formatBillingUnit } from '@/lib/pricing';
import { useCart } from '@/context/cart-context';
import { EquipmentCard } from './EquipmentCard';

interface Props {
  equipment: Equipment;
  relatedEquipments: Equipment[];
}

export function EquipmentDetailClient({ equipment, relatedEquipments }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, items } = useCart();

  const cartItem = items.find((i) => i.equipment.id === equipment.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addItem(equipment, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const calculatedTotal = equipment.priceInCents !== null 
    ? equipment.priceInCents * quantity 
    : null;

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 mb-8 text-xs text-slate-400">
          <nav className="flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/equipamentos" className="hover:text-amber-400 transition-colors">
              Equipamentos
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link
              href={`/equipamentos?categoria=${equipment.categoryId}`}
              className="hover:text-amber-400 transition-colors"
            >
              {equipment.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium truncate max-w-[200px]">
              {equipment.name}
            </span>
          </nav>

          <Link
            href="/equipamentos"
            className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao catálogo</span>
          </Link>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Box */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Category & Demo Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                    {equipment.categoryName}
                  </span>
                  {equipment.isDemo && (
                    <span className="px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700">
                      Catálogo Base
                    </span>
                  )}
                </div>

                {inCartQty > 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-lg">
                      {inCartQty} un. no orçamento
                    </span>
                  </div>
                )}
              </div>

              {/* Assurances Under Image */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                  <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 block font-semibold">Testado</span>
                  <span className="text-[10px] text-slate-500">Revisão técnica</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                  <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 block font-semibold">Pontualidade</span>
                  <span className="text-[10px] text-slate-500">Montagem ágil</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                  <Phone className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 block font-semibold">Suporte</span>
                  <span className="text-[10px] text-slate-500">Via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Title & Short Desc */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {equipment.name}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {equipment.fullDescription}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
              
              {/* Unit Price */}
              <div className="flex items-baseline justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">
                    Preço de locação unitária
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-amber-400">
                      {formatCurrency(equipment.priceInCents)}
                    </span>
                    {equipment.priceInCents !== null && (
                      <span className="text-sm font-medium text-slate-400">
                        {formatBillingUnit(equipment.billingUnit)}
                      </span>
                    )}
                  </div>
                </div>

                {equipment.priceInCents === null && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Sob Consulta
                  </span>
                )}
              </div>

              {/* Quantity Selector & Live Subtotal */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Quantidade desejada:
                  </span>
                  <div className="inline-flex items-center rounded-xl bg-slate-950 border border-slate-800 p-1.5">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Diminuir"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-black text-white">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Aumentar"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {calculatedTotal !== null && (
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400 block">Subtotal estimado:</span>
                    <span className="text-xl font-black text-white">
                      {formatCurrency(calculatedTotal)}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      ({quantity} {quantity === 1 ? 'unidade' : 'unidades'})
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl ${
                    justAdded
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 active:scale-98'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{quantity} {quantity === 1 ? 'item adicionado' : 'itens adicionados'} ao Orçamento!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Adicionar {quantity} un. ao Orçamento</span>
                    </>
                  )}
                </button>

                <Link
                  href="/orcamento"
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold text-center border border-slate-800 transition-colors"
                >
                  Ir para o Orçamento Final →
                </Link>
              </div>

              {/* Note */}
              <p className="text-[11px] text-slate-500 text-center leading-tight">
                * Estimativa base sem compromisso. Disponibilidade confirmada via WhatsApp.
              </p>

            </div>

            {/* Specifications */}
            {equipment.specs && equipment.specs.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Especificações Técnicas</span>
                </h3>
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
                  {equipment.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended For */}
            {equipment.recommendedFor && equipment.recommendedFor.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span>Recomendado Para</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {equipment.recommendedFor.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Note */}
            {equipment.stockNote && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400">
                <strong className="text-slate-300 block mb-0.5">Nota de Catálogo:</strong>
                {equipment.stockNote}
              </div>
            )}

          </div>

        </div>

        {/* Related Equipments */}
        {relatedEquipments.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-900">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white">
                Mais itens em {equipment.categoryName}
              </h2>
              <Link
                href={`/equipamentos?categoria=${equipment.categoryId}`}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Ver todos da categoria →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEquipments.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
