import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/equipment';
import { H2H_WHATSAPP_DISPLAY } from '@/lib/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      {/* Top Value Proposition Bar */}
      <div className="border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Equipamentos Profissionais</h4>
                <p className="text-xs text-slate-400">Estruturas testadas e revisadas para alta performance.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Agilidade e Pontualidade</h4>
                <p className="text-xs text-slate-400">Entrega, montagem e alinhamento dentro do cronograma.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Atendimento Direto no WhatsApp</h4>
                <p className="text-xs text-slate-400">Suporte técnico ágil para tirar dúvidas do seu evento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-amber-500/40">
                <Image
                  src="/logo.jpeg"
                  alt="H2H Eventos"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  H2H <span className="text-amber-400">EVENTOS</span>
                </span>
                <p className="text-xs text-slate-400 font-medium">Locação & Produção de Eventos</p>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400">
              Soluções completas em sonorização, iluminação cênica, palcos, estruturas e realização de eventos. Estrutura profissional de alto padrão para festas, casamentos e convenções.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/557182580141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {H2H_WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/equipamentos" className="hover:text-amber-400 transition-colors">
                  Catálogo de Equipamentos
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-amber-400 transition-colors">
                  Realização de Eventos
                </Link>
              </li>
              <li>
                <Link href="/#henkz-dj" className="hover:text-amber-400 transition-colors">
                  Henkz DJ
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="hover:text-amber-400 transition-colors">
                  Simulador de Orçamento
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-amber-400 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Categorias
            </h3>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/equipamentos?categoria=${cat.id}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlight Henkz DJ & Notice */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Atração em Destaque
            </h3>
            
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-amber-500/40">
                  <Image
                    src="/Henkz.jpg"
                    alt="Henkz DJ"
                    fill
                    sizes="48px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    Henkz DJ
                  </h4>
                  <p className="text-[11px] text-slate-400">Atração para festas e eventos</p>
                </div>
              </div>
              <Link
                href="/#henkz-dj"
                className="mt-3 block text-center text-xs font-semibold py-1.5 px-3 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
              >
                Conhecer Atração →
              </Link>
            </div>

            <p className="text-[11px] leading-tight text-slate-500">
              * Estimativas informativas. Valores finais sujeitos à conferência técnica de logística e disponibilidade.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} H2H Eventos. Todos os direitos reservados.</p>
          <p className="text-[11px]">
            Locação de Equipamentos • Realização de Eventos • Henkz DJ
          </p>
        </div>
      </div>
    </footer>
  );
}
