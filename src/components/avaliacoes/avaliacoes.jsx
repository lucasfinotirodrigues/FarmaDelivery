import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './avaliacoes.css';

import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';

/*Importando imagens*/
import analgesico1 from '../../images/Analgésico.png';
import analgesico2 from '../../images/Analgésico2.png';
import analgesico3 from '../../images/Analgésico3.png';
import analgesico4 from '../../images/Analgésico4.png';
import analgesico5 from '../../images/Analgésico5.png';
import coracaoOutline from '../../images/Icon-coracao-outline.svg';
import check from '../../images/check-square.svg';
import starzero from '../../images/Icons-StarsZero.svg';
import starone from '../../images/Icons-StarsUm.svg';
import startwo from '../../images/Icons-StarsDois.svg';
import starthree from '../../images/Icons-StarsTres.svg';
import starfour from '../../images/Icons-StarsQuatro.svg';
import starfive from '../../images/Icons-Stars.svg';

/*Lista dos remédios*/

const analgesico = [
  {src: analgesico1, preco: 'R$18,50', nome: 'Novalgina 500 mg'},
  {src: analgesico2, preco: 'R$6,99',  nome: 'Dorflex 300 mg'  },
  {src: analgesico3, preco: 'R$88,89', nome: 'Cronidor  40 mg' },
  {src: analgesico4, preco: 'R$19,90', nome: 'Advil mulher 400 mg'},
  {src: analgesico5, preco: 'R$35,50', nome: 'Tylenol 750 mg'},
];

function Avaliacoes(){
  return (
    <div>
        <div className='estrutura'>
        <Navbar></Navbar>     
        <div className="aviso">
          <h5>Sua compra foi finalizada!</h5>
          <img src={check} />
        </div> 
        <h3 className="title-avaliacao">Que tal avaliar a experiência de comprar no FarmaDelivery?</h3>
        <div className="avaliar">
          <div className="estrelas">
            <img src={starzero}/>
          </div>
          <div className="">
            <button className='button avalia'>Não, obrigado</button>
          </div>
        </div>
        <h3 className="title-avaliacao">Produtos que receberam avaliações</h3>
        <div className="cards">
            <img className="star" src={starfive} alt="" />
            <div className="grupo">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoOutline}/>
                </div>
                <img className='remedio' src={analgesico.src}/>
                <p className="preco">{analgesico.preco}</p>
                <p className="nome">{analgesico.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <div className="cards">
            <img className="star" src={starfour} alt="" />
            <div className="grupo">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoOutline}/>
                </div>
                <img className='remedio' src={analgesico.src}/>
                <p className="preco">{analgesico.preco}</p>
                <p className="nome">{analgesico.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <div className="cards">
            <img className="star" src={starthree} alt="" />
            <div className="grupo">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoOutline}/>
                </div>
                <img className='remedio' src={analgesico.src}/>
                <p className="preco">{analgesico.preco}</p>
                <p className="nome">{analgesico.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <div className="cards">
            <img className="star" src={startwo} alt="" />
            <div className="grupo">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoOutline}/>
                </div>
                <img className='remedio' src={analgesico.src}/>
                <p className="preco">{analgesico.preco}</p>
                <p className="nome">{analgesico.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <div className="cards">
            <img className="star" src={starone} alt="" />
            <div className="grupo">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoOutline}/>
                </div>
                <img className='remedio' src={analgesico.src}/>
                <p className="preco">{analgesico.preco}</p>
                <p className="nome">{analgesico.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <Rodape></Rodape>
        </div>
    </div>
);
}

export default Avaliacoes;