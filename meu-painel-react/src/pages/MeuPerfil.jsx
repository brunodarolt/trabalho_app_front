import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, BookOpen, Bot, User } from 'lucide-react';
import Header from '../components/Header';

const MeuPerfil = () => {
  return (
    <div className="dashboard-bg">
      <Header/>
      <main className="dash-main">
        
        <div className="perfil-header">
          <div className="avatar">JS</div>
          <div className="perfil-info">
            <h1>João Silva</h1>
            <p>Engenharia de Software • 3º Ano</p>
          </div>
        </div>

        <div className="perfil-tabs">
          <button className="tab active">Dados Pessoais</button>
          <button className="tab">Configurações</button>
          <button className="tab">Segurança</button>
        </div>

        <div className="perfil-card">
          <div className="perfil-row">
            <span className="perfil-label">Nome Completo</span>
            <span className="perfil-value">João Silva</span>
          </div>
          
          <div className="perfil-row">
            <span className="perfil-label">Nome de Preferência</span>
            <span className="perfil-value">Jonh</span>
          </div>
          
          <div className="perfil-row">
            <span className="perfil-label">Endereço de E-mail</span>
            <span className="perfil-value">joao.silva@satc.edu.br</span>
          </div>
          
          <div className="perfil-row">
            <span className="perfil-label">Matrícula / CPF</span>
            <span className="perfil-value">***.***.***-89</span>
          </div>
          
          <div className="perfil-row">
            <span className="perfil-label">Número de Telefone</span>
            <span className="perfil-value text-muted">Não fornecido</span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default MeuPerfil;