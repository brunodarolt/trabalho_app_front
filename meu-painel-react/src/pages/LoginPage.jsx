import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErro(''); 

    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErro('Por favor, digite um e-mail válido (ex: seu@email.com).');
      return;
    }

    navigate('/dashboard');
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
          <h1>Bem-vindo de volta</h1>

          {erro && <div className="error-message">{erro}</div>}

          <form onSubmit={handleLogin} noValidate>
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            
            <label>Senha <Link to="/recuperar-senha">Esqueceu?</Link></label>
            <input 
              type="password" 
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
            />
            
            <button type="submit">Entrar</button>
          </form>
          
          <p className="registro">
            Não tem conta? <Link to="/cadastro">Registre-se agora</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;