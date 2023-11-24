import React, { useState } from 'react';
import './Navbar.css';
import './../../reset.css'; 
import './../../styles.css'; 

import logo from '../../images/Logo-White.svg';
import home from '../../images/home.svg';
import carrinho from '../../images/carrinho.svg';
import entrar from '../../images/login.svg';
import avaliacoes from '../../images/star.svg';
import cadastrar from '../../images/user.svg';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="info">
          <img className='logo' src={logo} alt="" srcset="" />
          <h3>FarmaDelivery</h3>
        </div>
        <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
          <li>
            <img src={home} alt="" />
            <a href="#">Home</a>
          </li>
          <li>
            <img src={avaliacoes} alt="" /> 
            <a href="#">Avaliações</a>
          </li>
          <li>
            <img src={cadastrar} alt="" /> 
            <a href="#">Cadastrar</a>
          </li>
          <li>
            <img src={entrar} alt="" /> 
            <a href="#">Entrar</a>
          </li>
          <li>
            <img src={carrinho} alt="" /> 
          </li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>&#9776;</div>
      </nav>
    </div>
  );
}

export default Navbar;
