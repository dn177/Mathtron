import * as React from 'react';

// eslint-disable-next-line no-useless-escape
const INITIAL_MACROS = { '\\f': '#1f(#2)' };

type MacroContextType = {
  macros: {};
  setMacros: React.Dispatch<React.SetStateAction<{}>>;
};
export const MacroContext = React.createContext<MacroContextType>();
export const MacroProvider = ({ children }: React.ReactNode) => {
  const [macros, setMacros] = React.useState<{}>(INITIAL_MACROS);

  return (
    <MacroContext.Provider value={{ macros, setMacros }}>
      {children}
    </MacroContext.Provider>
  );
};
