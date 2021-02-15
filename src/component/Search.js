import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Search() {
  let [dropdownValue, setDropdownValue] = useState("");
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState();

  const Clickhandler = () => {
    if (dropdownValue === "") {
      setResult(`/${inputValue}`);
    } else if (inputValue === "") {
      setResult("");
    } else {
      setResult(`/${inputValue}/${dropdownValue}`);
    }
  };

  // Events
  const getInputValue = (e) => {
    setInputValue(parseInt(e.target.value, 10));
  };
  const getDropdownValue = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className="Dropdown">
      <div className="Input">
        <input
          className="Items"
          type="text"
          placeholder="Enter id"
          onChange={getInputValue}
        />
      </div>
      <label htmlFor="Dropdown">Optional:</label>
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
      </select>
      <br></br>
      <Link to={result ? result : "/"} onMouseEnter={Clickhandler}>
        <input className="Items" type="submit" value="Submit"></input>
      </Link>
    </div>
  );
}
