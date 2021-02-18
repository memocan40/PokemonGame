// Import component
import Pokemoninfo from "./Pokemoninfo";

export default function PokemonListing({ pokemonData, loading }) {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
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
