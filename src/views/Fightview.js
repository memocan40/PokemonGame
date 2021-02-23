import "./Fightview.css";
// import Fight from "../component/Fight";
import Api from "../api";
import { useState, useEffect } from "react";
import PokemonListing from "../component/PokemonListing";
import ModalWinner from "../component/Modal";

export default function Fightview() {
  const rand = (n, m = 0) => (Math.random() * (m - n + 1) + n) | 0;

  const [{ name, points, id }, setFightWinner] = useState({
    name: "",
    points: "",
    id: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  let [Poke1, setPoke1] = useState([]);
  let [Poke2, setPoke2] = useState([]);
  let [res, setRes] = useState();
  let [res2, setRes2] = useState();

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

  const activateFight = () => {
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

      poke1sum >= poke2sum
        ? setFightWinner({
            name: res[0].name.english,
            points: poke1sum,
            id: res[0].id,
          })
        : setFightWinner({
            name: res2[0].name.english,
            points: poke2sum,
            id: res2[0].id,
          });
    }
    if (name && id) {
      setModalOpen(true);
    }
  };
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
          <div className="fightview__inputContainer">
            <input
              className="Items"
              min="1"
              type="number"
              placeholder="1"
              onChange={firstpokemon}
            ></input>
            <button className="Items" onClick={butt}>
              Choose Pokemon
            </button>
          </div>
          <h3 className="VS">VERSUS</h3>
          <div className="fightview__inputContainer">
            <input
              className="Items"
              min="1"
              type="number"
              placeholder="1"
              onChange={secondpokemon}
            ></input>
            <button className="Items" onClick={butt2}>
              Choose Pokemon
            </button>
          </div>
        </div>
        <div className="fightview__section fightview__sectionCards">
          <PokemonListing
            pokemonData={res}
            className="sectionCardsItem card card__fightView"
          />
          <div>
            <div className="sectionCardsItem fight__ButtonContainer">
              <button
                className="Items pointer fight__Button"
                type="submit"
                onClick={activateFight}
              >
                FIGHT
              </button>

              <ModalWinner
                name={name}
                points={points}
                id={id}
                setModalOpen={setModalOpen}
                open={modalOpen}
              />
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
