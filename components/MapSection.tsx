"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function MapSection() {
  return (
    <section className="section-pad bg-space-gray/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">Find Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-apple-silver/75">{SITE.address}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10"
        >
          <iframe
            title="Dr I Care Expertz Location"
            src={SITE.mapsEmbedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-6 text-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-apple-blue px-6 py-3 text-sm font-medium text-white shadow-lg shadow-apple-blue/20 transition hover:scale-105"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
