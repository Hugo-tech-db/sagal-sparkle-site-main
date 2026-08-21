import Reveal from "./Reveal";
import { WHATSAPP_HREF } from "./brand";
import bucketImage from "@/assets/cleaning_bucket_cutout.png";
import { TextReveal } from "@/components/ui/cascade-text";

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top accent band — yellow strip with "Proudly serving Regina" hover text */}
      <div
        className="flex h-20 w-full items-center sm:h-28"
        style={{ backgroundColor: "#F5A63F" }}
      >
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 flex justify-start">
          <TextReveal
            text="Proudly serving Regina"
            as="span"
            fontSize="clamp(1rem, 4vw, 2rem)"
            color="#7a4800"
            hoverColor="#ffffff"
            staggerDelay={28}
            duration={260}
            style={{ letterSpacing: "0.1em" }}
          />
        </div>
      </div>


      <div className="relative" style={{ backgroundColor: "#1FA189" }}>
        {/* Soft arc detail */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 h-[140%] w-[70%] rounded-full bg-white/5"
        />

        {/* Bucket straddling the two bands with soft realistic shadow */}
        <div className="pointer-events-none absolute right-3 -top-12 z-10 w-32 sm:right-8 sm:-top-16 sm:w-48 lg:right-16 lg:-top-20 lg:w-60">
          <img
            src={bucketImage}
            alt="Bucket filled with cleaning supplies"
            loading="lazy"
            className="w-full drop-shadow-2xl select-none"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Cleaning always takes
              <span className="block">the time you don't have</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Most people don't put off cleaning because they don't care. They put it off because
              there's simply no room left in the week for it — so we take it off your list.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex justify-center">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-10 py-3.5 font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: "#F0A340" }}
              >
                Book us today
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
