// ============================================================
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

const entries = [
  {
    id: 1,
    titulo: "Pokémon Champions",
    imagen: "assets/img/pokemon-champions-1.jpg",
    plataformas: ["switch","switch2","movil"],
    generos: ["Estrategia","Online"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 2,
    titulo: "Pokémon TCG Pocket",
    imagen: "assets/img/pokemon-tcg-pocket-2.jpg",
    plataformas: ["movil"],
    generos: ["Estrategia","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 3,
    titulo: "League of Legends",
    imagen: "assets/img/league-of-legends-3.jpg",
    plataformas: ["pc"],
    generos: ["Estrategia","MOBA"],
    top: "top15",
    puntuacion: 0,
    fecha: "2026-08-01"
  },
  {
    id: 4,
    titulo: "Animal Crossing: New Horizons",
    imagen: "assets/img/animal-crossing-new-horizons-4.png",
    plataformas: ["switch","switch2"],
    generos: ["Simulación"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 7,
    titulo: "Star Fox",
    imagen: "assets/img/star-fox-7.jpg",
    plataformas: ["switch2"],
    generos: ["Acción","Arcade"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 10,
    titulo: "Pikmin 4",
    imagen: "assets/img/pikmin-4-10.jpg",
    plataformas: ["switch"],
    generos: ["Estrategia","Puzzle"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 11,
    titulo: "Pokémon FireRed",
    imagen: "assets/img/pokemon-firered-11.jpg",
    plataformas: ["switch","gba"],
    generos: ["Aventura","RPG"],
    top: "top15",
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 15,
    titulo: "Metroid Dread",
    imagen: "assets/img/metroid-dread-15.jpg",
    plataformas: ["switch"],
    generos: ["Acción","Aventura"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 18,
    titulo: "Pokémon Violet",
    imagen: "assets/img/pokemon-violet-18.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 19,
    titulo: "Pokémon Legends: Z-A",
    imagen: "assets/img/pokemon-legends-za-19.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Aventura","RPG","Estrategia"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 25,
    titulo: "The Legend of Zelda: Breath of the Wild",
    imagen: "assets/img/the-legend-of-zelda-breath-of-the-wild-25.jpg",
    plataformas: ["wiiu","switch","switch2"],
    generos: ["Acción","Aventura"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 26,
    titulo: "Donkey Kong Bananza",
    imagen: "assets/img/donkey-kong-bananza-26.jpg",
    plataformas: ["switch2"],
    generos: ["Plataformas","Aventura"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 27,
    titulo: "Pokémon Sword",
    imagen: "assets/img/pokemon-sword-27.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 28,
    titulo: "Pokémon Brilliant Diamond",
    imagen: "assets/img/pokemon-brilliant-diamond-28.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 2,
    fecha: "2026-08-01"
  },
  {
    id: 29,
    titulo: "Pokémon Legends: Arceus",
    imagen: "assets/img/leyendas-pokemon-arceus-29.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 32,
    titulo: "Fire Emblem Engage",
    imagen: "assets/img/fire-emblem-engange-32.jpg",
    plataformas: ["switch"],
    generos: ["Estrategia","RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 33,
    titulo: "Pokémon Let's Go, Pikachu!",
    imagen: "assets/img/pokemon-let-s-go-pikachu-33.jpg",
    plataformas: ["switch"],
    generos: ["RPG","Aventura"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 34,
    titulo: "Mario Kart 8 Deluxe",
    imagen: "assets/img/mario-kart-8-deluxe-34.jpg",
    plataformas: ["wiiu","switch"],
    generos: ["Carreras","Multijugador","Online"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 35,
    titulo: "Super Mario Odyssey",
    imagen: "assets/img/super-mario-odyssey-35.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 36,
    titulo: "Mario Tennis Aces",
    imagen: "assets/img/mario-tennis-aces-36.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 37,
    titulo: "Travis Strikes Again: No More Heroes",
    imagen: "assets/img/travis-strikes-again-no-more-heroes-37.jpg",
    plataformas: ["switch"],
    generos: ["Acción"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 38,
    titulo: "Paper Mario: The Origami King",
    imagen: "assets/img/paper-mario-the-origami-king-38.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 39,
    titulo: "No More Heroes",
    imagen: "assets/img/no-more-heroes-39.jpg",
    plataformas: ["wii","switch"],
    generos: ["Acción"],
    top: "top15",
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 40,
    titulo: "No More Heroes 2: Desperate Struggle",
    imagen: "assets/img/no-more-heroes-2-desperate-struggle-40.jpg",
    plataformas: ["wii","switch"],
    generos: ["Acción"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 41,
    titulo: "Super Mario RPG",
    imagen: "assets/img/super-mario-rpg-41.jpg",
    plataformas: ["snes","switch"],
    generos: ["Aventura","RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 42,
    titulo: "Super Mario Galaxy",
    imagen: "assets/img/super-mario-galaxy-42.jpg",
    plataformas: ["wii","switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 43,
    titulo: "Super Mario Galaxy 2",
    imagen: "assets/img/super-mario-galaxy-2-43.jpg",
    plataformas: ["wii","switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 44,
    titulo: "Paper Mario: The Thousand-Year Door",
    imagen: "assets/img/paper-mario-the-thousand-year-door-44.jpg",
    plataformas: ["gamecube","switch"],
    generos: ["Aventura","RPG","Estrategia"],
    top: "top5",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 45,
    titulo: "Super Mario 3D All-Stars",
    imagen: "assets/img/super-mario-3d-all-stars-45.jpg",
    plataformas: ["switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 46,
    titulo: "No More Heroes III",
    imagen: "assets/img/no-more-heroes-iii-46.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 47,
    titulo: "skate.",
    imagen: "assets/img/skate-47.jpg",
    plataformas: ["pc"],
    generos: ["Deportes"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 48,
    titulo: "Mario Strikers: Battle League",
    imagen: "assets/img/mario-strikers-battle-league-48.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 49,
    titulo: "Mario Golf: Super Rush",
    imagen: "assets/img/mario-golf-super-rush-49.jpg",
    plataformas: ["switch"],
    generos: ["Deportes"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 50,
    titulo: "Mario Kart World",
    imagen: "assets/img/mario-kart-world-50.jpg",
    plataformas: ["switch2"],
    generos: ["Carreras","Multijugador","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 51,
    titulo: "Sonic Adventure 2: Battle",
    imagen: "assets/img/sonic-adventure-2-battle-51.jpg",
    plataformas: ["gamecube","xbox360","pc"],
    generos: ["Acción","Aventura","Plataformas"],
    top: "top15",
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 52,
    titulo: "Monster Hunter Rise",
    imagen: "assets/img/monster-hunter-rise-52.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción","Aventura","RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 53,
    titulo: "Splatoon 3",
    imagen: "assets/img/splatoon-3-53.jpg",
    plataformas: ["switch2"],
    generos: ["Acción","Aventura","Shooter"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 54,
    titulo: "Super Mario Bros Wonder",
    imagen: "assets/img/super-mario-bros-wonder-54.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 55,
    titulo: "Pokémon Unite",
    imagen: "assets/img/pokemon-unite-55.jpg",
    plataformas: ["switch","movil"],
    generos: ["Estrategia"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 56,
    titulo: "Pokémon HeartGold",
    imagen: "assets/img/pokemon-heartgold-56.jpg",
    plataformas: ["nds"],
    generos: ["Aventura","RPG","Estrategia"],
    top: "top5",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 57,
    titulo: "Pokémon Black 2",
    imagen: "assets/img/pokemon-black-2-57.jpg",
    plataformas: ["nds"],
    generos: ["Aventura","RPG"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 58,
    titulo: "Pokémon Y",
    imagen: "assets/img/pokemon-y-58.jpg",
    plataformas: ["n3ds"],
    generos: ["Aventura","RPG"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 59,
    titulo: "Hades",
    imagen: "assets/img/hades-59.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción","Roguelike"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 60,
    titulo: "Hollow Knight",
    imagen: "assets/img/hollow-knight-60.jpg",
    plataformas: ["switch","switch2","pc"],
    generos: ["Acción","Aventura","Indie"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 61,
    titulo: "Kirby and the Forgotten Land",
    imagen: "assets/img/kirby-and-the-forgotten-land-61.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 62,
    titulo: "Hyrule Warriors: Age of Calamity",
    imagen: "assets/img/hyrule-warriors-age-of-calamity-62.jpg",
    plataformas: ["switch"],
    generos: ["Acción","RPG"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 63,
    titulo: "Mario vs. Donkey Kong",
    imagen: "assets/img/mario-vs-donkey-kong-63.jpg",
    plataformas: ["switch","gba"],
    generos: ["Estrategia","Puzzle"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 64,
    titulo: "Super Mario Party Jamboree",
    imagen: "assets/img/super-mario-party-jamboree-64.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Party","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 65,
    titulo: "Super Mario Sunshine",
    imagen: "assets/img/super-mario-sunshine-65.jpg",
    plataformas: ["gamecube"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 66,
    titulo: "Super Mario 64",
    imagen: "assets/img/super-mario-64-66.jpg",
    plataformas: ["n64"],
    generos: ["Aventura","Plataformas"],
    top: "top15",
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 67,
    titulo: "Super Mario World",
    imagen: "assets/img/super-mario-world-67.jpg",
    plataformas: ["snes"],
    generos: ["Plataformas"],
    top: "top5",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 68,
    titulo: "Tony Hawk's Pro Skater 1 + 2",
    imagen: "assets/img/tony-hawk-s-pro-skater-1-2-68.jpg",
    plataformas: ["pc"],
    generos: ["Deportes"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 69,
    titulo: "Sonic Heroes",
    imagen: "assets/img/sonic-heroes-69.jpg",
    plataformas: ["gamecube","ps2"],
    generos: ["Acción","Aventura","Plataformas"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 70,
    titulo: "Pokémon Stadium",
    imagen: "assets/img/pokemon-stadium-70.jpg",
    plataformas: ["n64"],
    generos: ["RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 71,
    titulo: "Call of Duty: Black Ops",
    imagen: "assets/img/call-of-duty-black-ops-71.jpg",
    plataformas: ["wii","xbox360","pc"],
    generos: ["Acción","Shooter","Multijugador","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 72,
    titulo: "Call of Duty: Black Ops II",
    imagen: "assets/img/call-of-duty-black-ops-ii-72.jpg",
    plataformas: ["xbox360","pc"],
    generos: ["Acción","Shooter","Multijugador","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 73,
    titulo: "Punch-Out!!",
    imagen: "assets/img/punch-out-73.jpg",
    plataformas: ["wii"],
    generos: ["Acción","Peleas"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 74,
    titulo: "Super Smash Bros Brawl",
    imagen: "assets/img/super-smash-bros-brawl-74.jpg",
    plataformas: ["wii"],
    generos: ["Peleas","Multijugador","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 75,
    titulo: "Super Smash Bros Melee",
    imagen: "assets/img/super-smash-bros-melee-75.jpg",
    plataformas: ["gamecube"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 76,
    titulo: "DmC: Devil May Cry",
    imagen: "assets/img/dmc-devil-may-cry-76.jpg",
    plataformas: ["xbox360","pc"],
    generos: ["Acción"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 77,
    titulo: "Super Smash Bros",
    imagen: "assets/img/super-smash-bros-77.jpg",
    plataformas: ["n64"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 78,
    titulo: "Plants vs. Zombies",
    imagen: "assets/img/plants-vs-zombies-78.jpg",
    plataformas: ["nds","pc"],
    generos: ["Estrategia"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 79,
    titulo: "Dragon Ball: Sparking! Zero",
    imagen: "assets/img/dragon-ball-sparking-zero-79.jpg",
    plataformas: ["pc"],
    generos: ["Acción","Peleas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 80,
    titulo: "The Legend of Zelda: Tears of the Kingdom",
    imagen: "assets/img/the-legend-of-zelda-tears-of-the-kingdom-80.jpg",
    plataformas: ["switch","switch2"],
    generos: ["Acción","Aventura"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 81,
    titulo: "Cuphead",
    imagen: "assets/img/cuphead-81.jpg",
    plataformas: ["switch","pc"],
    generos: ["Plataformas","Shooter"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 82,
    titulo: "Portal 2",
    imagen: "assets/img/portal-2-82.jpg",
    plataformas: ["switch","xbox360"],
    generos: ["Puzzle"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 83,
    titulo: "New Super Mario Bros Wii",
    imagen: "assets/img/new-super-mario-bros-wii-83.jpg",
    plataformas: ["wii"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 84,
    titulo: "Top Spin 2K25",
    imagen: "assets/img/top-spin-2k25-84.jpg",
    plataformas: ["pc"],
    generos: ["Deportes"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 85,
    titulo: "Ultimate Marvel vs. Capcom 3",
    imagen: "assets/img/ultimate-marvel-vs-capcom-3-85.jpg",
    plataformas: ["xbox360"],
    generos: ["Peleas","Arcade"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 86,
    titulo: "Super Mario Party",
    imagen: "assets/img/super-mario-party-86.jpg",
    plataformas: ["switch"],
    generos: ["Party","Multijugador"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 87,
    titulo: "Super Smash Bros Ultimate",
    imagen: "assets/img/super-smash-bros-ultimate-87.jpg",
    plataformas: ["switch"],
    generos: ["Peleas","Multijugador","Online"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 88,
    titulo: "The Legend of Zelda: Link's Awakening",
    imagen: "assets/img/the-legend-of-zelda-link-s-awakening-88.jpg",
    plataformas: ["switch"],
    generos: ["Aventura"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 89,
    titulo: "Scott Pilgrim vs. the World: The Game",
    imagen: "assets/img/scott-pilgrim-vs-the-world-the-game-89.jpg",
    plataformas: ["switch","xbox360"],
    generos: ["Acción","Arcade"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 90,
    titulo: "Mario Party Superstars",
    imagen: "assets/img/mario-party-superstars-90.jpg",
    plataformas: ["switch"],
    generos: ["Party","Multijugador"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 91,
    titulo: "Mario Kart Wii",
    imagen: "assets/img/mario-kart-wii-91.jpg",
    plataformas: ["wii"],
    generos: ["Carreras","Multijugador","Online"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 92,
    titulo: "Assasins Creed II",
    imagen: "assets/img/assasins-creed-ii-92.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción","Aventura"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 93,
    titulo: "Grand Theft Auto V",
    imagen: "assets/img/grand-theft-auto-v-93.jpg",
    plataformas: ["xbox360","pc"],
    generos: ["Acción"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 94,
    titulo: "Super Smash Bros for Wii U",
    imagen: "assets/img/super-smash-bross-for-wii-u-94.jpg",
    plataformas: ["wiiu"],
    generos: ["Peleas","Multijugador","Online"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 95,
    titulo: "Mario Tennis Ultra Smash",
    imagen: "assets/img/mario-tennis-ultra-smash-95.jpg",
    plataformas: ["wiiu"],
    generos: ["Deportes"],
    puntuacion: 1.5,
    fecha: "2026-08-01"
  },
  {
    id: 96,
    titulo: "Mario Kart DS",
    imagen: "assets/img/mario-kart-ds-96.jpg",
    plataformas: ["nds"],
    generos: ["Carreras"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 97,
    titulo: "Sonic Frontiers",
    imagen: "assets/img/sonic-frontiers-97.jpg",
    plataformas: ["switch","pc"],
    generos: ["Acción","Aventura","Plataformas"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 98,
    titulo: "Sonic Generations",
    imagen: "assets/img/sonic-generations-98.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción","Aventura","Plataformas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 99,
    titulo: "Sonic Forces",
    imagen: "assets/img/sonic-forces-99.jpg",
    generos: ["Acción","Aventura","Plataformas"],
    puntuacion: 1.5,
    fecha: "2026-08-01"
  },
  {
    id: 100,
    titulo: "Spider-Man",
    imagen: "assets/img/spider-man-100.jpg",
    plataformas: ["pc"],
    generos: ["Acción"],
    top: "top15",
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 101,
    titulo: "Spider-Man 2",
    imagen: "assets/img/spider-man-2-101.jpg",
    plataformas: ["gamecube"],
    generos: ["Acción"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 102,
    titulo: "Grand Theft Auto San Andreas",
    imagen: "assets/img/grand-theft-auto-san-andreas-102.jpg",
    plataformas: ["ps2"],
    generos: ["Acción"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 103,
    titulo: "Mario Party 10",
    imagen: "assets/img/mario-party-10-103.jpg",
    plataformas: ["wiiu"],
    generos: ["Party","Multijugador"],
    puntuacion: 1,
    fecha: "2026-08-01"
  },
  {
    id: 104,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm Generations",
    imagen: "assets/img/naruto-shippuden-ultimate-ninja-storm-generations-104.jpg",
    plataformas: ["xbox360"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 3,
    fecha: "2026-08-01"
  },
  {
    id: 105,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm 2",
    imagen: "assets/img/naruto-shippuden-ultimate-ninja-storm-2-105.jpg",
    plataformas: ["switch","xbox360"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 106,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm 4",
    imagen: "assets/img/naruto-shippuden-ultimate-ninja-storm-4-106.jpg",
    plataformas: ["switch"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 107,
    titulo: "Naruto: Ultimate Ninja Storm",
    imagen: "assets/img/naruto-ultimate-ninja-storm-107.jpg",
    plataformas: ["switch","ps3"],
    generos: ["Aventura","Peleas","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 108,
    titulo: "Mario Kart: Double Dash!!",
    imagen: "assets/img/mario-kart-double-dash-108.jpg",
    plataformas: ["gamecube"],
    generos: ["Carreras","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 109,
    titulo: "Dragon Ball Z: Budokai Tenkaichi 3",
    imagen: "assets/img/dragon-ball-z-budokai-tenkaichi-3-109.jpg",
    plataformas: ["wii"],
    generos: ["Peleas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 110,
    titulo: "Fable III",
    imagen: "assets/img/fable-iii-110.jpg",
    plataformas: ["xbox360"],
    generos: ["Aventura","RPG"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 111,
    titulo: "Guitar Hero III: Legends of Rock",
    imagen: "assets/img/guitar-hero-iii-legends-of-rock-111.jpg",
    plataformas: ["wii","xbox360"],
    generos: ["Musical"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 112,
    titulo: "Mario Super Sluggers",
    imagen: "assets/img/mario-super-sluggers-112.jpg",
    plataformas: ["wii"],
    generos: ["Deportes"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 113,
    titulo: "Mario Party 5",
    imagen: "assets/img/mario-party-5-113.jpg",
    plataformas: ["gamecube"],
    generos: ["Party","Multijugador"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 114,
    titulo: "Mario Party 7",
    imagen: "assets/img/mario-party-7-114.jpg",
    plataformas: ["gamecube"],
    generos: ["Party","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 115,
    titulo: "Super Martio Strikers",
    imagen: "assets/img/super-martio-strikers-115.jpg",
    plataformas: ["gamecube"],
    generos: ["Deportes"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 116,
    titulo: "Mario Strikers: Charged",
    imagen: "assets/img/mario-strikers-charged-116.jpg",
    plataformas: ["wii"],
    generos: ["Deportes"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 117,
    titulo: "Mario Party 3",
    imagen: "assets/img/mario-party-3-117.jpg",
    plataformas: ["n64"],
    generos: ["Party","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 118,
    titulo: "Mario Party 2",
    imagen: "assets/img/mario-party-2-118.jpg",
    plataformas: ["n64"],
    generos: ["Party","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 119,
    titulo: "Halo: Reach",
    imagen: "assets/img/halo-reach-119.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción","Shooter"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 120,
    titulo: "Diddy Kong Racing",
    imagen: "assets/img/diddy-kong-racing-120.jpg",
    plataformas: ["n64"],
    generos: ["Carreras"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 121,
    titulo: "Mario Kart 64",
    imagen: "assets/img/mario-kart-64-121.jpg",
    plataformas: ["n64"],
    generos: ["Carreras","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 122,
    titulo: "Yoshi's Story",
    imagen: "assets/img/yoshi-s-story-122.jpg",
    plataformas: ["n64"],
    generos: ["Plataformas"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 123,
    titulo: "Donkey Kong Country Returns",
    imagen: "assets/img/donkey-kong-country-returns-123.jpg",
    plataformas: ["wii","switch"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 124,
    titulo: "Batman: Arkham City",
    imagen: "assets/img/batman-arkham-city-124.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 125,
    titulo: "Batman: Arkham Asylum",
    imagen: "assets/img/batman-arkham-asylum-125.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 126,
    titulo: "Batman: Arkham Origins",
    imagen: "assets/img/batman-arkham-origins-126.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 127,
    titulo: "Sonic Adventure DX",
    imagen: "assets/img/sonic-adventure-dx-127.jpg",
    plataformas: ["gamecube","pc"],
    generos: ["Aventura","Plataformas"],
    puntuacion: 2.5,
    fecha: "2026-08-01"
  },
  {
    id: 128,
    titulo: "Metal Slug X",
    imagen: "assets/img/metal-slug-x-128.jpg",
    plataformas: ["switch","pc","arcade"],
    generos: ["Acción","Plataformas","Shooter","Arcade"],
    top: "top15",
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 129,
    titulo: "SSX Tricky",
    imagen: "assets/img/ssx-tricky-129.jpg",
    plataformas: ["ps2"],
    generos: ["Deportes"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 130,
    titulo: "Super Paper Mario",
    imagen: "assets/img/super-paper-mario-130.jpg",
    plataformas: ["wii"],
    generos: ["Aventura","RPG","Plataformas"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 131,
    titulo: "The Legend of Zelda: Ocarina of Time",
    imagen: "assets/img/the-legend-of-zelda-ocarina-of-time-131.jpg",
    plataformas: ["n64"],
    generos: ["Acción","Aventura"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 132,
    titulo: "The Legend of Zelda: Majora's Mask",
    imagen: "assets/img/the-legend-of-zelda-majora-s-mask-132.jpg",
    plataformas: ["n64"],
    generos: ["Acción","Aventura"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 133,
    titulo: "Tatsunoko vs. Capcom: Ultimate All Stars",
    imagen: "assets/img/tatsunoko-vs-capcom-ultimate-all-stars-133.jpg",
    plataformas: ["wii"],
    generos: ["Peleas","Arcade"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 134,
    titulo: "Call of Duty: Modern Warfare 3",
    imagen: "assets/img/call-of-duty-modern-warfare-3-134.jpg",
    plataformas: ["xbox360"],
    generos: ["Acción","Shooter","Multijugador","Online"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 135,
    titulo: "Marvel vs. Capcom 2: New Age of Heroes",
    imagen: "assets/img/marvel-vs-capcom-2-new-age-of-heroes-135.jpg",
    plataformas: ["arcade"],
    generos: ["Peleas","Arcade"],
    puntuacion: 4.5,
    fecha: "2026-08-01"
  },
  {
    id: 136,
    titulo: "Pokémon Emerald",
    imagen: "assets/img/pokemon-emerald-136.jpg",
    plataformas: ["gba"],
    generos: ["Aventura","RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 137,
    titulo: "Pokémon Omega Ruby",
    imagen: "assets/img/pokemon-omega-ruby-137.jpg",
    plataformas: ["n3ds"],
    generos: ["Aventura","RPG"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 138,
    titulo: "Super Smash Bros for 3DS",
    imagen: "assets/img/super-smash-bross-for-3ds-138.jpg",
    plataformas: ["n3ds"],
    generos: ["Peleas","Multijugador","Online"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 139,
    titulo: "Mario Power Tennis",
    imagen: "assets/img/mario-power-tennis-139.jpg",
    plataformas: ["gamecube","wii"],
    generos: ["Deportes"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 140,
    titulo: "The Simpsons: Road Rage",
    imagen: "assets/img/the-simpsons-road-rage-140.jpg",
    plataformas: ["gba","ps2"],
    generos: ["Acción","Carreras"],
    puntuacion: 3.5,
    fecha: "2026-08-01"
  },
  {
    id: 141,
    titulo: "The Simpsons",
    imagen: "assets/img/the-simpsons-141.jpg",
    plataformas: ["arcade"],
    generos: ["Arcade"],
    puntuacion: 5,
    fecha: "2026-08-01"
  },
  {
    id: 142,
    titulo: "Waku Waku 7",
    imagen: "assets/img/waku-waku-7-142.jpg",
    plataformas: ["arcade"],
    generos: ["Peleas","Arcade"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 143,
    titulo: "The King of Fighters 2001",
    imagen: "assets/img/the-king-of-fighters-2001-143.jpg",
    plataformas: ["arcade"],
    generos: ["Peleas","Arcade"],
    puntuacion: 4,
    fecha: "2026-08-01"
  },
  {
    id: 144,
    titulo: "Star Fox Zero",
    imagen: "assets/img/star-fox-zero-144.jpg",
    plataformas: ["wiiu"],
    generos: ["Acción","Arcade"],
    puntuacion: 3.5,
    fecha: "2026-08-06"
  },
  {
    id: 145,
    titulo: "Super Mario Maker",
    imagen: "assets/img/super-mario-maker-145.jpg",
    plataformas: ["wiiu"],
    generos: ["Plataformas"],
    puntuacion: 3.5,
    fecha: "2026-08-07"
  },
  {
    id: 146,
    titulo: "The Legend of Zelda: The Wind Waker",
    imagen: "assets/img/the-legend-of-zelda-the-wind-waker-146.jpg",
    plataformas: ["gamecube","wiiu"],
    generos: ["Acción","Aventura"],
    puntuacion: 5,
    fecha: "2026-08-07"
  },
  {
    id: 147,
    titulo: "Pokkén Tournament DX",
    imagen: "assets/img/pokken-tournament-dx-147.jpg",
    plataformas: ["wiiu","switch"],
    generos: ["Peleas","Arcade"],
    puntuacion: 3.5,
    fecha: "2026-08-07"
  },
  {
    id: 148,
    titulo: "Grand Theft Auto III",
    imagen: "assets/img/grand-theft-auto-iii-148.jpg",
    plataformas: ["ps2"],
    generos: ["Acción"],
    puntuacion: 3.5,
    fecha: "2026-08-07"
  },
  {
    id: 149,
    titulo: "Naruto Ultimate Ninja",
    imagen: "assets/img/naruto-ultimate-ninja-149.jpg",
    plataformas: ["ps2"],
    generos: ["Peleas","Multijugador"],
    puntuacion: 3.5,
    fecha: "2026-08-08"
  },
  {
    id: 150,
    titulo: "Clone Hero",
    imagen: "assets/img/clone-hero-150.jpg",
    plataformas: ["pc"],
    generos: ["Musical"],
    puntuacion: 4.5,
    fecha: "2026-08-08"
  },
  {
    id: 151,
    titulo: "Valorant",
    imagen: "assets/img/valorant-151.jpg",
    plataformas: ["pc"],
    generos: ["Shooter","Multijugador","Online"],
    puntuacion: 3.5,
    fecha: "2026-08-08"
  },
  {
    id: 152,
    titulo: "Guitar Hero Worl Tour",
    imagen: "assets/img/guitar-hero-worl-tour-152.jpg",
    plataformas: ["wii"],
    generos: ["Musical"],
    puntuacion: 3.5,
    fecha: "2026-08-08"
  },
  {
    id: 153,
    titulo: "Pokémon Ultra Sun",
    imagen: "assets/img/pokemon-ultra-sun-153.jpg",
    plataformas: ["n3ds"],
    generos: ["RPG","Estrategia","Multijugador"],
    puntuacion: 4,
    fecha: "2026-08-08"
  }
];
