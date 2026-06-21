import React, { createContext, useState } from 'react';

// Cria o contexto
export const UserContext = createContext();

// Cria o provedor (cumpre o Requisito 3 com o uso de 'children' e Requisito 9)
export const UserProvider = ({ children }) => {
  // Estado global com os dados do usuário
  const [user, setUser] = useState({
    nome: 'João Silva',
    iniciais: 'JS',
    curso: 'Engenharia de Software • 3º Ano',
    email: 'joao.silva@satc.edu.br',
    matricula: '***.***.***-89'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};