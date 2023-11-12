import React, { useState } from 'react';
import './Navbar.css';
import './../../reset.css'; 
import './../../styles.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="info">
          <img className='logo' src="../../images/Logo-White.png" alt="" srcset="" />
          <h3>FarmaDelivery</h3>
        </div>
        <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Avaliações</a></li>
          <li><a href="#">Cadastrar</a></li>
          <li><a href="#">Entrar</a></li>
          <li><a href="#">Carrinho</a></li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
      </nav>
    </div>
  );
}

export default Navbar;
