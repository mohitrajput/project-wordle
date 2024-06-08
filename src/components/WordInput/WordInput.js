import React from "react";

function WordInput({ updateGuesses }) {
  const [inputWord, setInputWord] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputWord.length !== 5) {
          window.alert("Word length must be of 5");
          return;
        }
        updateGuesses(inputWord);
        setInputWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{0,5}"
        value={inputWord}
        onChange={(e) => {
          if (!e.target.validity.valid) {
            return;
          }
          setInputWord(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default WordInput;
