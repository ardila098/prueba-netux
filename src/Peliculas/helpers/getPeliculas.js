

export const getPeliculas = async () => {
    try {
        const response = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=Batman')
        const result = await response.json();
        return result.Search;
    } catch (error) {
        throw new Error('get peliculas')
    }
}