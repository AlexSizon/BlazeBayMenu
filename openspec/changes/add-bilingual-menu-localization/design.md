## Context

The current Blaze Bay web menu was built from a printed menu reference and already has a static frontend structure, category tabs, and a branded neon presentation. A newly provided printable `.docx` shows that the source copy still contains Bulgarian spelling inconsistencies and mixed-language labels, while the site itself does not yet support a true bilingual experience.

This change needs to correct the Bulgarian source copy first, then layer in English translations without introducing backend dependencies or breaking the current mobile-first browsing flow. The most sensitive part is content quality: users should be able to switch languages confidently and still see the same category, same prices, and the same information architecture.

## Goals / Non-Goals

**Goals:**
- Correct Bulgarian menu copy using the printable document as the source of truth for wording review.
- Add complete English translations for supported menu content and surrounding UI copy.
- Add a visible Bulgarian/English toggle that updates the menu without a full page reload.
- Preserve the active category and browsing context when the language changes.
- Keep the implementation fully static and compatible with the current frontend approach.

**Non-Goals:**
- Adding server-side localization, CMS tooling, or translation APIs.
- Introducing additional languages beyond Bulgarian and English in this change.
- Redesigning the full Blaze Bay visual system beyond the localization-related UI additions.
- Automating translation workflows outside the project repository.

## Decisions

### 1. Use a locale-keyed static content model
Menu data will be refactored so localizable fields such as section labels, item names, item descriptions, and selected UI copy are represented with explicit `bg` and `en` values, while shared values such as price and quantity remain language-agnostic.

Rationale:
- Keeps localization deterministic in a static site.
- Makes Bulgarian source correction and English translation review happen in one structured place.
- Prevents duplication of pricing and category IDs across separate language files.

Alternatives considered:
- Two fully separate menu datasets: rejected because it increases drift risk between languages.
- Runtime machine translation: rejected because menu wording needs deliberate hospitality-focused translation quality.

### 2. Treat Bulgarian copy correction as a prerequisite to translation
The Bulgarian version will be normalized first against the printable document and internal consistency rules before English strings are finalized.

Rationale:
- Translating unstable or misspelled source copy would bake quality issues into both locales.
- Some issues are not just translation gaps but source-text corrections, such as misspellings and inconsistent transliterations.

Alternatives considered:
- Translate first and clean Bulgarian later: rejected because it creates parallel rework and higher review risk.

### 3. Add a lightweight client-side locale state
The active language will be managed in the frontend state layer and reused across hero copy, tabs, category headings, item content, and toggle UI. The chosen locale should persist across interaction sessions using a lightweight browser-side persistence mechanism.

Rationale:
- Fits the current static frontend architecture.
- Avoids page reloads while satisfying the requested toggle behavior.
- Improves repeat visits for users who prefer English.

Alternatives considered:
- Separate per-language pages: rejected because it complicates navigation and creates duplicate rendering paths.
- URL-only locale switching with no persistence: rejected because it is less convenient for repeat use.

### 4. Preserve category identity across locale switches
Category IDs will remain locale-neutral, and the rendering layer will swap only labels and content while keeping the active category selected.

Rationale:
- Prevents disruptive jumps when the user toggles language mid-browse.
- Simplifies keyboard and tab interaction behavior because only displayed text changes.

Alternatives considered:
- Rebuilding the entire tab state on each language change: rejected because it risks resetting the user’s place.

### 5. Localize the menu shell as well as the menu body
The hero section, section headers, summary messaging, and toggle labels will participate in localization, not just the item list.

Rationale:
- A partial localization would leave the experience feeling inconsistent.
- Guests need a coherent language experience across both navigation and content.

Alternatives considered:
- Localize items only: rejected because major UI chrome would still remain mixed-language.

## Risks / Trade-offs

- [Source document itself contains inconsistencies] → Mitigation: treat the `.docx` as the review baseline, but still apply explicit copy normalization where obvious misspellings or inconsistent terms appear.
- [English translations feel literal or uneven] → Mitigation: translate at the menu-item level with hospitality-friendly phrasing and keep a focused QA pass for tone consistency.
- [Locale state drifts from selected category state] → Mitigation: use stable category IDs and a single rendering path that reuses the active category during language updates.
- [Localization increases content maintenance cost] → Mitigation: keep all translations in one structured static source and document the expected field shape in code.

## Migration Plan

1. Audit the existing static menu content against the printable `.docx`.
2. Correct Bulgarian category names, item names, and descriptions for consistency.
3. Refactor the menu data structure to support `bg` and `en` localized text fields.
4. Add English translations for the menu body and localized UI chrome.
5. Implement the language toggle and locale persistence in the static frontend.
6. Verify both locales across mobile and desktop, including category preservation during toggling.

Rollback strategy:
- If needed, revert to the previous single-locale static data shape and remove the toggle UI, since no backend migration is involved.

## Open Questions

- Should the default initial locale remain Bulgarian for all users, or should English be preselected for non-Bulgarian browser locales in a future change?
- Does the team want the printable `.docx` itself updated after the web content is corrected, or is this change limited to the website?
- Are there preferred English brand terms for specific menu sections, or should the translation follow the most straightforward hospitality wording?
