import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./Reveal";
import { faqs } from "./brand";

export default function FaqSection() {
  return (
    <section className="bg-greenlight/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Good to know
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Questions, answered</h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-black/10">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-charcoal">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
