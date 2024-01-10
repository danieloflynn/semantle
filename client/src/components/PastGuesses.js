import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuess from "./PastGuess";

const PastGuesses = () => {
  const { pastGuesses } = useSemantleContext();

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
          {pastGuesses &&
            pastGuesses.map((pastGuess) => (
              <PastGuess key={pastGuess.simWord} pastGuess={pastGuess} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastGuesses;
