import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, BookOpen, Bot, User, 
  Paperclip, ArrowUp, Volume2, Copy, RefreshCw, ThumbsDown 
} from 'lucide-react';

const TutorIA = () => {
  return (
    <div className="dashboard-bg chat-page-wrapper">
      {/* Cabeçalho */}
      <header className="dash-header">
        <div className="logo-area">
          <h2 className="logo-title">Academia</h2>
          <span className="logo-subtitle">Portal do Aluno</span>
        </div>
        
        <nav className="dash-nav">
          <Link to="/dashboard"><LayoutGrid size={18} /> Painel</Link>
          <Link to="/disciplinas"><BookOpen size={18} /> Disciplinas</Link>
          <Link to="/tutor" className="active"><Bot size={18} /> Tutor IA</Link>
          <Link to="/perfil"><User size={18} /> Perfil</Link>
        </nav>
      </header>

      {/* Conteúdo do Chat */}
      <main className="chat-main">
        <div className="chat-history">
          
          {/* Mensagem do Usuário */}
          <div className="chat-message">
            <div className="chat-avatar avatar-user">J</div>
            <div className="chat-content">
              <h4>João Silva</h4>
              <p>Explique computação quântica</p>
            </div>
          </div>

          {/* Mensagem da IA */}
          <div className="chat-message">
            <div className="chat-avatar avatar-ai">
              <Bot size={20} />
            </div>
            <div className="chat-content">
              <h4>Tutor IA</h4>
              <p>
                Computação quântica é uma forma avançada de computação que usa as leis da mecânica quântica. Em vez de usar bits tradicionais, que podem ser 0 ou 1, ela utiliza qubits, que podem ser ambos ao mesmo tempo. Isso permite que os computadores quânticos realizem cálculos muito mais rapidamente do que os computadores comuns, resolvendo problemas complexos que seriam impossíveis para a tecnologia atual.
              </p>
              
              {/* Ícones de ação da IA */}
              <div className="chat-actions">
                <button><Volume2 size={16} /></button>
                <button><Copy size={16} /></button>
                <button><RefreshCw size={16} /></button>
                <button><ThumbsDown size={16} /></button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Área do Input Flutuante no rodapé */}
      <div className="chat-bottom-area">
        <div className="chat-input-wrapper">
          <button className="btn-attach">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Pergunte alguma coisa" 
            className="chat-input"
          />
          <button className="btn-send">
            <ArrowUp size={20} />
          </button>
        </div>
        <span className="chat-disclaimer">
          O Tutor pode cometer erros. Considere verificar informações importantes.
        </span>
      </div>
    </div>
  );
};

export default TutorIA;