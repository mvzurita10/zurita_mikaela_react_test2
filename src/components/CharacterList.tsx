import React from "react";
import { Character } from "../types/CharacterList";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Character[];
}

const CharacterList: React.FC<Props> = ({ characters }) => {
  if (characters.length === 0) {
    return <p>Cargando personajes...</p>;
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
