import Latex from 'react-latex-next';
import * as React from 'react';
import { InputContext } from '../context/InputContext';
import { MacroContext } from '../context/MacroContext';

function CalculationArea() {
  const { input, setInput } = React.useContext(InputContext);
  const { macros, setMacros } = React.useContext(MacroContext);

  return (
    <div className="calculation-area">
      <Latex macros={macros}>{input}</Latex>
    </div>
  );
}

export default CalculationArea;
