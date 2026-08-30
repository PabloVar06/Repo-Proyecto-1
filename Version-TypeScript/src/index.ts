import { catalogoJuegos } from "./juegos";
import {
  crearContadorConsultas,
  obtenerVeredicto,
  filtrarPorVeredicto,
  cargarCatalogo,
} from "./consultor";

async function main(): Promise<void> {
  console.log("==Catalogo de Juegos (version TypeScript)==");

  const contador = crearContadorConsultas();
  contador.registrar();

  const catalogo = await cargarCatalogo(catalogoJuegos);
  console.log(`Juegos cargados correctamente: ${catalogo.length}`);
  console.log(`Consultas registradas: ${contador.obtenerTotal()}\n`);

  const buenos = filtrarPorVeredicto(catalogo, "Bueno");
  console.log("Juegos buenos:", buenos.map((j) => j.nombre));

  console.log("\nVeredicto por juego:");
  catalogo.forEach((juego) => {
    console.log(`- ${juego.nombre}: ${obtenerVeredicto(juego.puntaje)} (${juego.puntaje})`);
  });
}

main();

