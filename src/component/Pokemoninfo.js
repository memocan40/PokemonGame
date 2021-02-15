import "./Pokemoninfostyle.css";

export default function Pokemoninfo({ name, base, type, id }) {
  return (
    <div>
      <div className="card">
        <p>
          Id: {id}
          <br />
        </p>
        <h3>Name:</h3>
        <p>
          En:{name.english}
          {/* <br></br>
          Jap:{name.japanese}
          <br></br>
          Ch:{name.chinese}
          <br></br>
          Fr:{name.french} */}
        </p>

        <h3>Type</h3>
        <p>{type[0]}</p>

        <h3>Base</h3>
        <p>
          HP:{base.HP}
          <br></br>
          Attack:{base.Attack}
          <br></br>
          Defense:{base.Defense}
          <br></br>
          Sp.Attack:{base["Sp. Attack"]}
          <br></br>
          Sp.Defense:{base["Sp. Defense"]}
          <br></br>
          Speed : {base.Speed}
        </p>
      </div>
    </div>
  );
}
