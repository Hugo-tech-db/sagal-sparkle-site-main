import { useState, useEffect } from "react";
import { Star, X, ChevronRight, Send, User, Calendar } from "lucide-react";
import Reveal from "./Reveal";

/* ─── Types ─────────────────────────────────────────────── */
interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  isOfficial?: boolean;
}

/* ─── Official (real) reviews ────────────────────────────── */
const officialReviews: Review[] = [
  {
    id: "official-1",
    name: "Jennifer Williams",
    rating: 5,
    text: "She did an excellent job.. I paid for standard cleaning but she went above and beyond and gave me deep cleaning .. my house is clean and crisp! Will definitely recommend her.",
    date: "August 12, 2026",
    isOfficial: true,
  },
  {
    id: "official-2",
    name: "Balogun Faoziyat",
    rating: 5,
    text: "Thank you … my home feels homely.",
    date: "August 25, 2026",
    isOfficial: true,
  },
];

/* ─── Star renderer ──────────────────────────────────────── */
function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-[#4CB944] text-[#4CB944]" : "fill-none text-gray-300"}
        />
      ))}
    </span>
  );
}

/* ─── Interactive star picker ────────────────────────────── */
function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <span className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1;
        const active = n <= (hovered || value);
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            aria-label={`Rate ${n} star${n !== 1 ? "s" : ""}`}
            className="transition-transform hover:scale-110"
          >
            <Star
              size={28}
              className={active ? "fill-[#4CB944] text-[#4CB944]" : "fill-none text-gray-300"}
            />
          </button>
        );
      })}
    </span>
  );
}

/* ─── Review card ────────────────────────────────────────── */
function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4CB944]/15 font-bold text-[#4CB944] text-sm">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm leading-tight">{review.name}</p>
          <Stars rating={review.rating} size={14} />
        </div>
        {review.isOfficial && (
          <span className="ml-auto shrink-0 rounded-full bg-[#4CB944]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#4CB944]">
            Verified
          </span>
        )}
      </div>
      {/* Body */}
      <p className="text-sm leading-relaxed text-charcoal/85 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      {/* Footer */}
      <div className="flex items-center gap-1.5 pt-2.5 border-t border-black/5 text-xs text-charcoal/60 font-medium">
        <Calendar size={13} className="text-[#4CB944] shrink-0" />
        <span>{review.date}</span>
      </div>
    </article>
  );
}

/* ─── STORAGE KEY ────────────────────────────────────────── */
const STORAGE_KEY = "sagal_user_reviews";

function loadUserReviews(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Review[]) : [];
  } catch {
    return [];
  }
}

function saveUserReviews(reviews: Review[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch {
    /* noop */
  }
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function TestimonialsSection() {
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  /* form state */
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [formText, setFormText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUserReviews(loadUserReviews());
  }, []);

  /* lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const allReviews = [...officialReviews, ...userReviews];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!formName.trim()) return setError("Please enter your name.");
    if (formRating === 0) return setError("Please select a star rating.");
    if (formText.trim().length < 10) return setError("Review must be at least 10 characters.");

    const exactDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newReview: Review = {
      id: `user-${Date.now()}`,
      name: formName.trim(),
      rating: formRating,
      text: formText.trim(),
      date: exactDate,
    };

    const updated = [newReview, ...userReviews];
    setUserReviews(updated);
    saveUserReviews(updated);
    setSubmitted(true);
    setFormName("");
    setFormRating(0);
    setFormText("");
  }

  return (
    <>
      {/* ──────────── SECTION ──────────── */}
      <section id="testimonials" className="bg-white py-16 sm:py-24 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4">
          {/* Heading */}
          <Reveal className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4CB944]">
              Our Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              What our clients say
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/80">
              Real words from real homes. Every review below comes from a client who experienced the Sagalgreen difference first-hand.
            </p>
          </Reveal>

          {/* Grid — show only official reviews inline */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officialReviews.map((r, i) => (
              <Reveal key={r.id} delay={i * 80}>
                <ReviewCard review={r} />
              </Reveal>
            ))}

            {/* "Read More" card to open modal */}
            <Reveal delay={officialReviews.length * 80}>
              <button
                onClick={() => setModalOpen(true)}
                className="group flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#4CB944]/40 bg-[#4CB944]/5 text-[#4CB944] transition duration-300 hover:border-[#4CB944] hover:bg-[#4CB944]/10"
              >
                <ChevronRight
                  size={32}
                  className="rounded-full border-2 border-[#4CB944]/30 p-1 transition duration-300 group-hover:border-[#4CB944] group-hover:scale-110"
                />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Read More &amp; Leave a Review
                </span>
              </button>
            </Reveal>
          </div>

          {/* Overall rating summary */}
          <Reveal className="mt-10 flex items-center justify-center gap-3">
            <Stars rating={5} size={20} />
            <p className="text-sm font-semibold text-navy">
              {allReviews.length} review{allReviews.length !== 1 ? "s" : ""} · Average 5.0
            </p>
          </Reveal>
        </div>
      </section>

      {/* ──────────── MODAL ──────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy/70 backdrop-blur-sm px-4 py-10"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="All testimonials and review form"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close testimonials panel"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-charcoal transition hover:bg-black/10"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-10">
              {/* Modal heading */}
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CB944]">All Reviews</p>
              <h3 className="mt-1 text-2xl font-extrabold text-navy">Our Testimonials</h3>

              {/* All reviews grid */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {allReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-black/8" />
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy/60">
                  <User size={14} /> Share your experience
                </span>
                <span className="h-px flex-1 bg-black/8" />
              </div>

              {/* Submission form */}
              {submitted ? (
                <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#4CB944]/10 p-8 text-center">
                  <Star size={40} className="fill-[#4CB944] text-[#4CB944]" />
                  <h4 className="text-xl font-bold text-navy">Thank you for your review!</h4>
                  <p className="text-sm text-charcoal/80">
                    Your review has been added and is now visible on the site.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-full bg-[#4CB944] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#3da835]"
                  >
                    Add another review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="review-name" className="block text-sm font-semibold text-navy mb-1.5">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Sarah Johnson"
                      className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-navy placeholder-charcoal/40 outline-none transition focus:border-[#4CB944] focus:ring-2 focus:ring-[#4CB944]/20"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Star rating <span className="text-red-500">*</span>
                    </label>
                    <StarPicker value={formRating} onChange={setFormRating} />
                  </div>

                  {/* Review text */}
                  <div>
                    <label htmlFor="review-text" className="block text-sm font-semibold text-navy mb-1.5">
                      Your review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="review-text"
                      rows={4}
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      placeholder="Tell us about your experience with Sagalgreen Cleaning Services..."
                      className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-navy placeholder-charcoal/40 outline-none transition focus:border-[#4CB944] focus:ring-2 focus:ring-[#4CB944]/20 resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600 font-medium">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#4CB944] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#3da835] hover:shadow-lg active:scale-[0.98]"
                  >
                    <Send size={15} />
                    Submit my review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
