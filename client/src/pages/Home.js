import { useState, useEffect } from "react";
import GuessForm from "../components/GuessForm";
import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuesses from "../components/PastGuesses";
import GameEnd from "./GameEnd";

const Home = () => {
  const { game, dispatch } = useSemantleContext();
  const [finished, setFinished] = useState(false);
  const [won, setWon] = useState(false);

  const newGame = async () => {
    const response = await fetch("/api/");
    const json = await response.json();
    if (response.ok) {
      dispatch({
        type: "NEW_GAME",
        payload: json,
      });
    }
    setFinished(false);
    setWon(false);
  };
  useEffect(() => {
    newGame();
  }, []);

  return (
    <div className="home">
      {!finished && <GuessForm setFinished={setFinished} setWon={setWon} />}
      {!finished && <PastGuesses />}
      {finished && <GameEnd newGame={newGame} />}
    </div>
  );
};

export default Home;
