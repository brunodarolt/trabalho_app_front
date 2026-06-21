import React from 'react';
import { Link } from 'react-router-dom'; // <-- ESSENCIAL PARA O CLIQUE FUNCIONAR
import { LayoutGrid, BookOpen, Bot, User, Clock, ClipboardList, MessageSquare, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      {/* Cabeçalho */}
      <header className="dash-header">
        <div className="logo-area">
          <h2 className="logo-title">Academia</h2>
          <span className="logo-subtitle">Portal do Aluno</span>
        </div>
        
        <nav className="dash-nav">
          {/* Trocado de <a> para <Link> com o caminho correto */}
          <Link to="/dashboard" className="active"><LayoutGrid size={18} /> Painel</Link>
          <Link to="/disciplinas"><BookOpen size={18} /> Disciplinas</Link>
          <Link to="/tutor"><Bot size={18} /> Tutor IA</Link>
          <Link to="/perfil"><User size={18} /> Perfil</Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="dash-main">
        <section className="welcome-text">
          <h1>Bom dia, João.</h1>
          <p>Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas para esta semana e está atualmente adiantado em seu cronograma de leitura.</p>
        </section>

        {/* Cartões de Cursos */}
        <section className="courses-grid">
          <div className="dash-card">
            <span className="badge">EM PROGRESSO</span>
            <div className="course-header">
              <div>
                <h3>Front-end</h3>
                <p>Aula 2: Conceitos do desenvolvimento Front-end e GIT + Github.</p>
              </div>
              <button className="btn-retomar">Retomar Estudo <ArrowRight size={16} /></button>
            </div>
            <div className="progress-area">
              <div className="progress-bar-bg">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
              <span className="progress-text">65%</span>
            </div>
          </div>

          <div className="dash-card">
            <span className="badge">EM PROGRESSO</span>
            <div className="course-header">
              <div>
                <h3>UX Design</h3>
                <p>Aula 3: Usabilidade.</p>
              </div>
              <button className="btn-retomar">Retomar Estudo <ArrowRight size={16} /></button>
            </div>
            <div className="progress-area">
              <div className="progress-bar-bg">
                <div className="progress-fill" style={{ width: '25%' }}></div>
              </div>
              <span className="progress-text">25%</span>
            </div>
          </div>
        </section>

        {/* Cartões de Estatísticas */}
        <section className="stats-grid">
          <div className="dash-card stat-card">
            <div className="stat-title"><Clock size={16} /> Tempo de Estudo</div>
            <h2>12h 45m</h2>
            <p>Esta semana</p>
          </div>

          <div className="dash-card stat-card">
            <div className="stat-title"><ClipboardList size={16} /> Tarefas Pendentes</div>
            <h2>2</h2>
            <p>Próximo vencimento em 2 dias</p>
          </div>

          <div className="dash-card stat-card">
            <div className="stat-title"><MessageSquare size={16} /> Discussões com IA</div>
            <h2>8</h2>
            <p>Tópicos ativos</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;