const tabsRoot = document.querySelector("#category-tabs");
const panelsRoot = document.querySelector("#category-panels");

function createPriceOptions(options) {
  return options
    .map(
      (option) => `
        <li class="price-pill">
          <span>${option.label}</span>
          <strong>${option.value}</strong>
        </li>
      `
    )
    .join("");
}

function createItemMarkup(item) {
  const detail = item.detail
    ? `<p class="item-detail">${item.detail}</p>`
    : "";

  return `
    <article class="menu-item">
      <div class="item-copy">
        <h4>${item.name}</h4>
        ${detail}
      </div>
      <ul class="item-prices" aria-label="Prices for ${item.name}">
        ${createPriceOptions(item.options)}
      </ul>
    </article>
  `;
}

function createPanelMarkup(category, index) {
  const isActive = index === 0;
  return `
    <section
      id="panel-${category.id}"
      class="menu-panel${isActive ? " is-active" : ""}"
      role="tabpanel"
      aria-labelledby="tab-${category.id}"
      tabindex="0"
      ${isActive ? "" : "hidden"}
    >
      <div class="panel-header">
        <div>
          <p class="mini-label">${category.group}</p>
          <h3>${category.title}</h3>
        </div>
        <p class="panel-intro">${category.intro}</p>
      </div>
      <div class="menu-list">
        ${category.items.map(createItemMarkup).join("")}
      </div>
    </section>
  `;
}

function createTabMarkup(category, index) {
  const isActive = index === 0;
  return `
    <button
      id="tab-${category.id}"
      class="tab-button${isActive ? " is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${isActive ? "true" : "false"}"
      aria-controls="panel-${category.id}"
      tabindex="${isActive ? "0" : "-1"}"
      data-category="${category.id}"
    >
      <span>${category.label}</span>
    </button>
  `;
}

function activateTab(categoryId, shouldFocusPanel = false) {
  const tabs = [...tabsRoot.querySelectorAll("[role='tab']")];
  const panels = [...panelsRoot.querySelectorAll("[role='tabpanel']")];

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

  history.replaceState(null, "", `#${categoryId}`);
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
  activateTab(tabs[nextIndex].dataset.category);
}

function bindTabs() {
  tabsRoot.querySelectorAll("[role='tab']").forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.category, true));
    tab.addEventListener("keydown", handleTabKeydown);
  });
}

function renderMenu() {
  tabsRoot.innerHTML = menuData.categories.map(createTabMarkup).join("");
  panelsRoot.innerHTML = menuData.categories.map(createPanelMarkup).join("");
  bindTabs();

  const hashCategory = window.location.hash.replace("#", "");
  const existing = menuData.categories.find((category) => category.id === hashCategory);
  if (existing) {
    activateTab(existing.id);
  }
}

renderMenu();
