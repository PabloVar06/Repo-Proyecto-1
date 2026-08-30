# Bitácora Proyecto 1

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