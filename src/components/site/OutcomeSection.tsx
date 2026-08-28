import Reveal from "./Reveal";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "./brand";
import { CircularTestimonials, type GalleryItem } from "@/components/ui/circular-testimonials";

import afterClean1 from "@/assets/after_clean.jpg";
import afterClean2 from "@/assets/after_clean_2.jpg";
import beforeClean1 from "@/assets/before_clean.jpg";
import beforeClean2 from "@/assets/before_clean_2.jpg";
import bedroomBefore from "@/assets/bedroom_before_clean.png";
import bedroomAfter from "@/assets/bedroom_after_clean.png";

const jobsDone: GalleryItem[] = [
  {
    name: "Bedroom Deep Clean",
    designation: "After Cleaning",
    quote: "Spotless surfaces, crisp vacuum tracks, and a fresh, welcoming bedroom area.",
    src: afterClean1,
  },
  {
    name: "Bedroom Before Clean",
    designation: "Before Cleaning",
    quote: "Daily dust, shoe grime, and high-traffic wear before our comprehensive clean.",
    src: beforeClean1,
  },
  {
    name: "Bedroom after cleaning",
    designation: "After Cleaning",
    quote: "A truly clean room where you can finally relax and enjoy your space.",
    src: afterClean2,
  },
  {
    name: "Bedroom before clean 2",
    designation: "Before Cleaning",
    quote: "A messy room before our comprehensive clean.",
    src: beforeClean2,
  },
  {
    name: "Master Bedroom Transformation",
    designation: "After Cleaning",
    quote: "Crisp freshly made linens, thoroughly dusted surfaces, and a restful sanctuary.",
    src: bedroomAfter,
  },
  {
    name: "Master Bedroom Clutter",
    designation: "Before Cleaning",
    quote: "Unmade bed, dusty baseboards, and end-of-week clutter before our reset.",
    src: bedroomBefore,
  },
];

const highlights = [
  "100% Real Regina Homes — no staging or stock imagery",
  "Top-to-bottom care on baseboards, corners, and appliances",
  "Reliable, trained cleaning professionals on every visit",
];

export default function OutcomeSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Wheel — full width on mobile, half on desktop */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-3 sm:p-6 shadow-sm border border-black/5">
              <CircularTestimonials
                testimonials={jobsDone}
                autoplay={true}
                colors={{
                  name: "#0a1f44",
                  designation: "#d4a72c",
                  testimony: "#333a44",
                  arrowBackground: "#0a1f44",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#4CB944",
                }}
                fontSizes={{
                  name: "1.1rem",
                  designation: "0.75rem",
                  quote: "0.875rem",
                }}
              />
            </div>
          </div>

          {/* Text Content — centred on mobile, left on desktop */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-greenlight px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-greendark mb-3">
                <Sparkles size={14} className="text-[#4CB944]" /> Real Results
              </div>
              <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-5xl">
                Talk is easy.
                <span className="block text-[#4CB944]">Clean is proof.</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">
                Drag across the photo and see exactly what a Sagalgreen visit does to a room — no filters, no staging, just the difference we make.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-5 space-y-2.5 text-left inline-block">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#4CB944]" aria-hidden />
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <MessageCircle size={17} /> Get a free quote
                </a>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-navy/20 bg-white px-7 py-3 text-sm font-medium text-navy transition hover:border-navy hover:bg-navy/5"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}