import React from 'react';
import './../../reset.css'; 
import './../../styles.css'; 
import './cadastro.css'

import Rodape from '../footer/footer';
import Navbar from '../navbar/Navbar';


const labelEsquerda = [
  {label: "Nome"},
  {label: "Estado(UF)"},
  {label: "CEP"},
  {label: "Número"},
  {label: "Complemento"},
  {label: "Senha"},
]

const labelDireita = [
  {label: "E-mail"},
  {label: "Cidade"},
  {label: "Logradouro"},
  {label: "Barirro"},
  {label: "Celular"},
  {label: "Confirmação de senha"}
]

function Cadastro(){
  return (
    <div>
    <div className='estrutura'>
    <Navbar></Navbar>
    <div className="conteudo-cadastro">
      <div className="form-cadastro">
        <div className='header-login'>
          <h4 className="text-blue">Cadastre-se</h4>
        </div>
        {labelEsquerda.map((item, index) => (            
              <div className="group-row" key={index}>
                <div className="form-group">
                  <label className='label'>{item.label}</label>
                  <input type="email"/>
                </div>
                <div className="form-group">
                  <label className='label'>{labelDireita[index].label}</label>
                  <input type="email"/>
                </div>
              </div>
            ))}
        <button className="button cadastro">Cadastrar</button>
      </div>
    </div>
    <Rodape></Rodape>
    </div>
</div>
  );
}

export default Cadastro;