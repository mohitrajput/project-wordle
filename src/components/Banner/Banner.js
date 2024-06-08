import React from "react";

function Banner({ userGuesses, matchFound, answer }) {
  return (
    <>
      {matchFound && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {userGuesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {!matchFound && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
