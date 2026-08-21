# Sagal Shine

# Sagal Green Cleaning Services — Website Rebuild Prompt (Build 2)

## Project context

Build a polished, client-ready marketing website for **Sagal Green Cleaning Services**, a new, locally owned residential and short-term rental cleaning company based in Regina, Saskatchewan. This is a full redesign replacing an earlier version, incorporating direct client feedback. Stack: React / Vite / Tailwind (TanStack Start), matching the existing project structure.

---

## Image assets

**Image upload budget: 9 images total** (Lovable's per-prompt image limit is 10). Icons (contact + service-card icons) are sourced from an in-code icon library instead of uploaded files — see Icon Library section below — keeping the upload count under the cap.

Upload these 9 real image assets:

1. Logo
2. Before photo (bedroom)
3. After photo (bedroom)
4. Residential Cleaning — service header banner
5. Deep Cleaning — service header banner
6. Move-In/Move-Out Cleaning — service header banner
7. Recurring Cleaning — service header banner
8. Airbnb/Short-Term Rental Turnovers — service header banner
9. Bottom CTA banner / Footer background photo — **shared by both sections** (same image, different overlay opacity)

**Image dimension targets** (for consistent layout before real assets are swapped in):
- Before/after pair: portrait, 945×1312px
- Service header banners: landscape, 1600×600px
- Bottom CTA banner / Footer shared background: landscape, 1920×500px (wide, short aspect ratio — full-bleed strip, reused across both sections)
- Logo: transparent PNG, minimum 400×400px

Use clearly named image variables/props per component (e.g. a `logo` prop on the header, a `beforeImage`/`afterImage` pair on the slider component, a `headerImage` prop per service page) so each uploaded image can be wired to the correct component manually after generation.

---

## Icon library (no image upload required)

Use an in-code icon library (Lucide React or Tabler Icons — whichever Lovable defaults to) for all small UI icons instead of uploaded image files. This covers:

**Contact section + footer icons:**
- WhatsApp icon (e.g. `brand-whatsapp`)
- Phone icon (e.g. `phone`)
- Mail icon (e.g. `mail`)

**Service card icons (homepage grid):**
- Residential Cleaning → broom or house-with-sparkle icon (e.g. `broom` or `home-star`) — represents general home upkeep specifically, not just "a house"
- Deep Cleaning → scrub brush or spray-bottle-with-droplets icon (e.g. `wash` or `spray`) — signals intensive/detailed cleaning, distinct from general cleaning
- Move-In/Move-Out Cleaning → moving box icon (e.g. `package` or `truck`) — ties directly to the moving context, not a generic cleaning icon
- Recurring Cleaning → repeat/refresh-cycle icon (e.g. `repeat` or `calendar-repeat`) — communicates the ongoing/scheduled nature specifically
- Airbnb/Short-Term Rental Turnovers → bed-with-key or key icon (e.g. `bed` or `key`) — signals hospitality/rental turnover specifically, not just "cleaning"

Each icon should be immediately recognizable as representing *that specific service* at a glance, not interchangeable between cards — avoid using near-duplicate icons (e.g. two different house icons) across services, since that undercuts the point of having icons at all.

Style all icons consistently: navy or dark green (`#27500A`) fill, sized per the card spec below (**64px icon inside a 120px circular `#EAF3DE` background** for service cards — increased from the original 44px/88px spec for stronger visual presence on the homepage grid; 16-18px inline for contact/footer icons).

---

## Brand palette

- **Navy:** `#0A1F44` — primary text, buttons, footer background
- **Gold:** `#D4A72C` — accents, button borders, section labels, hover states
- **Green (dark):** `#27500A` — icon accents
- **Green (light):** `#EAF3DE` — icon circle backgrounds
- Body text: dark charcoal/gray, not pure black
- No eco/leaf/plant iconography or "green/eco/sustainable/labelled-products" language anywhere in copy — despite the business name, the client has explicitly asked to remove this positioning.

Typography:
- **Headings:** Plus Jakarta Sans (semibold/bold) — geometric, confident, modern
- **Body:** Inter — highly readable at small sizes, pairs cleanly with Jakarta Sans
- Both fonts free via Google Fonts, no licensing concerns
- Sentence case (not Title Case) for buttons and labels

---

## Global component: "Read More" / primary pill button

Reusable button style, used on service cards, hero CTA, and contact buttons:

- Shape: fully rounded pill (`border-radius: 999px`)
- Fill: navy `#0A1F44`
- Text: white, medium weight
- Border: 2px solid gold `#D4A72C` at rest
- **Hover state:** border becomes an animated conic-gradient (gold → light gold → navy → gold) that rotates continuously while hovered, using CSS `@property --angle` for smooth rotation. Include a static gold-border fallback for browsers that don't support `@property`.
- Padding: generous (~12px vertical, 32px horizontal)

---

## Section 1 — Header / Navigation

### Utility bar (persistent, above main nav)
A thin, full-width strip sitting above the main nav bar, visible on every page regardless of scroll position. Navy or gold background (distinct from the white/main nav below it). Contains, right-aligned:
- Instagram icon (icon library, links to Instagram profile — placeholder link until client provides the handle)
- Mail icon + "Click to Email" → `mailto:sagalgreen.services@yahoo.com`
- "Contact Us" text link → smooth-scrolls to Contact section (homepage) or links to Contact page (subpages)
- Phone icon + "Call Us: 639-999-4777" → `tel:+16399994777`

Keep this bar compact (small text, ~32-40px height) so it doesn't compete visually with the main nav below it. On mobile, collapse to icons-only (no text labels) to save space, or hide entirely below a small breakpoint if space is too tight — icons remain tappable either way.

### Main nav
- Sticky top bar
- Logo, left-aligned
- Nav links: Home, About, Services (dropdown: Residential Cleaning, Deep Cleaning, Move-In/Move-Out Cleaning, Recurring Cleaning, Airbnb/Short-Term Rental Turnovers), Contact
- Right-aligned CTA: pill button, "Get a Free Quote"
  - **On the homepage:** smooth-scrolls to the Contact section
  - **On all other pages (service detail pages):** links directly to WhatsApp (`https://wa.me/16399994777`), since those pages don't contain a Contact section
  - Same button/label everywhere — destination is context-aware based on current page

No Office/Commercial Cleaning anywhere in nav or services — explicitly excluded from scope.

### Mobile navigation behavior
- Collapses into a hamburger menu below tablet breakpoint
- "Services" becomes an accordion-style expandable item inside the mobile drawer — **tap to expand/collapse, not hover-triggered**
- CTA button ("Get a Free Quote") stays visible outside the hamburger — either in the collapsed top bar or as a sticky bottom button on mobile

---

## Section 2 — Hero

**Headline:** Professional Home Cleaning, Now Serving Regina

**Subheadline (pick one or blend):**
"From weekly upkeep to Airbnb turnovers, we bring careful, reliable cleaning to homes across Regina."

**CTA button:** "Message Us on WhatsApp" (pill button style, links to `https://wa.me/16399994777`)

Layout: bold headline + subheadline left-aligned or centered, CTA button below.

### Background animation

A subtle, continuously drifting gradient sits behind the hero content — soft ambient motion rather than a static or photo background.

- Full-bleed layer behind the headline/subtext/CTA, positioned absolutely behind the text content
- Linear gradient, 120° angle, color stops in sequence: green → sage → gold → sage → green
  - Green: `rgba(39,80,10,0.14)`
  - Sage: `rgba(184,212,160,0.16)`
  - Gold: `rgba(212,167,44,0.14)`
- Background-size `300% 300%`, animating `background-position` from 0% 50% → 100% 50% → 0% 50%, ease-in-out, ~12s duration, infinite loop
- Pure CSS (no canvas, no JS animation libraries) — keeps the hero lightweight and fast-loading on mobile
- **Required:** wrap the animation in `@media (prefers-reduced-motion: reduce)` to disable it for users with that OS accessibility setting enabled — show the gradient as a static frame instead for those users
- Keep opacity low (10–16% range per stop) so the navy headline text stays fully legible throughout the animation cycle at every point in the loop

---

## Section 3 — Before/After Slider

Placed directly after the Hero (proof-of-work leads before trust claims).

**Heading:** See the Difference
**Subtext:** A real before-and-after from Sagal Green Cleaning Services.

**Component:** Drag-to-reveal slider (vertical draggable handle, NOT swipe-based, to avoid gesture conflict with page scroll/swipe navigation). Build the component to support multiple before/after pairs via dot navigation, but only render at launch:

- Pair 1: bedroom before/after photos (uploaded images)

Dot navigation UI should be present in the component logic but functionally hidden/single-dot until additional pairs are added later — do not hardcode for exactly one pair only.

**Image dimensions:** Before/after photos are portrait orientation, 945×1312px. Build the slider component to this aspect ratio so future pairs slot in without layout shifts.

**Accessibility:** Slider must be keyboard-operable (arrow keys to drag the handle, not drag/tap-only) in addition to mouse/touch drag. Each image needs descriptive alt text, e.g. "Bedroom before cleaning by Sagal Green" / "Bedroom after cleaning by Sagal Green."

---

## Section 4 — Why Choose Us

Use this exact client-provided copy, styled with the emojis as list-item leads:

> At Sagal Green Cleaning Services, we believe the little things matter. As a small, locally owned cleaning business, we give every home the personal attention it deserves.

- 🧼✨ Detailed, customized cleaning
- 🧴 Quality cleaning products
- 📝 Cleaning checklists tailored to your space
- 💚 Reliable and personal service
- ✨ We stand behind the quality of our work

**Bold statement:** Small business. Personal touch. Spotless results.
🏡 Proudly serving Regina, Saskatchewan.

No reviews/testimonials section anywhere on the site — explicitly removed per client request.

---

## Section 5 — Services

### 5a. Services grid (homepage section)

5 cards in a responsive grid, each following this exact card pattern:

- Icon: circular background (`#EAF3DE`, ~120px diameter), icon inside at ~64px, navy or dark green (`#27500A`), sourced from the in-code icon library (see Icon Library section above) — sized larger for stronger visual presence on the homepage grid
- Title: bold navy, e.g. "Residential Cleaning"
- Teaser (2–3 lines, charcoal gray text)
- "Read More" pill button (per global button spec above) → links to that service's detail page

**Card teasers:**

1. **Residential Cleaning** — "Full-service home cleaning tailored to your space and schedule. Ask about our Preference Clean if you only need certain rooms done."
2. **Deep Cleaning** — "A thorough, top-to-bottom clean for homes that need extra attention — baseboards, appliances, and all the spots regular cleaning skips."
3. **Move-In/Move-Out Cleaning** — "Leave the cleanup to us. We'll get your old place spotless or your new place move-in ready."
4. **Recurring Cleaning** — "Weekly, bi-weekly, or monthly visits to keep your home consistently clean — on a schedule that works for you."
5. **Airbnb/Short-Term Rental Turnovers** — "Fast, reliable turnovers between guests, so your listing is always ready for a 5-star check-in."

Do NOT include an Office/Commercial Cleaning card — explicitly out of scope.

### 5b. Individual service detail pages

Each of the 5 services gets its own dedicated page/route. Template per page:

1. **Banner header:** service name as large headline over the uploaded service header photo (landscape, 1600×600px), styled consistent with the nav/logo bar above it. Alt text should describe the service, e.g. "Sagal Green team performing deep cleaning."
2. **Full-length body copy** (see below — long-form, benefit-driven, sensory)
3. **"What's Included" checklist:** two-column layout with gold arrow/checkmark bullets (styled like a feature-list block, navy text)
4. **CTA block:** "Ready to book? Message us on WhatsApp or email for a free, no-obligation quote." + WhatsApp and Email pill buttons
5. **Back link** to full Services page

**No pricing is shown anywhere on service pages** — quote-only, per client decision.

---

#### 1. Residential Cleaning
*Come home to a space that finally feels like yours again.*

There's a difference between a house that's "cleaned" and a house that feels cared for — and that difference is in the details. Our residential cleaning service is built around your home, not a generic checklist. We take the time to understand how you actually live in your space, then clean it accordingly: the counters you cook on every day, the floors your kids play on, the corners that collect dust when life gets busy.

Don't need the whole house done? Our Preference Clean lets you choose exactly which rooms matter most this time — because not every week needs the full treatment, and we'd rather do a great job on what you need than a rushed job on everything.

Walk back into a home that smells fresh, feels lighter, and lets you actually relax the moment you walk through the door.

**What's included:** Kitchens, bathrooms, bedrooms, living areas — dusting, vacuuming, mopping, and surface sanitizing, all tailored to your space.

---

#### 2. Deep Cleaning
*The clean that gets into every corner you've been avoiding.*

Every home has them — the spots that regular cleaning never quite reaches. Behind the fridge. Inside the cabinets. The grout lines that have quietly darkened over months. Deep cleaning isn't about doing "more" of the same clean — it's a completely different level of attention, built for the buildup that accumulates over time.

We go baseboard to ceiling, appliance interior to window sill, so nothing gets left behind. Perfect for a seasonal reset, getting ready for guests, or simply reclaiming a home that's been on autopilot for too long. When we're done, you won't just notice the difference — you'll feel it every time you walk into a room.

**What's included:** Everything in Residential Cleaning, plus detailed appliance interiors, baseboards, window sills, grout, and every hard-to-reach spot in between.

---

#### 3. Move-In/Move-Out Cleaning
*Start your next chapter in a space that's truly ready for you.*

Moving is one of life's most stressful transitions — the last thing you need is to spend your final hours in an old home scrubbing baseboards, or your first hours in a new one wiping down someone else's dust. We handle the cleaning so you can focus on everything else moving demands.

For move-outs, we get every inch spotless for your final walkthrough — the kind of clean that gets your deposit back without a fight. For move-ins, we make sure your new place feels genuinely new: cabinets wiped, appliances cleaned inside and out, floors ready for your first night's sleep in a space that's finally, completely yours.

**What's included:** Full interior clean, inside cabinets and drawers, appliance interiors, floors, and bathrooms — top to bottom, corner to corner.

---

#### 4. Recurring Cleaning
*The clean home you come back to, every single time.*

Imagine never dreading the state of your home after a long week — because it's already handled. Our recurring cleaning service builds a rhythm around your life: weekly, bi-weekly, or monthly, whatever fits. Every visit follows a checklist tailored specifically to your home, so the same care and attention shows up every time, not just the first time.

This isn't a one-off clean you have to keep re-booking and re-explaining — it's a standing relationship with a team that already knows your space, your preferences, and what "clean" means to you. Consistency is the whole point.

**What's included:** A custom recurring schedule, a checklist built around your home, and flexible rescheduling when life gets in the way.

---

#### 5. Airbnb/Short-Term Rental Turnovers
*Every guest's first impression, handled perfectly, every time.*

In short-term rentals, cleanliness isn't a nice-to-have — it's the difference between a 5-star review and a refund request. We understand the pressure hosts are under: tight turnaround windows, back-to-back bookings, and zero room for a bad first impression. That's exactly what we're built for.

Fast, thorough turnovers between checkouts and check-ins, timed around your actual booking calendar — not the other way around. Fresh linens, reset staging, and a space that looks exactly like your listing photos promised. Your guests notice the difference the second they walk in, and so does your rating.

**What's included:** Full turnover clean, linen and towel reset, restocking checklist support, and guest-ready staging — built to protect your reviews and your bookings.

---

## Section 6 — Contact

**Heading:** Get in Touch
**Subtext:** Message us on WhatsApp or send an email — we'll get back to you with a free quote.

**Contact method buttons** (icon-led, pill style, using icons from the in-code icon library):

- WhatsApp icon + "Message on WhatsApp" → `https://wa.me/16399994777`
- Mail icon + "Email Us" → `mailto:sagalgreen.services@yahoo.com`
- Phone icon + phone number, tap-to-call → `tel:+16399994777`

**Payment note:** "We accept Interac e-Transfer with Autodeposit — details provided after booking."

**Contact form** (mailto-based, no backend/Resend — avoids domain verification complexity). Matches the detailed field pattern used in Build 1 — a fuller intake form rather than a minimal name/email/message form, so leads arrive pre-qualified with enough detail to quote accurately:

Card container: white background, rounded corners (~16-20px), soft border/subtle shadow, generous internal padding, sitting on a very light green (`#EAF3DE`-tinted) page background so the white card lifts off the page.

Fields, in this order, paired two-per-row where noted (stacks to single column on mobile):

- **Row 1:** Name (required) | Phone
- **Row 2 (full width):** Email (required)
- **Row 3 (full width):** Address / neighbourhood
- **Row 4:** Service needed (dropdown: Residential Cleaning, Deep Cleaning, Move-In/Move-Out Cleaning, Recurring Cleaning, Airbnb/Short-Term Rental Turnovers, Other) | How often (dropdown: One-time, Weekly, Bi-weekly, Monthly)
- **Row 5:** Bedrooms | Bathrooms
- **Row 6:** Approx. square feet | Preferred date (date picker)
- **Row 7 (full width):** Anything else we should know? (textarea, multi-line)

Field styling: rounded-rectangle input borders (~8-10px radius), light gray border at rest, labels sit above each field in medium-weight navy text, generous spacing between rows.

Submit button: full-width, dark green (`#27500A`) fill, rounded-rectangle (not fully pill-shaped — matches the softer rounded style of the input fields above it), white bold text: "Send my request"

Submit → opens the visitor's email client via `mailto:sagalgreen.services@yahoo.com`, subject line pre-filled as "Quote Request: [Service Selected]", body pre-filled with all form field values formatted clearly (each field on its own line).

---

## Section 6b — Bottom CTA banner

Full-width, high-contrast banner placed directly after the Contact section and before the Footer. Acts as a final conversion nudge for visitors who scroll past Contact without acting.

- **Background:** the uploaded CTA banner photo, full-bleed, `background-size: cover`. **This same photo is reused as the Footer's background** (see Section 7) — using one shared image across both sections ties them together as a visual bookend pair at the bottom of the page, rather than introducing two unrelated background images back to back.
- **Overlay:** a solid navy (`#0A1F44`) wash over the photo, ~75–85% opacity, blended so the navy dominates and the photo reads through subtly underneath rather than competing with it — same technique as the reference site's colored overlay on their banner image. Do not leave the photo at full visibility with no overlay; contrast against white/gold text will not hold up reliably across different photos.
- Headline (large, white or gold text): "Get a Free Cleaning Estimate Today"
- Subtext (smaller, white text): "Message us on WhatsApp or send an email — we'll get back to you with a free, no-obligation quote."
- CTA button: pill button (per global button spec), "Request a Free Estimate" → links to WhatsApp (`https://wa.me/16399994777`)

Keep this section short — one headline, one line of subtext, one button. Its job is a fast final nudge, not a repeat of the full Contact section above it.

---

## Section 7 — Footer

**Background:** the same photo uploaded for the Bottom CTA banner (Section 6b), full-bleed, `background-size: cover`, with a solid navy (`#0A1F44`) overlay wash at ~85–90% opacity (slightly heavier than the CTA banner's overlay, since the footer carries more/smaller text that needs a more stable, consistent background beneath it). The photo should read as a faint, textured presence behind the navy rather than a clearly visible image — this keeps the footer feeling anchored and premium rather than busy. White/light-gray text, gold (`#D4A72C`) section labels. Four-column responsive layout (stacks on mobile):

**Column 1 — Brand:**
- Logo mark + "Sagal Green Cleaning" wordmark
- Tagline: "Small business. Personal touch. Spotless results. Proudly serving Regina, Saskatchewan."

**Column 2 — Quick Links:**
- Home / Services / Why Choose Us / Contact

**Column 3 — Contact:**
- WhatsApp icon + 639-999-4777
- Phone icon + 639-999-4777
- Mail icon + sagalgreen.services@yahoo.com

**Column 4 — Payment:**
- "Interac e-Transfer with Autodeposit accepted."

**Bottom bar:** thin divider line, centered copyright: "© 2026 Sagal Green Cleaning Services. All rights reserved."

---

## Accessibility requirements

- **Alt text:** every image requires descriptive alt text — no empty or filler alt attributes. Before/after photos, service header banners, the shared CTA banner/footer background, and the logo all need context-specific descriptions.
- **Icon-only buttons:** WhatsApp, phone, and mail buttons (in Contact section and footer) have no visible text label in some layouts — these require `aria-label` attributes (e.g. `aria-label="Message us on WhatsApp"`).
- **Color contrast:** verify gold (`#D4A72C`) meets WCAG AA contrast (4.5:1 minimum) against both navy and white backgrounds before using it for any body text. Gold is safe for buttons/accents/large headings but should not be used for small paragraph text without a contrast check.
- **Keyboard operability:** the before/after slider and mobile nav dropdown/accordion must be fully operable via keyboard (tab, enter, arrow keys) — not drag/tap-only.
- **Form labels:** every contact form field (Name, Phone, Email, Address/neighbourhood, Service needed, How often, Bedrooms, Bathrooms, Approx. square feet, Preferred date, Message) needs a properly associated `<label>` element, not placeholder-only text.

## Confirmed contact details

- Phone/WhatsApp: **639-999-4777** — `639` is a valid Saskatchewan overlay area code, format confirmed correct.
  - `tel:+16399994777`
  - `https://wa.me/16399994777`
- Email: sagalgreen.services@yahoo.com

## Explicit exclusions (do not include)

- No Office/Commercial Cleaning service, anywhere
- No reviews or testimonials section
- No eco/green/plant-based/"labelled products" language in any copy
- No public pricing anywhere on the site
- No backend email service (Resend, etc.) — mailto only
- No swipe-based before/after interaction — drag-to-reveal handle only, dot navigation for switching between pairs

---

## Post-Lovable manual steps (for reference, not for Lovable to do)

After Lovable generates the build and it's synced to GitHub:
1. Manually wire each uploaded image (logo, before/after photos, service header photos, shared CTA banner/footer background) into its correct component prop/path — icons remain code-based, no swap needed
2. Fix any `src={logo.path}` → `src={logo}` component reference issues
3. Verify all contact links (`wa.me`, `tel:`, `mailto:`) resolve correctly
4. Resolve any GitHub two-way sync conflicts by accepting local changes
5. Deploy to Cloudflare Pages

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sagal-sparkle-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db798098-c380-4f83-bdc5-15f8a526147b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
