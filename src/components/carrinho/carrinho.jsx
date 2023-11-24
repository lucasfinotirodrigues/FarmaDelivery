import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './carrinho.css'
import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';

/*Importando imagens*/
import medicamentos from '../../images/Icon-remedio.svg';
import vitaminas from '../../images/Icon-muscle.svg';
import protetores from '../../images/Icon-sol.svg';
import bebes from '../../images/Icon-mamadeira.svg';
import aparelhos from '../../images/Icon-aparelhos.svg';
import naturais from '../../images/Icon-ervas.svg';
import analgesico1 from '../../images/Analgésico.png';
import analgesico2 from '../../images/Analgésico2.png';
import analgesico3 from '../../images/Analgésico3.png';
import analgesico4 from '../../images/Analgésico4.png';
import analgesico5 from '../../images/Analgésico5.png';
import antiflamatorio1 from '../../images/AntiFlamatorio.png';
import antiflamatorio2 from '../../images/AntiFlamatorio2.png';
import antiflamatorio3 from '../../images/AntiFlamatorio3.png';
import antiflamatorio4 from '../../images/AntiFlamatorio4.png';
import antiflamatorio5 from '../../images/AntiFlamatorio5.png';
import coracaoPreenchido from '../../images/Icon-coracao.svg'


/*Lista dos icones em card*/
const images = [
    { src: medicamentos, text: 'Medicamentos' },
    { src: vitaminas, text: 'Vitaminas' },
    { src: protetores, text: 'Protetores' },
    { src: bebes, text: 'Infantis' },
    { src: aparelhos, text: 'Aparelhos' },
    { src: naturais, text: 'Naturais' }
  ];

/*Lista dos remédios*/

const analgesico = [
    {src: analgesico1, preco: 'R$18,50', nome: 'Novalgina 500 mg'},
    {src: analgesico2, preco: 'R$6,99',  nome: 'Dorflex 300 mg'  },
    {src: analgesico3, preco: 'R$88,89', nome: 'Cronidor  40 mg' },
    {src: analgesico4, preco: 'R$19,90', nome: 'Advil mulher 400 mg'},
    {src: analgesico5, preco: 'R$35,50', nome: 'Tylenol 750 mg'},
]

const antiInflamatorio = [
    {src: antiflamatorio1, preco: 'R$42,90', nome: 'Alivium 600 mg'},
    {src: antiflamatorio2, preco: 'R$44,90',  nome: 'AdvilPRO 30 mg'  },
    {src: antiflamatorio3, preco: 'R$6,99', nome: 'Nimesulida 100 mg' },
    {src: antiflamatorio4, preco: 'R$19,90', nome: 'Ibuprofeno 400 mg'},
    {src: antiflamatorio5, preco: 'R$14,90', nome: 'Ibupril 400 mg'},
]

function Carrinho(){
  return (
    <div>
        <div className='estrutura'>
        <Navbar></Navbar>
        <div className="cards">
            <h3 className="title-carrinho">Carrinho de compras</h3>
            <div className="grupo-carrinho">
            {analgesico.map((analgesico, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoPreenchido}/>
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
            <div className="grupo-carrinho">
            {antiInflamatorio.map((antiInflamatorio, index) => (
                <div className="card" key={index}>
                <div className="heart">
                    <img className='coracao' src={coracaoPreenchido}/>
                </div>
                <img className='remedio' src={antiInflamatorio.src}/>
                <p className="preco">{antiInflamatorio.preco}</p>
                <p className="nome">{antiInflamatorio.nome}</p>
                <button className='button compra'>Comprar</button>
                </div>
            ))}
            </div>
        </div>
        <div className="button-compra">
          <button className='button carrinho'>Finalizar compra</button>
        </div>
        <Rodape></Rodape>
        </div>
    </div>
  );
}

export default Carrinho;