import logo from "@/assets/updated_logo.png";
import heroImage from "@/assets/hero_background.png";
import beforeImage from "@/assets/bedroom_before_clean.png";
import afterImage from "@/assets/bedroom_after_clean.png";
import residentialImage from "@/assets/residential_cleaning_header.jpg";
import ctaBannerImage from "@/assets/FOOTER_BACKGROUND.jpg";

export { logo, beforeImage, afterImage, ctaBannerImage, heroImage };
export const heroImageAlt =
  "Bright, spotless modern lobby cleaned by Sagalgreen Cleaning Services";

export const PHONE_DISPLAY = "639-999-4777";
export const PHONE_HREF = "tel:+16399994777";
export const WHATSAPP_BASE_URL = "https://wa.me/16399994777";
export const WHATSAPP_DEFAULT_MESSAGE = "Hi Sagalgreen, I'd like to get a quote for a cleaning service in Regina!";
export const WHATSAPP_HREF = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
export const EMAIL = "sagalgreen.services@yahoo.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const INSTAGRAM_HREF = "https://instagram.com/";

export type ServiceKey =
  | "home-cleaning"
  | "office-cleaning";

export type Service = {
  slug: ServiceKey;
  title: string;
  teaser: string;
  headerImage: string;
  headerAlt: string;
  tagline: string;
  body: string[];
  included: string[];
};

export const services: Service[] = [
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    teaser:
      "Full-service home cleaning tailored to your space and schedule. Ask about our Preference Clean if you only need certain rooms done.",
    headerImage: residentialImage,
    headerAlt: "Sagalgreen cleaner wiping down a kitchen counter during a home cleaning in Regina",
    tagline: "Come home to a space that finally feels like yours again.",
    body: [
      "There's a difference between a house that's \u201ccleaned\u201d and a house that feels cared for \u2014 and that difference is in the details. Our home cleaning service is built around your home, not a generic checklist. We take the time to understand how you actually live in your space, then clean it accordingly: the counters you cook on every day, the floors your kids play on, the corners that collect dust when life gets busy.",
      "Whether you need a thorough deep clean, recurring weekly or bi-weekly visits, or our Preference Clean where you choose only the priority rooms, we tailor our service to match your exact lifestyle and needs.",
      "Walk back into a home that smells fresh, feels lighter, and lets you actually relax the moment you walk through the door.",
    ],
    included: [
      "Kitchens cleaned, counters and surfaces sanitized",
      "Bathrooms scrubbed, disinfected, and polished",
      "Bedrooms dusted, organized, and tidied",
      "Living areas dusted and vacuumed",
      "Hard floors vacuumed and thoroughly mopped",
      "Preference Clean: choose only the rooms you need",
    ],
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    teaser:
      "Professional, discreet cleaning for offices, commercial workspaces, and studios across Regina.",
    headerImage: heroImage,
    headerAlt: "Spotless modern office space cleaned by Sagalgreen Cleaning Services",
    tagline: "A clean, productive workspace that makes the right impression on clients and staff.",
    body: [
      "Your workspace sets the tone for your business \u2014 for the clients who walk through the door and the team that works there every day. A clean office isn't just about appearances; it's about creating a healthy, distraction-free environment where people can focus on what they do best.",
      "We provide reliable after-hours or scheduled commercial cleaning tailored to your company's rhythm. From sanitizing shared workstations, conference rooms, and kitchenettes to vacuuming carpets, mopping hard floors, and keeping restrooms immaculate, we handle the details with discretion and consistency.",
      "No long locked-in contracts or complicated red tape \u2014 just dependable service that keeps your Regina workplace fresh, sanitized, and ready for business.",
    ],
    included: [
      "Workstations, desks, and high-touch surfaces sanitized",
      "Boardrooms and meeting spaces reset and dusted",
      "Restrooms fully disinfected, restocked, and polished",
      "Kitchenettes, breakrooms, and coffee counters cleaned",
      "Trash and recycling bins emptied and relined",
      "Hard floors mopped and carpets thoroughly vacuumed",
    ],
  },
];

export const serviceBySlug = (slug: string) => {
  if (slug === "residential-cleaning") return services.find((s) => s.slug === "home-cleaning");
  return services.find((s) => s.slug === slug);
};

/**
 * Storytelling metadata layered on top of the existing service data.
 * Kept separate so the original service copy stays untouched.
 */
export type ServiceMeta = {
  /** Short narrative label used to frame the service in the customer journey. */
  label: string;
  /** The problem this service solves, in one plain sentence. */
  solves: string;
  /** Who the service suits best. */
  suitedFor: string;
};

export const serviceMeta: Record<ServiceKey, ServiceMeta> = {
  "home-cleaning": {
    label: "The everyday & deep clean",
    solves: "Keeps your home comfortable, spotless, and presentable without spending your evenings on it.",
    suitedFor: "Busy households, families, and anyone who wants their home handled.",
  },
  "office-cleaning": {
    label: "The workspace clean",
    solves: "Maintains a fresh, hygienic, and professional office environment for your team and clients.",
    suitedFor: "Offices, commercial workspaces, clinics, studios, and businesses in Regina.",
  },
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What cleaning services do you offer?",
    a: "Home Cleaning and Office Cleaning across Regina, Saskatchewan — including deep cleans, recurring maintenance plans, and customized workspace schedules.",
  },
  {
    q: "What is included in a standard cleaning?",
    a: "Kitchens cleaned and surfaces sanitized, bathrooms scrubbed and disinfected, bedrooms dusted and tidied, living areas dusted and vacuumed, and floors vacuumed and mopped.",
  },
  {
    q: "What is included in a deep cleaning?",
    a: "Everything in a standard home cleaning, plus appliance interiors, baseboards, window sills and tracks, grout lines, and the hard-to-reach corners and edges regular cleaning skips.",
  },
  {
    q: "Can I request specific areas to be cleaned?",
    a: "Yes. Our Preference Clean lets you choose only the rooms that matter most for that visit, and every recurring plan follows a checklist built around your home.",
  },
  {
    q: "How do I get a quote?",
    a: "Message us on WhatsApp, call 639-999-4777, or send the quote request form on this site. Tell us the service, the size of your space, and how often you'd like it cleaned, and we'll send a free quote back shortly.",
  },
  {
    q: "How do I schedule a cleaning?",
    a: "Once you've accepted your quote, we agree on a date and time that works for you. For recurring plans we set the rhythm up front — weekly, bi-weekly, or monthly — and reschedule when life gets in the way.",
  },
  {
    q: "How do I pay?",
    a: "We accept Interac e-Transfer with Autodeposit. Payment details are provided after booking.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve homes, offices, and short-term rentals in Regina, Saskatchewan.",
  },
];
