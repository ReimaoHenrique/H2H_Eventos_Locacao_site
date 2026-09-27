import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/cart-context';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://h2h-eventos.vercel.app'),
  title: 'H2H Eventos — Locação de Equipamentos e Produção de Eventos',
  description: 'Locação de sonorização, iluminação cênica, palcos, Box Truss, painel de LED, tendas e realização de eventos. Henkz DJ para festas e celebrações.',
  keywords: [
    'H2H Eventos',
    'Locação de som',
    'Locação de iluminação',
    'Palcos e estruturas',
    'Box Truss',
    'Painel de LED',
    'Henkz DJ',
    'Produção de eventos',
    'Orçamento de som e luz',
    'Aluguel de tendas para eventos',
  ],
  openGraph: {
    title: 'H2H Eventos — Locação de Equipamentos e Produção de Eventos',
    description: 'Encontre equipamentos para seu evento, monte sua seleção e estime o custo da locação de forma simples e rápida.',
    images: ['/logo.jpeg'],
    type: 'website',
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#090c15] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
