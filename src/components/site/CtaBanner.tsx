import { Link } from "@tanstack/react-router";
import { WHATSAPP_HREF } from "./brand";

/**
 * Content-only closing CTA. The background image is owned by <SiteFooter />, which
 * renders this banner and the footer inside one shared image container so the
 * photo reads as a single continuous image across both sections.
 */
export default function CtaBanner() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
      <h2 className="text-3xl text-white sm:text-4xl">Ready for a cleaner home?</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
        You've got enough on your schedule. Let Sagalgreen take cleaning off your list — one
        quick message and we'll have your free quote back to you shortly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a className="pill-btn" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
          Get a free quote
        </a>
        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-3 font-medium text-white transition hover:border-gold hover:text-gold"
        >
          View our services
        </Link>
      </div>
    </section>
  );
}
