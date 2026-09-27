import { CartItem, Equipment, BudgetSummary } from './types';

/**
 * Formats a value in integer cents into Brazilian Real (BRL) string.
 * Example: 25000 -> "R$ 250,00"
 */
export function formatCurrency(cents: number | null | undefined): string {
  if (cents === null || cents === undefined) {
    return 'Sob consulta';
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
}

/**
 * Formats the billing unit for display.
 */
export function formatBillingUnit(unit: Equipment['billingUnit']): string {
  switch (unit) {
    case 'diaria':
      return '/ diária';
    case 'evento':
      return '/ evento';
    case 'sob_consulta':
      return 'Valor sob consulta';
    default:
      return '';
  }
}

/**
 * Calculates the subtotal in integer cents for a single cart item.
 * Returns null if the item has no fixed price (sob consulta).
 */
export function calculateItemSubtotalInCents(
  item: CartItem,
  durationDays: number = 1
): number | null {
  if (item.equipment.priceInCents === null) {
    return null;
  }

  const validDays = Math.max(1, Math.floor(durationDays || 1));
  const validQty = Math.max(1, Math.floor(item.quantity || 1));

  if (item.equipment.billingUnit === 'diaria') {
    return item.equipment.priceInCents * validQty * validDays;
  }

  if (item.equipment.billingUnit === 'evento') {
    return item.equipment.priceInCents * validQty;
  }

  return null;
}

/**
 * Calculates complete summary of the budget/cart.
 */
export function calculateBudgetSummary(
  items: CartItem[],
  durationDays: number = 1
): BudgetSummary {
  const validDays = Math.max(1, Math.floor(durationDays || 1));
  let totalEstimatedInCents = 0;
  let itemsWithPriceCount = 0;
  let itemsUnderConsultationCount = 0;

  for (const item of items) {
    const subtotal = calculateItemSubtotalInCents(item, validDays);
    if (subtotal !== null) {
      totalEstimatedInCents += subtotal;
      itemsWithPriceCount++;
    } else {
      itemsUnderConsultationCount++;
    }
  }

  return {
    itemsSubtotalInCents: totalEstimatedInCents,
    itemsWithPriceCount,
    itemsUnderConsultationCount,
    totalEstimatedInCents,
    durationDays: validDays,
  };
}
