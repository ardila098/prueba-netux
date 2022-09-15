import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-sm navbar-dark ">


<Link 
        className="navbar-brand iconMovies" 
        to="/"
    >
       <img src="https://res.cloudinary.com/doe7vtjfk/image/upload/v1663269662/prueba/icons8-movie-64_prjaun.png" alt="" />
    </Link>
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
       Peliculas
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">


        </div>
    </div>


</nav>

  )
}
