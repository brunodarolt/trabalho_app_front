import React from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPasso1 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <aside>
        <p>Educação não é aprendizado de fatos, mas o treinamento da mente para pensar. <span>Albert Einstein</span></p>
      </aside>
      <main>
        <div className="cadastro">
          <h1>Cadastre-se</h1>
          <p>Passo 1 de 2.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); navigate('/cadastro-dados'); }}>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" placeholder="000.000.000-00" required />
            
            <button type="submit">Prosseguir</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CadastroPasso1;