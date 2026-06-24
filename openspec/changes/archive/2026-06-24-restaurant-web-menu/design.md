## Context

Blaze Bay has a visually distinctive printed menu built around a dark background, neon coral highlights, tropical line art, and a mix of script branding with condensed uppercase labels. The repository does not yet contain a web frontend, and the requested scope is intentionally limited to static web pages with no backend, no CMS, and no server-managed menu data.

The main product constraint is fidelity to the printed menu's mood without copying the print layout literally. The web experience must stay readable on phones, support quick category switching for food and drinks, and keep content maintainable in source control.

## Goals / Non-Goals

**Goals:**
- Create a static web menu that feels visually aligned with the existing Blaze Bay print design.
- Support tabbed navigation for each menu category, including food and drink groupings.
- Design mobile-first so the primary browsing experience is optimized for phone screens and touch interaction.
- Make the UI very user-friendly, with clear hierarchy, obvious actions, fast scanning, and low-friction navigation.
- Keep all content in frontend-owned static files so the site can be deployed as static assets.
- Ensure the menu is responsive, touch-friendly, and readable on both mobile and desktop.
- Use a font pairing that matches the printed menu style closely when the exact brand font is unavailable.

**Non-Goals:**
- Building a backend, admin panel, ordering flow, reservation flow, or payment flow.
- Real-time menu updates, localization tooling, or role-based content editing.
- Recreating the printed menu as a single scanned image or PDF-first experience.

## Decisions

### 1. Build the first version as a static single-page frontend
The site will be implemented as a static frontend with no backend dependencies. Menu data will live in source-controlled frontend assets and render into a single browser experience that switches sections through client-side state.

Rationale:
- Matches the user's "web pages only" requirement.
- Minimizes implementation and hosting complexity.
- Makes the project easy to deploy on any static host.

Alternatives considered:
- Backend-managed menu content: rejected because it adds unnecessary operational work.
- PDF or image embed of the existing menu: rejected because it would be less accessible and harder to browse on mobile.

### 1a. Treat phones as the primary layout target
The initial layout, spacing, typography scale, and interaction model will be designed for phone screens first, then enhanced for tablets and desktops.

Rationale:
- Restaurant guests are most likely to open a web menu from a phone.
- Mobile-first constraints help force simpler, clearer UI decisions.

Alternatives considered:
- Desktop-first adaptation: rejected because it risks a cramped, lower-quality phone experience.

### 2. Separate presentation from content with a static menu data model
Menu categories, item names, descriptions, sizes, and prices will be stored in a dedicated static data file rather than hard-coded directly into markup.

Rationale:
- Keeps menu edits isolated from layout work.
- Supports repeated UI patterns for tabs, sections, and pricing rows.
- Makes it easier to preserve the existing printed categories such as burgers, sandwiches, cocktails, beers, coffee, lemonades, shakes, and add-ons.

Alternatives considered:
- Freeform handwritten HTML for each section: rejected because it becomes brittle as the menu grows.

### 3. Use an accessible tab system for category switching
The menu will expose categories as a tab list with a visible active state, keyboard support, and a mobile-friendly horizontal overflow strategy when there are more categories than fit on screen.

Rationale:
- Tabs satisfy the requirement to switch between food and drink types quickly.
- Accessible semantics reduce future rework and improve usability.

Alternatives considered:
- Accordion-only navigation: rejected because it is slower for cross-category browsing.
- Separate page per category: rejected because it creates more navigation friction for a short menu site.

### 3a. Optimize UI for quick scanning and low-effort use
The interface will emphasize large tap targets, strong visual grouping, clear prices, restrained decorative effects around content, and predictable navigation states.

Rationale:
- A user-friendly menu reduces friction when guests are deciding quickly.
- The print-inspired aesthetic should support usability rather than compete with it.

Alternatives considered:
- Heavier visual effects around every element: rejected because they can reduce readability and slow scanning.

### 4. Recreate the print mood through design tokens instead of literal duplication
The design system will use CSS variables for charcoal backgrounds, coral-red neon glows, off-white copy, thin borders, and subtle tropical or sunset motifs. Typography will use a script display face for branding and a tall condensed sans for headings and tabs, with readable body text for descriptions and prices.

Rationale:
- Preserves the brand feeling while adapting it to responsive web constraints.
- Keeps future visual tuning centralized.

Alternatives considered:
- Pixel-perfect print replication: rejected because the paper layout is not optimized for responsive web reading.

### 5. Favor progressive enhancement over heavy framework requirements
The initial implementation should prefer a small footprint architecture with semantic HTML, CSS, and lightweight JavaScript or a minimal frontend build tool if needed.

Rationale:
- The requested experience is primarily content and styling driven.
- Smaller runtime cost helps menu pages load quickly on mobile connections.

Alternatives considered:
- Large SPA architecture: rejected as unnecessary for a static menu-first experience.

## Risks / Trade-offs

- [Font mismatch with printed branding] → Mitigation: choose a script and condensed sans pairing that is visually close, and keep font tokens centralized so they can be swapped later if the exact font becomes available.
- [Too many tabs on mobile] → Mitigation: allow horizontal tab scrolling, keep labels short, and group overflow carefully.
- [Phone layout feels visually rich but hard to use] → Mitigation: test the hierarchy on narrow screens first, keep tap targets large, and simplify any decorative treatment that competes with content.
- [Static data drifts from the physical menu] → Mitigation: define a single structured menu data source and keep category naming aligned with the printed menu.
- [Neon styling hurts readability] → Mitigation: reserve glow effects for accents and keep core menu text high-contrast and minimally decorated.

## Migration Plan

1. Scaffold the static frontend and establish the visual token system.
2. Encode the printed menu into a structured static data source.
3. Implement the branded landing/header area and tabbed category navigation.
4. Build reusable menu section and item components or templates.
5. Verify responsive behavior and readability against the printed menu reference.
6. Deploy as static assets with no server-side migration requirements.

Rollback strategy:
- Because the change is additive and frontend-only, rollback is a simple redeploy to the prior static build or branch state.

## Open Questions

- Should the first web version preserve the current Bulgarian labels exactly, or introduce bilingual labels where helpful?
- Does the team want one combined page with tabs for all categories, or a light multi-page shell where the menu page itself contains tabs?
- Are there licensed brand fonts or logo assets available beyond the photographed printed menu?
