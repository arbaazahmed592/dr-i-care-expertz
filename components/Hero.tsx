"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneRig from "./PhoneRig";
import { SITE, TEL_URL, buildWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.14], [0, -60]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      }
    });
    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-space-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(41,151,255,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_50%)]" />

        <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="absolute inset-0">
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 5]} intensity={1.4} />
          <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#2997ff" />
          <PhoneRig progressRef={progressRef} />
        </Canvas>

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-3 text-sm md:text-base tracking-[0.3em] text-apple-blue-light uppercase"
          >
            Apple Device Repair Specialists
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="text-gradient text-4xl md:text-7xl font-semibold tracking-tight"
          >
            DR I CARE EXPERTZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-5 max-w-xl text-base md:text-lg text-apple-silver/80"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={buildWhatsAppUrl("Hello Dr I Care Expertz, I'd like to know more about your repair services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm md:text-base font-medium text-white shadow-lg shadow-[#25D366]/20 transition hover:scale-105 hover:shadow-[#25D366]/40"
            >
              WhatsApp Now
            </a>
            <a
              href={TEL_URL}
              className="rounded-full bg-apple-blue px-6 py-3 text-sm md:text-base font-medium text-white shadow-lg shadow-apple-blue/20 transition hover:scale-105 hover:shadow-apple-blue/40"
            >
              Call Now
            </a>
            <a
              href="#book-repair"
              className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm md:text-base font-medium text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
            >
              Book Repair
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50"
          >
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
