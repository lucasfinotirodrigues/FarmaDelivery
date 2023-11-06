import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route/>
              {/* <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/pagamento" element={<Pagamento />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/avaliacoes" element={<Avaliacoes/>} /> */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;