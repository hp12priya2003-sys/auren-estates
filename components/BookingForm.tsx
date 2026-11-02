"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { whatsappUrl } from "@/lib/data";

export default function BookingForm() {
  const [type, setType] = useState("Private property viewing");
  const [format, setFormat] = useState("Video consultation");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Flexible");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Open to recommendations");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please complete your name, email and phone number.");
      return;
    }
    const text = `Hello Auren Estates, I would like to request an appointment.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAppointment: ${type}\nMeeting format: ${format}\nPreferred date: ${date || "To be discussed"}\nPreferred time: ${time}\nArea/property: ${area}\nNotes: ${message || "None"}\n\nPlease contact me to confirm availability.`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setError("");
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 shadow-[0_20px_70px_rgba(23,35,31,.07)] sm:p-9">
      {submitted ? (
        <div className="py-10 text-center">
          <CheckCircle2 className="mx-auto text-[#9b8058]" size={42} strokeWidth={1.4} />
          <h3 className="mt-5 font-display text-3xl">Your request is ready.</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#777a70]">WhatsApp should have opened with your appointment details. Send the message to request confirmation from the Auren Estates team.</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-6 border border-black/20 px-5 py-3 text-xs uppercase tracking-widest">Make another request</button>
        </div>
      ) : (
        <>
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-[#f3efe6] text-[#8b704b]"><CalendarDays size={19} /></span>
            <div><p className="eyebrow text-[#8b704b]">A personal conversation</p><h3 className="mt-1 font-display text-3xl">Request an appointment</h3></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-xs text-[#686d63]">Appointment type
              <select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620]">
                <option>Private property viewing</option><option>Property consultation</option><option>Investment discussion</option><option>Rental consultation</option><option>Property selling consultation</option>
              </select>
            </label>
            <label className="block text-xs text-[#686d63]">Meeting format
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620]">
                <option>Video consultation</option><option>In-person meeting in Dubai</option><option>Phone call</option>
              </select>
            </label>
            <label className="block text-xs text-[#686d63]">Preferred date
              <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620]" />
            </label>
            <label className="block text-xs text-[#686d63]">Preferred time (Dubai time)
              <select value={time} onChange={(e) => setTime(e.target.value)} className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620]">
                <option>Flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option>
              </select>
            </label>
            <label className="block text-xs text-[#686d63]">Full name *
              <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your full name" className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620] placeholder:text-[#a0a096]" />
            </label>
            <label className="block text-xs text-[#686d63]">Email address *
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620] placeholder:text-[#a0a096]" />
            </label>
            <label className="block text-xs text-[#686d63]">Phone number *
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="+971 / country code" className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620] placeholder:text-[#a0a096]" />
            </label>
            <label className="block text-xs text-[#686d63]">Preferred area or property
              <select value={area} onChange={(e) => setArea(e.target.value)} className="mt-2 w-full border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620]">
                <option>Open to recommendations</option><option>Palm Jumeirah</option><option>Downtown Dubai</option><option>Dubai Marina</option><option>Dubai Hills Estate</option><option>Business Bay</option><option>Dubai Creek Harbour</option><option>Other</option>
              </select>
            </label>
            <label className="block text-xs text-[#686d63] sm:col-span-2">Anything you&apos;d like us to know? (optional)
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Tell us about your property goals..." className="mt-2 w-full resize-y border border-black/15 bg-[#faf8f3] px-3 py-3.5 text-sm text-[#202620] placeholder:text-[#a0a096]" />
            </label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
          <label className="mt-5 flex items-start gap-3 text-[11px] leading-5 text-[#777a70]"><input type="checkbox" required className="mt-1 accent-[#8b704b]" /> I agree to be contacted about this enquiry and understand my details will be handled according to the privacy policy.</label>
          <button type="submit" className="solid-button mt-6 flex w-full items-center justify-center gap-3 px-5 py-4 text-[10px] uppercase tracking-[.17em]">Request my appointment <ArrowUpRight size={15} /></button>
          <p className="mt-4 text-center text-[10px] leading-5 text-[#8a8d83]">Your request is not confirmed until the team replies. WhatsApp opens with your details pre-filled.</p>
        </>
      )}
    </form>
  );
}