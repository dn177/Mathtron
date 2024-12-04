import * as React from 'react';

export const InputContext = React.createContext();

export const InputProvider = (props) => {
  const [input, setInput] = React.useState<String>('');

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {props.children}
    </InputContext.Provider>
  );
};
