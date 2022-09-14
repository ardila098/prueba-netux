


import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../../ui/components'
import { AniosPage } from '../pages/aniosPage'
import { EstrenosPage } from '../pages/EstrenosPage'

import { PeliculasPage } from '../pages/PeliculasPage'
import { SearchPage } from '../pages/SearchPage'
import { SeriesPage } from '../pages/SeriesPage'

export const PeliculasRoute = () => {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="peliculas" element={<PeliculasPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="estrenos" element={<EstrenosPage/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="anios" element={<AniosPage/>} />
          <Route path="pelicula/:id" element={<PeliculasPage />} />

          <Route path="/" element={<Navigate to={"/peliculas"} />} />
        </Routes>
      </div>
    </>
  );
}
