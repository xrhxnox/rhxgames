const GITHUB_OWNER = "xrhxnox";
const GITHUB_REPO = "rhxgames";
const GITHUB_BRANCH = "gh-pages";
const DATA_PATH = "js/data.js";
const STATUS_PATH = "js/status.js";
const TOKEN_STORAGE_KEY = "rhxgames_gh_pat";

const form = document.getElementById("addForm");
const tokenInput = document.getElementById("token");
const rememberToken = document.getElementById("rememberToken");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");
const puntuacionInput = document.getElementById("puntuacion");
const ratingPreview = document.getElementById("ratingPreview");
const topSelect = document.getElementById("top");
const fechaInput = document.getElementById("fecha");
const successBanner = document.getElementById("successBanner");
const successMessage = document.getElementById("successMessage");
const addAnotherBtn = document.getElementById("addAnotherBtn");
const platformPicker = document.getElementById("platformPicker");
const genrePicker = document.getElementById("genrePicker");
const imagenInput = document.getElementById("imagen");
const entriesListEl = document.getElementById("entriesList");
const refreshEntriesBtn = document.getElementById("refreshEntriesBtn");
const editBanner = document.getElementById("editBanner");
const editingTitleEl = document.getElementById("editingTitle");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const currentImageHint = document.getElementById("currentImageHint");
const entriesSearchInput = document.getElementById("entriesSearchInput");
const statusFormHint = document.getElementById("statusFormHint");
const statusForm = document.getElementById("statusForm");
const statusTituloInput = document.getElementById("statusTitulo");
const saveStatusBtn = document.getElementById("saveStatusBtn");
const clearStatusBtn = document.getElementById("clearStatusBtn");
const statusFormStatusEl = document.getElementById("statusFormStatus");

let editingId = null;
let cachedEntries = [];
let statusFileSha = null;

platformPicker.innerHTML = Object.values(PLATFORM_GROUPS).map(group => `
  <div class="platform-group">
    <div class="platform-group-label" style="color:${group.color}">${group.label}</div>
    <div class="platform-options">
      ${Object.entries(group.items).map(([key, label]) => `
        <label>
          <input type="checkbox" name="plataforma" value="${key}">
          ${label}
        </label>
      `).join("")}
    </div>
  </div>
`).join("");

genrePicker.innerHTML = GAME_GENRES.map(genre => `
  <label>
    <input type="checkbox" name="genero" value="${genre}">
    ${genre}
  </label>
`).join("");

function getSelectedPlatforms() {
  return [...platformPicker.querySelectorAll('input[name="plataforma"]:checked')].map(el => el.value);
}

function getSelectedGenres() {
  return [...genrePicker.querySelectorAll('input[name="genero"]:checked')].map(el => el.value);
}

function resetFormUI() {
  const token = tokenInput.value;
  const remember = rememberToken.checked;
  editingId = null;
  form.reset();
  fechaInput.valueAsDate = new Date();
  puntuacionInput.value = 5;
  updateRatingPreview();
  imagenInput.required = true;
  currentImageHint.hidden = true;
  editBanner.hidden = true;
  submitBtn.textContent = "Publicar juego";
  if (remember) {
    tokenInput.value = token;
    rememberToken.checked = true;
  }
}

addAnotherBtn.addEventListener("click", () => {
  resetFormUI();
  form.hidden = false;
  successBanner.hidden = true;
  setStatus("");
});

cancelEditBtn.addEventListener("click", () => {
  resetFormUI();
  setStatus("");
});

const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
if (savedToken) {
  tokenInput.value = savedToken;
  rememberToken.checked = true;
}

fechaInput.valueAsDate = new Date();

function updateRatingPreview() {
  const value = parseFloat(puntuacionInput.value) || 0;
  ratingPreview.innerHTML = starsMarkup(value);
}
puntuacionInput.addEventListener("input", updateRatingPreview);
updateRatingPreview();

function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.className = isError ? "status error" : "status";
}

function slugify(text) {
  return foldAccents(text.toLowerCase())
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function bufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str.replace(/\n/g, ""))));
}

async function githubRequest(path, options = {}) {
  const token = tokenInput.value.trim();
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, {
    method: options.method || "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github+json",
      ...(options.body ? { "Content-Type": "application/json" } : {})
    },
    body: options.body
  });
  const payload = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(payload.message || `Error ${res.status}`);
  }
  return payload;
}

async function uploadFile(path, base64Content, message) {
  let sha;
  try {
    const existing = await githubRequest(`${path}?ref=${GITHUB_BRANCH}`);
    sha = existing.sha;
  } catch (err) {
    // el archivo no existe todavía, no hace falta sha
  }
  return githubRequest(path, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: base64Content,
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {})
    })
  });
}

function serializeEntries(entriesArray) {
  const header = `// ============================================================
// Aquí agregas cada videojuego que termines. Este archivo se
// actualiza automáticamente desde admin.html — también puedes
// editarlo a mano si prefieres.
//
// plataformas: lista de claves de plataforma (ver PLATFORM_GROUPS
//              en js/utils.js)
// generos: lista de géneros (ver GAME_GENRES en js/utils.js)
// puntuacion: número del 0 al 5 (acepta medios puntos, ej. 3.5)
// top: "top5" | "top15" | ausente si no aplica
// imagen: ruta a la carátula (guárdala en assets/img/)
// fecha: cuándo se publicó la entrada, formato AAAA-MM-DD
// ============================================================

`;
  const body = entriesArray.map(e => `  {
    id: ${e.id},
    titulo: ${JSON.stringify(e.titulo)},
    imagen: ${JSON.stringify(e.imagen)},${e.plataformas && e.plataformas.length ? `
    plataformas: ${JSON.stringify(e.plataformas)},` : ""}${e.generos && e.generos.length ? `
    generos: ${JSON.stringify(e.generos)},` : ""}${e.top ? `
    top: ${JSON.stringify(e.top)},` : ""}
    puntuacion: ${e.puntuacion},
    fecha: ${JSON.stringify(e.fecha)}
  }`).join(",\n");

  return `${header}const entries = [\n${body}\n];\n`;
}

function parseEntries(jsSource) {
  const fn = new Function(`${jsSource}\nreturn entries;`);
  return fn();
}

async function stripIccProfile(blob) {
  const buf = new Uint8Array(await blob.arrayBuffer());
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return blob;
  const out = [buf[0], buf[1]];
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) break;
    const marker = buf[i + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      out.push(buf[i], buf[i + 1]);
      i += 2;
      if (marker === 0xd9) break;
      continue;
    }
    if (marker >= 0xd0 && marker <= 0xd7) {
      out.push(buf[i], buf[i + 1]);
      i += 2;
      continue;
    }
    const len = (buf[i + 2] << 8) | buf[i + 3];
    const segStart = i;
    const segEnd = i + 2 + len;
    const isIccApp2 = marker === 0xe2 &&
      String.fromCharCode(...buf.slice(i + 4, i + 4 + 11)) === "ICC_PROFILE";
    if (!isIccApp2) {
      for (let k = segStart; k < segEnd; k++) out.push(buf[k]);
    }
    i = segEnd;
    if (marker === 0xda) {
      for (let k = i; k < buf.length; k++) out.push(buf[k]);
      break;
    }
  }
  return new Blob([new Uint8Array(out)], { type: "image/jpeg" });
}

async function compressImage(file, maxDimension = 900, quality = 0.85) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bitmap, 0, 0, width, height);
  if (bitmap.close) bitmap.close();
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error("No se pudo procesar la imagen."));
    }, "image/jpeg", quality);
  });
  return stripIccProfile(blob);
}

async function deleteImageFile(path, message) {
  try {
    const info = await githubRequest(`${path}?ref=${GITHUB_BRANCH}`);
    await githubRequest(path, {
      method: "DELETE",
      body: JSON.stringify({ message, sha: info.sha, branch: GITHUB_BRANCH })
    });
  } catch (err) {
    // limpieza no crítica: si falla (ya borrada, etc.) lo ignoramos
  }
}

function entryRowMarkup(entry) {
  return `
    <div class="entry-row" data-id="${entry.id}">
      <img src="${entry.imagen}" alt="">
      <div class="entry-info">
        <div class="entry-title">${entry.titulo}</div>
        <div class="entry-category">${(entry.plataformas || []).map(k => PLATFORM_LABELS[k] || k).join(", ")}</div>
      </div>
      <button type="button" class="edit-btn" aria-label="Editar ${entry.titulo}"><i class="fa-solid fa-pen"></i></button>
      <button type="button" class="delete-btn" aria-label="Eliminar ${entry.titulo}"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;
}

function renderFilteredEntries() {
  const query = foldAccents(entriesSearchInput.value.trim().toLowerCase());
  if (!query) {
    entriesListEl.innerHTML = cachedEntries.length
      ? '<p class="entries-hint">Escribe un título para buscar entre tus juegos.</p>'
      : '<p class="entries-hint">Todavía no hay juegos.</p>';
    return;
  }
  const matches = cachedEntries
    .filter(e => foldAccents(e.titulo.toLowerCase()).includes(query))
    .sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));
  entriesListEl.innerHTML = matches.length
    ? matches.map(entryRowMarkup).join("")
    : '<p class="entries-hint">Sin resultados.</p>';
}
entriesSearchInput.addEventListener("input", renderFilteredEntries);

async function loadEntries() {
  if (!tokenInput.value.trim()) {
    entriesListEl.innerHTML = '<p class="entries-hint">Ingresa tu token para ver tus juegos.</p>';
    return;
  }
  entriesListEl.innerHTML = '<p class="entries-hint">Cargando...</p>';
  try {
    const current = await githubRequest(`${DATA_PATH}?ref=${GITHUB_BRANCH}`);
    cachedEntries = parseEntries(base64ToUtf8(current.content));
    renderFilteredEntries();
  } catch (err) {
    entriesListEl.innerHTML = `<p class="entries-hint">Error al cargar: ${err.message}</p>`;
  }
}
refreshEntriesBtn.addEventListener("click", () => {
  loadEntries();
  loadStatus();
});

function serializeStatus(statusData) {
  const header = "// Juego actual — se edita desde admin.html\n";
  if (!statusData) return `${header}const currentStatus = null;\n`;
  return `${header}const currentStatus = {\n  titulo: ${JSON.stringify(statusData.titulo)}\n};\n`;
}

function parseStatus(jsSource) {
  const fn = new Function(`${jsSource}\nreturn currentStatus;`);
  return fn();
}

function setStatusFormStatus(msg, isError = false) {
  statusFormStatusEl.textContent = msg;
  statusFormStatusEl.className = isError ? "status error" : "status";
}

async function loadStatus() {
  if (!tokenInput.value.trim()) return;
  try {
    const current = await githubRequest(`${STATUS_PATH}?ref=${GITHUB_BRANCH}`);
    statusFileSha = current.sha;
    const parsed = parseStatus(base64ToUtf8(current.content));
    statusTituloInput.value = parsed && parsed.titulo ? parsed.titulo : "";
    statusFormHint.hidden = true;
    statusForm.hidden = false;
  } catch (err) {
    statusFileSha = null;
    statusFormHint.hidden = false;
    statusFormHint.textContent = `Error al cargar el estado: ${err.message}`;
  }
}

saveStatusBtn.addEventListener("click", async () => {
  const titulo = statusTituloInput.value.trim();
  if (!titulo) {
    setStatusFormStatus("Escribe qué estás jugando.", true);
    return;
  }
  saveStatusBtn.disabled = true;
  try {
    setStatusFormStatus("Guardando...");
    const content = serializeStatus({ titulo });
    const result = await githubRequest(STATUS_PATH, {
      method: "PUT",
      body: JSON.stringify({
        message: `Actualizar estado: ${titulo}`,
        content: utf8ToBase64(content),
        branch: GITHUB_BRANCH,
        ...(statusFileSha ? { sha: statusFileSha } : {})
      })
    });
    statusFileSha = result.content.sha;
    setStatusFormStatus("Estado guardado.");
  } catch (err) {
    setStatusFormStatus(`Error: ${err.message}`, true);
  } finally {
    saveStatusBtn.disabled = false;
  }
});

clearStatusBtn.addEventListener("click", async () => {
  clearStatusBtn.disabled = true;
  try {
    setStatusFormStatus("Quitando estado...");
    const content = serializeStatus(null);
    const result = await githubRequest(STATUS_PATH, {
      method: "PUT",
      body: JSON.stringify({
        message: "Quitar estado actual",
        content: utf8ToBase64(content),
        branch: GITHUB_BRANCH,
        ...(statusFileSha ? { sha: statusFileSha } : {})
      })
    });
    statusFileSha = result.content.sha;
    statusTituloInput.value = "";
    setStatusFormStatus("Estado eliminado.");
  } catch (err) {
    setStatusFormStatus(`Error: ${err.message}`, true);
  } finally {
    clearStatusBtn.disabled = false;
  }
});

function enterEditMode(entry) {
  editingId = entry.id;
  document.getElementById("titulo").value = entry.titulo;

  (entry.plataformas || []).forEach(key => {
    const el = platformPicker.querySelector(`input[value="${key}"]`);
    if (el) el.checked = true;
  });
  (entry.generos || []).forEach(g => {
    const el = genrePicker.querySelector(`input[value="${g}"]`);
    if (el) el.checked = true;
  });

  puntuacionInput.value = entry.puntuacion;
  updateRatingPreview();
  topSelect.value = entry.top || "";
  fechaInput.value = entry.fecha;

  imagenInput.value = "";
  imagenInput.required = false;
  currentImageHint.hidden = false;
  currentImageHint.textContent = `Imagen actual: ${entry.imagen.split("/").pop()} (deja este campo vacío para conservarla)`;

  editBanner.hidden = false;
  editingTitleEl.textContent = entry.titulo;
  submitBtn.textContent = "Guardar cambios";

  successBanner.hidden = true;
  form.hidden = false;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function handleDelete(entry) {
  if (!confirm(`¿Eliminar "${entry.titulo}"? Esta acción no se puede deshacer.`)) return;
  try {
    setStatus(`Eliminando "${entry.titulo}"...`);
    const current = await githubRequest(`${DATA_PATH}?ref=${GITHUB_BRANCH}`);
    const currentEntries = parseEntries(base64ToUtf8(current.content));
    const remaining = currentEntries.filter(e => e.id !== entry.id);
    const newSource = serializeEntries(remaining);
    await githubRequest(DATA_PATH, {
      method: "PUT",
      body: JSON.stringify({
        message: `Eliminar: ${entry.titulo}`,
        content: utf8ToBase64(newSource),
        sha: current.sha,
        branch: GITHUB_BRANCH
      })
    });
    await deleteImageFile(entry.imagen, `Eliminar imagen: ${entry.titulo}`);
    setStatus(`"${entry.titulo}" eliminado.`);
    if (editingId === entry.id) resetFormUI();
    loadEntries();
  } catch (err) {
    setStatus(`Error al eliminar: ${err.message}`, true);
  }
}

entriesListEl.addEventListener("click", (event) => {
  const row = event.target.closest(".entry-row");
  if (!row) return;
  const entry = cachedEntries.find(e => e.id === Number(row.dataset.id));
  if (!entry) return;
  if (event.target.closest(".edit-btn")) {
    enterEditMode(entry);
  } else if (event.target.closest(".delete-btn")) {
    handleDelete(entry);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitBtn.disabled = true;

  const token = tokenInput.value.trim();
  if (rememberToken.checked) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  try {
    const titulo = document.getElementById("titulo").value.trim();
    const puntuacion = parseFloat(puntuacionInput.value);
    const fecha = fechaInput.value;
    const file = imagenInput.files[0];
    const isEditing = editingId !== null;

    if (!isEditing && !file) throw new Error("Selecciona una imagen.");

    setStatus("Leyendo catálogo actual...");
    const current = await githubRequest(`${DATA_PATH}?ref=${GITHUB_BRANCH}`);
    const currentEntries = parseEntries(base64ToUtf8(current.content));

    const plataformas = getSelectedPlatforms();
    const generos = getSelectedGenres();

    let entryId;
    let imagePath;
    let oldImagePath = null;

    if (isEditing) {
      const existing = currentEntries.find(e => e.id === editingId);
      if (!existing) throw new Error("El juego ya no existe (puede que lo hayas borrado desde otro lado).");
      entryId = editingId;
      imagePath = existing.imagen;
      if (file) {
        oldImagePath = existing.imagen;
        setStatus("Comprimiendo imagen...");
        const compressed = await compressImage(file);
        imagePath = `assets/img/${slugify(titulo)}-${entryId}.jpg`;
        setStatus("Subiendo imagen...");
        await uploadFile(imagePath, bufferToBase64(await compressed.arrayBuffer()), `Actualizar imagen: ${titulo}`);
      }
    } else {
      entryId = currentEntries.reduce((max, e) => Math.max(max, e.id), 0) + 1;
      setStatus("Comprimiendo imagen...");
      const compressed = await compressImage(file);
      imagePath = `assets/img/${slugify(titulo)}-${entryId}.jpg`;
      setStatus("Subiendo imagen...");
      await uploadFile(imagePath, bufferToBase64(await compressed.arrayBuffer()), `Agregar imagen: ${titulo}`);
    }

    const top = topSelect.value || undefined;
    const entryData = { id: entryId, titulo, imagen: imagePath, plataformas, generos, top, puntuacion, fecha };
    const updatedEntries = isEditing
      ? currentEntries.map(e => e.id === editingId ? entryData : e)
      : [...currentEntries, entryData];
    const newSource = serializeEntries(updatedEntries);

    setStatus(isEditing ? "Guardando cambios..." : "Guardando juego...");
    await githubRequest(DATA_PATH, {
      method: "PUT",
      body: JSON.stringify({
        message: isEditing ? `Editar: ${titulo}` : `Agregar: ${titulo}`,
        content: utf8ToBase64(newSource),
        sha: current.sha,
        branch: GITHUB_BRANCH
      })
    });

    if (oldImagePath && oldImagePath !== imagePath) {
      await deleteImageFile(oldImagePath, `Eliminar imagen anterior: ${titulo}`);
    }

    setStatus("");
    successMessage.textContent = isEditing
      ? `"${titulo}" se actualizó correctamente. GitHub Pages tarda ~30-60s en reflejarlo.`
      : `"${titulo}" se guardó correctamente. GitHub Pages tarda ~30-60s en mostrarlo en el sitio — no vuelvas a enviar este formulario para el mismo juego.`;
    successBanner.hidden = false;
    form.hidden = true;
    editingId = null;
    successBanner.scrollIntoView({ behavior: "smooth", block: "start" });
    loadEntries();
  } catch (err) {
    setStatus(`Error: ${err.message}`, true);
  } finally {
    submitBtn.disabled = false;
  }
});

if (savedToken) {
  loadEntries();
  loadStatus();
}
