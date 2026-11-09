"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { TEL_URL, buildWhatsAppUrl } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <motion.a
        href={TEL_URL}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="group flex items-center gap-0 overflow-hidden rounded-full bg-apple-blue p-4 text-white shadow-lg shadow-apple-blue/30 animate-pulse-slow"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[110px] group-hover:pl-2">
          Call Now
        </span>
      </motion.a>

      <motion.a
        href={buildWhatsAppUrl("Hello Dr I Care Expertz, I'd like to enquire about a repair.")}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="group flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-4 text-white shadow-lg animate-glow-pulse"
        aria-label="WhatsApp Now"
      >
        <MessageCircle className="h-6 w-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[130px] group-hover:pl-2">
          WhatsApp Now
        </span>
      </motion.a>
    </div>
  );
}
