const PastGuess = (pastGuess) => {
  return (
    <tr>
      <td>1</td>
      <td>{pastGuess.pastGuess.simWord}</td>
      <td>{pastGuess.pastGuess.rank}</td>
      <td>{pastGuess.pastGuess.similarity}</td>
    </tr>
  );
};

export default PastGuess;
