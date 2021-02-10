import { useState } from "react";
import {Switch,Route,Link}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonyID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";

function App() {

  return (
    <div className="App">
    <Link to="/AllPokemon"><button>Get All</button></Link>
    
    <Pokemon name="test" base="base" type="code"/>
      <Switch>
    <Route path="/AllPokemon">
    <h1>here shoud be the backend data</h1>
    
    </Route>
        
      </Switch>
    </div>
  );
}

export default App;
