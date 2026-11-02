export const WHATSAPP_NUMBER = "7019260151";

export type Property = {
  id: string;
  title: string;
  area: string;
  type: string;
  price: string;
  beds: string;
  baths: string;
  size: string;
  image: string;
  tag: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: "palm-residence",
    title: "The Palm Residence",
    area: "Palm Jumeirah",
    type: "Waterfront Villa",
    price: "AED 18,500,000",
    beds: "5",
    baths: "6",
    size: "6,420 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90",
    tag: "Waterfront living",
    description: "A contemporary private residence imagined around open spaces, considered materials and a seamless relationship with the outdoors."
  },
  {
    id: "marina-penthouse",
    title: "Marina Horizon",
    area: "Dubai Marina",
    type: "Penthouse",
    price: "AED 8,250,000",
    beds: "3",
    baths: "4",
    size: "2,680 sq ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
    tag: "Skyline views",
    description: "A light-filled penthouse with expansive glazing, generous entertaining spaces and a panoramic city outlook."
  },
  {
    id: "downtown-apartment",
    title: "The Address Edit",
    area: "Downtown Dubai",
    type: "Luxury Apartment",
    price: "AED 3,150,000",
    beds: "2",
    baths: "2",
    size: "1,420 sq ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    tag: "City living",
    description: "A refined city apartment with warm finishes, a flexible layout and convenient access to Downtown's cultural destinations."
  },
  {
    id: "hills-villa",
    title: "Olive Grove Villa",
    area: "Dubai Hills Estate",
    type: "Family Villa",
    price: "AED 7,900,000",
    beds: "4",
    baths: "5",
    size: "4,860 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
    tag: "Room to grow",
    description: "A modern family home shaped by natural textures, quiet garden moments and a welcoming sense of space."
  },
  {
    id: "creek-residence",
    title: "Creekside One",
    area: "Dubai Creek Harbour",
    type: "Luxury Apartment",
    price: "AED 2,450,000",
    beds: "2",
    baths: "2",
    size: "1,190 sq ft",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
    tag: "New perspective",
    description: "A considered residence with a bright, open-plan living space and a setting connected to the waterfront."
  },
  {
    id: "jumeirah-townhouse",
    title: "Jumeirah Courtyard",
    area: "Jumeirah",
    type: "Townhouse",
    price: "AED 5,600,000",
    beds: "3",
    baths: "4",
    size: "3,110 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    tag: "Private retreat",
    description: "An elegant townhouse concept that pairs modern architecture with layered, inviting interiors."
  },
  {
    id: "emirates-hills-estate", title: "The Grand Majlis", area: "Emirates Hills", type: "Signature Villa", price: "AED 24,900,000", beds: "6", baths: "7", size: "8,150 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90", tag: "Private estate",
    description: "A gracious estate concept with generous entertaining areas, landscaped outdoor spaces and a calm, considered material palette."
  },
  {
    id: "bluewaters-residence", title: "Bluewaters Penthouse", area: "Bluewaters Island", type: "Penthouse", price: "AED 12,750,000", beds: "4", baths: "5", size: "3,740 sq ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90", tag: "Island address",
    description: "A contemporary island residence concept with expansive glazing, refined finishes and room for memorable gatherings."
  },
  {
    id: "district-one-villa", title: "Lagoon House", area: "District One", type: "Luxury Villa", price: "AED 16,200,000", beds: "5", baths: "6", size: "6,900 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90", tag: "Lagoon living",
    description: "A tranquil villa concept inspired by resort-style living, natural textures and a strong connection between indoor and outdoor spaces."
  },
  {
    id: "business-bay-residence", title: "The Opus Residence", area: "Business Bay", type: "Luxury Apartment", price: "AED 4,850,000", beds: "2", baths: "3", size: "1,780 sq ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90", tag: "Design-led living",
    description: "A design-led city residence concept balancing sculptural details, generous natural light and an effortless everyday layout."
  }
];

export const areas = [
  { name: "Palm Jumeirah", note: "Waterfront homes & private villas", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90", detail: "Private beachfront living, signature villas and sweeping Arabian Gulf views.", gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"] },
  { name: "Downtown Dubai", note: "A vibrant city address", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90", detail: "Iconic skyline views, culture on your doorstep and a lively cosmopolitan rhythm.", gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"] },
  { name: "Dubai Marina", note: "Waterfront energy & skyline living", image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=90", detail: "Waterfront promenades, marina views and high-rise homes with a distinctly urban energy.", gallery: ["https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"] },
  { name: "Dubai Hills Estate", note: "Green spaces & contemporary living", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90", detail: "Leafy streets, contemporary family homes and open green spaces for a slower pace.", gallery: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"] }
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
