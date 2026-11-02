"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Compass, MoveUpRight, Sparkles, ChevronLeft, ChevronRight, Plus, Minus, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import PropertyFinder from "@/components/PropertyFinder";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { areas, properties, whatsappUrl } from "@/lib/data";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  return (
    <section ref={ref} className="grain relative flex min-h-[780px] items-end overflow-hidden bg-[#17231f] text-white sm:min-h-[850px] lg:min-h-[920px]">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90" alt="Contemporary luxury villa with a pool at golden hour" fill priority sizes="100vw" className="hero-image object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#101a16]/85 via-[#101a16]/48 to-[#101a16]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101a16]/80 via-transparent to-[#101a16]/25" />
      <Navbar />
      <motion.div style={{ y: textY }} className="container-wide relative z-10 grid w-full gap-12 pb-14 pt-44 sm:pb-20 lg:grid-cols-[1fr_330px] lg:items-end lg:pb-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4b78c]" /><p className="eyebrow text-[#e3cba7]">Exceptional real estate · Dubai</p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 35, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, delay: .38, ease: [.22, 1, .36, 1] }} className="mt-7 max-w-4xl font-display text-[clamp(3.5rem,8.5vw,8.2rem)] leading-[.83] tracking-[-.045em]">
            Find a place<br />that feels <em className="font-normal text-[#d4bd9a]">like yours.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .72 }} className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
            Discover exceptional residences, explore Dubai’s most desirable communities, and receive thoughtful guidance at every step of your property journey.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .9 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#properties" className="solid-button inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[.16em]">Explore properties <ArrowUpRight size={15} /></a>
            <a href="#booking" className="outline-button inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[.16em]">Book a consultation <ArrowRight size={15} /></a>
          </motion.div>
        </div>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: .8 }} href="#properties" className="hidden items-center gap-4 justify-self-end pb-2 text-[9px] uppercase tracking-[.2em] text-white/70 lg:flex">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/35"><ArrowDown size={15} /></span> Scroll to discover
        </motion.a>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/20 bg-[#17231f]/35 backdrop-blur-sm">
        <div className="container-wide grid grid-cols-3 divide-x divide-white/20 py-4 sm:py-5">
          <div className="px-2 sm:px-6"><p className="font-display text-xl sm:text-2xl">Thoughtful</p><p className="mt-1 text-[8px] uppercase tracking-[.14em] text-white/55 sm:text-[9px]">Property guidance</p></div>
          <div className="px-3 sm:px-6"><p className="font-display text-xl sm:text-2xl">Personal</p><p className="mt-1 text-[8px] uppercase tracking-[.14em] text-white/55 sm:text-[9px]">Curated shortlists</p></div>
          <div className="px-3 sm:px-6"><p className="font-display text-xl sm:text-2xl">Considered</p><p className="mt-1 text-[8px] uppercase tracking-[.14em] text-white/55 sm:text-[9px]">Every next step</p></div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow text-[#8b704b]">About Auren Estates · A different kind of property journey</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-[-.035em] sm:text-6xl">The right home is about more than <em>four walls.</em></h2>
        </Reveal>
        <Reveal delay={.15}>
          <p className="max-w-xl text-sm leading-8 text-[#696d63]">It is the morning light, the neighbourhood that fits your rhythm, and the confidence that comes from making an informed decision. At Auren Estates, we begin by listening — then help you explore the possibilities with clarity and care.</p>
          <a href="#approach" className="line-link mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[.13em]">Discover our approach <ArrowUpRight size={15} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Properties() {
  const [filter, setFilter] = useState("All properties");
  const [showAll, setShowAll] = useState(false);
  const filters = ["All properties", "Apartments", "Villas", "Penthouses"];
  const filtered = properties.filter((p) => filter === "All properties" || (filter === "Apartments" && p.type.toLowerCase().includes("apartment")) || (filter === "Villas" && p.type.toLowerCase().includes("villa")) || (filter === "Penthouses" && p.type.toLowerCase().includes("penthouse")));
  return (
    <section id="properties" className="section-pad bg-[#f3efe6]">
      <div className="container-wide">
        <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div><p className="eyebrow text-[#8b704b]">A considered collection</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Homes with a point of view.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#777a70]">Explore a selection of sample residences chosen for their architecture, setting and sense of possibility.</p></div>
          <a href="#property-finder" className="line-link inline-flex items-center gap-3 self-start text-xs uppercase tracking-[.13em] md:self-auto">Find your property <ArrowUpRight size={15} /></a>
        </Reveal>
        <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter properties">
          {filters.map((f) => <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={`border px-4 py-3 text-[10px] uppercase tracking-[.1em] transition ${filter === f ? "border-[#17231f] bg-[#17231f] text-white" : "border-black/15 text-[#65695f] hover:border-black/40"}`}>{f}</button>)}
        </div>
        <motion.div layout className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {(showAll ? filtered : filtered.slice(0, 6)).map((property, index) => <motion.div layout key={property.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: index * .04 }}><PropertyCard property={property} index={index} /></motion.div>)}
        </motion.div>
        {filtered.length > 6 && <div className="mt-12 flex justify-center"><button onClick={() => setShowAll(!showAll)} className="outline-dark-button inline-flex items-center gap-3 px-7 py-4 text-[10px] uppercase tracking-[.16em]">{showAll ? "Show fewer properties" : "Explore more collections · 10 residences"}{showAll ? <Minus size={15} /> : <ArrowUpRight size={15} />}</button></div>}
        <p className="mt-9 text-[10px] leading-5 text-[#8a8d83]">Portfolio concept: property descriptions, prices and availability are illustrative and must be verified before any commercial use.</p>
      </div>
    </section>
  );
}

function Communities() {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const area = areas[active];
  const images = area.gallery;
  const changeArea = (next: number) => { setActive((next + areas.length) % areas.length); setImageIndex(0); };
  const nextImage = () => setImageIndex((n) => (n + 1) % images.length);
  const prevImage = () => setImageIndex((n) => (n + images.length - 1) % images.length);
  return (
    <section id="communities" className="section-pad">
      <div className="container-wide">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow text-[#8b704b]">Find your neighbourhood</p><h2 className="mt-4 max-w-2xl font-display text-5xl leading-none sm:text-6xl">A sense of place, <em>in every detail.</em></h2></div>
          <p className="max-w-sm text-sm leading-7 text-[#777a70]">Choose a neighbourhood to explore its character, lifestyle and property possibilities.</p>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_.88fr]">
          <div className="image-zoom relative min-h-[440px] bg-[#e5e0d6] sm:min-h-[600px]">
            <Image key={`${active}-${imageIndex}`} src={images[imageIndex]} alt={`${area.name} luxury property and neighbourhood`} fill sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111b16]/85 via-transparent to-[#111b16]/10" />
            <div className="absolute inset-x-6 bottom-7 text-white sm:inset-x-9 sm:bottom-9"><p className="eyebrow text-[#e3cba7]">Explore Dubai</p><h3 className="mt-3 font-display text-4xl sm:text-5xl">{area.name}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-white/80">{area.detail}</p><p className="mt-3 text-xs text-white/65">{area.note}</p></div>
            <div className="absolute right-5 top-5 flex gap-2"><button aria-label="Previous neighbourhood image" onClick={prevImage} className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-black/10 text-white backdrop-blur hover:bg-white hover:text-[#17231f]"><ChevronLeft size={18}/></button><button aria-label="Next neighbourhood image" onClick={nextImage} className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-black/10 text-white backdrop-blur hover:bg-white hover:text-[#17231f]"><ChevronRight size={18}/></button></div>
            <div className="absolute bottom-3 right-7 flex gap-1.5">{images.map((_, i) => <button key={i} aria-label={`Show image ${i+1}`} onClick={() => setImageIndex(i)} className={`h-1.5 rounded-full transition-all ${i===imageIndex ? "w-7 bg-white" : "w-2 bg-white/55"}`} />)}</div>
          </div>
          <div className="flex flex-col border-t border-black/15">
            {areas.map((item, i) => <button key={item.name} onClick={() => changeArea(i)} aria-pressed={active===i} className={`group grid flex-1 grid-cols-[72px_1fr_28px] items-center gap-4 border-b border-black/15 py-5 text-left transition sm:grid-cols-[90px_1fr_28px] ${active===i ? "bg-[#f0ece3]" : "hover:bg-[#f7f4ed]"}`}>
              <span className="image-zoom relative aspect-square overflow-hidden"><Image src={item.image} alt="" fill sizes="90px" className="object-cover" /></span>
              <span><span className="block font-display text-2xl sm:text-3xl">{item.name}</span><span className="mt-2 block text-xs leading-5 text-[#777a70]">{item.note}</span></span><ArrowUpRight size={18} className={active===i ? "text-[#9b8058]" : "text-[#85877f] transition group-hover:-translate-y-1 group-hover:translate-x-1"}/>
            </button>)}
            <a href="#property-finder" className="line-link mt-6 inline-flex items-center gap-3 self-start text-xs uppercase tracking-[.13em]">Find homes in this area <ArrowUpRight size={15}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const points = [
    ["01", "We listen first", "We begin with your priorities, questions and the details that matter to your day-to-day life."],
    ["02", "We curate thoughtfully", "We help narrow the search around your preferred areas, property type and practical needs."],
    ["03", "We guide the next step", "From arranging viewings to discussing the process, we help you move forward with greater clarity."]
  ];
  return (
    <section id="approach" className="bg-[#e9e3d7] py-20 sm:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-[#8b704b]">The Auren approach</p>
          <h2 className="mt-5 font-display text-5xl leading-[.97] sm:text-6xl">A thoughtful way to make your <em>next move.</em></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#686d63]">Buying, renting or investing is a personal decision. We make space for the right questions, then help you explore the options with intention.</p>
          <a href="#booking" className="solid-button mt-8 inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[.15em]">Talk to our team <ArrowUpRight size={15} /></a>
        </Reveal>
        <div className="border-t border-black/15">
          {points.map(([num, title, copy], i) => <Reveal key={num} delay={i * .08} className="grid grid-cols-[54px_1fr] gap-4 border-b border-black/15 py-7 sm:grid-cols-[70px_1fr] sm:py-9">
            <span className="font-display text-2xl italic text-[#9a805b]">{num}</span><div><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-[#686d63]">{copy}</p></div>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

function FeatureStory() {
  return (
    <section className="bg-[#17231f] py-16 text-[#f3efe6] sm:py-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <Reveal className="image-zoom relative aspect-[5/4] bg-[#283a31]">
          <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=90" alt="Calm, refined contemporary residence with warm natural materials" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </Reveal>
        <Reveal delay={.15}>
          <p className="eyebrow text-[#c8ae87]">Beyond the listing</p>
          <h2 className="mt-5 font-display text-5xl leading-[.98] sm:text-6xl">Find the feeling you want to <em>come home to.</em></h2>
          <p className="mt-6 text-sm leading-7 text-white/60">The most meaningful property search starts with how you want to live. Share what matters, and let’s explore the possibilities together.</p>
          <a href="#property-finder" className="outline-button mt-8 inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[.15em]">Start your property journey <ArrowRight size={15} /></a>
        </Reveal>
      </div>
    </section>
  );
}


function FAQAndLocation() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    ["Can I arrange a private property viewing?", "Absolutely. Share the property or neighbourhood you are interested in through the enquiry form or WhatsApp, and the team can discuss suitable viewing arrangements."],
    ["Do you help overseas buyers?", "Yes. Auren Estates is presented as a Dubai-focused property advisory concept for local and international buyers. We can help outline the questions and steps to discuss before a purchase."],
    ["Are the prices and listings live?", "This website is a portfolio demonstration. Property names, prices, specifications and availability are illustrative and should be verified before any real-world transaction."],
    ["Can you help me choose the right neighbourhood?", "Tell us about your preferred lifestyle, commute, budget and property type. We can help you compare areas such as Palm Jumeirah, Downtown Dubai, Dubai Marina and Dubai Hills Estate."]
  ];
  return <>
    <section id="faq" className="section-pad bg-[#f3efe6]"><div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><Reveal><p className="eyebrow text-[#8b704b]">A few helpful answers</p><h2 className="mt-5 font-display text-5xl leading-[.98] sm:text-6xl">Good decisions begin with <em>clarity.</em></h2><p className="mt-6 max-w-md text-sm leading-7 text-[#777a70]">A little more about the process, viewings and finding the right Dubai address.</p></Reveal><div className="border-t border-black/15">{faqs.map(([q,a],i)=><div key={q} className="border-b border-black/15"><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} className="flex w-full items-center justify-between gap-5 py-6 text-left"><span className="font-display text-xl sm:text-2xl">{q}</span>{open===i?<Minus size={18}/>:<Plus size={18}/>}</button>{open===i&&<p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#777a70]">{a}</p>}</div>)}</div></div></section>
    <section id="location" className="section-pad bg-[#17231f] text-[#f3efe6]"><div className="container-wide grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><Reveal><p className="eyebrow text-[#c8ae87]">Our city, your next chapter</p><h2 className="mt-5 font-display text-5xl leading-[.98] sm:text-6xl">Rooted in <em>Dubai.</em></h2><p className="mt-6 max-w-md text-sm leading-7 text-white/65">Explore the city’s most sought-after neighbourhoods. Speak with us to plan a property conversation around the areas that fit you best.</p><p className="mt-6 flex items-center gap-2 text-sm text-white/80"><MapPin size={16} className="text-[#c8ae87]"/> Dubai, United Arab Emirates</p><a href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noreferrer" className="outline-button mt-7 inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[.15em]">Explore Dubai on maps <ArrowUpRight size={15}/></a></Reveal><Reveal delay={.1} className="overflow-hidden border border-white/15 bg-white/5 p-2"><iframe title="Map of Dubai, United Arab Emirates" src="https://maps.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&t=&z=11&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[340px] w-full sm:h-[440px]" /></Reveal></div></section>
  </>;
}

function Booking() {
  return (
    <section id="booking" className="section-pad bg-[#faf8f3]">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-10">
          <p className="eyebrow text-[#8b704b]">Your next chapter starts here</p>
          <h2 className="mt-5 font-display text-5xl leading-[.98] sm:text-6xl">Let’s make your next move a <em>considered one.</em></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#777a70]">Tell us a little about your plans. Request a private viewing or a conversation with our team, at a time that works for you.</p>
          <div className="mt-8 space-y-4 border-t border-black/10 pt-6">
            <div className="flex items-start gap-3"><span className="mt-1 text-[#9b8058]"><Compass size={17} /></span><div><p className="text-sm">Personalised guidance</p><p className="mt-1 text-xs text-[#777a70]">A conversation shaped around your goals.</p></div></div>
            <div className="flex items-start gap-3"><span className="mt-1 text-[#9b8058]"><Sparkles size={17} /></span><div><p className="text-sm">Curated next steps</p><p className="mt-1 text-xs text-[#777a70]">A clearer path to your next property decision.</p></div></div>
          </div>
          <a href={whatsappUrl("Hello Auren Estates, I would like to discuss a property enquiry.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs text-[#8b704b]">Prefer WhatsApp? Start a conversation <MoveUpRight size={14} /></a>
        </Reveal>
        <Reveal delay={.1}><BookingForm /></Reveal>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#d9d0c1] py-16 sm:py-20">
      <div className="container-wide relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div><p className="eyebrow text-[#8b704b]">A more personal property journey</p><h2 className="mt-4 max-w-3xl font-display text-5xl leading-[.98] sm:text-6xl">The next chapter begins with a conversation.</h2></div>
        <a href="#booking" className="inline-flex shrink-0 items-center gap-3 bg-[#17231f] px-6 py-4 text-[10px] uppercase tracking-[.15em] text-white transition hover:bg-[#2c4036]">Book your consultation <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <main><Hero /><Intro /><Properties /><Communities /><PropertyFinder /><Approach /><FeatureStory /><FAQAndLocation /><Booking /><ClosingCTA /><Footer /></main>;
}