import { createContext, useReducer } from "react";

export const SemantleContext = createContext();

export const SemantleReducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return {
        game: action.payload,
        pastGuesses: [],
      };
    case "NEW_GUESS":
      return {
        game: state.game,
        pastGuesses: [action.payload, ...state.pastGuesses],
      };
    case "SET_GUESSES":
      return {
        game: state.game,
        pastGuesses: [...action.payload],
      };
    default:
      return state;
  }
};

export const SemantleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SemantleReducer, {
    game: null,
    pastGuesses: [],
  });
  return (
    <SemantleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SemantleContext.Provider>
  );
};
