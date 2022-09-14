import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
       Peliculas
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                className="nav-item nav-link" 
                to="/series"
            >
                Series
            </NavLink>

            <NavLink 
                className="nav-item nav-link" 
                to="/estrenos"
            >
                Estrenos
            </NavLink>


  

            <NavLink 
                className="nav-item nav-link" 
                to="/search"
            >
                Search
            </NavLink>

            <NavLink 
                className="nav-item nav-link" 
                to="/anios"
            >
                Año
            </NavLink>
        </div>
    </div>


</nav>

  )
}
