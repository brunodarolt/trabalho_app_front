import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, BookOpen, Bot, User, 
  Paperclip, ArrowUp, Volume2, Copy, RefreshCw, ThumbsDown 
} from 'lucide-react';
import Header from '../components/Header';

const TutorIA = () => {
  // 1. ESTADOS (Guardando as informações em tempo real)
  const [mensagem, setMensagem] = useState(''); // O que o aluno está digitando
  const [carregando, setCarregando] = useState(false); // O aviso de "Pensando..."
  const [erro, setErro] = useState(''); // Guardar possível erro da API
  
  // Lista inicial de mensagens (já começa com uma saudação do Tutor)
  const [historico, setHistorico] = useState([
    {
      id: 1,
      autor: 'Tutor IA',
      texto: 'Olá, João! Sou o seu Tutor IA. Como posso ajudar nos seus estudos hoje?',
      tipo: 'ai'
    }
  ]);

  // 2. FUNÇÃO QUE CHAMA A API (O Requisito principal)
  // 2. FUNÇÃO QUE CHAMA A API E TRADUZ PARA PORTUGUÊS
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
      // O bloco finally executa SEMPRE, garantindo que o loading suma
      setCarregando(false); 
    }
  };
  return (
    <div className="dashboard-bg chat-page-wrapper">
      {/* Cabeçalho */}
      <Header/>
      {/* Conteúdo do Chat */}
      <main className="chat-main">
        <div className="chat-history">
          
          {/* 3. RENDERIZAÇÃO DA LISTA DE MENSAGENS */}
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
                
                {/* Mostra os botões apenas se a mensagem for da IA */}
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

          {/* INDICADOR DE CARREGAMENTO */}
          {carregando && (
            <div className="chat-message">
              <div className="chat-avatar avatar-ai"><Bot size={20} /></div>
              <div className="chat-content">
                <h4>Tutor IA</h4>
                <p style={{ color: '#888', fontStyle: 'italic' }}>A processar a resposta...</p>
              </div>
            </div>
          )}

          {/* MENSAGEM DE ERRO NA TELA (Aproveitando a classe CSS vermelha que criamos antes) */}
          {erro && (
            <div className="error-message" style={{ marginTop: '20px' }}>
              {erro}
            </div>
          )}

        </div>
      </main>

      {/* Área do Input Flutuante - Agora é um <form> para funcionar o botão "Enter" do teclado */}
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
            disabled={carregando} /* Trava o campo enquanto a IA pensa */
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