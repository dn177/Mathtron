import * as React from 'react';

// eslint-disable-next-line no-useless-escape
const INITIAL_MACROS = { '\\f': '#1f(#2)' };

export const MacroContext = React.createContext();
export const MacroProvider = (props) => {
  const [macros, setMacros] = React.useState<{}>(INITIAL_MACROS);

  return (
    <MacroContext.Provider value={{ macros, setMacros }}>
      {props.children}
    </MacroContext.Provider>
  );
};
