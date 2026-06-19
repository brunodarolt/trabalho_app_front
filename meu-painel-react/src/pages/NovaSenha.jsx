import React from 'react';
import { useNavigate } from 'react-router-dom';

const NovaSenha = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <aside><p>Nova <span>Senha</span></p></aside>
      <main>
        <div className="cadastro">
          <h1>Definir nova senha</h1>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
            <input type="password" placeholder="Nova senha" required />
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default NovaSenha;