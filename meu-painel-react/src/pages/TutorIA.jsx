import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, BookOpen, Bot, User, 
  Paperclip, ArrowUp, Volume2, Copy, RefreshCw, ThumbsDown 
} from 'lucide-react';
import Header from '../components/Header';

const TutorIA = () => {
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  
  const [historico, setHistorico] = useState([
    {
      id: 1,
      autor: 'Tutor IA',
      texto: 'Olá, João! Sou o seu Tutor IA. Como posso ajudar nos seus estudos hoje?',
      tipo: 'ai'
    }
  ]);

const enviarMensagem = async (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;

    const novaMensagemUsuario = { id: Date.now(), autor: 'João Silva', texto: mensagem, tipo: 'user' };
    setHistorico((prev) => [...prev, novaMensagemUsuario]);
    setMensagem('');
    setErro('');
    setCarregando(true);

    try {
      const resposta = await fetch('https://api.adviceslip.com/advice');
      if (!resposta.ok) throw new Error('Falha na API');
      
      const dados = await resposta.json();
      const respostaTraducao = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(dados.slip.advice)}&langpair=en|pt`);
      const dadosTraducao = await respostaTraducao.json();
      
      setHistorico((prev) => [...prev, { id: Date.now() + 1, autor: 'Tutor IA', texto: dadosTraducao.responseData.translatedText, tipo: 'ai' }]);
    } catch (err) {
      setErro('Erro na conexão. Tente novamente.');
    } finally {
      setCarregando(false); 
    }
  };
  return (
    <div className="dashboard-bg chat-page-wrapper">
      <Header/>
      <main className="chat-main">
        <div className="chat-history">
          
          {historico.map((msg) => (
            <div className="chat-message" key={msg.id}>
              {msg.tipo === 'user' ? (
                <div className="chat-avatar avatar-user">JS</div>
              ) : (
                <div className="chat-avatar avatar-ai"><Bot size={20} /></div>
              )}
              
              <div className="chat-content">
                <h4>{msg.autor}</h4>
                <p>{msg.texto}</p>
                
                {msg.tipo === 'ai' && (
                  <div className="chat-actions">
                    <button><Volume2 size={16} /></button>
                    <button><Copy size={16} /></button>
                    <button><RefreshCw size={16} /></button>
                    <button><ThumbsDown size={16} /></button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {carregando && (
            <div className="chat-message">
              <div className="chat-avatar avatar-ai"><Bot size={20} /></div>
              <div className="chat-content">
                <h4>Tutor IA</h4>
                <p style={{ color: '#888', fontStyle: 'italic' }}>A processar a resposta...</p>
              </div>
            </div>
          )}

          {erro && (
            <div className="error-message" style={{ marginTop: '20px' }}>
              {erro}
            </div>
          )}

        </div>
      </main>

      <div className="chat-bottom-area">
        <form onSubmit={enviarMensagem} className="chat-input-wrapper">
          <button type="button" className="btn-attach">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Pergunte alguma coisa ao Tutor IA" 
            className="chat-input"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            disabled={carregando}
          />
          <button type="submit" className="btn-send" disabled={carregando}>
            <ArrowUp size={20} />
          </button>
        </form>
        <span className="chat-disclaimer">
          O Tutor pode cometer erros ao buscar informações externas.
        </span>
      </div>
    </div>
  );
};

export default TutorIA;