import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, whatsappUrl } from "@/lib/data";

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);
  if (!property) notFound();
  const related = properties.filter((item) => item.id !== property.id).slice(0, 3);
  return (
    <main>
      <section className="relative bg-[#17231f] text-white">
        <Navbar />
        <div className="container-wide pb-10 pt-32 sm:pt-40">
          <Link href="/#properties" className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white"><ArrowLeft size={14} /> Back to properties</Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="relative min-h-[350px] aspect-[4/3] bg-[#283a31] sm:min-h-[500px]">
              <Image src={property.image} alt={property.title} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-[#c8ae87]">{property.tag}</p>
              <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl">{property.title}</h1>
              <p className="mt-5 flex items-center gap-2 text-sm text-white/60"><MapPin size={15} />{property.area}, Dubai</p>
              <p className="mt-8 font-display text-3xl text-[#e2caa5]">{property.price}</p>
              <div className="mt-7 grid grid-cols-3 border-y border-white/15 py-5 text-xs text-white/70">
                <span className="flex flex-col gap-2"><BedDouble size={16} />{property.beds} bedrooms</span>
                <span className="flex flex-col gap-2"><Bath size={16} />{property.baths} bathrooms</span>
                <span className="flex flex-col gap-2"><Ruler size={16} />{property.size}</span>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/65">{property.description}</p>
              <a href={whatsappUrl(`Hello Auren Estates, I am interested in ${property.title} in ${property.area}. Please share current availability and help arrange a viewing.`)} target="_blank" rel="noreferrer" className="solid-button mt-8 flex items-center justify-center gap-3 px-5 py-4 text-[10px] uppercase tracking-[.15em]">Enquire about this property <ArrowUpRight size={15} /></a>
              <p className="mt-3 text-[10px] leading-5 text-white/40">Sample listing for portfolio demonstration. Verify all details and availability before commercial use.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-wide">
          <p className="eyebrow text-[#8b704b]">Continue exploring</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">You may also like</h2>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{related.map((item, i) => <PropertyCard key={item.id} property={item} index={i} />)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}