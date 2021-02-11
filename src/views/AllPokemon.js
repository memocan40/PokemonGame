import axios from "axios";
import {useState}from "react";
import Pokemoninfo from "../component/Pokemoninfo";


export default function Pokemon({name , type,base }){
     let[Pokemonlist,setPokemonlist]=useState([]);
    axios.get("https://pokemongame-backend.herokuapp.com/pokemons").then((res)=>{setPokemonlist(res.data.data)});
    console.log(Pokemonlist);
   return(
       <div>
          { Pokemonlist.map((pokemons,index)=>{
               return(<div key={index}>
             <Pokemoninfo  name={pokemons.name}/>
               </div>
                   
               )
           })}
       </div>
   ) 
}