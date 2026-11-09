"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#devices", label: "Devices" },
  { href: "#estimator", label: "Estimate" },
  { href: "#book-repair", label: "Book Repair" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-wide text-white">DR I CARE EXPERTZ</span>
        <div className="hidden gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs text-apple-silver/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
