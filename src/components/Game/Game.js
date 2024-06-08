import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import WordInput from "../WordInput";
import PreviousGuesses from "../PreviousGuesses";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [matchFound, setMatchFound] = React.useState(false);
  const [gameActive, setGameActive] = React.useState(true);

  function updateGuesses(wordGuess) {
    const newGuess = { guess: wordGuess, id: crypto.randomUUID() };
    const nextGuesses = [...userGuesses, newGuess];
    setUserGuesses(nextGuesses);
    if (wordGuess === answer) {
      setMatchFound(true);
      setGameActive(false);
      return;
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setMatchFound(false);
      setGameActive(false);
    }
  }
  return (
    <>
      <PreviousGuesses userGuesses={userGuesses} answer={answer} />
      {gameActive && <WordInput updateGuesses={updateGuesses} />}
      {!gameActive && (
        <Banner
          userGuesses={userGuesses}
          matchFound={matchFound}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
