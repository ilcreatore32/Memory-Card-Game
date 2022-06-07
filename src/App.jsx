// React
import { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Styles
import "./styles/app.css";

// Images
import CardImages from "./images/CardImages";

// Sounds
import GameSounds from "./sounds/GameSounds";

// Components
import MemoryCard from "./components/MemoryCard";
import Modal from "./components/Modal";

function App() {
  // Cards Array
  const [cards, setCards] = useState(null);
  // Count of pair cards flipped
  const [turns, setTurns] = useState(0);
  // Winning boolean
  const [isCompleted, setIsCompleted] = useState(false);
  // Modal boolean
  const [show, setShow] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false)
  }

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
        // These cards match!
        GameSounds.Match.play();
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
        // These cards don't match!
        setTimeout(() => {
          GameSounds.Error.play();
          resetTurn();
        }, 1000);
      }
    }
    isGameCompleted();
  }, [choiceOne, choiceTwo]);

  // Check if ALL cards are true
  const isGameCompleted = () => {

    let isAllMatch = cards?.every((card) => card.matched === true);

    if (isAllMatch) {
      setIsCompleted(true);
      handleShow();
      GameSounds.Winning.play();
    } else {
      setIsCompleted(false);
    }

    console.log(isAllMatch);
  };

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
            {cards?.map((card) => {
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
        <Modal
          show={show}
          turns={turns}
          shuffleCards={shuffleCards}
          handleClose={handleClose}
        />
        <p className="mt-3 text-center text-white">Turns: {turns}</p>
      </main>
    </>
  );
}

export default App;