import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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