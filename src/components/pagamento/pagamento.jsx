import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './pagamento.css'
import { Link } from 'react-router-dom';

import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';

import icons from '../../images/Icons1.svg';

import iconmap from '../../images/map.svg'

function Pagamento(){
    return (
      <div>    
      <Navbar></Navbar>
      <div className="conteudoCompras">
        <div className="forms">
          <div className='header-login'>
            <h3 className="blue">Pagamento</h3>
            <img src={icons} />
          </div>  
          <div className='subtitle'>
            <h3 className="title">Endereço cadastrado</h3>
          </div>
                  <div className="card-compra">
                    <img src={iconmap} className='img'/>  
                    <div className="information">
                      <h6 className="remedioss">Manoel F. Gomes</h6>
                      <h6 className='quantidades'>nº 69 bloco B</h6>
                      <h6 className='precoss'>Receptor: Maria</h6>
                    </div>                    
                  </div>
              <button className='button cadastro'>                     
                <Link to="/avaliacoes">Comprar</Link>
            </button>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
    );
}

export default Pagamento;