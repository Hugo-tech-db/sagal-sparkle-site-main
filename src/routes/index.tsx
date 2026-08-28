import { createFileRoute, Link } from "@tanstack/react-router";
import ContactSection from "@/components/site/ContactSection";
import ServicesGrid from "@/components/site/ServicesGrid";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import ProblemSection from "@/components/site/ProblemSection";
import OutcomeSection from "@/components/site/OutcomeSection";
import HomeShineSection from "@/components/site/HomeShineSection";
import HowItWorks from "@/components/site/HowItWorks";
import FaqSection from "@/components/site/FaqSection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import Reveal from "@/components/site/Reveal";
import HeroBackgroundSlider from "@/components/site/HeroBackgroundSlider";
import { CheckCircle2, ShieldCheck, UserCheck, HomeIcon } from "lucide-react";
import {
  WHATSAPP_HREF,
} from "@/components/site/brand";

const heroServices = [
  "Home Cleaning",
  "Office Cleaning",
  "Deep Cleaning & Refresh",
  "Recurring Cleaning Plans",
  "Preference & Custom Cleans",
];

const heroTrust = [
  { icon: ShieldCheck, title: "Trusted & Reliable", body: "Satisfaction guaranteed" },
  { icon: UserCheck, title: "Trained Professionals", body: "Experienced and thorough" },
  { icon: HomeIcon, title: "Detail-Oriented", body: "We don't just clean, we care." },
];

const title = "Sagalgreen Cleaning Services | Home & Office Cleaning in Regina";
const description =
  "Professional home and office cleaning in Regina, Saskatchewan — reliable, detail-oriented cleaning for residences and commercial workspaces. Free quotes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        {/* Dynamic Smooth Crossfading Background Slider */}
        <HeroBackgroundSlider />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:pb-20 sm:pt-20">
          {/* Semi-transparent dark panel wrapping the text — matching the reference */}
          <div className="max-w-xl rounded-2xl bg-navy/80 backdrop-blur-md p-8 sm:p-10 border border-white/10 shadow-2xl">
            <Reveal>
              <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
                Professional Cleaning.
                <span className="block text-[#4CB944]">Exceptional Results.</span>
              </h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 text-base text-white/85">
                At Sagalgreen Cleaning Services, we provide
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-3 space-y-1.5">
                {heroServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 size={18} className="shrink-0 text-[#4CB944]" aria-hidden />
                    <span className="text-sm sm:text-base">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-sm text-white/80">
                taking cleaning off your to-do list so you can enjoy a fresh, comfortable space.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="pill-btn" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  Get a free quote
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-7 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
                >
                  Our services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/15 pt-6">
                {heroTrust.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-2.5">
                    <Icon size={22} className="mt-0.5 shrink-0 text-[#4CB944]" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold text-white">{title}</p>
                      <p className="text-xs text-white/70">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      <ProblemSection />

      <OutcomeSection />

      <section className="bg-greenlight/40 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl">Our cleaning services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal">
              Each service solves a different problem. Open any card to see exactly what it
              covers and who it suits.
            </p>
          </Reveal>
          <ServicesGrid />
        </div>
      </section>

      <HomeShineSection />

      <HowItWorks />

      <WhyChooseUs />

      <TestimonialsSection />

      <FaqSection />

      <ContactSection />
    </>
  );
}
