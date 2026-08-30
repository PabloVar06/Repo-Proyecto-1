//Logicas y funciones traidos de JavaScript a TypeScript para la consulta de los juegos y sus puntajes

import { Juego } from "./categorias";


export type Veredicto = "Bueno" | "Regular" | "Malo";


export function crearContadorConsultas() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },
    obtenerTotal() {
      return total;
    },
  };
}


export function obtenerVeredicto(puntaje: number): Veredicto {
  if (puntaje >= 85) {
    return "Bueno";
  } else if (puntaje >= 60) {
    return "Regular";
  } else {
    return "Malo";
  }
}


export function filtrarPorVeredicto(juegos: Juego[], veredicto: Veredicto): Juego[] {
  return juegos.filter((juego) => obtenerVeredicto(juego.puntaje) === veredicto);
}


function consultarJuego(juego: Juego): Promise<Juego> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!juego.plataforma || !juego.puntaje) {
        reject(new Error(`Juego inválido (id: ${juego.id})`));
        return;
      }
      resolve(juego);
    }, 200);
  });
}

export async function cargarCatalogo(juegos: Juego[]): Promise<Juego[]> {
  const catalogoValido: Juego[] = [];

  for (const juego of juegos) {
    try {
      const juegoCargado = await consultarJuego(juego);
      catalogoValido.push(juegoCargado);
    } catch (error) {
      console.error("Error al cargar juego:", (error as Error).message);
    }
  }

  return catalogoValido;
}
