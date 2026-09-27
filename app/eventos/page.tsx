import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  Phone, 
  Sliders, 
  Music, 
  ArrowRight,
  PartyPopper,
  Briefcase
} from 'lucide-react';
import { createGeneralWhatsAppUrl, H2H_WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { HenkzDJSection } from '@/components/home/HenkzDJSection';

export const metadata: Metadata = {
  title: 'Realização de Eventos — H2H Eventos',
  description: 'Produção completa e realização técnica de eventos: casamentos, formaturas, convenções corporativas, festas e shows com infraestrutura de som, luz e palco.',
};

export default function EventosPage() {
  const eventTypes = [
    {
      icon: Briefcase,
      title: 'Eventos Corporativos & Congressos',
      desc: 'Sonorização precisa para palestras, microfones sem fio, projeção, painéis de LED e iluminação para convenções e feiras de negócios.',
    },
    {
      icon: PartyPopper,
      title: 'Casamentos & Formaturas',
      desc: 'Ambientação cênica inesquecível, iluminação decorativa, sonorização de cerimônia e recepção, som de alta potência para pista de dança e palcos.',
    },
    {
      icon: Sparkles,
      title: 'Festas de 15 Anos & Aniversários',
      desc: 'Efeitos especiais, moving heads, lasers, máquina de fumaça, estruturas Box Truss e atração Henkz DJ para animar a pista de ponta a ponta.',
    },
    {
      icon: Music,
      title: 'Shows & Festivais',
      desc: 'Dimensionamento de PA de grande porte, praticáveis modulares, iluminação robótica e suporte técnico durante as apresentações.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Briefing e Visita Técnica',
      desc: 'Entendemos o tamanho do público, tipo de local, acústica e as necessidades específicas do cronograma.',
    },
    {
      step: '02',
      title: 'Proposta Estrutural Personalizada',
      desc: 'Definição da planta de som, iluminação, palcos, painéis e coberturas mais adequadas.',
    },
    {
      step: '03',
      title: 'Montagem & Testes Prévios',
      desc: 'Chegada antecipada no local, passagem de som, alinhamento de frequências e programação das cenas de luz.',
    },
    {
      step: '04',
      title: 'Operação Durante o Evento',
      desc: 'Técnicos dedicados para monitorar áudio e efeitos em tempo real, garantindo uma execução perfeita.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-b border-slate-900">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Produção & Realização Técnica</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Seu evento, nossa{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                estrutura e experiência.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              A <strong className="text-white font-semibold">H2H Eventos</strong> oferece soluções completas de produção técnica e operacional. Realizamos eventos com excelência sonora, iluminação cênica marcante e estruturas seguras.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={createGeneralWhatsAppUrl('producao')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Solicitar Proposta de Produção</span>
              </a>

              <Link
                href="/equipamentos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold text-sm transition-colors"
              >
                <span>Ver Catálogo de Locação</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Events Grid */}
      <section className="py-20 lg:py-24 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              Segmentos Atendidos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Produção sob medida para o seu formato
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Personalizamos cada projeto técnico para atender às particularidades do seu evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {event.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">
                      Infraestrutura completa inclusa
                    </span>
                    <a
                      href={createGeneralWhatsAppUrl('producao')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Consultar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 lg:py-24 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Metodologia H2H
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Como realizamos o seu evento
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Processo estruturado para garantir tranquilidade do início ao pós-evento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-cyan-400/50 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Henkz DJ Section */}
      <HenkzDJSection />

      {/* CTA Box */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-amber-950/40 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Vamos planejar a estrutura do seu próximo evento?
            </h2>
            <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
              Fale diretamente com nossa equipe técnica pelo WhatsApp e receba um atendimento rápido e detalhado.
            </p>
            <a
              href={`https://wa.me/557182580141?text=${encodeURIComponent('Olá! Gostaria de falar sobre a produção e realização de um evento com a H2H Eventos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Chamar no WhatsApp: {H2H_WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
