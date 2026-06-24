## ADDED Requirements

### Requirement: Visible language toggle
The system SHALL provide a visible control that lets guests switch the menu between Bulgarian and English without a full page reload.

#### Scenario: Guest changes the menu language
- **WHEN** a guest activates the language toggle
- **THEN** the interface updates the active language in place without navigating away from the current menu view

### Requirement: Localized menu rendering
The system SHALL render supported menu UI and menu content in the currently selected language.

#### Scenario: Bulgarian locale is active
- **WHEN** the active locale is Bulgarian
- **THEN** the menu renders Bulgarian labels, menu item names, and menu descriptions from the localized content source

#### Scenario: English locale is active
- **WHEN** the active locale is English
- **THEN** the menu renders English labels, menu item names, and menu descriptions from the localized content source

### Requirement: Locale persistence during browsing
The system SHALL preserve the selected locale across in-session interactions and keep the guest on the same category when switching languages.

#### Scenario: Guest toggles language while browsing a category
- **WHEN** a guest changes the language while a category is already active
- **THEN** the same category remains selected and only the displayed localized content changes
