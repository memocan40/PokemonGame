import Api from "../api";
import { useState, useEffect } from "react";
import PokemonListing from "../component/PokemonListing";

export default function AllPokemon() {
  let [pokemonlist, setPokemonlist] = useState([]);

  useEffect(() => {
    // Api.getAll("/")
    //   .then((response) => setPokemonlist(response.data.data))
    //   .catch((error) => console.log("There was an error with your request"));
    const fetchPokemons = async () => {
      try {
        const res = await Api.getAll("/");
        setPokemonlist(res.data.data);
      } catch (err) {}
    };
    fetchPokemons();
  }, []);

  console.log(pokemonlist);
  return (
    <div>
      <PokemonListing pokemonData={pokemonlist} />
    </div>
  );
}
