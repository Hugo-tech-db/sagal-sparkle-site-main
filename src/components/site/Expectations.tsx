import { HandHeart, MessagesSquare, Route, ScanSearch } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    Icon: MessagesSquare,
    title: "Clear communication",
    body: "You'll know what you're booking, what it covers and when we're coming — before we start.",
  },
  {
    Icon: ScanSearch,
    title: "Attention to detail",
    body: "We focus on the areas that make the biggest difference to how a home actually feels.",
  },
  {
    Icon: Route,
    title: "A straightforward experience",
    body: "Simple quoting, simple scheduling, and a clear picture of what happens at each step.",
  },
  {
    Icon: HandHeart,
    title: "Care for your space",
    body: "Your home is treated respectfully, and we leave it the way we'd want to find our own.",
  },
];

export default function Expectations() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What you can expect
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">No surprises, start to finish</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map(({ Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-greenlight">
                <Icon size={22} strokeWidth={1.7} aria-hidden className="text-greendark" />
              </span>
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
