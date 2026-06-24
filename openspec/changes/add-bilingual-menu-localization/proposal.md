## Why

The current Blaze Bay menu mixes languages, contains Bulgarian spelling inconsistencies from the printable source document, and does not give guests a way to read the site fully in English. Fixing the Bulgarian copy and adding first-class English localization now will make the menu more trustworthy, easier to browse, and more useful for both local and international visitors.

## What Changes

- Correct Bulgarian menu copy across categories, item names, descriptions, and section labels using the printable source document as the reference point.
- Normalize obvious spelling and consistency issues in the current menu data, including cases like `сирине`, `айсбер`, `джинджирфил`, `Ликоьр`, and `COFFE`.
- Add complete English translations for the menu content and surrounding UI text instead of leaving the experience partially mixed-language.
- Add a visible language toggle so guests can switch the menu between Bulgarian and English without reloading the page.
- Preserve the current browsing context when the language changes, so users stay on the same menu category while the copy updates.

## Capabilities

### New Capabilities
- `menu-language-localization`: Let guests switch the Blaze Bay menu between Bulgarian and English for all supported UI and menu content.

### Modified Capabilities
- `static-menu-content`: Update the content model and source data so each menu category and item supports corrected Bulgarian copy plus English translations.
- `restaurant-menu-showcase`: Update hero and supporting interface copy so the branded menu shell renders in the active language.
- `menu-category-navigation`: Update category navigation so tab labels localize and the active category remains stable when the language changes.

## Impact

- Affects static menu data structure, content authoring, translation coverage, and client-side rendering logic.
- Adds localized UI state management for the active language and its toggle control.
- Requires a content QA pass against the printable `.docx` to correct Bulgarian words before translating them into English.
- Does not require backend changes, APIs, or server-side localization infrastructure.
