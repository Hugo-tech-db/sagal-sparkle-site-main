import logo from "@/assets/sagal_new_logo.png";
import heroImage from "@/assets/hero_background.png";
import beforeImage from "@/assets/bedroom_before_clean.png";
import afterImage from "@/assets/bedroom_after_clean.png";
import residentialImage from "@/assets/residential_cleaning_header.jpg";
import deepImage from "@/assets/deep_cleaning_header.jpg";
import moveImage from "@/assets/move_in_move_out_header.jpg";
import recurringImage from "@/assets/recurring_cleaning_header.jpg";
import airbnbImage from "@/assets/airbnb_turnover_heade.jpg";
import ctaBannerImage from "@/assets/FOOTER_BACKGROUND.jpg";

export { logo, beforeImage, afterImage, ctaBannerImage, heroImage };
export const heroImageAlt =
  "Bright, spotless modern lobby cleaned by Sagal Green Cleaning Services";

export const PHONE_DISPLAY = "639-999-4777";
export const PHONE_HREF = "tel:+16399994777";
export const WHATSAPP_HREF = "https://wa.me/16399994777";
export const EMAIL = "sagalgreen.services@yahoo.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const INSTAGRAM_HREF = "https://instagram.com/";

export type ServiceKey =
  | "residential-cleaning"
  | "office-cleaning"
  | "move-in-move-out-cleaning"
  | "airbnb-turnovers";

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
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    teaser:
      "Full-service home cleaning tailored to your space and schedule. Ask about our Preference Clean if you only need certain rooms done.",
    headerImage: residentialImage,
    headerAlt: "Sagal Green cleaner wiping down a kitchen counter during a residential cleaning",
    tagline: "Come home to a space that finally feels like yours again.",
    body: [
      "There's a difference between a house that's \u201ccleaned\u201d and a house that feels cared for \u2014 and that difference is in the details. Our residential cleaning service is built around your home, not a generic checklist. We take the time to understand how you actually live in your space, then clean it accordingly: the counters you cook on every day, the floors your kids play on, the corners that collect dust when life gets busy.",
      "Don't need the whole house done? Our Preference Clean lets you choose exactly which rooms matter most this time \u2014 because not every week needs the full treatment, and we'd rather do a great job on what you need than a rushed job on everything.",
      "Walk back into a home that smells fresh, feels lighter, and lets you actually relax the moment you walk through the door.",
    ],
    included: [
      "Kitchens cleaned and surfaces sanitized",
      "Bathrooms scrubbed and disinfected",
      "Bedrooms dusted and tidied",
      "Living areas dusted and vacuumed",
      "Floors vacuumed and mopped",
      "Preference Clean: choose only the rooms you need",
    ],
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    teaser:
      "Professional, discreet cleaning for offices, commercial workspaces, and studios across Regina.",
    headerImage: heroImage,
    headerAlt: "Spotless modern office space cleaned by Sagal Green Cleaning Services",
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
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In/Move-Out Cleaning",
    teaser:
      "Leave the cleanup to us. We'll get your old place spotless or your new place move-in ready.",
    headerImage: moveImage,
    headerAlt: "Broom and dustpan on a hardwood floor during a move-out cleaning",
    tagline: "Start your next chapter in a space that's truly ready for you.",
    body: [
      "Moving is one of life's most stressful transitions \u2014 the last thing you need is to spend your final hours in an old home scrubbing baseboards, or your first hours in a new one wiping down someone else's dust. We handle the cleaning so you can focus on everything else moving demands.",
      "For move-outs, we get every inch spotless for your final walkthrough \u2014 the kind of clean that gets your deposit back without a fight. For move-ins, we make sure your new place feels genuinely new: cabinets wiped, appliances cleaned inside and out, floors ready for your first night's sleep in a space that's finally, completely yours.",
    ],
    included: [
      "Full interior clean, top to bottom",
      "Inside cabinets and drawers",
      "Appliance interiors",
      "Floors vacuumed and mopped",
      "Bathrooms fully sanitized",
      "Final walkthrough ready finish",
    ],
  },
  {
    slug: "airbnb-turnovers",
    title: "Airbnb/Short-Term Rental Turnovers",
    teaser:
      "Fast, reliable turnovers between guests, so your listing is always ready for a 5-star check-in.",
    headerImage: airbnbImage,
    headerAlt: "Housekeeper smoothing fresh white linens on a bed during a short-term rental turnover",
    tagline: "Every guest's first impression, handled perfectly, every time.",
    body: [
      "In short-term rentals, cleanliness isn't a nice-to-have \u2014 it's the difference between a 5-star review and a refund request. We understand the pressure hosts are under: tight turnaround windows, back-to-back bookings, and zero room for a bad first impression. That's exactly what we're built for.",
      "Fast, thorough turnovers between checkouts and check-ins, timed around your actual booking calendar \u2014 not the other way around. Fresh linens, reset staging, and a space that looks exactly like your listing photos promised. Your guests notice the difference the second they walk in, and so does your rating.",
    ],
    included: [
      "Full turnover clean between guests",
      "Linen and towel reset",
      "Restocking checklist support",
      "Guest-ready staging",
      "Turnarounds timed to your bookings",
      "Damage and issue reporting",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

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
  "residential-cleaning": {
    label: "The everyday clean",
    solves: "Keeps your home comfortable and presentable without spending your evenings on it.",
    suitedFor: "Busy households, families, and anyone who wants their home handled.",
  },
  "office-cleaning": {
    label: "The workspace clean",
    solves: "Maintains a fresh, hygienic, and professional office environment for your team and clients.",
    suitedFor: "Offices, commercial workspaces, clinics, studios, and businesses in Regina.",
  },
  "move-in-move-out-cleaning": {
    label: "Starting fresh",
    solves: "Takes the cleaning off your plate during a move you already have enough to manage.",
    suitedFor: "Tenants, homeowners, and landlords between occupants.",
  },
  "airbnb-turnovers": {
    label: "Guest ready, every time",
    solves: "Resets your listing between bookings inside a tight turnaround window.",
    suitedFor: "Short-term rental hosts and property managers in Regina.",
  },
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What cleaning services do you offer?",
    a: "Residential cleaning, office cleaning, move-in/move-out cleaning, and Airbnb or short-term rental turnovers — all across Regina, Saskatchewan.",
  },
  {
    q: "What is included in a standard cleaning?",
    a: "Kitchens cleaned and surfaces sanitized, bathrooms scrubbed and disinfected, bedrooms dusted and tidied, living areas dusted and vacuumed, and floors vacuumed and mopped.",
  },
  {
    q: "What is included in a deep cleaning?",
    a: "Everything in a residential cleaning, plus appliance interiors, baseboards, window sills and tracks, grout lines, and the hard-to-reach corners and edges regular cleaning skips.",
  },
  {
    q: "Can I request specific areas to be cleaned?",
    a: "Yes. Our Preference Clean lets you choose only the rooms that matter most for that visit, and every recurring plan follows a checklist built around your home.",
  },
  {
    q: "How do I get a quote?",
    a: "Message us on WhatsApp, call 639-999-4777, or send the quote request form on this site. Tell us the service, the size of your home, and how often you'd like it cleaned, and we'll send a free quote back shortly.",
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
    a: "We serve homes and short-term rentals in Regina, Saskatchewan.",
  },
];
