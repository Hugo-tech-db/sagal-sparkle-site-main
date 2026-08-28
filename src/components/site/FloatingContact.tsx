import { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "./brand";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls down slightly (> 180px)
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 select-none">
          {/* Expanded Menu Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-black/10 text-navy"
              >
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1EBE5D] hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-navy/90 hover:scale-[1.02]"
                >
                  <Phone size={18} />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Trigger Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center gap-2"
          >
            {/* Direct Quick WhatsApp Link */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp with Sagalgreen"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
            >
              <MessageCircle size={28} className="transition-transform group-hover:rotate-12" />
              {/* Pulsing indicator */}
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-greendark"></span>
              </span>

              {/* Tooltip on Desktop */}
              <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
                Instant Quote on WhatsApp
              </span>
            </a>

            {/* Quick Toggle for Options on Mobile / Desktop */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle contact menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-md border border-black/10 transition hover:bg-gray-50 active:scale-95 cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Phone size={18} />}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
