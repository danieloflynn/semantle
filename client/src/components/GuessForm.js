import { useSemantleContext } from "../hooks/useSemantleContext";
import { useState } from "react";

const GuessForm = ({ guess, setGuess }) => {
  const { game, dispatch } = useSemantleContext();
  const [validGuess, setValidGuess] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/" + game._id + "/" + guess);
    const json = await response.json();
    console.log(json);
    if (!json.valid) {
      setValidGuess(false);
    }
    if (json.valid) {
      setValidGuess(true);
    }
    dispatch({ type: "NEW_GUESS", payload: json });
  };
  return (
    <form className="guess" onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button>Guess</button>
    </form>
  );
};

export default GuessForm;
