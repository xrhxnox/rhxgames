# RhxGames

Catálogo personal de videojuegos que voy terminando, con calificación por estrellas (sin reseña escrita).

## Cómo agregar un juego

1. Guarda la carátula en `assets/img/` (jpg o png, cualquier tamaño vertical funciona bien).
2. Abre `js/data.js` y copia uno de los bloques dentro del arreglo `entries`:

```js
{
  id: 18,
  titulo: "Nombre del juego",
  imagen: "assets/img/mi-imagen.jpg",
  plataformas: ["switch", "pc"], // ver PLATFORM_GROUPS en js/utils.js
  generos: ["RPG", "Aventura"],   // ver GAME_GENRES en js/utils.js
  top: "top5", // "top5" | "top10" | omitir si no aplica
  puntuacion: 4.5, // de 0 a 5, acepta medios puntos
  fecha: "2026-07-17" // fecha de publicación
}
```

3. Guarda el archivo y refresca `index.html` en el navegador.

No necesitas servidor ni build: es HTML/CSS/JS puro, se puede abrir el `index.html` directamente o publicar en GitHub Pages.

También existe `admin.html`, un panel que agrega/edita/elimina juegos directamente en el repo de GitHub (rama `gh-pages`) usando un Personal Access Token — no está incluido en el control de versiones (ver `.gitignore`).
