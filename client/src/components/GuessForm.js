const GuessForm = ({ guess, setGuess }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Your guess is " + guess);
  };
  return (
    <form className="guess" onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button>Guess</button>
    </form>
  );
};

export default GuessForm;
