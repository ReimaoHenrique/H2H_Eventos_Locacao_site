import { CartItem, BudgetCustomerInfo } from './types';
import { calculateItemSubtotalInCents, calculateBudgetSummary, formatCurrency } from './pricing';

export const H2H_WHATSAPP_NUMBER = '557182580141';
export const H2H_WHATSAPP_DISPLAY = '+55 (71) 8258-0141';

/**
 * Builds a friendly and structured WhatsApp message from cart and customer information.
 */
export function generateBudgetMessage(
  items: CartItem[],
  customerInfo: BudgetCustomerInfo
): string {
  const summary = calculateBudgetSummary(items, customerInfo.eventDurationDays);

  const lines: string[] = [
    '✨ *SOLICITAÇÃO DE ORÇAMENTO — H2H EVENTOS* ✨',
    '',
  ];

  if (customerInfo.name && customerInfo.name.trim()) {
    lines.push(`👤 *Cliente:* ${customerInfo.name.trim()}`);
  }

  if (customerInfo.eventDate) {
    const [year, month, day] = customerInfo.eventDate.split('-');
    const formattedDate = (year && month && day) ? `${day}/${month}/${year}` : customerInfo.eventDate;
    lines.push(`📅 *Data do Evento:* ${formattedDate}`);
  }

  if (customerInfo.eventDurationDays) {
    lines.push(`⏱️ *Duração da Locação:* ${customerInfo.eventDurationDays} ${customerInfo.eventDurationDays > 1 ? 'dias' : 'dia'}`);
  }

  if (customerInfo.eventLocation && customerInfo.eventLocation.trim()) {
    lines.push(`📍 *Local do Evento:* ${customerInfo.eventLocation.trim()}`);
  }

  lines.push('');
  lines.push('📋 *EQUIPAMENTOS SELECIONADOS:*');

  items.forEach((item, index) => {
    const subtotal = calculateItemSubtotalInCents(item, customerInfo.eventDurationDays);
    const priceStr = subtotal !== null ? formatCurrency(subtotal) : 'Valor sob consulta';
    const unitText = item.equipment.billingUnit === 'diaria' ? 'diária' : item.equipment.billingUnit === 'evento' ? 'evento' : 'sob consulta';

    lines.push(`${index + 1}. *${item.equipment.name}*`);
    lines.push(`   • Qtd: ${item.quantity} un. (${unitText})`);
    lines.push(`   • Subtotal estimado: ${priceStr}`);
  });

  lines.push('');
  lines.push('────────────────────────');
  lines.push(`💰 *TOTAL ESTIMADO:* ${formatCurrency(summary.totalEstimatedInCents)}`);

  if (summary.itemsUnderConsultationCount > 0) {
    lines.push(`⚠️ *Atenção:* Há ${summary.itemsUnderConsultationCount} ${summary.itemsUnderConsultationCount > 1 ? 'itens com valor sob consulta' : 'item com valor sob consulta'} que serão calculados na proposta.`);
  }

  if (customerInfo.notes && customerInfo.notes.trim()) {
    lines.push('');
    lines.push(`📝 *Observações do Cliente:*`);
    lines.push(customerInfo.notes.trim());
  }

  lines.push('');
  lines.push('📌 *Aviso:* Os valores apresentados são estimativas preliminares. O orçamento final depende da disponibilidade, logística, local e especificações técnicas.');

  return lines.join('\n');
}

/**
 * Creates the direct WhatsApp URL with pre-filled message.
 */
export function createWhatsAppBudgetUrl(
  items: CartItem[],
  customerInfo: BudgetCustomerInfo
): string {
  const message = generateBudgetMessage(items, customerInfo);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${H2H_WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Creates general contact WhatsApp URL.
 */
export function createGeneralWhatsAppUrl(subject?: string): string {
  let text = 'Olá, H2H Eventos! Gostaria de mais informações sobre serviços e locação para meu evento.';
  if (subject === 'dj') {
    text = 'Olá! Gostaria de solicitar um orçamento para apresentação do Henkz DJ no meu evento.';
  } else if (subject === 'producao') {
    text = 'Olá! Gostaria de falar sobre a produção e realização completa do meu evento com a H2H Eventos.';
  }
  return `https://wa.me/${H2H_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
