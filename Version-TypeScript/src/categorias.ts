// Se establece las listas de las categorias plataforma y generos
export type Genero = "Accion" | "Aventura" | "Deportes" | "Estrategia" | "Simulacion" | "Rol" | "Terror" | "Carreras" | "Musicales" | "Otros";

export type Plataforma = "PC" | "PlayStation" | "Xbox" | "Nintendo Switch" | "Mobile" | "VR" | "Otros";

export interface Juego{
    id: number;
    nombre: string;
    genero: Genero;
    plataforma: Plataforma;
    fechaLanzamiento: Date;
    
};