import mockupAbout from "@/assets/MOCK_UP_ABOUT.jpg";
import Reveal from "./Reveal";
import { Link } from "@tanstack/react-router";
import { WHATSAPP_HREF } from "./brand";

export default function SupportBanner() {
  return (
    <section className="relative overflow-hidden min-h-[340px] flex items-center">
      {/* Background image */}
      <img
        src={mockupAbout}
        alt="Sagal Green — support you can trust"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#4CB944] mb-4">
            Sagal Green Cleaning Services
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
          >
            Support You Can Trust
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            From first contact to final walkthrough, we stand behind every clean we deliver — because your satisfaction is the standard.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="pill-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Get a free quote
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#4CB944] hover:text-[#4CB944]"
            >
              Learn about us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
