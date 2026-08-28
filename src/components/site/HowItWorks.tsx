import Reveal from "./Reveal";
import deviceMockup from "@/assets/DEVICE_ARRANGEMENT.png";

const steps = [
  {
    num: "01",
    title: "TELL US WHAT YOU NEED",
    description:
      "Fill out the form and tell us a little about your home and cleaning requirements.",
  },
  {
    num: "02",
    title: "WE TAKE CARE OF THE CLEANING",
    description:
      "Our professional team handles the hard work, so you don't have to.",
  },
  {
    num: "03",
    title: "ENJOY YOUR REFRESHED SPACE",
    description:
      "Come back to a clean, fresh, and beautifully maintained home.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Device Arrangement Image */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal className="w-full max-w-lg lg:max-w-none">
              <img
                src={deviceMockup}
                alt="Sagalgreen online quote request form on laptop, tablet, and mobile devices"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </Reveal>
          </div>

          {/* Right Column: 3 Steps Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy uppercase leading-tight tracking-tight">
                GETTING A QUOTE HAS NEVER BEEN EASIER.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6 sm:space-y-8">
              {steps.map((step, idx) => (
                <Reveal
                  key={step.num}
                  delay={idx * 120}
                  className="flex items-start gap-4 sm:gap-5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4CB944]/15 font-display text-lg font-bold text-[#4CB944] ring-1 ring-[#4CB944]/30 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#4CB944] group-hover:text-white">
                    {step.num}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-navy group-hover:text-[#4CB944] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-charcoal/85 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
