import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

export interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

export interface CircularTestimonialsProps {
  testimonials: GalleryItem[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 480;
  const maxWidth = 1024;
  const minGap = 45;
  const maxGap = 75;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials: React.FC<CircularTestimonialsProps> = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}) => {
  // Color & font config
  const colorName = colors.name ?? "#0a1f44";
  const colorDesignation = colors.designation ?? "#d4a72c";
  const colorTestimony = colors.testimony ?? "#333a44";
  const colorArrowBg = colors.arrowBackground ?? "#0a1f44";
  const colorArrowFg = colors.arrowForeground ?? "#ffffff";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#4CB944";
  const fontSizeName = fontSizes.name ?? "1.35rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.875rem";
  const fontSizeQuote = fontSizes.quote ?? "0.975rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex] ?? testimonials[0]!,
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  // Touch / Swipe support
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0]!.clientX : e.clientX;
    touchStartX.current = clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartX.current === null) return;
    const clientX = "changedTouches" in e ? e.changedTouches[0]!.clientX : e.clientX;
    const diff = clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  // Compute transforms for 3D wheel
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.4;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.7s cubic-bezier(.4, 1.8, .3, 1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 5,
        opacity: 0.85,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(18deg)`,
        transition: "all 0.7s cubic-bezier(.4, 1.8, .3, 1)",
        cursor: "pointer",
      };
    }
    if (isRight) {
      return {
        zIndex: 5,
        opacity: 0.85,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-18deg)`,
        transition: "all 0.7s cubic-bezier(.4, 1.8, .3, 1)",
        cursor: "pointer",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: `translateX(0px) translateY(20px) scale(0.7)`,
      transition: "all 0.7s cubic-bezier(.4, 1.8, .3, 1)",
    };
  }

  // Framer Motion variants
  const quoteVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="w-full">
      {/* 3D Image Wheel */}
      <div
        className="relative mx-auto h-72 sm:h-80 md:h-96 w-full max-w-md select-none"
        style={{ perspective: "1000px" }}
        ref={imageContainerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        {testimonials.map((item, index) => (
          <div
            key={item.src + index}
            onClick={() => {
              if (index !== activeIndex) {
                setActiveIndex(index);
                if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
              }
            }}
            className="absolute inset-0 mx-auto h-full w-[82%] sm:w-[85%] overflow-hidden rounded-3xl border-2 border-white/60 shadow-2xl transition-all duration-700"
            style={getImageStyle(index)}
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            <div className="absolute bottom-3 left-4 right-4 text-left">
              <span className="inline-block rounded-full bg-navy/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                {item.designation}
              </span>
              <p className="mt-1 text-sm sm:text-base font-bold text-white drop-shadow-md">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Info & Controls */}
      <div className="mt-6 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={quoteVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-[70px] max-w-md px-2"
          >
            <p
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
            >
              {activeTestimonial.designation}
            </p>
            <h4
              className="mt-0.5 font-bold tracking-tight"
              style={{ color: colorName, fontSize: fontSizeName }}
            >
              {activeTestimonial.name}
            </h4>
          </motion.div>
        </AnimatePresence>

        {/* Arrow Controls & Indicators */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={handlePrev}
            style={{
              backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              color: colorArrowFg,
            }}
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 px-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex
                    ? "w-7 bg-greendark"
                    : "w-2.5 bg-black/20 hover:bg-black/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={handleNext}
            style={{
              backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              color: colorArrowFg,
            }}
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
