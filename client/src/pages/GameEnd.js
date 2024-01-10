const GameEnd = ({ newGame }) => {
  return (
    <div className="game-end">
      <h1>You Won!</h1>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default GameEnd;
