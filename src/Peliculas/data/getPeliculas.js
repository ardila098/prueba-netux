
export const getPeliculas =async () => {

    const url = `https://fake-movie-database-api.herokuapp.com/api?s=Batman`;
    const resp = await fetch(url);
    const { Search } = await resp.json(); 

    const  peliculas = Search.map(pelicula => ({

        id: pelicula.imdbID,
        title: pelicula.Title,
        year: pelicula.Year,
        poster: pelicula.Poster
        
}) )




  return peliculas;
}


// const Peliculas =Search.map( pelicula =>({
  
//     id: pelicula.imdbID,
//     title: pelicula.Title,
//     year:pelicula.Year,
//     poster:pelicula.Poster
// }));