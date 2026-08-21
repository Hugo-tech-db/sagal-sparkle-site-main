import { createFileRoute } from "@tanstack/react-router";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Expectations from "@/components/site/Expectations";
import Reveal from "@/components/site/Reveal";
import aboutUsImg from "@/assets/ABOUT_US.jpg";

const title = "About Us | Sagal Green Cleaning Services, Regina";
const description =
  "A small, locally owned cleaning business in Regina giving every home the personal attention it deserves.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={aboutUsImg}
          alt="About Sagal Green Cleaning Services"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Sagal Green Cleaning Services</h1>
          <p className="mt-4 text-lg text-white/85">
            Careful, reliable cleaning for homes and short-term rentals across Regina,
            Saskatchewan.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Why we exist
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Cleaning, done the way we'd want it done</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Sagal Green started with a simple observation: most people don't want a cleaning
              company, they want their time back and a home that feels good to be in. So we built
              the service around that — clear about what we do, careful about how we do it, and
              easy to work with from the first message.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              We're a small, locally owned business in Regina, which means the person quoting your
              home is the same person who cares how it turns out. We'd rather do a thorough job on
              the rooms that matter to you than a rushed pass over everything, and we'd rather tell
              you plainly what a visit covers than let you find out afterwards.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              That's the whole philosophy: attention to detail, reliable service, and treating
              someone's space with the same care we'd give our own.
            </p>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <Expectations />
    </>
  );
}
