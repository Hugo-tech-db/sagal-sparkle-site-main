import { createFileRoute } from "@tanstack/react-router";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Expectations from "@/components/site/Expectations";
import Reveal from "@/components/site/Reveal";
import aboutUsImg from "@/assets/ABOUT_US.jpg";

const title = "About Us | Sagalgreen Cleaning Services, Regina";
const description =
  "A small, locally owned cleaning business in Regina providing dedicated Home Cleaning and Office Cleaning services.";

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
          alt="About Sagalgreen Cleaning Services"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Sagalgreen Cleaning Services</h1>
          <p className="mt-4 text-lg text-white/85">
            Careful, reliable cleaning for homes and commercial workspaces across Regina, Saskatchewan — offering dedicated Home Cleaning and Office Cleaning tailored to your space.
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
              Sagalgreen Cleaning Services started with a simple observation: most people don't want
              to spend their time cleaning, they want their time back and a home that feels good to be
              in. Businesses want the same for their spaces: a clean, fresh, and comfortable
              environment for their employees and customers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal">
              So we built our service around that idea — being clear about what we do, careful about
              how we do it, and easy to work with from the very first message.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              We're a small, locally owned business in Regina, which means the person quoting your
              home is the same person who cares about how the job turns out. We believe in doing a
              thorough job and paying attention to the areas that matter most to you, rather than
              rushing through a space just to get it done. We also believe in being upfront about what
              each cleaning includes, so you know exactly what to expect.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Our philosophy: attention to detail, reliable service, honest communication, and treating
              every space with the same care we would give our own.
            </p>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <Expectations />
    </>
  );
}
