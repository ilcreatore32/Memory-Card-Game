// React
import { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Styles
import "./styles/app.css";

// Icons
import icon1 from "./images/1.png";
import icon2 from "./images/2.png";
import icon3 from "./images/3.png";
import icon4 from "./images/4.png";
import icon5 from "./images/5.png";
import icon6 from "./images/6.png";
import icon7 from "./images/7.png";
import icon8 from "./images/8.png";
import MemoryCard from "./components/MemoryCard";

const Icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle the images
  const shuffleCards = () => {
    const shuffledCards = [...Icons, ...Icons]
      .sort(() => Math.random() - 0.5)
      .map((img) => ({ id: Math.random(), img }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <>
      <main>
        <header className="header">
          <h1 className="app-title">Zelda's Memory Card Game</h1>
          <button className="app-btn" onClick={shuffleCards}>
            New Game
          </button>
        </header>
        <section className="memory-game">
          <div className="card-grid">
            {cards.map(({ id, img }) => {
              return <MemoryCard key={id} id={id} img={img} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
