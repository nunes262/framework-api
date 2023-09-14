import React, { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [grupos, setGrupos] = useState([]);
  const [naipeFiltrado, setNaipeFiltrado] = useState(null);

  useEffect(() => {
    const buscarGrupos = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/nunes262/database/master/database.json");
        const data = await response.json();
        console.log(data);
        setGrupos(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    buscarGrupos();
  }, []);

  const handleNaipeFiltro = (naipe) => {
    setNaipeFiltrado(naipe);
  };

  return (
    <div className="dog-list">
      <p>ta ai um filtro fessora ;)</p>
      <div className="filters">
        <button onClick={() => handleNaipeFiltro(null)}>Mostrar Todos</button>
        <button onClick={() => handleNaipeFiltro("Espadas")}>Espadas</button>
        <button onClick={() => handleNaipeFiltro("Copas")}>Copas</button>
        <button onClick={() => handleNaipeFiltro("Ouros")}>Ouros</button>
        <button onClick={() => handleNaipeFiltro("Paus")}>Paus</button>
      </div>

      {grupos.cartas && grupos.cartas.length > 0 ? (
        grupos.cartas
          .filter((cards) => !naipeFiltrado || cards.naipe === naipeFiltrado)
          .map((cards, index) => (
            <div key={index} className="card">
              <div className="title">
                <h2>{cards.valor}</h2>
              </div>
              <ul>
                <li>
                  <strong>Naipe:</strong> {cards.naipe}
                </li>
              </ul>
            </div>
          ))
      ) : (
        <div>A carregar...</div>
      )}
    </div>
  );
}

export default Card;
