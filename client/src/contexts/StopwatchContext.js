import { createContext } from "react";
import { useStopwatch } from "react-timer-hook";

export const StopwatchContext = createContext();

export const StopwatchContextProvider = ({ children }) => {
  const { seconds, minutes, hours, start, stop, reset } = useStopwatch({
    autoStart: false,
  });

  const value = { seconds, minutes, hours, start, stop, reset };

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
};
