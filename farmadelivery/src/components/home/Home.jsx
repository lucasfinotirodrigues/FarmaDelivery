import React from 'react';
import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';
import './Home.css';
import './../../styles.css'; 
import './../../reset.css'; 



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
            <Rodape></Rodape>
            </div>
        </div>
    );
}

export default Home;