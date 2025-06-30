import MovieCard from './MovieCard';

const peliculas = [
  {
    id: 1,
    title: 'Sol de Noche',
    poster: '/img1.jpg',
    price: 2500,
  },
  {
    id: 2,
    title: ' Argentina 1985',
    poster: '/img2.jpg',
    price: 2000,
  },
  {
    id: 3,
    title: 'El Secreto de Sus Ojos',
    poster: '/img3.jpg',
    price: 1800,
  },
  {
    id: 4,
    title: 'La Revolución es un Sueno Eterno',
    poster: '/img4.jpg',
    price: 1700,
  },
  {
    id: 5,
    title: 'El Clan',
    poster: '/img5.jpg',
    price: 1600,
  },
  {
    id: 6,
    title: 'Relatos Salvajes',
    poster: '/img6.jpg',
    price: 1900,
  },
  {
    id: 7,
    title: 'El Aura',
    poster: '/img7.jpg',
    price: 2100,
  },
  {
    id: 8,
    title: 'El Hijo de la Novia',
    poster: '/img8.jpg',
    price: 2200,
  },
  { id: 9, title: 'Sin Hijos', poster: '/img9.jpg', price: 2300 },
  {
    id: 10,
    title: 'Cuando Acecha la Oscuridad',
    poster: '/img10.jpg',
    price: 2400,
  },
  {
    id: 11,
    title: 'La Noche de Los Lápices',
    poster: '/img11.jpg',
    price: 2500,
  },
  {
    id: 12,
    title: 'La Patagonia Rebelde',
    poster: '/img12.jpg',
    price: 2600,
  },
];
const MovieList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {peliculas.map(pelicula => (
        <MovieCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};
export default MovieList;
