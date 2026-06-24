## ADDED Requirements

### Requirement: Category tabs for menu browsing
The system SHALL display a tab for every published menu category so guests can switch directly to the food or drink section they want to view.

#### Scenario: Menu categories are available
- **WHEN** the web menu loads
- **THEN** the interface shows tabs for each category defined in the static menu content source

### Requirement: Active category switching
The system SHALL update the visible menu content when a guest selects a different category tab without requiring a full page reload.

#### Scenario: Guest selects a new category
- **WHEN** a guest activates a category tab
- **THEN** the newly selected category becomes active and its menu items are shown while non-active category panels are hidden

### Requirement: Accessible tab interaction
The system SHALL provide accessible tab semantics and keyboard interaction for category switching.

#### Scenario: Keyboard user navigates tabs
- **WHEN** a keyboard-only user moves focus across the category tab list and activates a tab
- **THEN** focus behavior, active state, and associated category panel follow accessible tab patterns

#### Scenario: Mobile guest browses many categories
- **WHEN** the number of category tabs exceeds the available mobile width
- **THEN** the tab list remains usable through touch-friendly overflow behavior without clipping labels beyond recognition

### Requirement: User-friendly menu navigation
The system SHALL make category browsing feel simple and predictable through clear active states, tap-friendly targets, and low-friction transitions between sections.

#### Scenario: Guest quickly switches between categories
- **WHEN** a guest compares multiple food or drink categories in one session
- **THEN** the interface makes the currently selected category obvious and allows repeated switching without confusion or accidental taps
