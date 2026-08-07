const grid = document.getElementById("grid");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");
const yearSelect = document.getElementById("year");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");

const PAGE_SIZE = 16;

let activeFilter = "todos";
let activeYear = "todos";
let activeSearch = "";
let activeSort = "fecha";
let currentPage = 1;

function platformTagsMarkup(entry) {
  const sortedPlatforms = [...(entry.plataformas || [])].sort(
    (a, b) => platformSortIndex(a) - platformSortIndex(b)
  );
  const tags = sortedPlatforms.map(key => {
    const label = PLATFORM_LABELS[key] || key;
    const color = PLATFORM_COLORS[key] || "#9aa1ac";
    return `<span class="platform-tag" style="--platform-color:${color}">${label}</span>`;
  }).join("");
  return tags ? `<div class="platform-tags">${tags}</div>` : "";
}

function genreTagsMarkup(entry) {
  const tags = (entry.generos || []).map(g =>
    `<span class="platform-tag genre-tag">${g}</span>`
  ).join("");
  return tags ? `<div class="genre-tags">${tags}</div>` : "";
}

function topBadgeMarkup(entry) {
  if (!entry.top) return "";
  const label = entry.top === "top5" ? "Top 5" : "Top 10";
  return `<i class="fa-solid fa-star top-star ${entry.top}" title="${label}" aria-label="${label}"></i> `;
}

function cardMarkup(entry) {
  const year = entry.fecha ? entry.fecha.slice(0, 4) : "";
  const fechaLegible = entry.fecha
    ? new Date(entry.fecha + "T00:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
    : "";
  const platformGroups = [...new Set((entry.plataformas || []).map(p => PLATFORM_GROUP_OF[p]).filter(Boolean))];

  return `
    <article class="card" data-groups="${platformGroups.join(" ")}" data-year="${year}" tabindex="0">
      <img src="${entry.imagen}" alt="${entry.titulo}" loading="lazy">
      ${platformTagsMarkup(entry)}
      ${genreTagsMarkup(entry)}
      <div class="title-bar">${topBadgeMarkup(entry)}${entry.titulo}</div>
      <div class="overlay">
        <div class="overlay-title">${entry.titulo}</div>
        <div class="stars" aria-label="Puntuación ${entry.puntuacion} de 5">${starsMarkup(entry.puntuacion)}<span class="rating-number">(${entry.puntuacion % 1 === 0 ? entry.puntuacion : entry.puntuacion.toFixed(1)})</span></div>
        ${fechaLegible ? `<div class="fecha">Publicado el ${fechaLegible}</div>` : ""}
      </div>
    </article>
  `;
}

function populateYears() {
  const years = [...new Set(entries.map(e => e.fecha ? e.fecha.slice(0, 4) : null).filter(Boolean))].sort((a, b) => b - a);
  yearSelect.innerHTML = `<option value="todos">Todos</option>` + years.map(y => `<option value="${y}">${y}</option>`).join("");
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  pagination.innerHTML = `
    <button type="button" id="prevPageBtn" ${currentPage === 1 ? "disabled" : ""} aria-label="Página anterior"><i class="fa-solid fa-chevron-left"></i></button>
    <span class="page-label">Página ${currentPage} de ${totalPages}</span>
    <button type="button" id="nextPageBtn" ${currentPage === totalPages ? "disabled" : ""} aria-label="Página siguiente"><i class="fa-solid fa-chevron-right"></i></button>
  `;
  document.getElementById("prevPageBtn").addEventListener("click", () => {
    currentPage -= 1;
    render();
  });
  document.getElementById("nextPageBtn").addEventListener("click", () => {
    currentPage += 1;
    render();
  });
}

function render() {
  const filtered = entries.filter(e => {
    const groups = (e.plataformas || []).map(p => PLATFORM_GROUP_OF[p]);
    const matchFilter = activeFilter === "todos" || groups.includes(activeFilter);
    const matchYear = activeYear === "todos" || (e.fecha && e.fecha.slice(0, 4) === activeYear);
    const matchSearch = !activeSearch || foldAccents(e.titulo.toLowerCase()).includes(activeSearch);
    return matchFilter && matchYear && matchSearch;
  });

  if (activeSort === "rating") {
    filtered.sort((a, b) => b.puntuacion - a.puntuacion || (b.fecha || "").localeCompare(a.fecha || ""));
  } else if (activeSort === "rating-asc") {
    filtered.sort((a, b) => a.puntuacion - b.puntuacion || (b.fecha || "").localeCompare(a.fecha || ""));
  } else {
    filtered.sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  grid.innerHTML = pageItems.map(cardMarkup).join("");
  emptyState.hidden = filtered.length !== 0;
  renderPagination(totalPages);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    currentPage = 1;
    render();
  });
});

yearSelect.addEventListener("change", () => {
  activeYear = yearSelect.value;
  currentPage = 1;
  render();
});

sortSelect.addEventListener("change", () => {
  activeSort = sortSelect.value;
  currentPage = 1;
  render();
});

searchInput.addEventListener("input", () => {
  activeSearch = foldAccents(searchInput.value.trim().toLowerCase());
  currentPage = 1;
  render();
});

populateYears();
render();

document.getElementById("copyrightYear").textContent = new Date().getFullYear();

function renderProfileStats() {
  const statsEl = document.getElementById("profileStats");
  if (!statsEl || !entries.length) return;

  const count = entries.length;
  const avg = entries.reduce((sum, e) => sum + e.puntuacion, 0) / count;
  const years = entries.map(e => e.fecha ? Number(e.fecha.slice(0, 4)) : null).filter(Boolean);

  const parts = [`${count} ${count === 1 ? "juego" : "juegos"}`, `${avg.toFixed(1)} ★ promedio`];
  if (years.length) parts.push(`desde ${Math.min(...years)}`);

  statsEl.textContent = parts.join(" · ");
  statsEl.hidden = false;
}
renderProfileStats();

function renderStatus() {
  const badge = document.getElementById("statusBadge");
  if (!badge || typeof currentStatus === "undefined" || !currentStatus || !currentStatus.titulo) return;

  badge.innerHTML = `
    <span class="status-dot"></span>
    <i class="fa-solid fa-gamepad"></i>
    <span class="status-verb">Jugando</span>
    <span class="status-title">${currentStatus.titulo}</span>
  `;
  badge.hidden = false;
}
renderStatus();

const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "rhxgames_theme";

function updateThemeIcon() {
  const theme = document.documentElement.getAttribute("data-theme");
  themeToggle.innerHTML = theme === "light" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-bolt"></i>';
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon();
});
