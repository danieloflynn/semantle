import { useSemantleContext } from "../hooks/useSemantleContext";
import { useState } from "react";

const GuessForm = ({ guess, setGuess }) => {
  const { game, pastGuesses, dispatch } = useSemantleContext();
  const [invalidMessage, setInvalidMessage] = useState(null);

  const handleSubmit = async (e) => {
    // Don't reload the page
    e.preventDefault();

    // Make sure guess hasn't already been made
    if (pastGuesses.some((e) => e.simWord === guess)) {
      return setInvalidMessage("You've already guessed this");
    }
    const response = await fetch("/api/" + game._id + "/" + guess);
    const json = await response.json();
    if (!json.valid) {
      setInvalidMessage("Word not found");
    }
    if (json.valid) {
      setInvalidMessage(null);
      dispatch({ type: "NEW_GUESS", payload: json });
      setGuess("");
    }
  };

  return (
    <div>
      {invalidMessage && <div className="error">{invalidMessage}</div>}
      <form className="guess" onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button>Guess</button>
      </form>
    </div>
  );
};

export default GuessForm;
