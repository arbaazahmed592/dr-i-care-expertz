"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Smartphone, Tablet, Laptop, Monitor, Watch } from "lucide-react";
import { allDevices, deviceCategories, type DeviceCategory } from "@/data/devices";

const categoryIcons: Record<DeviceCategory, typeof Smartphone> = {
  iPhone: Smartphone,
  iPad: Tablet,
  MacBook: Laptop,
  iMac: Monitor,
  "Apple Watch": Watch
};

export default function DeviceDatabase() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<DeviceCategory | "All">("All");

  const filtered = useMemo(() => {
    return allDevices.filter((d) => {
      const matchesCategory = activeCategory === "All" || d.category === activeCategory;
      const matchesQuery = d.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section id="devices" className="section-pad bg-space-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">
            Supported Apple Devices
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-apple-silver/75">
            We service every generation of iPhone, iPad, MacBook, iMac and Apple Watch. Search or
            filter to find your model.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-apple-silver/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your device model..."
              aria-label="Search your device model"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-apple-silver/40 outline-none focus:border-apple-blue-light/60"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...deviceCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-apple-blue text-white"
                    : "border border-white/10 bg-white/5 text-apple-silver/70 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filtered.slice(0, 60).map((device, i) => {
            const Icon = categoryIcons[device.category];
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: (i % 12) * 0.02 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-apple-blue-light/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-apple-blue/15 text-apple-blue-light">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm text-white">{device.name}</p>
                  <p className="text-[11px] text-apple-silver/50">{device.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-apple-silver/60">
            No matching device found. Try a different search term.
          </p>
        )}
        {filtered.length > 60 && (
          <p className="mt-6 text-center text-xs text-apple-silver/50">
            Showing 60 of {filtered.length} results. Refine your search to see more.
          </p>
        )}
      </div>
    </section>
  );
}
