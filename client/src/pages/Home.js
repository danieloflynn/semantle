import { useState, useEffect } from "react";
import GuessForm from "../components/GuessForm";
import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuesses from "../components/PastGuesses";
import GameEnd from "./GameEnd";
import Stopwatch from "../components/Stopwatch";
import { useStopwatchContext } from "../hooks/useStopwatchContext";
import OptionButtons from "../components/OptionButtons";

const Home = () => {
  const { dispatch } = useSemantleContext();
  const [finished, setFinished] = useState(false);
  const [won, setWon] = useState(false);
  const { start, reset } = useStopwatchContext();
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
    reset();
    start();
  };
  useEffect(() => {
    newGame();
  }, []);

  return (
    <div className="home">
      {!finished && <Stopwatch />}
      <div className="game">
        {!finished && <GuessForm setFinished={setFinished} setWon={setWon} />}
        {!finished && <OptionButtons setFinished={setFinished} />}
        {!finished && <PastGuesses />}
        {finished && <GameEnd newGame={newGame} won={won} />}
      </div>
    </div>
  );
};

export default Home;
