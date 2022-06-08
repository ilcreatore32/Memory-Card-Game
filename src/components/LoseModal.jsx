import React from "react";

// Styles
import "../styles/Modal.css";

export default function WinningModal({
  show,
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
                  <h3 className="modal-title">Sorry, you lose</h3>
                  <button className="close-modal-btn" onClick={handleClose}>
                    <span className="close-icon">x</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="modal-message">
                    Try again by clicking the nutton below, good luck.
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
