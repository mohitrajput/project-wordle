import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guessWord }) {
  let result;
  if (guessWord) {
    result = checkGuess(guessWord.guess, answer);
  }

  return (
    <>
      {guessWord ? (
        <p className="guess">
          {guessWord.guess.split("").map((letter, index) => (
            <span className={`cell ${result[index].status}`} key={index}>
              {letter}
            </span>
          ))}
        </p>
      ) : (
        <p className="guess">
          {range(5).map((index) => (
            <span className="cell" key={index}></span>
          ))}
        </p>
      )}
    </>
  );
}

export default Guess;
