import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroBg1 from "@/assets/hero_background.png";
import heroBg2 from "@/assets/residential_cleaning_header.jpg";
import heroBg3 from "@/assets/picture_2.jpg";
import heroBg4 from "@/assets/after_clean.jpg";
import heroBg5 from "@/assets/airbnb_turnover_heade.jpg";

export const heroSlides = [
  {
    src: heroBg1,
    alt: "Pristine modern office interior cleaned by Sagalgreen Cleaning Services in Regina",
    tag: "Commercial & Office Cleaning",
  },
  {
    src: heroBg2,
    alt: "Spotless kitchen and surfaces in Regina home",
    tag: "Home & Kitchen Care",
  },
  {
    src: heroBg3,
    alt: "Immaculate living space cleaned by Sagalgreen",
    tag: "Deep Cleaning & Living Spaces",
  },
  {
    src: heroBg4,
    alt: "Crisp, fresh bedroom transformation",
    tag: "Bedrooms & Home Care",
  },
  {
    src: heroBg5,
    alt: "Spotless workspace and clean suite in Regina",
    tag: "Workspace & Office Care",
  },
];

export default function HeroBackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Crossfading Background Images with Subtle Ken Burns Zoom */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" },
          }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Soft Tint & Subtle Gradient Overlay for Photo Clarity & Text Legibility */}
      <div
        className="absolute inset-0 bg-black/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/20 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-black/10"
        aria-hidden
      />

      {/* Slide Indicators on Bottom Right (Interactive with pointer-events-auto) */}
      <div className="absolute bottom-5 right-6 z-20 hidden sm:flex items-center gap-2 pointer-events-auto select-none bg-navy/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mr-1">
          {heroSlides[current].tag}
        </span>
        <div className="flex gap-1.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to background image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === current
                  ? "w-6 bg-[#4CB944]"
                  : "w-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
