import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPasso1 = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');

  const formatarCPF = (valor) => {
    
    valor = valor.replace(/\D/g, '');

    
    valor = valor.slice(0, 11);

    
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return valor;
  };

  const handleCpfChange = (e) => {
    setCpf(formatarCPF(e.target.value));
  };

  return (
    <div className="container">
      <aside>
        <p>
          Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
          <span> Albert Einstein</span>
        </p>
      </aside>

      <main>
        <div className="cadastro">
          <h1>Cadastre-se</h1>
          <p>Passo 1 de 2.</p>

          <form onSubmit={(e) => {
            e.preventDefault();
            navigate('/cadastro-dados');
          }}>
            <label htmlFor="cpf">CPF</label>

            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14}
              required
            />

            <button type="submit">Prosseguir</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CadastroPasso1;