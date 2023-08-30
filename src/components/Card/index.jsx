import { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  //   const [grupos, setGrupos] = useState([]);

  //   useEffect(() => {
  //     const buscarGrupos = async () => {
  //       const response = await fetch(
  //         "https://raw.githubusercontent.com/samenezes/apifakecopa2023/main/selecoes.json"
  //       );
  //       const data = await response.json();
  //       setGrupos(data);
  //     };
  //     buscarGrupos();
  //   }, []);

  const dogsData = require("./database.json");

  return (
    <div className="dog-list">
      {dogsData.dogs.map((dog, index) => (
        <div key={index} className="card">
          <div className="title">
            <img src={`/assets/${dog.imagem}.png`} alt={dog.breed} />
            <h2>{dog.breed}</h2>
          </div>
          <ul>
            <li>
              <strong>Peso:</strong> {dog.weight}
            </li>
            <li>
              <strong>Ambiente Adequado:</strong> {dog.environment}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Card;
