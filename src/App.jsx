import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { WatchlistProvider } from './context/WatchlistContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  const [mostrarLista, setMostrarLista] = useState(false);
  return (
    <ThemeProvider>
    <WatchlistProvider>
      <Header favoritoClick={() => setMostrarLista(true)} />
      <Home mostrarLista={mostrarLista} setMostrarLista={setMostrarLista} />
    </WatchlistProvider>
    </ThemeProvider>
  );
}
export default App;