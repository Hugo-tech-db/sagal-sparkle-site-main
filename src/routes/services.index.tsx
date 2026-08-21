import { createFileRoute } from "@tanstack/react-router";
import ServicesGrid from "@/components/site/ServicesGrid";
import HowItWorks from "@/components/site/HowItWorks";
import FaqSection from "@/components/site/FaqSection";
import Reveal from "@/components/site/Reveal";
import ourServicesImg from "@/assets/OUR_SERVICES.jpg";

const title = "Cleaning Services in Regina | Sagal Green Cleaning Services";
const description =
  "Residential, office, move-in/move-out, and Airbnb turnover cleaning in Regina, Saskatchewan.";

export const Route = createFileRoute("/services/")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={ourServicesImg}
          alt="Professional cleaning services in Regina"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Our cleaning services</h1>
          <p className="mt-4 text-lg text-white/85">
            Every home needs something slightly different. Find the clean that fits where you are
            right now.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-charcoal">
              Open any card to see exactly what the service covers and who it suits best.
            </p>
          </Reveal>
          <ServicesGrid />
        </div>
      </section>
      <HowItWorks />
      <FaqSection />
    </>
  );
}
