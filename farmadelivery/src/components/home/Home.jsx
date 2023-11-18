import React from 'react';
import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';

/*Importando estilos*/
import './Home.css';
import './../../styles.css'; 
import './../../reset.css'; 

/*Importando imagens*/
import medicamentos from '../../images/Icon-remedio.svg';
import vitaminas from '../../images/Icon-muscle.svg';
import protetores from '../../images/Icon-sol.svg';
import bebes from '../../images/Icon-mamadeira.svg';
import aparelhos from '../../images/Icon-aparelhos.svg';
import naturais from '../../images/Icon-ervas.svg';


/*Lista dos icones em card*/
const images = [
    { src: medicamentos, text: 'Medicamentos' },
    { src: vitaminas, text: 'Vitaminas' },
    { src: protetores, text: 'Protetores' },
    { src: bebes, text: 'Infantis' },
    { src: aparelhos, text: 'Aparelhos' },
    { src: naturais, text: 'Naturais' }
  ];

  

function Home(){
    return (
        <div>
            <div className='estrutura'>
            <Navbar></Navbar>
            <div className='content'>
                <div className="message">
                    <h2>"Entregamos a seu medicamento onde você<br/>estiver,  pois a sua saúde não pode esperar!"</h2>
                    <button className='button'>Entrar</button>
                </div>
            </div>
            <div className="filters">
            {images.map((image, index) => (
                <div className="group" key={index}>
                <div className="icon">
                    <img className='icon-img' src={image.src} alt={image.text} />
                </div>                
                <p className='text'>{image.text}</p>
                </div>
            ))}
            </div>
            <Rodape></Rodape>
            </div>
        </div>
    );
}

export default Home;