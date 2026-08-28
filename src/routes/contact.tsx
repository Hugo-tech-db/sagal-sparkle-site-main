import { createFileRoute } from "@tanstack/react-router";
import ContactSection from "@/components/site/ContactSection";
import HowItWorks from "@/components/site/HowItWorks";
import FaqSection from "@/components/site/FaqSection";

const title = "Contact | Sagalgreen Cleaning Services, Regina";
const description =
  "Request a free cleaning quote in Regina. Message us on WhatsApp, call 639-999-4777, or send an email.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <>
      <h1 className="sr-only">Contact Sagalgreen Cleaning Services</h1>
      <ContactSection />
      <HowItWorks />
      <FaqSection />
    </>
  );
}
