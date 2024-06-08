import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function PreviousGuesses({ userGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} answer={answer} guessWord={userGuesses[index]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
