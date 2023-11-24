import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home'
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import Pagamento from './pagamento/pagamento';
import Carrinho from './carrinho/carrinho';
import Compras from './compras/compras';
import Avaliacoes from './avaliacoes/avaliacoes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
      </Routes>
    </Router>
  );
}

export default App;