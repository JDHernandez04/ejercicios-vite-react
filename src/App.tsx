import { useState, useEffect } from "react";
import { FilmCard } from "./FilmCard";
import './index.css'; 

type Film = {
  id: string;
  title: string;
  original_title: string;
  director: string;
  image: string;
};

function App() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function getFilms() {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setFilms(data);
    }
    
    getFilms();
  }, []);

  function viewDetails(title: string) {
    alert(`Más detalles sobre: ${title}`);
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Películas de Studio Ghibli</h1>

      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          original_title={film.original_title}
          director={film.director}
          image={film.image}
          onViewDetails={viewDetails}
        />
      ))}
    </div>
  );
}

export default App;