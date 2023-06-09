import { useEffect, useState } from "react";

import { MainLayout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { FavoritePokemons } from "@/components/pokemon";
import { localFavorites } from "@/utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Pokemons - Favoritos">
      {favoritePokemons.length > 0 ? (
        <FavoritePokemons pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
