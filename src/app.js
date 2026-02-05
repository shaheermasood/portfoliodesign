/**
 * app.js — Renders the portfolio page from data and handles interactions.
 */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     Helpers
     ---------------------------------------------------------- */
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") node.className = v;
        else if (k.startsWith("on")) node.addEventListener(k.slice(2).toLowerCase(), v);
        else node.setAttribute(k, v);
      });
    }
    children.flat().forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  /* ----------------------------------------------------------
     Render: Header
     ---------------------------------------------------------- */
  function renderHeader(data) {
    const header = el("header", { className: "header" });

    // Name line
    const nameLine = el("h1", { className: "header__name-line" },
      data.name,
      el("span", { className: "header__copyright" }, " " + data.copyright)
    );
    header.appendChild(nameLine);

    // Primary link pills
    const linksRow = el("div", { className: "header__links" });
    data.primaryLinks.forEach((link) => {
      linksRow.appendChild(
        el("a", {
          className: `pill pill--${link.color}`,
          href: link.href,
          target: "_blank",
          rel: "noopener",
        }, link.label)
      );
    });
    header.appendChild(linksRow);

    // Category tag pills
    const tagsRow = el("div", { className: "header__tags" });
    data.categoryTags.forEach((tag) => {
      tagsRow.appendChild(
        el("span", { className: "pill pill--outline", tabindex: "0" }, tag)
      );
    });
    header.appendChild(tagsRow);

    // Bio paragraph
    header.appendChild(el("p", { className: "header__bio" }, data.bio));

    return header;
  }

  /* ----------------------------------------------------------
     Render: Section Title
     ---------------------------------------------------------- */
  function renderSectionTitle(text) {
    return el("h2", { className: "section-title" }, text);
  }

  /* ----------------------------------------------------------
     Render: Single Project Entry
     ---------------------------------------------------------- */
  function renderProject(project) {
    const article = el("article", { className: "project-entry" });

    // Header row: index + name + role pills
    const headerRow = el("div", { className: "project-entry__header" });
    headerRow.appendChild(el("span", { className: "project-entry__index" }, project.index));
    headerRow.appendChild(el("span", { className: "project-entry__name" }, project.name));

    const rolesWrap = el("span", { className: "project-entry__roles" });
    project.roles.forEach((role) => {
      rolesWrap.appendChild(
        el("span", { className: `pill pill--${role.color}` }, role.label)
      );
    });
    headerRow.appendChild(rolesWrap);
    article.appendChild(headerRow);

    // Key/value detail grid
    const details = el("div", { className: "project-entry__details" });

    const rows = [
      { label: "Year", value: project.year },
      { label: "Location", value: project.location.join(" ") },
      { label: "http://", value: project.url, isLink: true },
      { label: "Project", value: project.description },
    ];

    rows.forEach((row) => {
      const rowEl = el("div", { className: "project-entry__detail-row" });
      rowEl.appendChild(el("span", { className: "project-entry__label" }, row.label));

      let valueContent;
      if (row.isLink) {
        valueContent = el("a", {
          href: "https://" + row.value,
          target: "_blank",
          rel: "noopener",
        }, row.value);
      } else {
        valueContent = row.value;
      }

      rowEl.appendChild(el("span", { className: "project-entry__value" }, valueContent));
      details.appendChild(rowEl);
    });

    article.appendChild(details);
    return article;
  }

  /* ----------------------------------------------------------
     Render: Scroll-to-top Button
     ---------------------------------------------------------- */
  function renderScrollButton() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    const path = document.createElementNS(svgNS, "polyline");
    path.setAttribute("points", "18 15 12 9 6 15");
    svg.appendChild(path);

    const btn = el("button", {
      className: "scroll-top",
      "aria-label": "Scroll to top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    });
    btn.appendChild(svg);

    // Show/hide on scroll
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          btn.classList.toggle("is-visible", window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    });

    return btn;
  }

  /* ----------------------------------------------------------
     Init
     ---------------------------------------------------------- */
  function init() {
    const app = document.getElementById("app");
    if (!app) return;

    const page = el("div", { className: "page" });

    // Header
    page.appendChild(renderHeader(SITE_DATA));

    // Section title
    page.appendChild(renderSectionTitle("Selected Projects"));

    // Projects list
    const section = el("section", { className: "projects", "aria-label": "Project list" });
    PROJECTS.forEach((p) => section.appendChild(renderProject(p)));
    page.appendChild(section);

    app.appendChild(page);

    // Floating scroll button (outside page container)
    app.appendChild(renderScrollButton());
  }

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
