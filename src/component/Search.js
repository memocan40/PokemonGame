import{Link}from "react-router-dom";
import{useState}from"react";
import Pokemon from "../views/AllPokemon";

export default function Search(){
    
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
  
    return(<div>

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
  <Link to={result}><input className="Items" onClick={Clickhandler} type="submit" value="Submit"  ></input></Link>
    </div>
    
    

    </div>
        
    )
}