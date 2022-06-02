// React
import { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Styles
import "./styles/app.css";

// Icons
import CardImages from "./images/CardImages";

// Components
import MemoryCard from "./components/MemoryCard";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle the images
  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ id: Math.random(), ...card }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // HandleChoice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setIsDisable(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setIsDisable(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("these cards match!");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src && card.src === choiceTwo.src) {
              card.matched = true;
              return card;
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("these cards don't match!");
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

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
            {cards.map((card) => {
              let isFlippled =
                card === choiceOne || card === choiceTwo || card.matched;
              return (
                <MemoryCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={isFlippled}
                  disabled={isDisable}
                />
              );
            })}
          </div>
        </section>
        <p className="mt-3 text-center text-white">Turns: {turns}</p>
      </main>
    </>
  );
}

export default App;
