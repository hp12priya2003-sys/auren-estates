import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";
import type { Property } from "@/lib/data";

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <article className="group">
      <Link href={`/properties/${property.id}`} className="block">
        <div className="image-zoom relative aspect-[4/4.5] bg-[#e5e0d6]">
          <Image src={property.image} alt={`${property.title}, ${property.area}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" priority={index < 2} />
          <span className="absolute left-4 top-4 bg-[#f3efe6] px-3 py-2 text-[9px] uppercase tracking-[.13em]">{property.tag}</span>
          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#f3efe6] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#b59a72] group-hover:text-white"><ArrowUpRight size={17} /></span>
        </div>
        <div className="flex items-start justify-between gap-3 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[.16em] text-[#7b7e74]">{property.area}</p>
            <h3 className="mt-2 font-display text-2xl sm:text-[27px]">{property.title}</h3>
            <p className="mt-2 text-xs text-[#777a70]">{property.type}</p>
          </div>
          <p className="pt-1 text-right text-xs font-semibold leading-5">{property.price}</p>
        </div>
      </Link>
      <div className="mt-5 flex flex-wrap gap-4 border-t border-black/10 pt-4 text-[10px] text-[#666a61]">
        <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.beds} beds</span>
        <span className="flex items-center gap-1.5"><Bath size={14} /> {property.baths} baths</span>
        <span className="flex items-center gap-1.5"><Ruler size={14} /> {property.size}</span>
      </div>
    </article>
  );
}