import { Link } from "react-router-dom";

export default function ButtonAllPoke() {
  return (
    <div className="Button">
      <Link to="/AllPokemon">
        <button className="Items">Get All</button>
      </Link>
    </div>
  );
}
