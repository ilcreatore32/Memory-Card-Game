// Redux
import { useSelector } from "react-redux";

// Components
import MemoryTable from "./components/MemoryTable";

// Styles
import "./styles/App.css";

function App() {
  const revealsCount = useSelector((state) => state.reveals.value);
  return (
    <>
      <main>
        <h1 className="app-title">Zelda's Memory Card Game</h1>
        <div className="memory-game">
          <section className="mg-board">
            <MemoryTable rowNumber={4} limitPerRow={4}/>
          </section>
          <section className="mg-stadistics">
            <div>
              <p>Aciertos: </p>
              <p>Tiempo: </p>
              <p>Movimientos: {revealsCount} </p>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>Desarrollado por Weishler Berman</p>
      </footer>
    </>
  );
}

export default App;
