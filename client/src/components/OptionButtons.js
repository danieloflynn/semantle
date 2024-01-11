import { useState } from "react";
import { useSemantleContext } from "../hooks/useSemantleContext";
import { useStopwatchContext } from "../hooks/useStopwatchContext";

const OptionButtons = ({ setFinished }) => {
  const { pause } = useStopwatchContext();
  const { game, pastGuesses, dispatch } = useSemantleContext();
  const [error, setError] = useState(null);
  const giveUp = () => {
    pause();
    setFinished(true);
  };

  const getHint = async (e) => {
    // Don't reload the page
    e.preventDefault();

    let retryCount = 0;

    while (retryCount < 2) {
      const response = await fetch("/api/" + game._id + "/getHint");
      const json = await response.json();
      if (!json.valid) {
        setError("Could not get a hint at this time");
      }
      console.log(json);
      // Make sure guess hasn't already been made
      console.log("valid", json.valid);
      if (json.valid && !pastGuesses.some((e) => e.simWord === json.simWord)) {
        console.log("Here");
        setError(null);
        return dispatch({ type: "NEW_HINT", payload: json });
      }
      retryCount++;
    }

    setError("Could not get a hint at this time");
  };

  return (
    <div>
      <button onClick={giveUp}>Give Up</button>
      <button onClick={getHint}>Get Hint</button>
    </div>
  );
};

export default OptionButtons;
