// Context for the stopwatch
// Used in multiple components which is why context is needed
import { createContext } from "react";
import { useStopwatch } from "react-timer-hook";

export const StopwatchContext = createContext();

export const StopwatchContextProvider = ({ children }) => {
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const value = { seconds, minutes, hours, start, pause, reset };

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
};
