import { createContext, useReducer } from "react";

export const SemantleContext = createContext();

export const SemantleReducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return {
        game: action.payload,
        guessNum: 1,
        pastGuesses: [],
      };
    case "NEW_GUESS":
      action.payload.guessNum = state.guessNum;
      console.log(state.pastGuesses);
      return {
        game: state.game,
        guessNum: state.guessNum + 1,
        pastGuesses: [action.payload, ...state.pastGuesses],
      };
    case "SET_GUESSES":
      return {
        game: state.game,
        guessNum: state.guessNum,
        pastGuesses: [...action.payload],
      };
    default:
      return state;
  }
};

export const SemantleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SemantleReducer, {
    game: null,
    guessNum: 1,
    pastGuesses: [],
  });
  return (
    <SemantleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SemantleContext.Provider>
  );
};
