

import React from 'react'


export const PeliculaItem = ({peliculas}) => {

const {id,title,year,urlImg}=peliculas();

  return (
  <>
  
  
  <div className="card">

<img src={urlImg} alt="" />

<h3>{title}</h3>

<h3>{year}</h3>


  </div>
  
  </>
  )
}
