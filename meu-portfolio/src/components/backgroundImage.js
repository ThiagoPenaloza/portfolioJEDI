import React from 'react';

function App() {
  const divStyle = {
    backgroundImage: 'url("caminho/para/sua/imagem.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={divStyle}>
      <h1>Seu Conteúdo Aqui</h1>
    </div>
  );
}

export default App;
