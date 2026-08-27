import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF, services } from "./brand";

const fieldClass =
  "w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-sm text-charcoal focus:border-navy focus:outline-none focus:ring-2 focus:ring-gold/40";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

export default function ContactSection() {
  const [service, setService] = useState(services[0]!.title);

  function getFormData(form: HTMLFormElement) {
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const email = (fd.get("email") as string) || "";
    const address = (fd.get("address") as string) || "";
    const selectedService = (fd.get("service") as string) || service;
    const frequency = (fd.get("frequency") as string) || "One-time";
    const bedrooms = (fd.get("bedrooms") as string) || "N/A";
    const bathrooms = (fd.get("bathrooms") as string) || "N/A";
    const sqft = (fd.get("sqft") as string) || "";
    const date = (fd.get("date") as string) || "Flexible";
    const notes = (fd.get("notes") as string) || "None";

    return { name, phone, email, address, selectedService, frequency, bedrooms, bathrooms, sqft, date, notes };
  }

  function handleWhatsAppSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest("form");
    if (!form || !form.reportValidity()) return;

    const data = getFormData(form);

    const message = [
      `👋 *Quote Request — Sagal Green Cleaning*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone || "Not provided"}`,
      `✉️ *Email:* ${data.email}`,
      `📍 *Location:* ${data.address || "Regina"}`,
      ``,
      `🧹 *Service:* ${data.selectedService}`,
      `🔄 *Frequency:* ${data.frequency}`,
      `🏠 *Space:* ${data.bedrooms} Bed, ${data.bathrooms} Bath${data.sqft ? ` (~${data.sqft} sq ft)` : ""}`,
      `📅 *Preferred Date:* ${data.date}`,
      ``,
      `💬 *Notes:* ${data.notes}`,
    ].join("\n");

    const waUrl = `https://wa.me/16399994777?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  }

  function handleEmailSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest("form");
    if (!form || !form.reportValidity()) return;

    const data = getFormData(form);

    const lines = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Address / Neighbourhood: ${data.address}`,
      `Service Needed: ${data.selectedService}`,
      `Frequency: ${data.frequency}`,
      `Bedrooms: ${data.bedrooms}`,
      `Bathrooms: ${data.bathrooms}`,
      `Approx. Square Feet: ${data.sqft}`,
      `Preferred Date: ${data.date}`,
      `Notes: ${data.notes}`,
    ].join("\n");

    window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(
      `Quote Request: ${data.selectedService} - ${data.name}`,
    )}&body=${encodeURIComponent(lines)}`;
  }

  return (
    <section id="contact" className="bg-greenlight/60 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-greendark/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-greendark mb-2">
            Free Quotes & Fast Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">Get In Touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal">
            Message us on WhatsApp, call, or submit details below — we respond promptly with tailored quotes.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            className="pill-btn text-sm shadow-sm"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            aria-label="Message us on WhatsApp"
          >
            <MessageCircle size={18} aria-hidden /> Message on WhatsApp
          </a>
          <a className="pill-btn text-sm shadow-sm" href={EMAIL_HREF} aria-label="Email us">
            <Mail size={18} aria-hidden /> Email us
          </a>
          <a
            className="pill-btn text-sm shadow-sm"
            href={PHONE_HREF}
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <Phone size={18} aria-hidden /> {PHONE_DISPLAY}
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-[24px] border border-black/5 bg-white p-6 shadow-md sm:p-9"
        >
          <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-black/5">
            Request an Instant Free Quote
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Your Name *
              </label>
              <input id="name" name="name" required placeholder="e.g. Sarah Jenkins" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" placeholder="e.g. 306-555-0123" className={fieldClass} />
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="email">
              Email Address *
            </label>
            <input id="email" name="email" type="email" required placeholder="e.g. sarah@example.com" className={fieldClass} />
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="address">
              Address / Neighbourhood (Regina Only)
            </label>
            <input id="address" name="address" placeholder="e.g. Harbour Landing / Albert Park" className={fieldClass} />
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="service">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className={fieldClass}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <optgroup label="Home Cleaning">
                  <option value="Home Cleaning">Home Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Recurring Home Cleaning">Recurring Home Cleaning</option>
                </optgroup>
                <optgroup label="Office Cleaning">
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Recurring Office Cleaning">Recurring Office Cleaning</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Custom / Other Cleaning">Custom / Other Request</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="frequency">
                How Often
              </label>
              <select id="frequency" name="frequency" className={fieldClass}>
                <option value="One-time">One-time Clean</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Monthly">Monthly Reset</option>
              </select>
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bedrooms">
                Bedrooms
              </label>
              <input id="bedrooms" name="bedrooms" type="number" min="0" placeholder="e.g. 3" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="bathrooms">
                Bathrooms
              </label>
              <input id="bathrooms" name="bathrooms" type="number" min="0" placeholder="e.g. 2" className={fieldClass} />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="sqft">
                Approx. Square Feet (optional)
              </label>
              <input id="sqft" name="sqft" type="number" min="0" placeholder="e.g. 1800" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="date">
                Preferred Date / Timeframe
              </label>
              <input id="date" name="date" type="date" className={fieldClass} />
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="notes">
              Special Requests or Specific Areas of Focus
            </label>
            <textarea id="notes" name="notes" rows={3} placeholder="e.g. Focus on oven, baseboards, pets at home, lockbox code, etc." className={fieldClass} />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-md transition hover:bg-[#1EBE5D] hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle size={20} />
              Send Quote via WhatsApp (Instant)
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-navy/20 bg-white px-6 py-3.5 font-bold text-navy transition hover:border-navy hover:bg-navy/5 active:scale-[0.99] cursor-pointer"
            >
              <Mail size={18} />
              Send via Email
            </button>
          </div>

          <p className="mt-3.5 text-center text-xs text-charcoal/70">
            ⚡ WhatsApp opens with your details pre-filled for an immediate estimate response.
          </p>
        </form>
      </div>
    </section>
  );
}
