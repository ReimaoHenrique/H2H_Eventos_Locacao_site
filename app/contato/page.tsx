import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Sliders, 
  Music, 
  ArrowRight
} from 'lucide-react';
import { H2H_WHATSAPP_DISPLAY, createGeneralWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contato & Orçamentos — H2H Eventos',
  description: 'Entre em contato com a H2H Eventos via WhatsApp +55 (71) 8258-0141 para locação de equipamentos, realização de eventos e contratação do Henkz DJ.',
};

export default function ContatoPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Canais de Atendimento</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Fale com a H2H Eventos
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Estamos à disposição para atender seu pedido de locação, planejar a estrutura técnica do seu evento ou agendar a apresentação do Henkz DJ.
          </p>
        </div>

        {/* Main WhatsApp Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 border border-emerald-500/30 shadow-2xl mb-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Atendimento Rápido via WhatsApp
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {H2H_WHATSAPP_DISPLAY}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Clique no botão abaixo para iniciar uma conversa direta com nossa equipe. Respondemos com agilidade para verificar datas, disponibilidade de equipamentos e tirar todas as suas dúvidas.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/557182580141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-36 h-36 rounded-3xl overflow-hidden ring-4 ring-emerald-500/30 shadow-xl bg-slate-950">
                <Image
                  src="/logo.jpeg"
                  alt="H2H Eventos"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Quick Topics Direction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Locação de Equipamentos */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Locação de Equipamentos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Monte sua seleção no catálogo online e obtenha a estimativa instantânea.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                href="/orcamento"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>Montar Orçamento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Realização de Eventos */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Produção de Eventos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Infraestrutura completa de som, iluminação cênica, palcos e equipe técnica.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                href="/eventos"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Ver Produção</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Henkz DJ */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Henkz DJ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Apresentação e performance musical com energia para animar sua festa.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={createGeneralWhatsAppUrl('dj')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                <span>Solicitar Apresentação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Summary */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs leading-relaxed space-y-2">
          <h4 className="text-white font-bold text-sm">H2H Eventos — Compromisso e Qualidade</h4>
          <p>
            Nossa missão é fornecer estrutura técnica de excelência para eventos de pequeno a grande porte. Todos os orçamentos são confirmados mediante alinhamento de cronograma, logística de entrega e especificações do local.
          </p>
        </div>

      </div>
    </div>
  );
}
