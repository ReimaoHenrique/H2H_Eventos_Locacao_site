import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedEquipment } from '@/components/home/FeaturedEquipment';
import { EventProductionSection } from '@/components/home/EventProductionSection';
import { HenkzDJSection } from '@/components/home/HenkzDJSection';
import { HowItWorks } from '@/components/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryShowcase />
      <FeaturedEquipment />
      <EventProductionSection />
      <HenkzDJSection />
      <HowItWorks />
    </div>
  );
}
