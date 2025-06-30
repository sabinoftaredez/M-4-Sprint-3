import React from 'react';
import Movielist from '../components/Movielist';
import WatchlistModal from '../components/WatchlistModal';
import { useTheme } from '../context/ThemeContext';

const Home = ({ mostrarLista, setMostrarLista }) => {
  const { oscuro } = useTheme();

  return (
    <div className={oscuro ? "min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 text-gray-200" : "min-h-screen bg-gradient-to-br from-sky-200 via-white to-sky-100 text-gray-700"
    }>
      <Movielist />
      {mostrarLista && (
        <WatchlistModal onClose={() => setMostrarLista(false)} />
      )}
    </div>
  );
};
export default Home;
