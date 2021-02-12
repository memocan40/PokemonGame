import axios from "axios";
import {useState}from "react";
import Pokemoninfo from "../component/Pokemoninfo";




export default function PokemonID({ID}){
    let[IDs,SetIDs]=useState();
    axios.get("https://pokemongame-backend.herokuapp.com/pokemons").then((res)=>{SetIDs(res.data.data[4])});
    console.log(IDs);
    return(
        <div>
        <Pokemoninfo name={IDs} base={IDs} type={IDs} />
        </div>
    )
}