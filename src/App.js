import "./App.css";
import { Switch, Route } from "react-router-dom";
// import components:
import ButtonAllPoke from "./component/ButtonAllPoke";
import Search from "./component/Search";
// import views:
import Fightview from "./views/Fightview";
import AllPokemon from "./views/AllPokemon";
import PokemonID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";

function App() {
  return (
    <div className="App">
      <ButtonAllPoke />
      <Search />
      <div className="mainContainer">
        <Switch>
          <Route path="/PokemonFight">
            <Fightview />
          </Route>
          <Route path="/AllPokemon">
            <AllPokemon />
          </Route>
          <Route path="/:id/:info">
            <PokemonByIDByInfo />
          </Route>
          <Route path="/:id">
            <PokemonID />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
