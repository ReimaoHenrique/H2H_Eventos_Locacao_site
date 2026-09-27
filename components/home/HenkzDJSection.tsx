import React from 'react';
import Image from 'next/image';
import { 
  Music, 
  Sparkles, 
  Phone, 
  Disc, 
  Flame
} from 'lucide-react';
import { createGeneralWhatsAppUrl } from '@/lib/whatsapp';

export function HenkzDJSection() {
  const djFeatures = [
    {
      title: 'Repertório Dinâmico & Pista Vibrante',
      desc: 'Setlists adaptados para o estilo dos convidados e o momento da celebração.',
    },
    {
      title: 'Sinergia Total com Som & Luz H2H',
      desc: 'Performance integrada à iluminação inteligente, moving heads e efeitos cênicos.',
    },
    {
      title: 'Ideal para Diversos Tipos de Eventos',
      desc: 'Festas de 15 anos, casamentos, formaturas, eventos corporativos e baladas.',
    },
  ];

  return (
    <section id="henkz-dj" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900 scroll-mt-20">
      {/* Background Lighting Aura */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 border border-purple-500/20 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Subtle Accent Glow Inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase of Henkz DJ */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden ring-2 ring-purple-500/40 shadow-2xl shadow-purple-950/60 group">
                <Image
                  src="/Henkz.jpg"
                  alt="Henkz DJ - H2H Eventos"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating DJ Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        <Flame className="w-4 h-4 fill-amber-400" />
                        <span>Atração Oficial</span>
                      </div>
                      <h3 className="text-xl font-black text-white">Henkz DJ</h3>
                    </div>
                    <span className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
                      <Disc className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Text & Commercial Information */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <Music className="w-3.5 h-3.5 text-purple-400" />
                <span>Atração & Performance Musical</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Henkz DJ —{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  A energia que transforma o evento.
                </span>
              </h2>

              {/* Commercial Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Leve para o seu evento uma atração de destaque, com sonoridade envolvente, presença de palco marcante e repertório afinado com o público da sua celebração.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
                {djFeatures.map((feat, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-purple-500/40 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{feat.title}</span>
                    </h4>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={createGeneralWhatsAppUrl('dj')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-sm shadow-xl shadow-purple-900/40 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Solicitar Orçamento de Apresentação</span>
                </a>

                <a
                  href={`https://wa.me/557182580141?text=${encodeURIComponent('Olá! Gostaria de consultar a disponibilidade do Henkz DJ para o meu evento.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-950/90 border border-slate-700 hover:border-purple-500/50 text-slate-200 hover:text-white font-bold text-sm transition-colors"
                >
                  <span>Contato via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
