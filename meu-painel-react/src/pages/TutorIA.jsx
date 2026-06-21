import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, BookOpen, Bot, User, 
  Paperclip, ArrowUp, Volume2, Copy, RefreshCw, ThumbsDown 
} from 'lucide-react';

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

    // Passo A: Coloca a mensagem do usuário na tela e limpa o input
    const novaMensagemUsuario = {
      id: Date.now(),
      autor: 'João Silva',
      texto: mensagem,
      tipo: 'user'
    };
    
    setHistorico((prev) => [...prev, novaMensagemUsuario]);
    setMensagem('');
    setErro('');
    setCarregando(true); // Liga o indicador "A processar..."

    try {
      // Passo B1: Busca o conselho na API original (em inglês)
      const resposta = await fetch('https://api.adviceslip.com/advice');
      if (!resposta.ok) throw new Error('Falha na API de conselhos');
      const dados = await resposta.json();
      const textoEmIngles = dados.slip.advice;

      // Passo B2: Envia o texto em inglês para uma API gratuita de tradução
      // O encodeURIComponent garante que espaços e acentos não quebrem a URL
      const urlTraducao = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoEmIngles)}&langpair=en|pt`;
      const respostaTraducao = await fetch(urlTraducao);
      if (!respostaTraducao.ok) throw new Error('Falha na API de tradução');
      
      const dadosTraducao = await respostaTraducao.json();
      const textoEmPortugues = dadosTraducao.responseData.translatedText;
      
      // Passo B3: Mostra a frase traduzida na tela do chat
      const novaMensagemIA = {
        id: Date.now() + 1,
        autor: 'Tutor IA',
        texto: textoEmPortugues, 
        tipo: 'ai'
      };
      
      setHistorico((prev) => [...prev, novaMensagemIA]);
      setCarregando(false); 

    } catch (err) {
      // Passo C: Tratamento de Erros
      setErro('Desculpe, ocorreu um erro na busca ou na tradução da resposta. Tente novamente.');
      setCarregando(false);
    }
  };

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