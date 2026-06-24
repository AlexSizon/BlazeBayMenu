## MODIFIED Requirements

### Requirement: Static menu data source
The system SHALL source Bulgarian and English menu categories and items from static frontend-managed content rather than a backend service.

#### Scenario: Site is deployed without APIs
- **WHEN** the web menu is opened in an environment with no backend connection
- **THEN** all menu categories and items render successfully from bundled static assets in the active language

### Requirement: Structured category and item content
The system SHALL represent menu content in a structured format that supports localized category names, localized item names, optional localized descriptions, and one or more shared price or size values.

#### Scenario: Menu item has multiple serving options
- **WHEN** a menu item includes multiple sizes, volumes, or price points
- **THEN** the content model can represent those options once while rendering the accompanying text in the active language

### Requirement: Printed menu coverage
The system SHALL support the existing printed menu section types needed for Blaze Bay, including corrected Bulgarian source copy and matching English translations for food, cocktails, beers, soft drinks, coffee, specialty drinks, and add-ons where present.

#### Scenario: Current print sections are encoded for web
- **WHEN** the menu content is prepared for the static site from the printable document
- **THEN** the structure can represent the full Blaze Bay categories with corrected Bulgarian wording and English translations without requiring a schema change
