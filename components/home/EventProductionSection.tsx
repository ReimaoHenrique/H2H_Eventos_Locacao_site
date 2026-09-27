import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { createGeneralWhatsAppUrl } from '@/lib/whatsapp';

export function EventProductionSection() {
  const productionHighlights = [
    {
      title: 'Planejamento e Alinhamento Técnico',
      desc: 'Dimensionamento exato de potência sonora, mapa de luz cênica e layout de palco para o local do evento.',
    },
    {
      title: 'Montagem e Operação Especializada',
      desc: 'Equipe técnica para montagem pontual, testes acústicos e operação durante todo o evento.',
    },
    {
      title: 'Produção Completa de Pista e Palco',
      desc: 'Integração de sonorização, iluminação inteligente, efeitos especiais e DJ com sinergia impecável.',
    },
    {
      title: 'Segurança Estrutural Certificada',
      desc: 'Estruturas Box Truss, coberturas e palcos com estabilidade e fixação apropriadas.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-t border-slate-850">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Realização e Produção de Eventos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Seu evento, nossa estrutura e experiência.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Além da locação individual de equipamentos, a <strong className="text-white font-semibold">H2H Eventos</strong> atua na organização técnica e realização completa de eventos corporativos, casamentos, formaturas, festas sociais e apresentações.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              <Image
                src="/logo.jpeg"
                alt="Produção de Eventos H2H"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Produção Técnica Integrada
                </span>
                <p className="text-sm font-semibold text-white">
                  Cuidamos da infraestrutura para que você aproveite cada minuto do seu evento com total tranquilidade.
                </p>
              </div>
            </div>

            {/* Sub-cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center sm:text-left">
                <span className="text-2xl font-black text-amber-400 block">Locação</span>
                <span className="text-xs text-slate-400 font-medium">Equipamentos pontuais para retirar ou montar</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center sm:text-left">
                <span className="text-2xl font-black text-cyan-400 block">Produção</span>
                <span className="text-xs text-slate-400 font-medium">Realização técnica completa do início ao fim</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Como apoiamos o seu evento:
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Conte com nossa equipe para alinhar a estrutura técnica correta para o perfil do seu público, tipo de local e cronograma.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productionHighlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={createGeneralWhatsAppUrl('producao')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Solicitar Orçamento de Produção</span>
              </a>

              <Link
                href="/eventos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-colors"
              >
                <span>Saber mais sobre eventos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
