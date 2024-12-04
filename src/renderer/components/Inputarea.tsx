import * as React from 'react';
import { CardContext } from '../context/CardContext';
import { InputContext } from '../context/InputContext';

function Inputarea() {
  const { input, setInput } = React.useContext(InputContext);
  const { cards, setCards } = React.useContext(CardContext);

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter' && event.shiftKey) || event.key === 'Escape') {
      setCards([...cards, input]);
      setInput('');
    }
  };

  return (
    <div className="input-area absolute bottom-0">
      <textarea
        className="input-field"
        rows={3}
        name="Inputtext"
        id="Inputtext"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          setCards([...cards, input]);
          setInput('');
        }}
      >
        Enter
      </button>
    </div>
  );
}

export default Inputarea;
