import { buildWhatsAppUrl } from "./constants";

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  deviceCategory: string;
  model: string;
  issue: string;
  notes: string;
}

export function buildBookingWhatsAppUrl(data: BookingFormData): string {
  const message = [
    "Hello Dr I Care Expertz,",
    "",
    `Customer Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "-"}`,
    `Address: ${data.address || "-"}`,
    "",
    `Device: ${data.deviceCategory}`,
    `Model: ${data.model}`,
    "",
    `Issue: ${data.issue}`,
    "",
    `Notes: ${data.notes || "-"}`,
    "",
    "Please contact me regarding repair service."
  ].join("\n");

  return buildWhatsAppUrl(message);
}
