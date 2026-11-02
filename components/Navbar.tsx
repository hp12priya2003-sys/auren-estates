"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/data";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "Communities", href: "#communities" },
  { label: "Our approach", href: "#approach" },
  { label: "About", href: "#about" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="container-wide flex h-[86px] items-center justify-between border-b border-white/20">
        <Link href="/" aria-label="Auren Estates home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-[#b59a72] font-display text-2xl text-[#d6c3a3]">A</span>
          <span className="leading-none">
            <span className="block font-display text-[22px] tracking-[.12em]">AUREN</span>
            <span className="mt-1 block text-[8px] tracking-[.34em] text-white/70">E S T A T E S</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} className="line-link text-[11px] tracking-[.08em] text-white/85" href={link.href}>{link.label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={whatsappUrl("Hello Auren Estates, I would like to enquire about your properties.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/50 px-5 py-3 text-[10px] uppercase tracking-[.13em] transition hover:border-[#b59a72] hover:bg-[#b59a72]">
            Book a consultation <ArrowUpRight size={14} />
          </a>
        </div>
        <button className="grid h-11 w-11 place-items-center border border-white/35 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden bg-[#17231f] px-6 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 py-7">
              {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-display text-2xl">{link.label}</a>)}
              <a href={whatsappUrl("Hello Auren Estates, I would like to book a consultation.")} target="_blank" rel="noreferrer" className="solid-button flex items-center justify-between px-5 py-4 text-xs uppercase tracking-widest">Book a consultation <ArrowUpRight size={16} /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}