import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, whatsappUrl } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#121b17] text-[#f3efe6]">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-[#b59a72] font-display text-2xl text-[#d6c3a3]">A</span>
              <span><span className="block font-display text-2xl tracking-[.13em]">AUREN</span><span className="mt-1 block text-[8px] tracking-[.35em] text-white/55">E S T A T E S</span></span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">Exceptional properties. Personalised guidance. A more considered way to find your next home.</p>
            <a href={whatsappUrl("Hello Auren Estates, I would like to connect with your team.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs text-[#d2b991]">Start a conversation <ArrowUpRight size={14} /></a>
          </div>
          <div>
            <p className="eyebrow text-[#c4aa84]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <a className="hover:text-white" href="#properties">Featured properties</a><a className="hover:text-white" href="#communities">Communities</a><a className="hover:text-white" href="#property-finder">Find your property</a><a className="hover:text-white" href="#booking">Book a consultation</a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#c4aa84]">Our approach</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <a className="hover:text-white" href="#approach">A personal approach</a><a className="hover:text-white" href="#about">About Auren</a><a className="hover:text-white" href="#booking">Contact our team</a><a className="hover:text-white" href="#privacy-note">Privacy note</a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#c4aa84]">Get in touch</p>
            <p className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/65"><MapPin size={16} className="mt-1 shrink-0 text-[#c4aa84]" />Dubai, United Arab Emirates</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-3 text-sm text-white/65 hover:text-white"><Phone size={16} className="text-[#c4aa84]" />{WHATSAPP_NUMBER}</a>
            <div className="mt-6 flex gap-3"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/20 hover:border-[#b59a72]"><Instagram size={16} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center border border-white/20 hover:border-[#b59a72]"><Linkedin size={16} /></a></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-[10px] tracking-[.05em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Auren Estates. All rights reserved.</p>
          <p id="privacy-note">Concept website · Sample property content for demonstration.</p>
          <p className="text-white/70">Crafted with care by <a href="https://webloom.studio" target="_blank" rel="noreferrer" className="text-[#d2b991] underline underline-offset-4">Webloom Studio</a></p>
        </div>
      </div>
    </footer>
  );
}