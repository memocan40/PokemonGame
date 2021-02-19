import "./Fightview.css";
import Fight from "../component/Fight";
import Api from "../api";
import {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonListing from "../component/PokemonListing";


export default function Fightview(){
    let[Poke1,setPoke1]=useState();
    let[Poke2,setPoke2]=useState();


      const { id } = useParams();

  useEffect(() => {
    
      const toArray = [];
      Api.getPokeById(1)
        .then((res) => {
          toArray.push(res.data.data);
          setPoke1(toArray);
        
        })
        .catch((error) => console.error(error));
    
  }, []);


    const firstpokemon=(event)=>{
        setPoke1(event.target.value);

        if (event.target.value !== ""){
      const toArray = [];
      Api.getPokeById(event.target.value)
        .then((res) => {
             toArray.push(res.data.data);
          
          setPoke1(toArray);
          console.log(Poke1);
        
    })
        
        }
        
    }
    
    const secondpokemon=(event)=>{
        setPoke2(event.target.value);
           if (event.target.value !== ""){
      const toArray = [];
      Api.getPokeById(event.target.value)
        .then((res) => {
             toArray.push(res.data.data);
          
          setPoke2(toArray);
          console.log(Poke2);
        
    })
        
    }}

    return(
        <div className="Fightfield">
        <div className="inputs">
            <input type="text" placeholder="Choose your Pokemon!" onChange={firstpokemon}></input>
            <input type="text" placeholder="Choose your Pokemon!" onChange={secondpokemon}></input>
        </div>
            <div>
               <PokemonListing pokemonData={Poke1}/>
            </div>
        </div>
    )
}