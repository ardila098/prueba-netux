
import React from 'react'

export const PeliculasItem = ({id,year,title,poster,}) => {



  return (


<>

<div className='card'>
          
          <img src={poster} alt={title} />

          <p>{title}</p>

<h2>{year}</h2>


    </div>


</>
  )
}
