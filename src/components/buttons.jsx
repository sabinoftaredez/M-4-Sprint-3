import { useTheme } from '../context/ThemeContext';

// Botón de Alquiler con colores argentinos naturales.
export const AlquilerPeliculas = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
    title="Ver carrito de alquiler"
  >
    <i className="bi bi-cart3 text-2xl"></i>
  </button>
);
// Botón Añadir - Azul celeste natural argentino.
export const AgregarAlquilerBoton = ({ onClick }) => {
  const { oscuro } = useTheme();
  return (
    <button
      onClick={onClick}
      className={oscuro ? 'mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-yellow-500 hover:text-gray-800 transition-all shadow-lg border-2 border-yellow-500 hover:border-blue-700' : 'mt-4 px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-sky-400 hover:text-white transition-all shadow-lg border-2 border-sky-400 hover:border-yellow-400'}
    >
      Rentar 🍿
    </button>
  );
};
// Botón Remover - Blanco natural argentino.
export const RemoverAlquilerBoton = ({ onClick }) => {
  const { oscuro } = useTheme();
  return (
    <button
      onClick={onClick}
      className={oscuro ? 'mt-4 px-4 py-2 bg-slate-700 text-gray-200 rounded hover:bg-slate-600 transition-all shadow-lg border border-slate-600' : 'mt-4 px-4 py-2 bg-white text-gray-700 rounded hover:bg-sky-50 transition-all shadow-lg border border-sky-300'}
    >
      Remover Alquiler
    </button>
  );
};
// Botón borrar todos - Blanco natural argentino.
export const BorrarTodosAlquileresBoton = ({ onClick }) => {
  const { oscuro } = useTheme();
  return (
    <button
      onClick={onClick}
      className={oscuro ? 'mt-4 px-4 py-2 bg-slate-700 text-gray-200 rounded hover:bg-slate-600 transition-all shadow-lg border border-slate-600' : 'mt-4 px-4 py-2 bg-white text-gray-700 rounded hover:bg-sky-50 transition-all shadow-lg border border-sky-300'}
    >
      Borrar Todos
    </button>
  );
};
// Botón Cerrar - Amarillo sol natural argentino.
export const CerrarLista = ({ onClick }) => {
  const { oscuro } = useTheme();
  return (
    <button
      onClick={onClick}
      className={oscuro ? 'mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400 transition-all shadow-lg border border-yellow-600' : 'mt-4 px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-100 transition-all shadow-lg'}
    >
      Cerrar
    </button>
  );
};
// Botón Cambio de Modo.
export const CambiarModoBoton = () => {
  const { oscuro, cambiarModo } = useTheme();
  return (
    <button
      onClick={cambiarModo}
      className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
      title={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <i className={`bi ${oscuro ? 'bi-sun' : 'bi-moon'} text-2xl`}></i>
    </button>
  );
};
