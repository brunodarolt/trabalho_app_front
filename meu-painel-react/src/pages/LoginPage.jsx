import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container">
      <aside>
        <p>Educação não é aprendizado de fatos, mas o treinamento da mente para pensar. <span>Albert Einstein</span></p>
      </aside>
      <main>
        <div className="cadastro">
          <h1>Bem-vindo de volta</h1>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="user@email.com" />
            <label>Senha <Link to="/recuperar-senha">Esqueceu?</Link></label>
            <input type="password" placeholder="Sua senha" />
            <button type="submit">Entrar</button>
          </form>
          <p className="registro">Não tem conta? <Link to="/cadastro">Registre-se agora</Link></p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;