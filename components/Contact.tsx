"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SITE, TEL_URL, buildWhatsAppUrl } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="section-pad bg-space-gray/40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">{SITE.name}</h2>
          <p className="mt-3 text-sm text-apple-silver/60">
            Owners: {SITE.owners.join(" & ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="glass flex items-start gap-3 rounded-2xl p-5 text-left">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-apple-blue-light" />
            <div>
              <p className="text-xs uppercase tracking-widest text-apple-silver/50">Phone / WhatsApp</p>
              <p className="mt-1 text-sm text-white">{SITE.phone}</p>
            </div>
          </div>
          <div className="glass flex items-start gap-3 rounded-2xl p-5 text-left">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-apple-blue-light" />
            <div>
              <p className="text-xs uppercase tracking-widest text-apple-silver/50">Working Hours</p>
              <p className="mt-1 text-sm text-white">{SITE.hours}</p>
            </div>
          </div>
          <div className="glass sm:col-span-2 flex items-start gap-3 rounded-2xl p-5 text-left">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-apple-blue-light" />
            <div>
              <p className="text-xs uppercase tracking-widest text-apple-silver/50">Address</p>
              <p className="mt-1 text-sm text-white">{SITE.address}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={TEL_URL} className="flex items-center gap-2 rounded-full bg-apple-blue px-6 py-3 text-sm font-medium text-white shadow-lg shadow-apple-blue/20 transition hover:scale-105">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={buildWhatsAppUrl("Hello Dr I Care Expertz, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" /> Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
