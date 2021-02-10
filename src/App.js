import { useState } from "react";
import "./App.css";
import {Switch,Route,Link}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonyID from "./views/PokemonByID";
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
   <Pokemon name={inputvalue}/>
      <Switch>
    <Route path="/AllPokemon">
    <h1>here shoud be the backend data</h1>
    
    </Route>
        
      </Switch>
    </div>
  );
}

export default App;
