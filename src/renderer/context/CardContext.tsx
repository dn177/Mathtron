import * as React from 'react';

type CardContextType = {
  cards: [];
  setCards: React.Dispatch<React.SetStateAction<[]>>;
};
export const CardContext = React.createContext<CardContextType>();
export const CardProvider = ({ children }: React.ReactNode) => {
  const [cards, setCards] = React.useState<[]>([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
