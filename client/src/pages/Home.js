import { useState, useEffect } from "react";
import GuessForm from "../components/GuessForm";
import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuesses from "../components/PastGuesses";

const Home = () => {
  const { game, dispatch } = useSemantleContext();
  const [guess, setGuess] = useState("");
  const [finished, setFinished] = useState(false);

  const newGame = async () => {
    const response = await fetch("/api/");
    const json = await response.json();
    if (response.ok) {
      dispatch({
        type: "NEW_GAME",
        payload: json,
      });
    }
  };
  useEffect(() => {
    newGame();
  }, []);

  return (
    <div className="home">
      <GuessForm guess={guess} setGuess={setGuess} />
      <PastGuesses />
    </div>
  );
};

export default Home;
