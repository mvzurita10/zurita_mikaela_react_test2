export async function fetchSimpsonsCharacters(page: number = 1) {
  const url = `https://thesimpsonsapi.com/api/characters?page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }
  return response.json();
}