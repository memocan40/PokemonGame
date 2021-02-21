import "./Fightview.css";
// import Fight from "../component/Fight";
import Api from "../api";
import { useState, useEffect } from "react";
import PokemonListing from "../component/PokemonListing";

export default function Fightview() {
  let [Poke1, setPoke1] = useState([]);
  let [Poke2, setPoke2] = useState([]);
  let [res, setRes] = useState();
  let [res2, setRes2] = useState();
  const rand = (n, m = 0) => (Math.random() * (m - n + 1) + n) | 0;

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
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
      return Object.keys(pokeValues).reduce(
        (sum, key) => sum + (pokeValues[key] || 0),
        0
      );
    }
    let poke1sum = rand(rand(100), sum(res[0].base));
    let poke2sum = rand(rand(100), sum(res2[0].base));

    var winner =
      poke1sum >= poke2sum
        ? `Winner is ${res[0].name.english}`
        : `Winner is ${res2[0].name.english}`;
  }

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
    <div className="fightview__Container">
      <div className="fightview__sectionContainer">
        <div className="fightview__section fightview__sectionSelectPokes">
          <div>
            <input
              min="1"
              type="number"
              placeholder="Choose your Pokemon!"
              onChange={firstpokemon}
            ></input>
            <button onClick={butt}>Click</button>
          </div>
          <h3 className="VS">VERSUS</h3>
          <div>
            <input
              min="1"
              type="number"
              placeholder="Choose your Pokemon!"
              onChange={secondpokemon}
            ></input>
            <button onClick={butt2}>Click</button>
          </div>
        </div>
        <div className="fightview__section fightview__sectionCards">
          <PokemonListing
            pokemonData={res}
            className="sectionCardsItem card card__fightView"
          />
          <div>
            <div className="sectionCardsItem fight__ButtonContainer">
              <button className="Items pointer fight__Button" type="submit">
                START FIGHT
              </button>
              <h2 className="fightview__winner">{winner}</h2>
            </div>
          </div>
          <PokemonListing
            pokemonData={res2}
            className="sectionCardsItem card card__fightView"
          />
        </div>
      </div>
    </div>
  );
}
