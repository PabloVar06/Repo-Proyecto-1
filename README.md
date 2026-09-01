# Bitácora Proyecto 1

## Descripción del proyecto

**Catálogo de Videojuegos** es un mini-programa que registra videojuegos con su nombre,
plataforma, género, año/fecha de lanzamiento y puntaje de crítica. A partir de ese puntaje,
el sistema genera automáticamente un veredicto para cada juego: **Bueno**, **Regular** o
**Malo**. El proyecto se construyó primero en JavaScript avanzado y luego se migró a
TypeScript, haciendo explícitas las formas de datos, los estados permitidos y las funciones
principales.

## Intención Inicial:

**Idea:** La idea es crear un catalogo de videojuegos que registre nombre, plataforma, año de lanzamiento, genero y un puntaje de critica. A partir de ese puntaje que se genere un veredicto si es un juego: Bueno, Regular, Malo.

**Intención Auditable:**
Poder clasificar los juegos del catálogo y dar un veredicto de forma automática en base a su puntaje.

**Restricciones:**
El puntaje debe ser un numero entre 0-100.
Las plataformas ser de una lista previamente establecida.
De la misma forma, las categorías ya estarán establecidas por una lista.

**Criterios de aceptación:**
1. Si el puntaje es mayor a 85 se categoriza como "Bueno".
2. Un puntaje entre 60 y 84 se califica como "Regular", un puntaje menor se marca como "Malo".
3. Si un juego contiene valores inválido este es registrado por la consola, sin necesidad de detener el programa.

## Conceptos de JavaScript avanzado usados

- **Módulos ES** — los datos (`catalogo.js`), la clasificación (`puntaje.js`) y la carga
  asíncrona (`consultas.js`) están separados en archivos independientes conectados con
  `import`/`export`.
- **Funciones de orden superior** — `filtrarPorVeredicto` usa `filter` para quedarse solo
  con los juegos de un veredicto específico.
- **Promesas y `async`/`await`** — `cargarCatalogo` simula la consulta de cada juego (como
  si viniera de una API) usando `await` dentro de un `for`.
- **Manejo de errores** — cada consulta va envuelta en `try/catch`: si un juego tiene datos
  inválidos, se registra el error en consola y el programa **sigue** con el resto del
  catálogo, sin detenerse.

## Tipos usados en TypeScript

| Nombre | Tipo | Qué representa |
|---|---|---|
| `Genero` | `type` (unión literal) | Los géneros permitidos: `"Accion"`, `"Aventura"`, `"Deportes"`, `"Estrategia"`, `"Simulacion"`, `"Rol"`, `"Terror"`, `"Carreras"`, `"Musicales"`, `"Otros"`. |
| `Plataforma` | `type` (unión literal) | Las plataformas permitidas: `"PC"`, `"PlayStation"`, `"Xbox"`, `"Nintendo Switch"`, `"Mobile"`, `"VR"`, `"Otros"`. |
| `Juego` | `interface` | Forma completa de un videojuego: `id`, `nombre`, `genero`, `plataforma`, `fechaLanzamiento`, `puntaje`. |
| `Veredicto` | `type` (unión literal) | El resultado de clasificar un juego: `"Bueno"`, `"Regular"` o `"Malo"`. |

**Decisiones de tipado:**
- `Genero` y `Plataforma` se restringieron a una unión literal en vez de `string`, para que
  TypeScript rechace en tiempo de compilación cualquier valor fuera de la lista establecida
  (justo lo que pedían las restricciones de la Intención Inicial).
- Las funciones tipan sus parámetros de forma explícita (`obtenerVeredicto(puntaje: number): Veredicto`,
  `filtrarPorVeredicto(juegos: Juego[], veredicto: Veredicto): Juego[]`), mientras que
  variables internas simples se dejan inferir por TypeScript.
- Dentro del `catch` de `cargarCatalogo`, TypeScript trata `error` como `unknown` en vez de
  `Error` (a diferencia de JavaScript, donde no hay ningún aviso). Hubo que afirmarlo
  explícitamente con `(error as Error).message` para poder leer el mensaje del error.

## Cómo ejecutar

### Versión JavaScript
```bash
cd Version-JavaScript
npm install
npm start
```

### Versión TypeScript
```bash
cd Version-TypeScript
npm install
npm run build   # solo compila, revisa errores de tipos
npm run dev     # compila y ejecuta
```

## Aprendizajes

La parte más complicada para mi en un inicio fue comprender el como se diferenciaba el JavaScript del TypeScript, 
puesto que creía que solo era cuestión de cambiar el tipo del archivo a diferencia de tener que reescribirlo. 
Ahora comprendo mejor que TypeScript permite un trabajo mejor ordenado al ayudar a visualizar errores antes de que
se compile o corra el programa, siendo type una forma de unir primitivos o generar listas de una variable e 
interface para definir la estructura de un objeto.

## Flujo de GitHub

-Enlace al Repositorio: https://github.com/PabloVar06/Repo-Proyecto-1 
- Rama de trabajo: `feature/proyecto-1`
- Enlace al pull request: (https://github.com/PabloVar06/Repo-Proyecto-1/pull/8)