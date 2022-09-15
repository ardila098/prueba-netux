



import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPeliculaById } from '../helpers/getPeliculaById';

export const PeliculaPage = () => {




const [pelicula, setPelicula] = useState({});
const {id} = useParams();


const navigate = useNavigate();


const onNavigateBack =() => {

  navigate(-1)

}

useEffect(() => {
  ( async () => {
    try {
      const response = await getPeliculaById(id);
      setPelicula(response)
    } catch (error) {
      console.log('err');
    }
  })()
}, [])





console.log(pelicula,"oeeee")

  return (
   <>
   
   <h1>{id}</h1>

   <h2>{id}</h2>

   <img src={pelicula.Poster} alt="" />

<h3>{pelicula.Title}</h3>

<h4>{pelicula.Year}</h4>







<button
className='btn btn-outline'
onClick={onNavigateBack}
>
Back
</button>

   </>
  )
}





