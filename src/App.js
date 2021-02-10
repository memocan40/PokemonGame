import { useState } from "react";
import "./App.css";
import {Switch,Route,Link}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";
import Search from "./component/Search";

function App() {
  let[dropdownvalue,setdropdownvalue]=useState("");
  let[inputvalue,setinputvalue]=useState("");
  let[result,setresult]=useState();
  const Clickhandler=()=>{
    if(dropdownvalue===""){
      setresult("/"+inputvalue);
    }
    else if(inputvalue===""){
      setresult("");
    }
    else{
      setresult("/"+inputvalue+"/"+dropdownvalue);
      
    }
  }
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
