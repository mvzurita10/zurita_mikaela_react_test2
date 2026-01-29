import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import { Character } from "./types/Character";
import "./App.css";

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);

  const API_URL = `https://thesimpsonsapi.com/api/characters?page=${page}`;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_URL);
        const data: Character[] = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error al cargar personajes", error);
      }
    };

    fetchCharacters();
  }, [page]);

  return (
    <div className="App">
      <h1>Personajes de Los Simpsons</h1>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ◀ Anterior
        </button>

        <span>Página {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Siguiente ▶
        </button>
      </div>

      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
