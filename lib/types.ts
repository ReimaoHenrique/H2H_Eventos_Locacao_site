export type BillingUnit = 'diaria' | 'evento' | 'sob_consulta';

export type EquipmentCategory = 
  | 'sonorizacao'
  | 'iluminacao'
  | 'palcos-estruturas'
  | 'tendas-coberturas'
  | 'mobiliario'
  | 'audiovisual';

export interface CategoryInfo {
  id: EquipmentCategory;
  name: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface Equipment {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  categoryId: EquipmentCategory;
  categoryName: string;
  image: string;
  priceInCents: number | null; // in cents (e.g., 25000 = R$ 250,00). null = Sob Consulta
  billingUnit: BillingUnit;
  isDemo: boolean; // items marked as demonstrative until real inventory confirmed
  stockNote?: string;
  specs: string[];
  recommendedFor: string[];
  includedItems?: string[];
  featured?: boolean;
}

export interface CartItem {
  equipment: Equipment;
  quantity: number;
}

export interface BudgetCustomerInfo {
  name: string;
  phone?: string;
  eventDate: string;
  eventLocation: string;
  eventDurationDays: number;
  notes?: string;
}

export interface BudgetSummary {
  itemsSubtotalInCents: number;
  itemsWithPriceCount: number;
  itemsUnderConsultationCount: number;
  totalEstimatedInCents: number;
  durationDays: number;
}
