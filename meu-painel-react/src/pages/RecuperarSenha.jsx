import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarSenha = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <aside><p>Recuperar <span>Senha</span></p></aside>
      <main>
        <div className="cadastro">
          <h1>Esqueceu sua senha?</h1>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/nova-senha'); }}>
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit">Enviar link</button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default RecuperarSenha;