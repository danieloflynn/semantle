import { useContext } from "react";
import { StopwatchContext } from "../contexts/StopwatchContext";

export const useStopwatchContext = () => {
  const context = useContext(StopwatchContext);
  if (!context) {
    throw Error("useStopwatchContext must be inside StopwatchContextProvider");
  }
  return context;
};
