"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, mx: 50, my: 50 });
  const Icon = service.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (py - 0.5) * -14,
      y: (px - 0.5) * 14,
      mx: px * 100,
      my: py * 100
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0, mx: 50, my: 50 });
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(41,151,255,0.25), rgba(29,29,31,0.6) 60%)`
      }}
      className="group relative rounded-2xl border border-white/10 p-6 transition-shadow duration-300 hover:border-apple-blue-light/50 hover:shadow-[0_0_30px_rgba(41,151,255,0.25)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-apple-blue/15 text-apple-blue-light transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-apple-silver/65">{service.description}</p>
    </motion.div>
  );
}
