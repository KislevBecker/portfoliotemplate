/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-coinsa">
<div className="container">
  <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#main_nav"
    aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars text-white"></i>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">
    <ul className="navbar-nav  fade-up">
    <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" href="/Servicios">Servicios</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" href="/Portafolio">Portafolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" href="/Contactanos">Contáctame</Link>
      </li>
    </ul>

  </div> 
</div>
</nav>
  )
}
export default Navbar