function normalizeWhatsappDigits(value: string | undefined): string {
  if (!value?.trim()) return "";
  return value.replace(/\D/g, "");
}

export function getWhatsappNumber(): string {
  return normalizeWhatsappDigits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
}

export function buildWhatsappLink(message: string): string {
  const digits = getWhatsappNumber();
  if (!digits) {
    throw new Error(
      "Falta NEXT_PUBLIC_WHATSAPP_NUMBER en .env.local (solo dígitos, ej. 5493517530992)",
    );
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
