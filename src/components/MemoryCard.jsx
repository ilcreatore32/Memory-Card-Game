// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { increment } from "../features/reveals/RevealsSlice";

// Icons
import cover from "../images/cover.png";

// Styles
import "../styles/MemoryCard.css";

const MemoryCard = ({ id, img }) => {
  const [revealed, setRevealed] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    console.log(`Card ${number} clicked`);
    setRevealed(true);
    dispatch(increment());
  }

  return (
    <>
      <div className="card">
        <div
          className={`card-btn ${revealed ? "reveal-card" : ""}`}
          onClick={handleClick}
        >
          <img className="front" src={img} alt="card front" />
          <img className="back" src={cover} alt="card back" />
        </div>
      </div>
    </>
  );
};

export default MemoryCard;
