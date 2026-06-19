import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// O import SEM chaves { } procura pelo export default
import LoginPage from './pages/LoginPage'; 
import CadastroPasso1 from './pages/CadastroPasso1';
import CadastroPasso2 from './pages/CadastroPasso2';
import RecuperarSenha from './pages/RecuperarSenha';
import NovaSenha from './pages/NovaSenha';
import Teste from './pages/Teste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPasso1 />} />
        <Route path="/cadastro-dados" element={<CadastroPasso2 />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;