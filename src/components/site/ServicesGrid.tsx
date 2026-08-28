import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Check, Sparkles, RefreshCw, Briefcase, Building, KeyRound, BedDouble } from "lucide-react";
import { services, serviceMeta, type ServiceKey } from "./brand";
import Reveal from "./Reveal";
import homeIcon from "@/assets/icon_residential.png";
import officeIcon from "@/assets/icon_office.png";
import airbnbIcon from "@/assets/icon_airbnb.png";

const icons: Record<ServiceKey, string> = {
  "home-cleaning": homeIcon,
  "office-cleaning": officeIcon,
  "airbnb-cleaning": airbnbIcon,
};

export default function ServicesGrid() {
  const [open, setOpen] = useState<ServiceKey | null>(null);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {services.map((s, i) => {
        const meta = serviceMeta[s.slug];
        const isOpen = open === s.slug;
        return (
          <Reveal
            key={s.slug}
            delay={i * 90}
            className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 sm:p-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto grid h-[120px] w-[120px] place-items-center rounded-full bg-greenlight transition duration-300">
              <img
                src={icons[s.slug]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-[72px] w-[72px] object-contain"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {meta.label}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-navy">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal">{meta.solves}</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{s.teaser}</p>

            {/* Sub-services for Home Cleaning */}
            {s.slug === "home-cleaning" && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <Sparkles size={11} aria-hidden /> Deep Cleaning
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <RefreshCw size={11} aria-hidden /> Recurring Care
                </span>
              </div>
            )}

            {/* Sub-services for Office Cleaning */}
            {s.slug === "office-cleaning" && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <Building size={11} aria-hidden /> Commercial Workspaces
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <Briefcase size={11} aria-hidden /> Scheduled Maintenance
                </span>
              </div>
            )}

            {/* Sub-services for Airbnb Cleaning */}
            {s.slug === "airbnb-cleaning" && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <KeyRound size={11} aria-hidden /> Fast Turnovers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CB944]/10 px-3 py-1 text-xs font-semibold text-[#3da835]">
                  <BedDouble size={11} aria-hidden /> Guest Ready
                </span>
              </div>
            )}

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`included-${s.slug}`}
              onClick={() => setOpen(isOpen ? null : s.slug)}
              className="mx-auto mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition hover:text-gold"
            >
              {isOpen ? "Hide what's included" : "See what's included"}
              <ChevronDown
                size={16}
                aria-hidden
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              id={`included-${s.slug}`}
              className={`grid overflow-hidden text-left transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <ul className="mt-4 space-y-2 border-t border-black/5 pt-4">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-greendark" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-charcoal/80">
                  <span className="font-semibold text-navy">Best for:</span> {meta.suitedFor}
                </p>
              </div>
            </div>

            <div className="flex-1" />
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="pill-btn mt-6 text-sm"
            >
              Read more
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
