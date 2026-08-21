import {
  ShieldCheck,
  ClipboardList,
  HeartHandshake,
  MapPin,
  Sparkles,
  Award,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Reveal from "./Reveal";
import { WHATSAPP_HREF } from "./brand";

const trustCards = [
  {
    Icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    desc: "From first contact to final walkthrough, we stand behind every clean. If something isn't perfect, we fix it promptly.",
  },
  {
    Icon: Sparkles,
    title: "Meticulous Attention to Detail",
    desc: "We focus on the hidden corners, baseboards, and high-touch areas that ordinary quick cleans tend to skip.",
  },
  {
    Icon: Award,
    title: "High-Standard Cleaning Supplies",
    desc: "Professional-grade cleaning products and equipment that sanitize effectively and leave your home spotless.",
  },
  {
    Icon: ClipboardList,
    title: "Tailored to Your Schedule",
    desc: "Preference clean options allow you to choose specific priority rooms with zero locked-in long contracts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0a1f44] py-16 sm:py-24 text-white overflow-hidden">
      {/* Ambient background blur elements */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#4CB944]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#4CB944]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#4CB944] backdrop-blur-sm">
              <HeartHandshake size={15} /> Why Choose Sagal Green
            </span>
            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white"
              style={{ color: "#ffffff" }}
            >
              Support You Can Trust. <span className="text-[#4CB944]">Results You Can See.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
              As a dedicated local Regina cleaning service, we combine personal attention with the highest professional cleaning standards.
            </p>
          </Reveal>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map(({ Icon, title, desc }, idx) => (
            <Reveal key={title} delay={idx * 70}>
              <div className="h-full rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#4CB944]/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4CB944]/20 text-[#4CB944] mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ color: "#ffffff" }}>
                  {title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <Reveal delay={280}>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/10 p-6 sm:p-8 backdrop-blur-md border border-white/15">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4CB944]/20 text-[#4CB944]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-base sm:text-lg" style={{ color: "#ffffff" }}>
                  Proudly Serving Regina, Saskatchewan
                </p>
                <p className="text-xs sm:text-sm text-white/70">
                  Harbour Landing • Greens on Gardiner • Albert Park • University Park • Normanview • Whitmore Park
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="pill-btn text-sm inline-flex items-center gap-2"
              >
                <MessageCircle size={17} /> Get a free quote
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:border-white"
              >
                About us <ArrowRight size={15} className="ml-1.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
