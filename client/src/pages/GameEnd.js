import { useSemantleContext } from "../hooks/useSemantleContext";

const GameEnd = ({ newGame }) => {
  const { game, guessNum, pastGuesses } = useSemantleContext();
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
      <h1>You Won!</h1>
      <h2>Answer: {game.word}</h2>
      <div className="stats">
        <h3>Your stats</h3>
        <table>
          <tbody>
            <tr>
              <td>Time taken</td>
              <td>1h 10m 2s</td>
            </tr>
            <tr>
              <td>Guesses</td>
              <td>{guessNum}</td>
            </tr>
            <tr>
              <td>Closest guess</td>
              <td>
                {pastGuesses.length > 0 &&
                  pastGuesses[pastGuesses.length - 1].simWord}
              </td>
            </tr>
            <td>Average guess rank</td>
            <td>{pastGuesses.length > 0 && getAvgGuessRank()}</td>
          </tbody>
        </table>
      </div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default GameEnd;
