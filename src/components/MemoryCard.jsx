// React
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/reveals/RevealsSlice";

// import sound from "../sounds/reveal.wav";
import "../styles/MemoryCard.css";

const MemoryCard = ({ number }) => {
  const [revealed, setRevealed] = useState(false);
  const revealsCount = useSelector((state) => state.reveals.value);
  const dispatch = useDispatch();
  // const reveal = new Audio(sound);

  function handleClick() {
    console.log(`Card ${number} clicked`);
    setRevealed(true);
    dispatch(increment());
    // reveal.play();
  }

  return (
    <>
      <td id={number} className="card">
        <button
          className={`card-btn ${revealed ? "reveal-card" : ""}`}
          onClick={handleClick}
        >
          {number}
        </button>
      </td>
    </>
  );
};

export default MemoryCard;
