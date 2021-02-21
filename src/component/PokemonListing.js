// Import component
import { Fragment } from "react";
import Pokemoninfo from "./Pokemoninfo";

export default function PokemonListing({ className, pokemonData, loading }) {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <Fragment>
      {pokemonData &&
        pokemonData.map((pokemon, index) => {
          return (
            <div className={className} key={index}>
              <Pokemoninfo
                name={pokemon.name}
                base={pokemon.base}
                type={pokemon.type}
                id={pokemon.id}
              />
            </div>
          );
        })}
    </Fragment>
  );
}
