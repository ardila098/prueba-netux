

import React from 'react'
import { Route, Routes } from 'react-router'
import { PeliculasRoute } from '../Peliculas/routes/PeliculasRoute'

export const AppRouter = () => {
  return (
    <>
    
    <Routes>


    <Route path="/*" element={<PeliculasRoute/>}/>

    </Routes>
    
    </>
  )
}
