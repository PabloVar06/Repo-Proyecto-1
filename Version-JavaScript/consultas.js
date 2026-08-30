//Fiuncion para crear una consulta que bota la informacion de un juego en especifico con un timeout para simular un tiempo de consulta
function consultarJuego(juego) {
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

export async function cargarCatalogo(juegos) {
  const catalogoValido = [];

  for (const juego of juegos) {
    try {
      const juegoCargado = await consultarJuego(juego);
      catalogoValido.push(juegoCargado);
    } catch (error) {
      console.error("Error al cargar juego:", error.message);
      // no se detiene: sigue con el siguiente juego del ciclo
    }
  }

  return catalogoValido;
}