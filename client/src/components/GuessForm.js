import { useSemantleContext } from "../hooks/useSemantleContext";

const GuessForm = ({ guess, setGuess }) => {
  const { game, dispatch } = useSemantleContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Your guess is " + guess);
    console.log(game);
    const response = await fetch("/api/" + game._id + "/" + guess);
    console.log(response);
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
