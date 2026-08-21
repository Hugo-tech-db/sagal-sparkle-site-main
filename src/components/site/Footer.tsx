import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import CtaBanner from "./CtaBanner";

import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  ctaBannerImage,
  logo,
} from "./brand";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={ctaBannerImage}
        alt="Gloved hand holding a spray bottle while cleaning a Regina home"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/85" aria-hidden />

      <CtaBanner />

      <div className="relative mx-auto max-w-6xl px-4 pb-14">
        <div className="border-t border-white/15 pt-12" />
        <footer className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <img
              src={logo}
              alt="Sagal Green Cleaning Services logo"
              className="mb-4 h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/80">
              Small business. Personal touch. Spotless results. Proudly serving Regina,
              Saskatchewan.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <Link to="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  Why choose us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message us on WhatsApp"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <MessageCircle size={17} aria-hidden /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  aria-label={`Call us at ${PHONE_DISPLAY}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone size={17} aria-hidden /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  aria-label="Email Sagal Green Cleaning Services"
                  className="flex items-center gap-2 break-all hover:text-gold"
                >
                  <Mail size={17} aria-hidden /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
              Payment
            </h3>
            <p className="text-sm text-white/85">
              Interac e-Transfer with Autodeposit accepted.
            </p>
          </div>
        </footer>
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © 2026 Sagal Green Cleaning Services. All rights reserved.
        </div>
      </div>
    </div>
  );

}
