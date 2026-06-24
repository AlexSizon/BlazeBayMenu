## MODIFIED Requirements

### Requirement: Category tabs for menu browsing
The system SHALL display a tab for every published menu category so guests can switch directly to the food or drink section they want to view, with each tab label rendered in the active language.

#### Scenario: Menu categories are available
- **WHEN** the web menu loads
- **THEN** the interface shows tabs for each category defined in the static menu content source using labels from the active locale

### Requirement: Active category switching
The system SHALL update the visible menu content when a guest selects a different category tab or changes the active language without requiring a full page reload.

#### Scenario: Guest selects a new category
- **WHEN** a guest activates a category tab
- **THEN** the newly selected category becomes active and its menu items are shown while non-active category panels are hidden

#### Scenario: Guest changes language while browsing
- **WHEN** a guest switches between Bulgarian and English
- **THEN** the currently selected category remains active while its label and content update to the chosen locale
