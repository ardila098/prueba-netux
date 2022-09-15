

import { PeliculasItem } from './PeliculasItem'
import  '../css/card.css' 
import { useEffect, useState } from 'react';
import { getPeliculas } from '../helpers/getPeliculas';


export const ListPeliculas = () => {


  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {

    ( async () => {
      try {
        const response = await getPeliculas();
        setPeliculas(response)
      } catch (error) {
        console.log('err');
        
      }
    })()
  }, [])



  return (
   

<>




<div className="card-grid">
        {peliculas.map(( pelicula ) => (
          <PeliculasItem key={pelicula.imdbID} {...pelicula} />
        ))}
      </div>



</>



  )
}
