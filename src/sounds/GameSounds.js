// Sounds
import reveal from "./reveal.wav";
import match from "./match.wav";
import lowtime from "./lowtime.wav";
import error from "./error.wav";

// Make JavaScript Audio object
const Reveal = new Audio(reveal);
const Match = new Audio(match);
const Lowtime = new Audio(lowtime);
const Error = new Audio(error);

// Make sounds available on one object
const GameSounds = {
  Reveal,
  Match,
  Lowtime,
  Error,
};

export default GameSounds;