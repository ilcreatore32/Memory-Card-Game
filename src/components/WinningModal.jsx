import React from "react";

// Styles
import "../styles/Modal.css";

export default function WinningModal({
  show,
  turns,
  score,
  time,
  handleClose,
  shuffleCards,
}) {
  const playAgain = () => {
    handleClose();
    shuffleCards();
  };

  return (
    <>
      {show ? (
        <>
          <div className="modal-container">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Congratulations!</h3>
                  <button
                    className="close-modal-btn"
                    onClick={handleClose}
                  >
                    <span className="close-icon">
                      x
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="modal-message">
                    You've completed the game in the last
                    <span className="text-relevant">{time}</span>seconds with
                    <span className="text-relevant">{score}</span>points and{" "}
                    <span className="text-relevant">{turns}</span>turns. You can
                    play again by clicking the button below.
                  </p>
                </div>
                <div className="modal-footer">
                  <button className="close" type="button" onClick={handleClose}>
                    Close
                  </button>
                  <button
                    className="play-again bg-emerald-500"
                    type="button"
                    onClick={playAgain}
                  >
                    Play again
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop"></div>
        </>
      ) : null}
    </>
  );
}
