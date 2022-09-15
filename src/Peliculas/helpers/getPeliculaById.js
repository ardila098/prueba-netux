import { getPeliculas } from "./getPeliculas"

export const getPeliculaById = async (id) => {
    

    
    const peliculas= await getPeliculas();

    return peliculas.find( pelicula => pelicula.imdbID === id)
}