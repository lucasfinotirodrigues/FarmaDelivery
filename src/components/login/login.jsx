import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './login.css'
import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

/*Importando imagens*/
import logo from '../../images/logoBlue.svg'


function Login(){
    return (
      <div>
      <div className='estrutura'>
      <Navbar></Navbar>
      <div className="conteudo">
        <div className="form-login">
          <div className='header-login'>
            <img src={logo} alt="" />
            <h4 className="text-blue">FarmaDelivery</h4>
          </div>
          <div className="form-group">
            <label className='label'>E-mail</label>
            <input className="input" type="email"/>
          </div>
          <div className="form-group">
            <label className='label'>Senha</label>
            <input className="input" type="password"/>
          </div>
          <div className="text-form">
            <p className="paragraph1">Ainda não possui conta?</p>
            <p >                              
              <Link to="/cadastro" className="paragraph2">Criar conta</Link>              
            </p>
          </div>
          <button className='button'>                     
            <Link to="/">Entrar</Link>
          </button>
        </div>
      </div>
      <Rodape></Rodape>
      </div>
  </div>
    );
}

export default Login;