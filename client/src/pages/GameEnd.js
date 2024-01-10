import { useSemantleContext } from "../hooks/useSemantleContext";

const GameEnd = ({ newGame }) => {
  const { game, guessNum } = useSemantleContext();
  // TODO:
  // 1. #Guessse
  // 2. Time taken
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
              <td>cucumber</td>
            </tr>
            <td>Average guess rank</td>
            <td>1000</td>
          </tbody>
        </table>
      </div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default GameEnd;
