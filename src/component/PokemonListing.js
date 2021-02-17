// Import component
import Pokemoninfo from "./Pokemoninfo";

export default function PokemonListing({ pokemonData }) {
  return (
    <div className="">
      {pokemonData &&
        pokemonData.map((pokemon, index) => {
          return (
            <div key={index}>
              <Pokemoninfo
                name={pokemon.name}
                base={pokemon.base}
                type={pokemon.type}
                id={pokemon.id}
              />
            </div>
          );
        })}
    </div>
  );
}
