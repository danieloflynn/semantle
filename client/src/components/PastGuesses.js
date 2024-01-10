import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuess from "./PastGuess";

const PastGuesses = () => {
  const { pastGuesses, dispatch } = useSemantleContext();
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Guess</th>
            <th>Rank</th>
            <th>Similarity</th>
          </tr>
        </tbody>
      </table>
      {pastGuesses &&
        pastGuesses.map((pastGuess) => (
          <PastGuess key={pastGuess.simWord} pastGuess={pastGuess} />
        ))}
    </div>
  );
};

export default PastGuesses;
