import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { WHATSAPP_HREF } from "@/components/site/brand";

import backgroundPicture from "@/assets/background_picture.jpg";
import picture3 from "@/assets/picture_3.jpg";
import picture4 from "@/assets/picture_4.jpg";
import picture5 from "@/assets/picture_5.jpg";
import picture6 from "@/assets/picture_6.jpg";

export default function HomeShineSection() {
  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[720px] lg:min-h-[820px] overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      {/* Background Image with Ambient Glow */}
      <img
        src={backgroundPicture}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-radial from-transparent via-navy/40 to-navy/80 pointer-events-none"
        aria-hidden
      />

      {/* Parallax Floating Gallery of Jobs Done */}
      <Floating sensitivity={0.8} className="absolute inset-0 z-10">
        {/* Top-Left: picture_3 (Kitchen) */}
        <FloatingElement
          depth={1.4}
          className="top-[4%] left-[2%] sm:top-[8%] sm:left-[5%] lg:top-[10%] lg:left-[8%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <img
              src={picture3}
              alt="Immaculate kitchen cleaned by Sagalgreen"
              className="w-28 h-20 sm:w-44 sm:h-32 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover rounded-2xl shadow-2xl border-2 border-white/20 -rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:border-[#4CB944]/60"
            />
          </motion.div>
        </FloatingElement>

        {/* Top-Right: picture_4 (Living Room) */}
        <FloatingElement
          depth={2}
          className="top-[5%] right-[2%] sm:top-[8%] sm:right-[5%] lg:top-[12%] lg:right-[8%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <img
              src={picture4}
              alt="Fresh living room cleaned by Sagalgreen"
              className="w-28 h-20 sm:w-44 sm:h-32 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover rounded-2xl shadow-2xl border-2 border-white/20 rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:border-[#4CB944]/60"
            />
          </motion.div>
        </FloatingElement>

        {/* Bottom-Left: picture_5 (Bedroom) */}
        <FloatingElement
          depth={1.2}
          className="bottom-[4%] left-[2%] sm:bottom-[8%] sm:left-[6%] lg:bottom-[10%] lg:left-[9%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative"
          >
            <img
              src={picture5}
              alt="Spotless luxury bedroom cleaned by Sagalgreen"
              className="w-32 h-24 sm:w-48 sm:h-36 md:w-60 md:h-44 lg:w-68 lg:h-48 object-cover rounded-2xl shadow-2xl border-2 border-white/20 -rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:border-[#4CB944]/60"
            />
          </motion.div>
        </FloatingElement>

        {/* Bottom-Right: picture_6 (Bathroom) */}
        <FloatingElement
          depth={1.8}
          className="bottom-[4%] right-[2%] sm:bottom-[8%] sm:right-[6%] lg:bottom-[10%] lg:right-[9%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <img
              src={picture6}
              alt="Sparkling modern bathroom cleaned by Sagalgreen"
              className="w-32 h-24 sm:w-48 sm:h-36 md:w-60 md:h-44 lg:w-68 lg:h-48 object-cover rounded-2xl shadow-2xl border-2 border-white/20 rotate-4 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:border-[#4CB944]/60"
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-2xl sm:max-w-3xl text-center pointer-events-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5">
            <span>Make your home</span>
            <TextRotate
              texts={["shine", "fresh"]}
              mainClassName="text-[#4CB944] font-extrabold inline-flex pb-1"
              staggerDuration={0.03}
              staggerFrom="first"
              rotationInterval={2400}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            />
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl font-medium text-white/90 tracking-normal">
            So you can enjoy it, not clean it
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="pill-btn shadow-lg shadow-[#4CB944]/25 hover:scale-105 transition-transform"
            >
              Get a free quote
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-white transition duration-200 hover:border-[#4CB944] hover:text-[#4CB944] hover:scale-105"
            >
              Our services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
