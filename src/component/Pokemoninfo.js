


export default function Poke({name,base,type,id}){

   return(
    <div>
    <card>
    <h3>Name:</h3>
    <p>En:{name.english}<br></br>
      Jap:{name.japanese}<br></br>
      Ch:{name.chinese}<br></br>
      Fr:{name.french}</p>

      <h3>Type</h3>
      <p>{type[0]}</p>

    <h3>Base</h3>
    <p>HP:{base.HP}</p>
    <p>Attack:{base.Attack}</p>
    <p>Defense:{base.Defense}</p>
    <p>Sp.Attack:{base.["Sp. Attack"]}</p>
    <p>Sp.Defense:{base.["Sp. Defense"]}</p>
    <p>Speed  : {base.Speed}</p>
   </card>
    

    </div>
   ) 
}