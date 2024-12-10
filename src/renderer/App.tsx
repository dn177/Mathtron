import * as React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'katex/dist/katex.min.css';
import { CardContext, CardProvider } from './context/CardContext';
import { InputProvider } from './context/InputContext';
import { MacroProvider } from './context/MacroContext';
import Card from './components/Card';
import InputArea from './components/InputArea';
import CalculationArea from './components/CalculationArea';
import NotebookSelect from './components/NotebookSelect';
import Settings from './components/Settings';
import SettingsIcon from './components/SettingsIcon';

function Main() {
  const { cards, setCards } = React.useContext(CardContext);

  React.useEffect(() => {
    if (localStorage.getItem('default') !== null) {
      setCards(
        localStorage
          .getItem('default')
          .split(',')
          .filter((el) => el !== (undefined || null || '')),
      );
    }
  }, []);

  return (
    <div>
      <h1>Mathtron</h1>

      <div className="top-bar">
        <NotebookSelect />
        <Link to="/settings">
          <SettingsIcon />
        </Link>
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <Card cardtext={card} key={`card${card}`} id={index} />
        ))}
        <CalculationArea />
      </div>
      <InputArea />
    </div>
  );
}

function AppProvider() {
  return (
    <InputProvider>
      <CardProvider>
        <MacroProvider>
          <Main />
        </MacroProvider>
      </CardProvider>
    </InputProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppProvider />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
