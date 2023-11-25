import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './compras.css'
import { Link } from 'react-router-dom';

/*Importando imagens*/
import icon from '../../images/Icons.svg'
import analgesico1 from '../../images/Analgésico.png';
import analgesico2 from '../../images/Analgésico2.png';

import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';


const remedio = [
  {src: analgesico1, preco: 'R$18,50',quantidade: '4', nome: 'Novalgina 500 mg'},
  {src: analgesico2, preco: 'R$6,99',quantidade: '1',  nome: 'Dorflex 300 mg'  },
]

function Compras(){
  return (
    <div>    
    <Navbar></Navbar>
    <div className="conteudoCompras">
      <div className="form-cadastro">
        <div className='header-login'>
          <h3 className="blue">Cadastre-se</h3>
          <img src={icon} />
        </div>  
        {remedio.map((remedio, index) => (
                <div className="card-compras" key={index}>
                  <img className='img' src={remedio.src}/>  
                  <div className="information">
                    <p className="remedios">{remedio.nome}</p>
                    <p className='quantidade'>quantidade: {remedio.quantidade}</p>
                    <p className='precos'>{remedio.preco}</p>
                  </div>                    
                </div>
            ))}
            <button className='button cadastro'>                     
              <Link to="/pagamento">Comprar</Link>
          </button>
      </div>
    </div>
    <Rodape></Rodape>
  </div>
  );
}

export default Compras;