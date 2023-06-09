import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (str: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${str}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
