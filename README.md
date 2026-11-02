# Auren Estates — Premium Real Estate Website

A responsive luxury real estate portfolio concept for **Auren Estates**, built with Next.js App Router, TypeScript, Tailwind CSS v4 and Framer Motion.

## Features

- Cinematic, animated hero with parallax-style scroll movement and responsive layout.
- Editorial luxury visual system: forest green, warm ivory, champagne accents, Cormorant Garamond and Manrope.
- Responsive navigation with an animated mobile menu.
- Filterable featured property grid.
- Individual property detail routes generated from typed sample data.
- Neighbourhood discovery section.
- Seven-step interactive property preference questionnaire with animated transitions.
- Appointment request form with validation and pre-filled WhatsApp messages.
- Floating CTA patterns, reduced-motion support, metadata and luxury footer.
- Component-based editable source code.
- `.gitignore` includes `/node_modules`.

## Requirements

- Node.js 20.9 or later.
- npm.

## Run locally

1. Extract the ZIP.
2. Open the `auren-estates` folder in VS Code.
3. Open a terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## Main folders

```text
app/
  globals.css
  layout.tsx
  page.tsx
  not-found.tsx
  properties/[id]/page.tsx
components/
  BookingForm.tsx
  Footer.tsx
  Navbar.tsx
  PropertyCard.tsx
  PropertyFinder.tsx
  Reveal.tsx
lib/
  data.ts
```

## Edit the content

- **WhatsApp number:** edit `WHATSAPP_NUMBER` in `lib/data.ts`.
- **Property listings, prices and images:** edit `properties` in `lib/data.ts`.
- **Community cards:** edit `areas` in `lib/data.ts`.
- **Main homepage sections:** edit `app/page.tsx`.
- **Booking form fields:** edit `components/BookingForm.tsx`.
- **Property questionnaire:** edit `components/PropertyFinder.tsx`.
- **Brand colours and motion-friendly CSS:** edit `app/globals.css`.
- **Footer and brand credit:** edit `components/Footer.tsx`.

## WhatsApp and booking behaviour

The appointment and property enquiry forms validate required fields, then open WhatsApp with a pre-filled message for `7019260151`. The visitor still needs to press **Send** in WhatsApp. This is a contact-request flow, not a live calendar booking system. A real booking calendar, agent availability, CRM integration and server-side lead storage must be connected separately before production.

## Image and content notes

The site references remote Unsplash images. Internet access is needed to load them. Verify image availability, usage rights, prices, property specifications, listing availability, agent details, legal wording and business contact information before using the website for a real client. The current brand and listings are a fictional portfolio concept; no reviews or performance results are presented as verified facts.

## Production checklist

- Replace fictional brand details and sample property data with client-approved content.
- Confirm all image licensing and replace any image that is unsuitable.
- Add a real privacy policy and consent handling.
- Connect a live scheduling provider or backend if actual appointment confirmation is required.
- Test WhatsApp on mobile and desktop, plus all form states.
- Run `npm run build` and fix any warnings or errors before deployment.
