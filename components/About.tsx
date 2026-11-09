"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";

const specialties = ["iPhones", "iPads", "MacBooks", "iMacs", "Apple Watch"];

export default function About() {
  return (
    <section id="about" className="section-pad bg-space-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-semibold tracking-tight">About Us</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-apple-silver/75">
            Dr I Care Expertz is Bangalore&apos;s trusted Apple device repair destination, delivering
            precise, reliable service across the entire Apple ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {specialties.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-apple-silver/90"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-apple-blue-light/60 via-white/15 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span className="absolute left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-apple-blue-light shadow-[0_0_12px_3px_rgba(41,151,255,0.6)] md:left-auto md:right-auto md:static md:mb-1 md:inline-block md:translate-x-0" />
                <span className="text-xs uppercase tracking-widest text-apple-blue-light">{item.year}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-apple-silver/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
