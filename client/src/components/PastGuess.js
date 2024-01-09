const PastGuess = (pastGuess) => {
  return (
    <div className="past-guess">
      <p>{pastGuess.simWord}</p>
      <p>{pastGuess.rank}</p>
      <p>{pastGuess.similarity} </p>
    </div>
  );
};

export default PastGuess;
