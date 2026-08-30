
import { catalogoJuegos } from "./catalogo.js";
import {obtenerVeredicto, filtrarPorVeredicto} from "./puntaje.js";
import {cargarCatalogo} from "./consultas.js";

async function main() {
    console.log("==Catalogo de Juegos==");

    const catalogo = await cargarCatalogo(catalogoJuegos);
    console.log (`Juegos cargados correctamente: ${catalogo.length}\n`);

    const buenos = filtrarPorVeredicto(catalogo, "Bueno");
    console.log("Juegos buenos:", buenos.map((j) => j.nombre));
    console.log("\nVeredicto por juego:");
    catalogo.forEach((juego) => {
    console.log(`- ${juego.nombre}: ${obtenerVeredicto(juego.puntaje)} (${juego.puntaje})`);
  });
}
 main();