import * as React from 'react';

export const CardContext = React.createContext();
export const CardProvider = (props) => {
  const [cards, setCards] = React.useState<[]>([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {props.children}
    </CardContext.Provider>
  );
};
