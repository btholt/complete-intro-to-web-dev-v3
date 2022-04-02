import { createContext } from "react";

const headerContext = createContext([{}, () => {}]);

export const Provider = headerContext.Provider;
export const Consumer = headerContext.Consumer;
export const Context = headerContext;
