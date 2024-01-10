const PastGuess = (pastGuess) => {
  return (
    <div className="past-guess">
      <p>{pastGuess.pastGuess.simWord}</p>
      <p>{pastGuess.pastGuess.rank}</p>
      <p>{pastGuess.pastGuess.similarity} </p>
    </div>
  );
};

export default PastGuess;
