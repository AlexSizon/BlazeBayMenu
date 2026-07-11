const LOCALE_STORAGE_KEY = "blaze-bay-locale";
const tabsRoot = document.querySelector("#category-tabs");
const panelsRoot = document.querySelector("#category-panels");
const localeSelectRoot = document.querySelector("#locale-select");
const summaryCardsRoot = document.querySelector("#summary-cards");
const metaDescription = document.querySelector('meta[name="description"]');

const appState = {
  locale: getInitialLocale(),
  activeCategory: getInitialCategory(),
};

const uiNodes = {
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  localeSwitchLabel: document.querySelector("#locale-switch-label"),
  heroDescription: document.querySelector("#hero-description"),
  callVenueButton: document.querySelector("#call-venue-button"),
  instagramButton: document.querySelector("#instagram-button"),
  venueCardLabel: document.querySelector("#venue-card-label"),
  hoursLabel: document.querySelector("#hours-label"),
  phoneLabel: document.querySelector("#phone-label"),
  handleLabel: document.querySelector("#handle-label"),
  heroNote: document.querySelector("#hero-note"),
  menuNavEyebrow: document.querySelector("#menu-nav-eyebrow"),
  menuNavTitle: document.querySelector("#menu-nav-title"),
  menuNavCopy: document.querySelector("#menu-nav-copy"),
};

function localizedValue(value) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (
    typeof value === "object" &&
    ("bg" in value || "en" in value || "ru" in value)
  ) {
    return value[appState.locale] ?? value.bg ?? value.en ?? value.ru ?? "";
  }

  return "";
}

function getInitialLocale() {
  const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (savedLocale && savedLocale in menuData.localeOptions) {
    return savedLocale;
  }

  return menuData.defaultLocale;
}

function getInitialCategory() {
  const hashCategory = window.location.hash.replace("#", "");
  const existingCategory = menuData.categories.find(
    (category) => category.id === hashCategory
  );

  return existingCategory ? existingCategory.id : menuData.categories[0].id;
}

function buildOptionLabel(option) {
  if (option.label) {
    return localizedValue(option.label);
  }

  const unitLabel = menuData.units[appState.locale][option.unit] ?? option.unit;
  return option.amount ? `${option.amount} ${unitLabel}` : unitLabel;
}

function createPriceOptions(options) {
  return options
    .map(
      (option) => `
        <li class="price-pill">
          <span>${buildOptionLabel(option)}</span>
          <strong>${option.value}</strong>
        </li>
      `
    )
    .join("");
}

function createItemMarkup(item) {
  const itemName = localizedValue(item.name);
  const itemDetail = item.detail
    ? `<p class="item-detail">${localizedValue(item.detail)}</p>`
    : "";
  const pricesLabel = `${localizedValue(menuData.ui.itemPricesAriaPrefix)} ${itemName}`;

  return `
    <article class="menu-item">
      <div class="item-copy">
        <h4>${itemName}</h4>
        ${itemDetail}
      </div>
      <ul class="item-prices" aria-label="${pricesLabel}">
        ${createPriceOptions(item.options)}
      </ul>
    </article>
  `;
}

function createPanelMarkup(category) {
  return `
    <section
      id="panel-${category.id}"
      class="menu-panel"
      role="tabpanel"
      aria-labelledby="tab-${category.id}"
      tabindex="0"
      hidden
    >
      <div class="panel-header">
        <div>
          <p class="mini-label">${localizedValue(category.group)}</p>
          <h3>${localizedValue(category.title)}</h3>
        </div>
        <p class="panel-intro">${localizedValue(category.intro)}</p>
      </div>
      <div class="menu-list">
        ${category.items.map(createItemMarkup).join("")}
      </div>
    </section>
  `;
}

function createTabMarkup(category) {
  return `
    <button
      id="tab-${category.id}"
      class="tab-button"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="panel-${category.id}"
      tabindex="-1"
      data-category="${category.id}"
    >
      <span>${localizedValue(category.label)}</span>
    </button>
  `;
}

function activateTab(categoryId, options = {}) {
  const { shouldFocusPanel = false, updateHash = true } = options;
  const tabs = [...tabsRoot.querySelectorAll("[role='tab']")];
  const panels = [...panelsRoot.querySelectorAll("[role='tabpanel']")];

  appState.activeCategory = categoryId;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.category === categoryId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.setAttribute("tabindex", isActive ? "0" : "-1");

    if (isActive) {
      tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `panel-${categoryId}`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;

    if (isActive && shouldFocusPanel) {
      panel.focus();
    }
  });

  if (updateHash) {
    history.replaceState(null, "", `#${categoryId}`);
  }
}

function handleTabKeydown(event) {
  const tabs = [...tabsRoot.querySelectorAll("[role='tab']")];
  const currentIndex = tabs.findIndex((tab) => tab === event.currentTarget);
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % tabs.length;
  } else if (event.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = tabs.length - 1;
  } else {
    return;
  }

  event.preventDefault();
  tabs[nextIndex].focus();
  activateTab(tabs[nextIndex].dataset.category, { updateHash: true });
}

function bindTabs() {
  tabsRoot.querySelectorAll("[role='tab']").forEach((tab) => {
    tab.addEventListener("click", () =>
      activateTab(tab.dataset.category, { shouldFocusPanel: true, updateHash: true })
    );
    tab.addEventListener("keydown", handleTabKeydown);
  });
}

function renderLocaleSelect() {
  localeSelectRoot.innerHTML = Object.entries(menuData.localeOptions)
    .map(
      ([localeCode, localeCopy]) => `
        <option value="${localeCode}"${localeCode === appState.locale ? " selected" : ""}>
          ${localizedValue(localeCopy.label)}
        </option>
      `
    )
    .join("");

  localeSelectRoot.setAttribute(
    "aria-label",
    localizedValue(menuData.ui.localeSelectAriaLabel)
  );

  localeSelectRoot.onchange = () => {
    const selectedLocale = localeSelectRoot.value;

    if (!(selectedLocale in menuData.localeOptions) || selectedLocale === appState.locale) {
      return;
    }

    appState.locale = selectedLocale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, appState.locale);
    renderApp();
  };
}

function renderSummaryCards() {
  summaryCardsRoot.setAttribute(
    "aria-label",
    localizedValue(menuData.ui.summaryAriaLabel)
  );

  summaryCardsRoot.innerHTML = menuData.ui.summaryCards
    .map(
      (card) => `
        <article class="summary-card">
          <p class="mini-label">${localizedValue(card.eyebrow)}</p>
          <h3>${localizedValue(card.title)}</h3>
          <p>${localizedValue(card.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderShell() {
  document.documentElement.lang = appState.locale;
  document.title = localizedValue(menuData.ui.documentTitle);
  metaDescription.setAttribute(
    "content",
    localizedValue(menuData.ui.metaDescription)
  );

  uiNodes.heroEyebrow.textContent = localizedValue(menuData.ui.hero.eyebrow);
  uiNodes.localeSwitchLabel.textContent = localizedValue(
    menuData.ui.hero.localeLabel
  );
  uiNodes.heroDescription.textContent = localizedValue(
    menuData.ui.hero.description
  );
  uiNodes.callVenueButton.textContent = localizedValue(
    menuData.ui.hero.callAction
  );
  uiNodes.instagramButton.textContent = localizedValue(
    menuData.ui.hero.instagramAction
  );
  uiNodes.venueCardLabel.textContent = localizedValue(
    menuData.ui.hero.venueCardLabel
  );
  uiNodes.hoursLabel.textContent = localizedValue(menuData.ui.hero.hoursLabel);
  uiNodes.phoneLabel.textContent = localizedValue(menuData.ui.hero.phoneLabel);
  uiNodes.handleLabel.textContent = localizedValue(menuData.ui.hero.handleLabel);
  const heroNote = localizedValue(menuData.ui.hero.note);
  uiNodes.heroNote.textContent = heroNote;
  uiNodes.heroNote.hidden = !heroNote;
  uiNodes.menuNavEyebrow.textContent = localizedValue(
    menuData.ui.navigation.eyebrow
  );
  uiNodes.menuNavTitle.textContent = localizedValue(
    menuData.ui.navigation.title
  );
  uiNodes.menuNavCopy.textContent = localizedValue(menuData.ui.navigation.copy);

  tabsRoot.setAttribute(
    "aria-label",
    localizedValue(menuData.ui.navigation.tabsAriaLabel)
  );

  renderLocaleSelect();
  renderSummaryCards();
}

function renderMenu() {
  tabsRoot.innerHTML = menuData.categories.map(createTabMarkup).join("");
  panelsRoot.innerHTML = menuData.categories.map(createPanelMarkup).join("");
  bindTabs();
  activateTab(appState.activeCategory, { updateHash: true });
}

function renderApp() {
  renderShell();
  renderMenu();
}

window.addEventListener("hashchange", () => {
  const hashCategory = window.location.hash.replace("#", "");
  const existingCategory = menuData.categories.find(
    (category) => category.id === hashCategory
  );

  if (existingCategory) {
    activateTab(existingCategory.id, { updateHash: false });
  }
});

renderApp();
