import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  let [dropdownValue, setDropdownValue] = useState("");
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState();

  const Clickhandler = () => {
    if (inputValue.length > 0 && dropdownValue === "") {
      setResult(`/${inputValue}`);
    } else if (inputValue === "") {
      setResult("");
    } else {
      setResult(`/${inputValue}/${dropdownValue}`);
    }
  };

  // Events
  const getInputValue = (e) => {
    setInputValue(parseInt(e.target.value.replace(/\D+/g, ""), 10));
  };
  // const getDropdownValue = (e) => {
  //   setDropdownValue(e.target.value);
  // };

  return (
    <div className="Dropdown">
      <div className="Input">
        <input
          min="1"
          className="Items"
          type="number"
          value={inputValue}
          placeholder="Enter id"
          onChange={getInputValue}
        />
      </div>
      {/* <label htmlFor="Dropdown">Optional:</label>
      <select
        name="Dropdown"
        id="dropdown"
        className="Items"
        onChange={getDropdownValue}
      >
        <option value="">Select Info</option>
        <option value="Name">Name</option>
        <option value="Base">Base</option>
        <option value="Type">Type</option>
      </select> */}
      <br></br>

      <Link
        to={result ? result : "/"}
        onMouseEnter={Clickhandler}
        onClick={() => setInputValue("")}
      >
        <input
          className="Items pointer"
          type="submit"
          value="Search by ID"
        ></input>
      </Link>

      <Link to="/PokemonFight" onMouseEnter={Clickhandler}>
        <input
          className="Items pointer"
          type="submit"
          value="Got To Fight Area"
        ></input>
      </Link>
    </div>
  );
}
