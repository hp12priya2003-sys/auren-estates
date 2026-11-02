import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#f3efe6] px-6 text-center"><div><p className="eyebrow text-[#8b704b]">Auren Estates</p><h1 className="mt-5 font-display text-6xl">Property not found.</h1><p className="mt-4 text-sm text-[#777a70]">This listing may have moved or is not part of this collection.</p><Link href="/#properties" className="solid-button mt-7 inline-flex px-6 py-4 text-xs uppercase tracking-widest">Explore properties</Link></div></main>;
}