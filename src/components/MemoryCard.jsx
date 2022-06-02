// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { increment } from "../features/reveals/RevealsSlice";

// Icons
import cover from "../images/cover.png";

// Styles
import "../styles/MemoryCard.css";

const MemoryCard = ({ card, handleChoice, flipped, disabled }) => {
  const [revealed, setRevealed] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <>
      <div className="card">
        <div className={`card-btn ${flipped ? "flipped" : ""}`}>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src={cover}
            alt="card back"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default MemoryCard;
