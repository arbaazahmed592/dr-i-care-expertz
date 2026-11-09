export const SITE = {
  name: "Dr I Care Expertz",
  tagline: "Professional Repairs. Genuine Parts. Trusted Service.",
  phone: "+91 8431900632",
  phoneRaw: "918431900632",
  address: "03, 2nd Floor, Kenchappa Road, Frazer Town, Bangalore 560005",
  owners: ["Mr Yasar Arfath", "Mr Sadath Sameer"],
  hours: "10:00 AM – 10:00 PM, Every Day",
  developer: "Arbaaz Ahmed",
  mapsQuery: "Kenchappa Road, Frazer Town, Bangalore 560005",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Kenchappa+Road,+Frazer+Town,+Bangalore+560005&output=embed"
};

export const WHATSAPP_BASE_URL = `https://wa.me/${SITE.phoneRaw}`;
export const TEL_URL = `tel:${SITE.phone.replace(/\s+/g, "")}`;

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
