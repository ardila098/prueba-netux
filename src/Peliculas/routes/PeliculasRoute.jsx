


import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../../ui/components'

import { PeliculaPage } from '../pages/PeliculaPage'

import { PeliculasPage } from '../pages/PeliculasPage'


export const PeliculasRoute = () => {
  return (
    <>
      <div className='content'>

        <div className='portada'>

        <Navbar />

        </div>

        <Routes>
          <Route path="peliculas" element={<PeliculasPage />} />
     
          <Route path="peliculas/:id" element={<PeliculaPage />} />

          <Route path="/" element={<Navigate to={"/peliculas"} />} />
        </Routes>
      </div>
    </>
  );
}
