import { useContext } from "react";
import { SemantleContext } from "../contexts/SemantleContext";

export const useSemantleContext = () => {
  const context = useContext(SemantleContext);
  if (!context) {
    throw Error("useSemantleContext must be inside SemantleContextProvider");
  }
  return context;
};
