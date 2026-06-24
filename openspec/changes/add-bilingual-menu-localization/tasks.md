## 1. Source Copy Audit

- [x] 1.1 Review the current static menu content against `Меню для печати.docx` and identify Bulgarian spelling, wording, and consistency fixes
- [x] 1.2 Normalize corrected Bulgarian category names, item names, section labels, and descriptions in a reviewable source list
- [x] 1.3 Confirm the corrected Bulgarian copy still covers every menu section currently represented on the website

## 2. Localized Content Model

- [x] 2.1 Refactor the static menu data shape so localizable fields support paired `bg` and `en` values while prices and quantities remain shared
- [x] 2.2 Add the corrected Bulgarian content to the localized data structure
- [x] 2.3 Add English translations for menu categories, item names, descriptions, and localized UI text

## 3. Language Toggle Experience

- [x] 3.1 Add a visible Bulgarian/English toggle to the menu interface
- [x] 3.2 Update the rendering logic so hero copy, category labels, headings, and item content switch languages without a full page reload
- [x] 3.3 Preserve the active category when the language changes
- [x] 3.4 Persist the selected locale in lightweight client-side state for repeat visits

## 4. Interface Integration

- [x] 4.1 Update the branded menu shell so supporting interface copy renders from the active locale
- [x] 4.2 Verify that localized tab labels remain touch-friendly and readable on narrow screens
- [x] 4.3 Adjust any spacing or label treatments needed to keep both Bulgarian and English layouts visually stable

## 5. Verification

- [x] 5.1 Test both Bulgarian and English menu views on mobile and desktop breakpoints
- [x] 5.2 Verify that category switching and language switching work together without losing browsing context
- [x] 5.3 Run a copy QA pass to confirm Bulgarian corrections and English translations are consistent with the printable menu intent
- [x] 5.4 Confirm the final bilingual menu still runs fully from static assets with no backend requirement
