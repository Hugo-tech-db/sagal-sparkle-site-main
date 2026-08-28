import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, MessageCircle, Users } from "lucide-react";
import { EMAIL_HREF, WHATSAPP_HREF, serviceBySlug, serviceMeta } from "@/components/site/brand";
import HowItWorks from "@/components/site/HowItWorks";
import Reveal from "@/components/site/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | Sagalgreen Cleaning Services" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.service.title} in Regina | Sagalgreen Cleaning Services`;
    const description = loaderData.service.teaser;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const meta = serviceMeta[service.slug];

  return (
    <>
      <section className="relative h-[340px] overflow-hidden sm:h-[400px]">
        <img
          src={service.headerImage}
          alt={service.headerAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" aria-hidden />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {meta.label}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg italic text-gold">{service.tagline}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal className="mb-10 rounded-2xl border border-black/5 bg-greenlight/40 p-7">
            <p className="text-lg font-medium leading-relaxed text-navy">{meta.solves}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-charcoal">
              <Users size={18} aria-hidden className="mt-0.5 shrink-0 text-greendark" />
              <span>
                <span className="font-semibold text-navy">Best for:</span> {meta.suitedFor}
              </span>
            </p>
          </Reveal>
          {service.body.map((p, i) => (
            <Reveal key={p.slice(0, 30)} delay={i * 70}>
              <p className="mb-6 text-lg leading-relaxed text-charcoal">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-greenlight/50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">What's included</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.included.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60} className="flex items-start gap-3">
                <ArrowRight size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span className="font-medium text-navy">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Ready to book?</h2>
            <p className="mt-3 text-charcoal">
              Message us on WhatsApp or email for a free, no-obligation quote.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                className="pill-btn text-sm"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle size={18} aria-hidden /> Message on WhatsApp
              </a>
              <a className="pill-btn text-sm" href={EMAIL_HREF} aria-label="Email us">
                <Mail size={18} aria-hidden /> Email us
              </a>
            </div>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold"
            >
              <ArrowLeft size={16} aria-hidden /> Back to all services
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
