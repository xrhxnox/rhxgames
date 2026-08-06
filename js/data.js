// ============================================================
// Aquí agregas cada videojuego que termines. Este archivo se
// actualiza automáticamente desde admin.html — también puedes
// editarlo a mano si prefieres.
//
// plataformas: lista de claves de plataforma (ver PLATFORM_GROUPS
//              en js/utils.js)
// generos: lista de géneros (ver GAME_GENRES en js/utils.js)
// puntuacion: número del 0 al 10 (acepta medios puntos, ej. 7.5)
// imagen: ruta a la carátula (guárdala en assets/img/)
// fecha: cuándo se publicó la entrada, formato AAAA-MM-DD
// ============================================================

const entries = [
  {
    id: 1,
    titulo: "Pokémon Champions",
    imagen: "assets/img/pokemon-champions-1.jpg",
    plataformas: ["switch","switch2","movil"],
    generos: ["Estrategia"],
    puntuacion: 7,
    fecha: "2026-07-15"
  },
  {
    id: 2,
    titulo: "Pokémon TCG Pocket",
    imagen: "assets/img/pokemon-tcg-pocket-2.jpg",
    plataformas: ["movil"],
    generos: ["Estrategia"],
    puntuacion: 9,
    fecha: "2026-07-15"
  },
  {
    id: 3,
    titulo: "League of Legends",
    imagen: "assets/img/league-of-legends-3.jpg",
    plataformas: ["pc"],
    generos: ["Estrategia"],
    puntuacion: 0,
    fecha: "2026-07-15"
  },
  {
    id: 4,
    titulo: "Animal Crossing: New Horizons",
    imagen: "assets/img/animal-crossing-new-horizons-4.png",
    plataformas: ["switch","switch2"],
    generos: ["Simulación"],
    puntuacion: 10,
    fecha: "2026-07-15"
  },
  {
    id: 7,
    titulo: "Star Fox",
    imagen: "assets/img/star-fox-7.jpg",
    plataformas: ["switch2"],
    generos: ["Acción"],
    puntuacion: 9,
    fecha: "2026-07-15"
  },
  {
    id: 10,
    titulo: "Pikmin 4",
    imagen: "assets/img/pikmin-4-10.jpg",
    plataformas: ["switch"],
    generos: ["Estrategia","Puzzle"],
    puntuacion: 8,
    fecha: "2026-07-15"
  },
  {
    id: 11,
    titulo: "Pokémon FireRed",
    imagen: "assets/img/pokemon-firered-11.jpg",
    plataformas: ["switch","gba"],
    generos: ["RPG","Aventura"],
    puntuacion: 8.5,
    fecha: "2026-07-15"
  },
  {
    id: 15,
    titulo: "Metroid Dread",
    imagen: "assets/img/metroid-dread-15.jpg",
    plataformas: ["switch"],
    generos: ["Acción","Aventura"],
    puntuacion: 10,
    fecha: "2026-07-15"
  },
  {
    id: 18,
    titulo: "Pokémon Violet",
    imagen: "assets/img/pokemon-violet-18.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG","Mundo abierto"],
    puntuacion: 6.5,
    fecha: "2026-07-15"
  },
  {
    id: 19,
    titulo: "Pokémon Legends: Z-A",
    imagen: "assets/img/pokemon-legends-za-19.jpg",
    plataformas: ["switch","switch2","movil"],
    generos: ["Aventura","RPG","Estrategia"],
    puntuacion: 8,
    fecha: "2026-07-15"
  },
  {
    id: 25,
    titulo: "The Legend of Zelda: Breath of the Wild",
    imagen: "assets/img/the-legend-of-zelda-breath-of-the-wild-25.jpg",
    plataformas: ["wiiu","switch","switch2"],
    generos: ["Aventura","Mundo abierto"],
    puntuacion: 10,
    fecha: "2026-07-15"
  },
  {
    id: 26,
    titulo: "Donkey Kong Bananza",
    imagen: "assets/img/donkey-kong-bananza-26.jpg",
    plataformas: ["switch2"],
    generos: ["Plataformas","Aventura"],
    puntuacion: 10,
    fecha: "2026-07-15"
  },
  {
    id: 27,
    titulo: "Pokémon Sword",
    imagen: "assets/img/pokemon-sword-27.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 6,
    fecha: "2026-07-15"
  },
  {
    id: 28,
    titulo: "Pokémon Brilliant Diamond",
    imagen: "assets/img/pokemon-brilliant-diamond-28.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 5,
    fecha: "2026-07-15"
  },
  {
    id: 29,
    titulo: "Pokémon Legends: Arceus",
    imagen: "assets/img/leyendas-pokemon-arceus-29.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 8,
    fecha: "2026-07-15"
  },
  {
    id: 32,
    titulo: "Fire Emblem Engage",
    imagen: "assets/img/fire-emblem-engange-32.jpg",
    plataformas: ["switch"],
    generos: ["Estrategia","RPG"],
    puntuacion: 8,
    fecha: "2026-07-15"
  },
  {
    id: 33,
    titulo: "Pokémon Let's Go, Pikachu!",
    imagen: "assets/img/pokemon-let-s-go-pikachu-33.jpg",
    plataformas: ["switch"],
    generos: ["RPG","Aventura"],
    puntuacion: 8,
    fecha: "2026-07-15"
  },
  {
    id: 34,
    titulo: "Mario Kart 8 Deluxe",
    imagen: "assets/img/mario-kart-8-deluxe-34.jpg",
    plataformas: ["wiiu","switch"],
    generos: ["Carreras"],
    puntuacion: 9,
    fecha: "2026-08-06"
  },
  {
    id: 35,
    titulo: "Super Mario Odyssey",
    imagen: "assets/img/super-mario-odyssey-35.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 10,
    fecha: "2026-08-06"
  },
  {
    id: 36,
    titulo: "Mario Tennis Aces",
    imagen: "assets/img/mario-tennis-aces-36.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 8,
    fecha: "2026-08-06"
  },
  {
    id: 37,
    titulo: "Travis Strikes Again: No More Heroes",
    imagen: "assets/img/travis-strikes-again-no-more-heroes-37.jpg",
    plataformas: ["switch"],
    generos: ["Acción","Roguelike"],
    puntuacion: 6.5,
    fecha: "2026-08-06"
  },
  {
    id: 38,
    titulo: "Paper Mario: The Origami King",
    imagen: "assets/img/paper-mario-the-origami-king-38.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 10,
    fecha: "2026-08-06"
  },
  {
    id: 39,
    titulo: "No More Heroes",
    imagen: "assets/img/no-more-heroes-39.jpg",
    plataformas: ["wii","switch"],
    generos: ["Acción"],
    puntuacion: 8,
    fecha: "2026-08-06"
  },
  {
    id: 40,
    titulo: "No More Heroes 2: Desperate Struggle",
    imagen: "assets/img/no-more-heroes-2-desperate-struggle-40.jpg",
    plataformas: ["wii","switch"],
    generos: ["Acción"],
    puntuacion: 9,
    fecha: "2026-08-06"
  },
  {
    id: 41,
    titulo: "Super Mario RPG",
    imagen: "assets/img/super-mario-rpg-41.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 9,
    fecha: "2026-08-06"
  },
  {
    id: 42,
    titulo: "Super Mario Galaxy",
    imagen: "assets/img/super-mario-galaxy-42.jpg",
    plataformas: ["wii","switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 9.5,
    fecha: "2026-08-06"
  },
  {
    id: 43,
    titulo: "Super Mario Galaxy 2",
    imagen: "assets/img/super-mario-galaxy-2-43.jpg",
    plataformas: ["wii","switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 10,
    fecha: "2026-08-06"
  },
  {
    id: 44,
    titulo: "Paper Mario: The Thousand-Year Door",
    imagen: "assets/img/paper-mario-the-thousand-year-door-44.jpg",
    plataformas: ["gamecube","switch"],
    generos: ["Aventura","RPG","Estrategia"],
    puntuacion: 10,
    fecha: "2026-08-06"
  },
  {
    id: 45,
    titulo: "Super Mario 3D All-Stars",
    imagen: "assets/img/super-mario-3d-all-stars-45.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 7.5,
    fecha: "2026-08-06"
  },
  {
    id: 46,
    titulo: "No More Heroes III",
    imagen: "assets/img/no-more-heroes-iii-46.jpg",
    plataformas: ["switch","ps4","ps5","xboxone","xboxseries","pc"],
    generos: ["Acción"],
    puntuacion: 7.5,
    fecha: "2026-08-06"
  },
  {
    id: 47,
    titulo: "skate.",
    imagen: "assets/img/skate-47.jpg",
    plataformas: ["ps4","ps5","xboxone","xboxseries","pc"],
    generos: ["Deportes"],
    puntuacion: 8,
    fecha: "2026-08-06"
  },
  {
    id: 48,
    titulo: "Mario Strikers: Battle League",
    imagen: "assets/img/mario-strikers-battle-league-48.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 6,
    fecha: "2026-08-06"
  },
  {
    id: 49,
    titulo: "Mario Golf: Super Rush",
    imagen: "assets/img/mario-golf-super-rush-49.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 7.5,
    fecha: "2026-08-06"
  },
  {
    id: 50,
    titulo: "Mario Kart World",
    imagen: "assets/img/mario-kart-world-50.jpg",
    plataformas: ["switch2"],
    generos: ["Mundo abierto","Carreras"],
    puntuacion: 8.5,
    fecha: "2026-08-06"
  },
  {
    id: 51,
    titulo: "Sonic Adventure 2: Battle",
    imagen: "assets/img/sonic-adventure-2-battle-51.jpg",
    plataformas: ["gamecube","pc"],
    generos: ["Acción","Aventura","Plataformas"],
    puntuacion: 9.5,
    fecha: "2026-08-06"
  },
  {
    id: 52,
    titulo: "Monster Hunter Rise",
    imagen: "assets/img/monster-hunter-rise-52.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción","Aventura","RPG"],
    puntuacion: 9,
    fecha: "2026-08-06"
  },
  {
    id: 53,
    titulo: "Splatoon 3",
    imagen: "assets/img/splatoon-3-53.jpg",
    plataformas: ["switch"],
    generos: ["Acción","Shooter"],
    puntuacion: 8.5,
    fecha: "2026-08-06"
  },
  {
    id: 54,
    titulo: "Super Mario Bros Wonder",
    imagen: "assets/img/super-mario-bros-wonder-54.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 9.5,
    fecha: "2026-08-06"
  },
  {
    id: 55,
    titulo: "Pokémon Unite",
    imagen: "assets/img/pokemon-unite-55.jpg",
    plataformas: ["switch","movil"],
    generos: ["Estrategia"],
    puntuacion: 6,
    fecha: "2026-08-06"
  },
  {
    id: 56,
    titulo: "Pokémon HeartGold",
    imagen: "assets/img/pokemon-heartgold-56.jpg",
    plataformas: ["nds"],
    generos: ["Aventura","RPG"],
    puntuacion: 10,
    fecha: "2026-08-06"
  },
  {
    id: 57,
    titulo: "Pokémon Black 2",
    imagen: "assets/img/pokemon-black-2-57.jpg",
    plataformas: ["nds"],
    generos: ["Aventura","RPG"],
    puntuacion: 9,
    fecha: "2026-08-06"
  },
  {
    id: 58,
    titulo: "Pokémon Y",
    imagen: "assets/img/pokemon-y-58.jpg",
    plataformas: ["n3ds"],
    generos: ["Aventura","RPG"],
    puntuacion: 8,
    fecha: "2026-08-06"
  },
  {
    id: 59,
    titulo: "Hades",
    imagen: "assets/img/hades-59.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción","Roguelike"],
    puntuacion: 9,
    fecha: "2026-08-06"
  }
];
