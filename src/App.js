import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import components:
import ButtonAllPoke from "./component/ButtonAllPoke";
import Search from "./component/Search";
// import views:
import AllPokemon from "./views/AllPokemon";
import PokemonID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAllPoke />
        <Search />
        <Switch>
          <Route path="/AllPokemon">
            <AllPokemon />
          </Route>
          <Route path="/:id/:info">
            <PokemonByIDByInfo />
          </Route>
          <Route path="/:id">
            <PokemonID />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
