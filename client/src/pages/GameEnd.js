import Closest100 from "../components/Closest100";
import { useSemantleContext } from "../hooks/useSemantleContext";
import { useStopwatchContext } from "../hooks/useStopwatchContext";

const GameEnd = ({ newGame, won }) => {
  const { game, guessNum, pastGuesses } = useSemantleContext();
  const { hours, minutes, seconds } = useStopwatchContext();
  // TODO:
  // 1. #Guessses
  // 2. Time taken
  // 3. Closest guess
  // 4. Average guess rank
  const getAvgGuessRank = () => {
    let sum = 0;
    pastGuesses.map((e) => (sum += e.rank));
    return sum / pastGuesses.length;
  };
  return (
    <div className="game-end">
      {won && <h1>You Won!</h1>}
      {!won && <h1>You Gave Up</h1>}
      <h2>Answer: {game.word}</h2>
      <div className="stats">
        <h3>Your stats</h3>
        <table>
          <tbody>
            <tr>
              <td>Time taken</td>
              <td>
                {hours > 0 && hours + "h "}
                {minutes > 0 && minutes + "m "}
                {seconds > 0 && seconds + "s"}
              </td>
            </tr>
            <tr>
              <td>Guesses</td>
              <td>{Math.round(guessNum)}</td>
            </tr>
            <tr>
              <td>Closest guess</td>
              <td>
                {pastGuesses.length > 0 &&
                  pastGuesses[pastGuesses.length - 1].simWord}
              </td>
            </tr>
            <tr>
              <td>Average guess rank</td>
              <td>{pastGuesses.length > 0 && getAvgGuessRank()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="new-game-div">
        <button onClick={newGame} className="option-button">
          New Game
        </button>
      </div>

      <div className="closest-100">
        <Closest100 />
      </div>
    </div>
  );
};

export default GameEnd;
