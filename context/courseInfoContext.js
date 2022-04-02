import { createContext } from "react";

const courseInfoContext = createContext([{}, () => {}]);

export const Provider = courseInfoContext.Provider;
export const Consumer = courseInfoContext.Consumer;
export const Context = courseInfoContext;
