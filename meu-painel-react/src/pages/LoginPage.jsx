import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // 1. ESTADOS DO FORMULÁRIO (Para guardar o que o usuário digita e os erros)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErro(''); // Limpa mensagens de erro antigas

    // 2. VALIDAÇÃO: Impede envio de campos vazios
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // 3. VALIDAÇÃO: Verifica se o e-mail tem o formato correto (@ e ponto)
    if (!email.includes('@') || !email.includes('.')) {
      setErro('Por favor, digite um e-mail válido (ex: seu@email.com).');
      return;
    }

    // Se passou por todas as regras, entra no sistema
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

          {/* 4. MENSAGEM DE ERRO NA TELA (Só renderiza se a variável 'erro' tiver texto) */}
          {erro && <div className="error-message">{erro}</div>}

          {/* A propriedade noValidate impede que o balãozinho padrão do Chrome apareça, forçando a nossa mensagem vermelha */}
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