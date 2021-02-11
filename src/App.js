//import { useState } from "react";
import "./App.css";
import {Switch,Route}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";
import Search from "./component/Search";

function App() {
 
  
  return (
    <div className="App">
    
    <Search/>
   
      <Switch>
    <Route path="/AllPokemon">
    <Pokemon />
    </Route>
    <Route path="/PokemonByID">
      <PokemonID/>
    </Route>
    <Route path="/PokemonByIDByInfo">
      <PokemonByIDByInfo/>
    </Route>
        
      </Switch>
    </div>
  );
}

export default App;
