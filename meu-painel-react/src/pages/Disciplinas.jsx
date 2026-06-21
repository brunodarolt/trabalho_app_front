import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, BookOpen, Bot, User } from 'lucide-react';
import Header from '../components/Header';

const Disciplinas = () => {
  const listaDisciplinas = [
    {
      id: 1,
      nome: 'Front-end',
      professor: 'PROF. MARCO SILVA',
      status: 'EM CURSO',
      tipoBadge: 'badge-curso',
      textoProgresso: 'Progresso',
      percentagem: 75
    },
    {
      id: 2,
      nome: 'UX Design',
      professor: 'DRA. ANA LÚCIA',
      status: 'PRÓXIMO SEMESTRE',
      tipoBadge: 'badge-semestre',
      textoProgresso: 'Disponibilidade',
      percentagem: 0
    }
  ];

  return (
    <div className="dashboard-bg">
      <Header/>
      <main className="dash-main">
        <h1 className="page-title">Minhas Disciplinas</h1>

        <div className="disciplinas-grid">
          {listaDisciplinas.map((disciplina) => (
            <div key={disciplina.id} className="dash-card disciplina-card">
              <div className="card-top">
                <div>
                  <h3>{disciplina.nome}</h3>
                  <p className="prof-name">{disciplina.professor}</p>
                </div>
                <span className={`badge ${disciplina.tipoBadge}`}>{disciplina.status}</span>
              </div>
              
              <div className="progress-section">
                <div className="progress-labels">
                  <span>{disciplina.textoProgresso}</span>
                  <span>{disciplina.percentagem}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-fill" style={{ width: `${disciplina.percentagem}%` }}></div>
                </div>
              </div>
              
              <button className="btn-block">Acessar Disciplina</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Disciplinas;