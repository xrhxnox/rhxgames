const PLATFORM_GROUPS = {
  nintendo: {
    label: "Nintendo",
    color: "#e60012",
    items: {
      nes: "NES",
      snes: "SNES",
      n64: "N64",
      gamecube: "NGC",
      wii: "Wii",
      wiiu: "Wii U",
      switch: "Switch",
      switch2: "Switch 2",
      gameboy: "GB",
      gba: "GBA",
      nds: "NDS",
      n3ds: "N3DS"
    }
  },
  playstation: {
    label: "PlayStation",
    icon: "fa-brands fa-playstation",
    color: "#0070d1",
    items: {
      ps1: "PS1",
      ps2: "PS2",
      ps3: "PS3",
      ps4: "PS4",
      ps5: "PS5",
      psp: "PSP",
      psvita: "PS Vita"
    }
  },
  xbox: {
    label: "Xbox",
    icon: "fa-brands fa-xbox",
    color: "#107c10",
    items: {
      xbox: "Xbox",
      xbox360: "Xbox 360",
      xboxone: "Xbox One",
      xboxseries: "Series X|S"
    }
  },
  pc: {
    label: "PC",
    icon: "fa-brands fa-steam",
    color: "#00aeef",
    items: {
      pc: "PC"
    }
  },
  mobile: {
    label: "Móvil",
    icon: "fa-solid fa-mobile-screen-button",
    color: "#00b8a9",
    items: {
      movil: "Móvil"
    }
  }
};

// Géneros de videojuegos disponibles como tags/filtro secundario.
const GAME_GENRES = [
  "Acción", "Aventura", "RPG", "Estrategia", "Plataformas", "Shooter",
  "Mundo abierto", "Terror", "Puzzle", "Carreras", "Lucha", "Deportes",
  "Simulación", "Roguelike", "Party", "Indie"
];

// Orden cronológico aproximado de lanzamiento, de más antigua a más nueva.
// "pc" y "movil" se excluyen de aquí porque siempre van al final (ver
// platformSortIndex).
const PLATFORM_ORDER = [
  "nes", "gameboy", "snes", "ps1", "n64", "ps2", "gba", "ngc",
  "xbox", "nds", "psp", "xbox360", "ps3", "wii", "n3ds", "psvita",
  "wiiu", "ps4", "xboxone", "switch", "xboxseries", "ps5", "switch2"
];

function platformSortIndex(key) {
  if (key === "pc") return PLATFORM_ORDER.length;
  if (key === "movil") return PLATFORM_ORDER.length + 1;
  const idx = PLATFORM_ORDER.indexOf(key);
  return idx === -1 ? PLATFORM_ORDER.length - 1 : idx;
}

const PLATFORM_LABELS = {};
const PLATFORM_COLORS = {};
const PLATFORM_GROUP_OF = {};
Object.entries(PLATFORM_GROUPS).forEach(([groupKey, group]) => {
  Object.entries(group.items).forEach(([key, label]) => {
    PLATFORM_LABELS[key] = label;
    PLATFORM_COLORS[key] = group.color;
    PLATFORM_GROUP_OF[key] = groupKey;
  });
});

function foldAccents(text) {
  const accented = "áéíóúüñÁÉÍÓÚÜÑ";
  const plain = "aeiouunAEIOUUN";
  let result = text;
  for (let i = 0; i < accented.length; i++) {
    result = result.split(accented[i]).join(plain[i].toLowerCase());
  }
  return result;
}

function starsMarkup(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = "";
  for (let i = 0; i < 10; i++) {
    if (i < full) html += '<i class="fa-solid fa-star filled"></i>';
    else if (i === full && half) html += '<i class="fa-solid fa-star-half-stroke filled"></i>';
    else html += '<i class="fa-regular fa-star empty"></i>';
  }
  return html;
}
