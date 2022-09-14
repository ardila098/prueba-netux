import { useEffect, useState } from "react";
import { getPeliculas } from "../data/getPeliculas";



export const useFetchPeliculas = ( ) => {
  
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getPeliculas().then((newPeliculas) => setPeliculas(newPeliculas));
  }, []);

  
    return {
        peliculas,
        
    }
}
