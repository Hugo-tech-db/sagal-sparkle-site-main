import { useCallback, useRef, useState } from "react";

export type BeforeAfterPair = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const pair = pairs[index];

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  if (!pair) return null;

  return (
    <div className="mx-auto w-full max-w-lg lg:max-w-xl">
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Reveal the before and after cleaning photo"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        className="relative cursor-ew-resize select-none overflow-hidden rounded-2xl border border-black/5 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
        style={{ aspectRatio: "945 / 1312", touchAction: "none" }}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          if (e.key === "Home") setPos(0);
          if (e.key === "End") setPos(100);
        }}
      >
        <img
          src={pair.afterImage}
          alt={pair.afterAlt}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={pair.beforeImage}
            alt={pair.beforeAlt}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ width: containerRef.current?.clientWidth ?? "100%" }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-white">
            Before
          </span>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(10,31,68,0.45),0_0_10px_rgba(0,0,0,0.45)]"
          style={{ left: `${pos}%` }}
        />
      </div>

      {pairs.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {pairs.map((_, i) => (
            <button
              key={i}
              aria-label={`Show before and after pair ${i + 1}`}
              aria-current={i === index}
              onClick={() => {
                setIndex(i);
                setPos(50);
              }}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-navy" : "bg-navy/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
