import { useEffect, useState } from "react";
import { useSemantleContext } from "../hooks/useSemantleContext";
import PastGuess from "./PastGuess";

const Closest100 = () => {
  const { game } = useSemantleContext();
  const [error, setError] = useState(null);
  const [closest, setClosest] = useState(null);
  // TODO: Check if need to use useEffect for closest100
  useEffect(() => {
    const getClosest100 = async () => {
      const response = await fetch("/api/" + game._id + "/getClosest?c=101");
      if (!response.ok) {
        return setError("Could not get closest words");
      }
      const json = await response.json();

      setError(null);
      return json;
    };
    getClosest100().then((response) => setClosest(response));
  }, [game._id]);
  return (
    <div>
      <h2>Closest 100 guesses</h2>
      {error && <p>{error}</p>}
      {!error && (
        <table className="past-guess-table">
          <tbody>
            <tr>
              <th>Guess</th>
              <th>Rank</th>
              <th>Similarity</th>
            </tr>
            {closest &&
              closest.map((word) => (
                <PastGuess key={word.simWord} pastGuess={word} />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Closest100;
