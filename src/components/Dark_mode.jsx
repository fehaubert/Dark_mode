import React, { useState, createContext, useContext } from 'react';
import '../App.css'; 

const Tema = createContext();

function Dark_mode() {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <Tema.Provider value={tema}>
      <div className={`app ${tema}`}>
        <header className="app-header">
          <h1>Alternador de Tema</h1>
          <button onClick={alternarTema}>
            Mudar para o tema {tema === 'claro' ? 'Escuro' : 'Claro'}
          </button>
        </header>
        <main>
          <h1>Fernanda Haubert</h1>
        </main>
      </div>
    </Tema.Provider>
  );
}

export default Dark_mode;
