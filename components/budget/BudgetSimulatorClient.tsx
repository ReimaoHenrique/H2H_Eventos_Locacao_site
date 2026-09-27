'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Calendar, 
  MapPin, 
  User, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Info,
  Copy,
  Check
} from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { 
  formatCurrency, 
  formatBillingUnit, 
  calculateItemSubtotalInCents 
} from '@/lib/pricing';
import { 
  createWhatsAppBudgetUrl, 
  generateBudgetMessage, 
  H2H_WHATSAPP_DISPLAY 
} from '@/lib/whatsapp';

export function BudgetSimulatorClient() {
  const { 
    items, 
    customerInfo, 
    isLoaded, 
    totalItemsCount, 
    summary, 
    updateQuantity, 
    removeItem, 
    setDurationDays, 
    updateCustomerInfo, 
    clearCart 
  } = useCart();

  const [copiedMessage, setCopiedMessage] = useState(false);

  const durationDays = customerInfo.eventDurationDays || 1;

  const handleCopyMessage = () => {
    const text = generateBudgetMessage(items, customerInfo);
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const whatsappUrl = createWhatsAppBudgetUrl(items, customerInfo);

  if (!isLoaded) {
    return (
      <div className="py-24 text-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs text-slate-400">Carregando seu orçamento...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl">
            <div className="w-20 h-20 rounded-3xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 mx-auto mb-6">
              <ShoppingCart className="w-10 h-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Seu orçamento está vazio
            </h1>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Explore nosso catálogo de equipamentos de som, iluminação, palcos, tendas e mobiliário para adicionar itens e simular o custo da locação.
            </p>

            <Link
              href="/equipamentos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>Explorar Catálogo de Equipamentos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estimativa de Custo em Tempo Real</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Meu Orçamento de Locação
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Revise os itens selecionados, ajuste as quantidades e a duração da locação antes de encaminhar.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar Orçamento</span>
            </button>

            <Link
              href="/equipamentos"
              className="text-xs text-slate-300 hover:text-white font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              + Adicionar mais itens
            </Link>
          </div>
        </div>

        {/* Main Grid: Left Items List, Right Summary & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Equipment Items in Cart */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Equipamentos ({items.length} {items.length === 1 ? 'tipo' : 'tipos'}, {totalItemsCount} {totalItemsCount === 1 ? 'unidade' : 'unidades'})</span>
              <span>Subtotal estimado</span>
            </div>

            {items.map((item) => {
              const subtotal = calculateItemSubtotalInCents(item, durationDays);

              return (
                <div
                  key={item.equipment.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg"
                >
                  {/* Left info & image */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-800">
                      <Image
                        src={item.equipment.image}
                        alt={item.equipment.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        {item.equipment.categoryName}
                      </span>
                      <Link
                        href={`/equipamentos/${item.equipment.slug}`}
                        className="text-sm font-bold text-white hover:text-amber-400 transition-colors line-clamp-1"
                      >
                        {item.equipment.name}
                      </Link>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>
                          Unitário: <strong className="text-slate-200">{formatCurrency(item.equipment.priceInCents)}</strong> {formatBillingUnit(item.equipment.billingUnit)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle & Right: Quantity & Subtotal */}
                  <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    
                    {/* Quantity Controller */}
                    <div className="flex items-center rounded-xl bg-slate-950 border border-slate-800 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.equipment.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label="Diminuir"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-9 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.equipment.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal Display */}
                    <div className="text-right min-w-[100px]">
                      <span className="text-sm font-black text-white block">
                        {subtotal !== null ? formatCurrency(subtotal) : 'Sob Consulta'}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {item.equipment.billingUnit === 'diaria' && durationDays > 1
                          ? `${item.quantity} un. x ${durationDays} diárias`
                          : `${item.quantity} un.`}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.equipment.id)}
                      className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Remover item"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>
                </div>
              );
            })}

            {/* General Advice Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-200/90 text-xs">
              <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Aviso importante:</strong> Os valores apresentados são estimativas. O orçamento final depende da disponibilidade dos equipamentos, do local, da data e das condições de contratação.
              </p>
            </div>

          </div>

          {/* Right Column: Parameters, Calculations & WhatsApp Action */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Event Details Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Dados do Evento & Locação</span>
              </h2>

              {/* Duration in Days */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center justify-between">
                  <span>Duração da Locação:</span>
                  <span className="text-amber-400 font-bold">
                    {durationDays} {durationDays > 1 ? 'diárias' : 'diária'}
                  </span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 5].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDurationDays(d)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        durationDays === d
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {d} {d === 1 ? 'dia' : 'dias'}
                    </button>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">Outro número de dias:</span>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={durationDays}
                    onChange={(e) => setDurationDays(parseInt(e.target.value) || 1)}
                    className="w-20 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Data do Evento (Opcional):
                </label>
                <input
                  type="date"
                  value={customerInfo.eventDate}
                  onChange={(e) => updateCustomerInfo({ eventDate: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-white outline-none"
                />
              </div>

              {/* Event Location */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Local / Bairro do Evento (Opcional):
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={customerInfo.eventLocation}
                    onChange={(e) => updateCustomerInfo({ eventLocation: e.target.value })}
                    placeholder="Ex: Salvador, Lauro de Freitas, Camaçari..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none"
                  />
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Seu Nome ou Empresa (Opcional):
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => updateCustomerInfo({ name: e.target.value })}
                    placeholder="Como prefere ser chamado?"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none"
                  />
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Observações ou Dúvidas Técnicas:
                </label>
                <textarea
                  rows={2}
                  value={customerInfo.notes || ''}
                  onChange={(e) => updateCustomerInfo({ notes: e.target.value })}
                  placeholder="Horário de início, tipo de piso, necessidade de operador..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none resize-none"
                />
              </div>

            </div>

            {/* Final Calculation Summary Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-2xl space-y-4">
              
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Resumo da Estimativa
              </h2>

              <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-800 pb-4">
                <div className="flex justify-between">
                  <span>Itens no orçamento:</span>
                  <span className="font-bold text-white">{totalItemsCount} un.</span>
                </div>
                <div className="flex justify-between">
                  <span>Período considerado:</span>
                  <span className="font-bold text-white">{durationDays} {durationDays > 1 ? 'diárias' : 'diária'}</span>
                </div>
                {summary.itemsUnderConsultationCount > 0 && (
                  <div className="flex justify-between text-cyan-400">
                    <span>Itens sob consulta:</span>
                    <span className="font-bold">{summary.itemsUnderConsultationCount} item(s)</span>
                  </div>
                )}
              </div>

              {/* Total Estimated */}
              <div className="pt-1 flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block">
                    Total Estimado
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    {formatCurrency(summary.totalEstimatedInCents)}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium text-right max-w-[140px]">
                  Estimativa prévia sem taxas extras inclusas
                </span>
              </div>

              {/* WhatsApp Action Button */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 transition-all duration-300 active:scale-98 text-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>Solicitar Orçamento pelo WhatsApp</span>
                </a>

                {/* Secondary Action: Copy message text */}
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800 transition-colors"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Mensagem copiada para a área de transferência!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar texto formatado do orçamento</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 space-y-1 text-center pt-2">
                <p>
                  O botão abrirá a conversa com o WhatsApp oficial <strong>{H2H_WHATSAPP_DISPLAY}</strong> com todos os itens já preenchidos.
                </p>
                <p className="text-[10px] text-slate-600">
                  Nenhum pagamento online é realizado neste site.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
