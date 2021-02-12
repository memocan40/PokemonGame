//import { useState } from "react";
import axios from "axios";
import{Link}from "react-router-dom";
import "./App.css";
import {Switch,Route}from "react-router-dom";
import Pokemon from "./views/AllPokemon";
import PokemonID from "./views/PokemonByID";
import PokemonByIDByInfo from "./views/PokemonByIDByInfo";
import {useState} from "react";

function App() {
 axios.get("https://pokemongame-backend.herokuapp.com/pokemons").then((res)=>{console.log(res.data.data[1].name)});

 let[dropdownvalue,setdropdownvalue]=useState("");
  let[inputvalue,setinputvalue]=useState("");
  let[result,setresult]=useState();
  let[ID,SetID]    =useState();
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
    
    
    <div>

    <div className="Button">
    
    <Link to="/AllPokemon"><button className="Items">Get All</button></Link>
    </div>
    <div className="Dropdown">

    <div className="Input"><input className="Items" type="text" placeholder="Type a ID" onChange={(event)=>{setinputvalue(event.target.value)}} /></div>
      <label for="Dropdown">Choose a Info:</label>
  <select name="Dropdown" id="dropdown" className="Items" onChange={(event)=>{setdropdownvalue(event.target.value)}}>
    <option value="" ></option>
    <option value="Name" >Name</option>
    <option value="Base">Base</option>
    <option value="Type">Type</option>
  </select>
  <br></br>
  <Link to={result} onMouseEnter={Clickhandler}><input className="Items"  type="submit" value="Submit"  ></input></Link>
    </div>
    
    

    </div>




   
      <Switch>
    <Route path="/AllPokemon">
    <Pokemon />
    </Route>
    <Route path="/123">
      <PokemonID ID={inputvalue}/>
    </Route>
    <Route path="/PokemonByIDByInfo">
      <PokemonByIDByInfo/>
    </Route>
        
      </Switch>
    </div>
  );
}

export default App;
