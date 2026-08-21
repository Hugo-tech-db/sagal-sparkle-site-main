import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import {
  EMAIL_HREF,
  INSTAGRAM_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  logo,
  services,
} from "./brand";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* Always show dark hero-style nav on homepage, white on other pages */
  const headerBg = isHome
    ? "shadow-md"
    : "bg-white shadow-sm";

  const navLink = isHome
    ? "text-sm font-medium text-white hover:text-gold transition-colors"
    : "text-sm font-medium text-navy hover:text-gold transition-colors";

  const quote = isHome ? (
    <button className="pill-btn text-sm" onClick={scrollToContact}>
      Get a free quote
    </button>
  ) : (
    <a className="pill-btn text-sm" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
      Get a free quote
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${headerBg}`}
      style={isHome ? { backgroundColor: "rgba(15, 20, 30, 0.97)", backdropFilter: "blur(12px)" } : undefined}
    >

      {/* Utility bar */}
      <div className={isHome ? "text-white" : "bg-navy text-white"}>
        <div className="mx-auto flex h-11 max-w-6xl items-center justify-end gap-4 px-4 text-[13px] sm:gap-6 sm:text-sm">
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noreferrer"
            aria-label="Sagal Green on Instagram"
            className="hover:text-gold"
          >
            <Instagram size={18} />
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-white/30 sm:block" />
          <a href={EMAIL_HREF} className="flex items-center gap-2 hover:text-gold">
            <Mail size={17} aria-hidden />
            <span className="hidden sm:inline">Click to email</span>
            <span className="sr-only sm:hidden">Click to email</span>
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-white/30 sm:block" />
          {isHome ? (
            <button onClick={scrollToContact} className="hidden hover:text-gold sm:inline">
              Contact us
            </button>
          ) : (
            <Link to="/contact" className="hidden hover:text-gold sm:inline">
              Contact us
            </Link>
          )}
          <span aria-hidden className="hidden h-4 w-px bg-white/30 sm:block" />
          <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-gold">
            <Phone size={17} aria-hidden />
            <span className="hidden sm:inline">Call us: {PHONE_DISPLAY}</span>
            <span className="sr-only sm:hidden">Call us at {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className={isHome ? "border-b border-white/10" : "border-b border-black/5 bg-white"}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Sagal Green Cleaning Services logo"
              className={isHome ? "h-14 w-auto brightness-0 invert" : "h-14 w-auto"}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/about" className={navLink}>
              About
            </Link>
            <div className="group relative">
              <Link
                to="/services"
                className={`flex items-center gap-1 ${navLink}`}
              >
                Services <ChevronDown size={15} aria-hidden />
              </Link>
              <div className="invisible absolute left-0 top-full w-72 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-lg px-3 py-2 text-sm text-charcoal hover:bg-greenlight hover:text-navy"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">{quote}</div>
            <button
              className={`rounded-md p-2 lg:hidden ${isHome ? "text-white" : "text-navy"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Menu size={24} className="hidden" /> : null}
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className={`border-t px-4 pb-4 lg:hidden ${isHome ? "border-white/10 bg-navy/95 backdrop-blur" : "border-black/5 bg-white"}`}>
            <nav className="flex flex-col" aria-label="Mobile">
              <Link to="/" onClick={() => setOpen(false)} className={`py-3 font-medium ${isHome ? "text-white" : "text-navy"}`}>
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className={`py-3 font-medium ${isHome ? "text-white" : "text-navy"}`}
              >
                About
              </Link>
              <button
                className={`flex items-center justify-between py-3 text-left font-medium ${isHome ? "text-white" : "text-navy"}`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  size={18}
                  className={servicesOpen ? "rotate-180 transition" : "transition"}
                  aria-hidden
                />
              </button>
              {servicesOpen && (
                <div className="flex flex-col border-l-2 border-greenlight pl-3">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className={`py-2 text-sm ${isHome ? "text-white/80" : "text-charcoal"}`}
                  >
                    All services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className={`py-2 text-sm ${isHome ? "text-white/80" : "text-charcoal"}`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`py-3 font-medium ${isHome ? "text-white" : "text-navy"}`}
              >
                Contact
              </Link>
              <div className="pt-3 sm:hidden">{quote}</div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
