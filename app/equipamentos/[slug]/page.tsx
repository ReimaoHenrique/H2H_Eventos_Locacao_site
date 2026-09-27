import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EQUIPMENTS, getEquipmentBySlug, getEquipmentsByCategory } from '@/lib/data/equipment';
import { EquipmentDetailClient } from '@/components/equipment/EquipmentDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return EQUIPMENTS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    return {
      title: 'Equipamento não encontrado — H2H Eventos',
    };
  }

  return {
    title: `${equipment.name} — Locação H2H Eventos`,
    description: equipment.shortDescription,
    openGraph: {
      title: `${equipment.name} — H2H Eventos`,
      description: equipment.shortDescription,
      images: [equipment.image],
    },
  };
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    notFound();
  }

  const relatedEquipments = getEquipmentsByCategory(equipment.categoryId)
    .filter((item) => item.id !== equipment.id)
    .slice(0, 3);

  return (
    <EquipmentDetailClient
      equipment={equipment}
      relatedEquipments={relatedEquipments}
    />
  );
}
