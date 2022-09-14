

import { useFetchPeliculas } from '../hooks/useFetchPeliculas'
import { PeliculasItem } from './PeliculasItem'
import  '../css/card.css' 


export const ListPeliculas = () => {



    const { peliculas} = useFetchPeliculas()


  return (
   

<>

<div className="card-grid">
        {peliculas.map(( pelicula ) => (
          <PeliculasItem key={pelicula.id} {...pelicula} />
        ))}
      </div>



</>



  )
}
