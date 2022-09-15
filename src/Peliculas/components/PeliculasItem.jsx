
import React from 'react'
import { Link } from 'react-router-dom'

export const PeliculasItem = ({imdbID,Year,Title,Poster,}) => {



  return (


<>

<div className='card'>
          
          <img src={Poster} alt={Title} />

<div className='details'>

          <p>{Title}</p>

<h2>{Year}</h2>



<Link className='linkdetalle' to={`/peliculas/${imdbID}`}>
Mas Detalles ..
</Link>
</div>


    </div>


</>
  )
}
