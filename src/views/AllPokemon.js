import Api from "../api";
import { useState, useEffect } from "react";
import PokemonListing from "../component/PokemonListing";

export default function AllPokemon() {
  let [pokemonlist, setPokemonlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const res = await Api.getAll("/");
        setPokemonlist(res.data.data);
        setLoading(false);
      } catch (err) {}
    };
    fetchPokemons();
  }, []);

  console.log(pokemonlist);
  return (
    <div>
      <PokemonListing pokemonData={pokemonlist} loading={loading} />
    </div>
  );
}
