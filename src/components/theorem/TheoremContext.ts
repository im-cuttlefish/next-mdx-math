import { createContext } from "react";
import { TheoremStore } from "./types";

const initialValue: TheoremStore = {
  counter: 0,
};

export const TheoremContext = createContext(initialValue);
