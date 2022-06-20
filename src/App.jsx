// React
import { useEffect, useState } from "react";

// React-Router
import { Link } from "react-router-dom";

// Styles
import "./styles/app.css";

// Images
import CardImages from "./images/CardImages";
import logo from "./images/logo.png";

// Sounds
import GameSounds from "./sounds/GameSounds";

// Components
import MemoryCard from "./components/MemoryCard";
import WinningModal from "./components/WinningModal";
import LoseModal from "./components/LoseModal";

function App() {
  // Cards Array
  const [cards, setCards] = useState(null);
  // Count of pair cards flipped
  const [turns, setTurns] = useState(0);
  // Game Score
  const [score, setScore] = useState(0);
  // Game Timer
  const [timer, setTimer] = useState(60);
  // Winning boolean
  const [isCompleted, setIsCompleted] = useState(false);
  // Modal booleans
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);

  const [isDisable, setIsDisable] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const timing = () => {
    if (timer <= 0 || isCompleted === true) {
      return;
    } else {
      setTimeout(() => {
        setTimer(timer - 1);
        timer <= 15 ? GameSounds.Lowtime.play() : null;
      }, 1000);
    }
  };

  const handleClose = () => {
    setShowWin(false);
    setShowLose(false);
  };

  // Shuffle the images
  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ id: Math.random(), ...card }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
    setIsDisable(false);
    setTimer(60);
    setIsCompleted(false);
    setTimeout(() => {
      timing();
    }, 1000);
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
              setScore(score + 100);
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
          setScore(score - 25);
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
      setShowWin(true);
      GameSounds.Winning.play();
    } else {
      setIsCompleted(false);
    }
  };

  // Start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      setIsDisable(true);
      setShowLose(true);
    } else {
      timing();
    }
  }, [timer]);

  return (
    <>
      <main>
        <header className="header">
          <h1 className="app-title">Zelda's Memory Card Game</h1>
        </header>
        <div className="game-board">
          <section className="game-stadistics">
            <button className="app-btn" onClick={shuffleCards}>
              New Game
            </button>
            <p className="mt-1 text-center text-white">
              Tiempo:{" "}
              <span
                className={timer <= 15 ? "text-red-500 animate-pulse" : null}
              >
                {timer}s
              </span>
            </p>
            <p className="mt-1 text-center text-white">Turns: {turns}</p>
            <p className="mt-1 text-center text-white">
              Puntuación: {score} pts
            </p>
          </section>
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
        </div>
        <WinningModal
          show={showWin}
          time={timer}
          turns={turns}
          score={score}
          shuffleCards={shuffleCards}
          handleClose={handleClose}
        />
        <LoseModal
          show={showLose}
          shuffleCards={shuffleCards}
          handleClose={handleClose}
        />
        <footer className="p-4 mt-7 bg-white sm:p-6 dark:bg-gray-800">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/Memory-Card-Game" className="flex items-center">
                <img
                  src={logo}
                  className="mr-3 w-32"
                  alt="Memory Card Game Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Memory Card Game
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://reactjs.org/" className="hover:underline">
                      ReactJs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://oliviermagermans.com/"
                      className="hover:underline"
                    >
                      Zelda's icons by Olivier Magermans
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/ilcreatore32/"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/weishler-berman-0b56b31b2/"
                      className="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Website
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://ilcreatore32.github.io/portfolio/"
                      className="hover:underline"
                    >
                      My portfolio
                    </a>
                    <p className="text-gray-600 dark:text-gray-500 text-xs text-justify">
                      Compilation of projects that exemplifies my skills,
                      training and experiences.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/Memory-Card-Game"
              className=" text-secondary-400 text-opacity-75 hover:text-opacity-95 hover:underline"
            >
              Memory Card Game
            </Link>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {" "}
              created by Weishler Berman © 2022
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
