//Funcion para calcular en base la puntaje regisrado en el juego si es un juego bueno, regular o malo
export function obtenerVeredicto(puntaje) {
    if (puntaje >= 85) {
        return "Bueno";
    } else if (puntaje >= 60) {
        return "Regular";
    } else {
        return "Malo";
    }
};

export function filtrarPorVeredicto(juegos, veredicto) {
    return juegos.filter(juego => obtenerVeredicto(juego.puntaje) === veredicto);
};