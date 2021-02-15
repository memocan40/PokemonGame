// Import component
import Pokemoninfo from "./Pokemoninfo";

export default function PokemonGrid({ pokemonData }) {
  return (
    <div className="">
      {pokemonData &&
        pokemonData.map((pokemon, index) => {
          return (
            <div>
              <Pokemoninfo
                key={index}
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
