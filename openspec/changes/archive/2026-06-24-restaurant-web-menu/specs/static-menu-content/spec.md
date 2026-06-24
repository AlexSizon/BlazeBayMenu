## ADDED Requirements

### Requirement: Static menu data source
The system SHALL source menu categories and items from static frontend-managed content rather than a backend service.

#### Scenario: Site is deployed without APIs
- **WHEN** the web menu is opened in an environment with no backend connection
- **THEN** all menu categories and items still render successfully from bundled static assets

### Requirement: Structured category and item content
The system SHALL represent menu content in a structured format that supports category names, item names, optional descriptions, and one or more price or size values.

#### Scenario: Menu item has multiple serving options
- **WHEN** a menu item includes multiple sizes, volumes, or price points
- **THEN** the content model can represent and render those options without flattening them into ambiguous freeform text

### Requirement: Printed menu coverage
The system SHALL support the existing printed menu section types needed for Blaze Bay, including food, cocktails, beers, soft drinks, coffee, specialty drinks, and add-ons where present.

#### Scenario: Current print sections are encoded for web
- **WHEN** the menu content is prepared for the static site
- **THEN** the structure can represent the current Blaze Bay categories without requiring a schema change
