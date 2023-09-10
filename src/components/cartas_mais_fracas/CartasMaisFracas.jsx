import { useEffect, useState } from "react";
import "./CartasMaisFracasStyle.css";

function Card() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const buscarGrupos = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/nunes262/database/master/databese_mais_fracas.json"
        );
        const data = await response.json();
        console.log(data);
        setGrupos(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    buscarGrupos();
  }, []);

  return (
    <div className="dog-list">
      {grupos.cartas && grupos.cartas.length > 0 ? (
        grupos.cartas.map((cards, index) => (
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
