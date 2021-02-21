import { Fragment } from "react";
import "./Pokemoninfostyle.css";

export default function Pokemoninfo({ name, base, type, id }) {
  return (
    <Fragment>
      <div className="card__image">
        <h3>{name.english}</h3>
        <img
          // src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`Pokemon Id ${id} loading ...`}
        />
      </div>
      {/* <ul>
        <li>En: {name.english} </li>
        <li>Jap: {name.japanese}</li>
        <li>Ch: {name.chinese}</li>
        <li>Fr: {name.french} </li>
      </ul> */}
      <div className="text-align-center card__typeSection">
        {type[0]} {type[1]}
      </div>
      <hr></hr>
      <div className="card__baseSection">
        <span className="bold">Base: </span>
        <ul className="card__baseList">
          <li>HP: {base.HP}</li>
          <li>Attack: {base.Attack}</li>
          <li>Defense: {base.Defense}</li>
          <li>Sp. Attack: {base["Sp. Attack"]}</li>
          <li> Sp. Defense: {base["Sp. Defense"]}</li>
          <li>Speed : {base.Speed}</li>
        </ul>
      </div>
    </Fragment>
  );
}
