import React from "react";
import { Character } from "../../types/Character";


interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const imageUrl = character.portrait_path
    ? `https://cdn.thesimpsonsapi.com${character.portrait_path}`
    : "";

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={character.name} />}
      <h3>{character.name}</h3>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Edad:</strong> {character.age}</p>
      <p><strong>Ocupación:</strong> {character.occupation}</p>
      <p><strong>Estado:</strong> {character.status}</p>
    </div>
  );
};

export default CharacterCard;
