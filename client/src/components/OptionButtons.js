import { useSemantleContext } from "../hooks/useSemantleContext";
import { useStopwatchContext } from "../hooks/useStopwatchContext";

const OptionButtons = ({ setFinished }) => {
  const { pause } = useStopwatchContext();
  const { pastGuesses, dispatch } = useSemantleContext();
  const giveUp = () => {
    pause();
    setFinished(true);
  };

  const getHint = async () => {
    // Get a hint
    // Check if hint has already been guessed
    // If already guessed repeat
    // Otherwise add to pastGuesses as a hint
  };
  return (
    <div>
      <button onClick={giveUp}>Give Up</button>
      <button onClick={getHint}>Get Hint</button>
    </div>
  );
};

export default OptionButtons;
