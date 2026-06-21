import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, BookOpen, Bot, User } from 'lucide-react';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
  // Puxa o nome do usuário lá do nosso Contexto Global
  const { user } = useContext(UserContext);

  return (
    <header className="dash-header">
      <div className="logo-area">
        <h2 className="logo-title">Academia</h2>
        {/* Mostrando o primeiro nome do usuário vindo do Contexto */}
        <span className="logo-subtitle">Olá, {user.nome.split(' ')[0]}</span>
      </div>
      
      <nav className="dash-nav">
        {/* Requisito 8: Usando NavLink. Ele adiciona a classe 'active' automaticamente! */}
        <NavLink to="/dashboard"><LayoutGrid size={18} /> Painel</NavLink>
        <NavLink to="/disciplinas"><BookOpen size={18} /> Disciplinas</NavLink>
        <NavLink to="/tutor"><Bot size={18} /> Tutor IA</NavLink>
        <NavLink to="/perfil"><User size={18} /> Perfil</NavLink>
      </nav>
    </header>
  );
};

export default Header;