import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const RecuperarSenha = () => {
  // Estado para armazenar o e-mail digitado
  const [email, setEmail] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página recarregue
    
    // Aqui você faria a chamada para a sua API enviar o link de redefinição
    console.log('Solicitação de recuperação de senha para:', email);
  };

  return (
    <div className="container">
      
      <aside>
        <p>
          Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
          <span>Albert Einstein</span>
        </p>
      </aside>

      <main>
        <div className="cadastro">
          
          <h1>Esqueceu a senha</h1>
          <p>Informe seu e-mail para enviarmos um link para redefinir sua senha.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Endereço de e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Enviar</button>
          </form>

        </div>
      </main>

    </div>
  );
};

export default RecuperarSenha;