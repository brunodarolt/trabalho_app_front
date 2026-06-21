import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, BookOpen, Bot, User } from 'lucide-react';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="dash-header">
      <div className="logo-area">
        <h2 className="logo-title">Academia</h2>
        <span className="logo-subtitle">Olá, {user.nome.split(' ')[0]}</span>
      </div>
      
      <nav className="dash-nav">
        <NavLink to="/dashboard"><LayoutGrid size={18} /> Painel</NavLink>
        <NavLink to="/disciplinas"><BookOpen size={18} /> Disciplinas</NavLink>
        <NavLink to="/tutor"><Bot size={18} /> Tutor IA</NavLink>
        <NavLink to="/perfil"><User size={18} /> Perfil</NavLink>
      </nav>
    </header>
  );
};

export default Header;