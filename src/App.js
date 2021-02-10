import { useState } from "react";
import {Switch,Route,Link}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonyID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";

function App() {
  let[link,setlink]=useState("test");
  
  return (
    <div className="App">
    <input type="text" placeholder="Type a ID"/>
    <section class="Button">
    
    <Link to="/AllPokemon"><button>Get All</button></Link>
    </section>
    <section class="Dropdown">
      <label for="Dropdown">Choose a Info:</label>
  <select name="Dropdown" id="dropdown" onChange={(event)=>{setlink(event.target.value)}}>
    <option value="Name" >Name</option>
    <option value="Base">Base</option>
    <option value="Type">Type</option>
    
    
  </select>
  <br></br>
  <input type="submit" value="Submit"  ></input>
    </section>
    <div>{link}</div>
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
