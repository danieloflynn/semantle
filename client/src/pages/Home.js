import { useState } from "react";
import GuessForm from "../components/GuessForm";

const Home = () => {
  const [guess, setGuess] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);

  return (
    <div className="home">
      <GuessForm guess={guess} setGuess={setGuess} />
    </div>
  );
};

export default Home;
