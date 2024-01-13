// Renders a line in the guess table
const PastGuess = (pastGuess) => {
  return (
    <tr>
      {pastGuess.pastGuess.guessNum && <td>{pastGuess.pastGuess.guessNum}</td>}
      <td>{pastGuess.pastGuess.simWord}</td>
      <td>{pastGuess.pastGuess.rank}</td>
      <td>{pastGuess.pastGuess.similarity}</td>
    </tr>
  );
};

export default PastGuess;
