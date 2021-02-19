import "./Fightview.css";
// import Fight from "../component/Fight";
import Api from "../api";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import PokemonListing from "../component/PokemonListing";

export default function Fightview() {
  let [Poke1, setPoke1] = useState([]);
  let [Poke2, setPoke2] = useState([]);
  let [res, setRes] = useState();
  let [res2, setRes2] = useState();
  const rand = (n, m = 0) => (Math.random() * (m - n + 1) + n) | 0;

  // const { id } = useParams();

  useEffect(() => {
    const toArray = [];
    Api.getPokeById(1)
      .then((res) => {
        toArray.push(res.data.data);
        setRes(toArray);
        setRes2(toArray);
      })
      .catch((error) => console.error(error));
  }, []);

  if (res && res2) {
    function sum(pokeValues) {
      let pokeSum = 0;
      for (const stat in pokeValues) {
        if (pokeValues.hasOwnProperty(stat)) {
          pokeSum += pokeValues[stat];
        }
      }
      return pokeSum;
    }

    let poke1sum = rand(rand(100), sum(res[0].base));
    let poke2sum = rand(rand(100), sum(res2[0].base));

    var winner =
      poke1sum >= poke2sum
        ? `Winner is ${res[0].name.english}`
        : `Winner is ${res2[0].name.english}`;
  }
  console.log(winner);

  // ------------------------------------------------------
  const firstpokemon = (event) => {
    setPoke1(event.target.value);

    if (event.target.value !== "") {
      const toArray = [];
      Api.getPokeById(event.target.value).then((res) => {
        toArray.push(res.data.data);

        setPoke1(toArray);
        console.log(Poke1);
      });
    }
  };

  const butt = () => {
    setRes(Poke1);
  };

  const butt2 = () => {
    setRes2(Poke2);
  };

  const secondpokemon = (event) => {
    setPoke2(event.target.value);
    if (event.target.value !== "") {
      const toArray = [];
      Api.getPokeById(event.target.value).then((res) => {
        toArray.push(res.data.data);

        setPoke2(toArray);
        console.log(Poke2);
      });
    }
  };

  return (
    <div className="Fightfield">
      <div className="inputs">
        <input
          type="number"
          placeholder="Choose your Pokemon!"
          onChange={firstpokemon}
        ></input>
        <button onClick={butt}>Click</button>
        <input
          type="number"
          placeholder="Choose your Pokemon!"
          onChange={secondpokemon}
        ></input>
        <button onClick={butt2}>Click</button>
      </div>
      <div className="Firstpoke">
        <PokemonListing pokemonData={res} />
        <div>
          <h1 className="VS">VS</h1>
          <h2 className="">{winner}</h2>
        </div>
        <div>
          <PokemonListing pokemonData={res2} />
        </div>
      </div>
    </div>
  );
}
