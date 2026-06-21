import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, BookOpen, Bot, User } from 'lucide-react';

const Disciplinas = () => {
  return (
    <div className="dashboard-bg">
      {/* Cabeçalho */}
      <header className="dash-header">
        <div className="logo-area">
          <h2 className="logo-title">Academia</h2>
          <span className="logo-subtitle">Portal do Aluno</span>
        </div>
        
        <nav className="dash-nav">
          {/* O Link permite navegar sem recarregar a página */}
          <Link to="/dashboard"><LayoutGrid size={18} /> Painel</Link>
          <Link to="/disciplinas" className="active"><BookOpen size={18} /> Disciplinas</Link>
          <Link to="#"><Bot size={18} /> Tutor IA</Link>
          <Link to="#"><User size={18} /> Perfil</Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="dash-main">
        <h1 className="page-title">Minhas Disciplinas</h1>

        <div className="disciplinas-grid">
          
          {/* Cartão 1: Front-end */}
          <div className="dash-card disciplina-card">
            <div className="card-top">
              <div>
                <h3>Front-end</h3>
                <p className="prof-name">PROF. MARCO SILVA</p>
              </div>
              <span className="badge badge-curso">EM CURSO</span>
            </div>
            
            <div className="progress-section">
              <div className="progress-labels">
                <span>Progresso</span>
                <span>75%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <button className="btn-block">Acessar Disciplina</button>
          </div>

          {/* Cartão 2: UX Design */}
          <div className="dash-card disciplina-card">
            <div className="card-top">
              <div>
                <h3>UX Design</h3>
                <p className="prof-name">DRA. ANA LÚCIA</p>
              </div>
              <span className="badge badge-semestre">PRÓXIMO SEMESTRE</span>
            </div>
            
            <div className="progress-section">
              <div className="progress-labels">
                <span>Disponibilidade</span>
                <span>0%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-fill" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            <button className="btn-block">Acessar Disciplina</button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Disciplinas;