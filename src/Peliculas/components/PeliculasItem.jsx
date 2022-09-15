
import React from 'react'
import { Link } from 'react-router-dom'

export const PeliculasItem = ({imdbID,Year,Title,Poster,}) => {



  return (


<>

<div className='card'>
          
          <img src={Poster} alt={Title} />

          <p>{Title}</p>

<h2>{Year}</h2>



<Link to={`/peliculas/${imdbID}`}>
Mas..
</Link>


    </div>


</>
  )
}
