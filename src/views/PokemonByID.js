import Api from "../api";
import { Fragment, useState, useEffect } from "react";
import PokemonListing from "../component/PokemonListing";

import { useParams } from "react-router-dom";

export default function PokeById() {
  const [poke, setPoke] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id !== "") {
      const toArray = [];
      Api.getPokeById(id)
        .then((res) => {
          toArray.push(res.data.data);
          setPoke(toArray);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <Fragment>
      <div className="card-grid .card-grid__fightView">
        <PokemonListing pokemonData={poke} className="card card__perIdView" />
      </div>
    </Fragment>
  );
}
