import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CartasMaisFortes from "./components/cartas_mais_fortes/CartasMaisFortes";
import CartasMaisFracas from "./components/cartas_mais_fracas/CartasMaisFracas";

function App() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }

  function renderTabContent() {
    switch (activeTab) {
      case "Tab 1":
        return (
          <section className="cards">
            <Card />
          </section>
        );
      case "Tab 2":
        return <CartasMaisFortes />;
      case "Tab 3":
        return <CartasMaisFracas />;
    }
  }

  return (
    <>
      <h1>Atividade criação de Api e utilização de fetch</h1>

      <section className="knockout_table">
        <div className="tabs">
          <button
            className={activeTab === "Tab 1" ? "active" : ""}
            onClick={() => handleChangeTab("Tab 1")}
          >
            Todas as cartas
          </button>
          <button
            className={activeTab === "Tab 2" ? "active" : ""}
            onClick={() => handleChangeTab("Tab 2")}
          >
            Cartas mais fortes
          </button>
          <button
            className={activeTab === "Tab 3" ? "active" : ""}
            onClick={() => handleChangeTab("Tab 3")}
          >
            Cartas mais fracas
          </button>
        </div>

        <div className="tab_content">{renderTabContent()}</div>
      </section>
    </>
  );
}

export default App;
