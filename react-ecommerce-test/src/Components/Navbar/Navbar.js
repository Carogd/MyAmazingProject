import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className='nav-top'>
        <Link to='/'>Accueil</Link>
        <Link to='/produits'>Produits</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}
