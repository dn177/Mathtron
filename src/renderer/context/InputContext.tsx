import * as React from 'react';

type InputContextType = {
  input: String;
  setInput: React.Dispatch<React.SetStateAction<String>>;
};
export const InputContext = React.createContext<InputContextType>();

export const InputProvider = ({ children }: React.ReactNode) => {
  const [input, setInput] = React.useState<String>('');

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};
