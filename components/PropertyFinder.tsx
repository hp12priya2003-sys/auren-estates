"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Search } from "lucide-react";
import { properties, whatsappUrl } from "@/lib/data";

const steps = [
  { title: "What brings you to Dubai?", subtitle: "Start with the property journey that feels right for you.", options: ["Buy a property", "Rent a property", "Invest in Dubai", "Explore off-plan", "Sell my property", "Still exploring"] },
  { title: "What kind of property speaks to you?", subtitle: "Choose one or more property types.", options: ["Luxury apartment", "Studio apartment", "Penthouse", "Townhouse", "Private villa", "Waterfront property", "Branded residence", "Commercial property", "Open to recommendations"] },
  { title: "Where would you like to be?", subtitle: "Choose your preferred communities.", options: ["Palm Jumeirah", "Downtown Dubai", "Dubai Marina", "Dubai Hills Estate", "Business Bay", "Dubai Creek Harbour", "Jumeirah", "Open to recommendations"] },
  { title: "What is your ideal number of bedrooms?", subtitle: "We can refine the details together later.", options: ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5+ bedrooms", "Flexible"] },
  { title: "What budget feels comfortable?", subtitle: "For purchase enquiries, select an approximate budget in AED.", options: ["Under AED 1M", "AED 1–2M", "AED 2–5M", "AED 5–10M", "AED 10–20M", "AED 20M+", "Need guidance"] },
  { title: "When are you looking to move?", subtitle: "This helps us tailor the next steps to your timeline.", options: ["Immediately", "Within 1 month", "Within 3 months", "Within 6 months", "Within 12 months", "Just exploring"] },
  { title: "What would help you most?", subtitle: "Select the support you would value from our team.", options: ["Shortlist properties", "Arrange private viewings", "Compare communities", "Discuss investment", "Understand the buying process", "Explore mortgage options", "Speak with an advisor"] }
];

export default function PropertyFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(Array.from({ length: steps.length }, () => []));
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("WhatsApp");
  const [error, setError] = useState("");

  const selected = useMemo(() => answers.flat(), [answers]);
  const suggestions = properties.filter((p) => selected.some((a) => p.area.toLowerCase().includes(a.toLowerCase())) || selected.some((a) => a.toLowerCase().includes(p.type.toLowerCase().split(" ")[0]))).slice(0, 3);
  function toggle(option: string) {
    setAnswers((prev) => prev.map((list, i) => i === step ? (list.includes(option) ? list.filter((x) => x !== option) : [...list, option]) : list));
  }
  function submit() {
    if (!name.trim() || !email.trim() || !phone.trim()) { setError("Please complete your name, email and phone number."); return; }
    const message = `Hello Auren Estates, I would like a personalised property match.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred contact: ${contact}\nPreferences:\n${steps.map((s, i) => `${s.title} ${answers[i].join(", ") || "Not specified"}`).join("\n")}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setError("");
    setDone(true);
  }

  return (
    <section id="property-finder" className="bg-[#17231f] py-20 text-[#f3efe6] sm:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="flex flex-col justify-between">
          <div>
            <p className="eyebrow text-[#c8ae87]">A more personal property search</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl leading-[.98] sm:text-6xl">A home search that starts with <em>you.</em></h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">Tell us what matters to you. We’ll use your preferences to start a more considered conversation about your next move.</p>
          </div>
          <div className="mt-10 hidden border-t border-white/15 pt-5 sm:block">
            <p className="font-display text-2xl italic text-[#d7c4a6]">Good decisions begin with the right questions.</p>
            <p className="mt-3 text-[10px] uppercase tracking-[.16em] text-white/45">Auren Estates · Dubai</p>
          </div>
        </div>
        <div className="min-h-[500px] border border-white/15 bg-white/[.035] p-5 sm:p-9">
          {done ? (
            <div className="flex min-h-[440px] flex-col items-start justify-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#b59a72] text-[#17231f]"><Check /></span>
              <h3 className="mt-6 font-display text-4xl">Your next chapter starts here.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">Your preference summary has been prepared. WhatsApp should open with your details so you can send the enquiry to our team.</p>
              {suggestions.length > 0 && <p className="mt-5 text-sm text-[#d7c4a6]">A few areas to explore: {suggestions.map((p) => p.area).filter((v, i, a) => a.indexOf(v) === i).join(", ")}.</p>}
              <button onClick={() => { setDone(false); setStep(0); }} className="mt-8 border border-white/35 px-5 py-3 text-xs uppercase tracking-widest">Start again</button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow text-[#c8ae87]">Your property journey</span>
                <span className="text-[10px] tracking-[.1em] text-white/55">{step < steps.length ? `STEP ${String(step + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}` : "YOUR DETAILS"}</span>
              </div>
              <div className="mt-4 h-[2px] w-full bg-white/10"><motion.div className="h-full bg-[#b59a72]" animate={{ width: `${(Math.min(step + 1, steps.length) / steps.length) * 100}%` }} transition={{ duration: .4 }} /></div>
              {step < steps.length && <>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .3 }}>
                  <h3 className="mt-8 font-display text-3xl sm:text-4xl">{steps[step].title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/55">{steps[step].subtitle}</p>
                  <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {steps[step].options.map((option) => {
                      const active = answers[step].includes(option);
                      return <button type="button" key={option} onClick={() => toggle(option)} aria-pressed={active} className={`flex min-h-[52px] items-center justify-between border px-4 py-3 text-left text-xs transition ${active ? "border-[#b59a72] bg-[#b59a72]/15 text-white" : "border-white/15 text-white/75 hover:border-white/45"}`}>
                        {option}<span className={`ml-3 grid h-4 w-4 place-items-center border ${active ? "border-[#b59a72] bg-[#b59a72] text-[#17231f]" : "border-white/30"}`}>{active && <Check size={11} />}</span>
                      </button>;
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                <button type="button" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))} className="flex items-center gap-2 py-3 text-xs text-white/60 transition hover:text-white disabled:opacity-25"><ArrowLeft size={15} /> Back</button>
                {step < steps.length - 1 ? <button type="button" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))} className="solid-button flex items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-widest">Continue <ArrowRight size={15} /></button> : <button type="button" onClick={() => setStep(steps.length)} className="solid-button flex items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-widest">Personalise <ArrowRight size={15} /></button>}
              </div>
              </>}
              {step === steps.length && (
                <div className="mt-7 border-t border-white/15 pt-6">
                  <h4 className="font-display text-2xl">Where can we reach you?</h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name *" aria-label="Full name" className="min-w-0 border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address *" aria-label="Email address" className="min-w-0 border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number *" aria-label="Phone number" className="min-w-0 border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" />
                    <select value={contact} onChange={(e) => setContact(e.target.value)} aria-label="Preferred contact method" className="min-w-0 border border-white/20 bg-[#22332c] px-4 py-3 text-sm text-white"><option>WhatsApp</option><option>Phone call</option><option>Email</option></select>
                  </div>
                  {error && <p role="alert" className="mt-3 text-xs text-[#e8b7a7]">{error}</p>}
                  <p className="mt-3 text-[10px] leading-5 text-white/45">By submitting, you agree to be contacted about this enquiry. Add your production privacy policy before launch.</p>
                  <button type="button" onClick={submit} className="solid-button mt-4 flex w-full items-center justify-center gap-2 px-5 py-4 text-xs uppercase tracking-widest">Send my property brief <Search size={15} /></button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}