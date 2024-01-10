import { useState, useEffect } from "react";
import GuessForm from "../components/GuessForm";
import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuesses from "../components/PastGuesses";
import GameEnd from "./GameEnd";
import { useStopwatch } from "react-timer-hook";
import { useStopwatchContext } from "../hooks/useStopwatchContext";

const Home = () => {
  const { game, dispatch } = useSemantleContext();
  const [finished, setFinished] = useState(false);
  const [won, setWon] = useState(false);
  const { seconds, minutes, hours, start, stop, reset } = useStopwatchContext();

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
      <p>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </p>
      {!finished && <GuessForm setFinished={setFinished} setWon={setWon} />}
      {!finished && <PastGuesses />}
      {finished && <GameEnd newGame={newGame} won={won} />}
    </div>
  );
};

export default Home;
