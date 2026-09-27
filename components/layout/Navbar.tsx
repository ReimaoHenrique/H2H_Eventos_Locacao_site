'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Phone, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatCurrency } from '@/lib/pricing';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItemsCount, summary, isLoaded } = useCart();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Equipamentos', href: '/equipamentos' },
    { name: 'Realização de Eventos', href: '/eventos' },
    { name: 'Henkz DJ', href: '/#henkz-dj' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-amber-500/30 group-hover:ring-amber-500/80 transition-all duration-300 shadow-lg shadow-amber-500/10">
              <Image
                src="/logo.jpeg"
                alt="H2H Eventos Logo"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                H2H <span className="text-amber-400">EVENTOS</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                Locação & Produção
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-amber-500/15 text-amber-400 shadow-sm border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA / Cart */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Quick Button */}
            <Link
              href="/orcamento"
              className="relative flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white transition-all duration-200 group"
              title="Ver seleção de equipamentos"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                {isLoaded && totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                  Meu Orçamento
                </div>
                <div className="text-xs font-bold text-amber-400">
                  {isLoaded && summary.totalEstimatedInCents > 0
                    ? formatCurrency(summary.totalEstimatedInCents)
                    : isLoaded && totalItemsCount > 0
                    ? `${totalItemsCount} item(s)`
                    : 'R$ 0,00'}
                </div>
              </div>
            </Link>

            {/* Main CTA */}
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 active:scale-95"
            >
              <span>Estimar Custo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu and cart trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/orcamento"
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400"
              aria-label="Ver Carrinho"
            >
              <ShoppingCart className="w-5 h-5" />
              {isLoaded && totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 mb-5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                    active
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <Link
              href="/orcamento"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-center shadow-lg shadow-amber-500/20"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Ver Orçamento ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'})</span>
            </Link>

            <a
              href="https://wa.me/557182580141"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-semibold text-center text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: +55 (71) 8258-0141</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
