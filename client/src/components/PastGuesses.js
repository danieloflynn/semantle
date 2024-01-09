import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuess from "./PastGuess";

const PastGuesses = () => {
  const { pastGuesses, dispatch } = useSemantleContext();
  return (
    <div className="container">
      {pastGuesses &&
        pastGuesses.map((pastGuess) => (
          <PastGuess key={pastGuess.simWord} pastGuess={pastGuess} />
        ))}
    </div>
  );
};

export default PastGuesses;
