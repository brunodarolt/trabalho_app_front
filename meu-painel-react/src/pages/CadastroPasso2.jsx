import React from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPasso2 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <aside>
        <p>A educação não é a aprendizagem de factos, mas o treino da mente para pensar. <span>Albert Einstein</span></p>
      </aside>
      <main>
        <div className="cadastro">
          <h1>Registe-se</h1>
          <p>Passo 2 de 2. Quase lá!</p>
          
          <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
            <label htmlFor="nome">Nome Completo</label>
            <input id="nome" type="text" placeholder="O seu nome" required />
            
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="user@email.com" required />
            
            <label htmlFor="senha">Palavra-passe</label>
            <input id="senha" type="password" placeholder="Crie uma palavra-passe" required />
            
            <button type="submit">Finalizar Registo</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CadastroPasso2;