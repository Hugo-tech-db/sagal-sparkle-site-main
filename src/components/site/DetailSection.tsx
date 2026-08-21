import Reveal from "./Reveal";
import { services } from "./brand";

const areas = [
  {
    title: "Kitchens",
    body: "Counters, sinks, stovetops and exterior appliance surfaces cleaned and sanitized — the surfaces you use most, first.",
  },
  {
    title: "Bathrooms",
    body: "Tubs, showers, toilets and sinks scrubbed and disinfected, mirrors and fixtures wiped down.",
  },
  {
    title: "Floors",
    body: "Vacuumed throughout and mopped where the surface calls for it, including the edges people usually skip.",
  },
  {
    title: "Frequently touched surfaces",
    body: "Handles, switch plates and other high-contact points wiped down as part of the routine.",
  },
  {
    title: "Living areas",
    body: "Dusted, tidied and vacuumed so the room you actually relax in feels finished.",
  },
  {
    title: "Bedrooms",
    body: "Surfaces dusted, floors cleaned and the room reset so it feels restful again.",
  },
];

/** Uses a real service header photo already on the site. */
const detailImage = services[1]!.headerImage;

export default function DetailSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              In the details
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What "properly cleaned" actually means</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal">
              A space feels clean because of specific things being done well, not because of a
              general effort. Here's where we put the attention.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-md">
              <img
                src={detailImage}
                alt="A gloved hand scrubbing a bathroom sink during a Sagal Green cleaning"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 60}
                className="rounded-2xl border border-black/5 bg-greenlight/30 p-6 transition duration-300 hover:-translate-y-1 hover:bg-greenlight/60 hover:shadow-md"
              >
                <h3 className="text-lg">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
