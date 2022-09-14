export const getPeliculas = async () => {
  const url = `https://fake-movie-database-api.herokuapp.com/api?s=Batman`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const peliculas = data.map((pelicula) => ({
    id: pelicula.imdbID,
    title: pelicula.Title,
    year: pelicula.Year,
    urlImg: pelicula.Poster,
  }));

  return peliculas;
};
