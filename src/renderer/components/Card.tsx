import Latex from 'react-latex-next';
import * as React from 'react';
import { MacroContext } from '../context/MacroContext';
import { CardContext } from '../context/CardContext';

function Card({ cardtext, id }: { cardtext: string; id: number }) {
  const [text, setText] = React.useState<String>(cardtext);
  const [isEditing, setIsEditing] = React.useState<Boolean>(false);
  const { macros, setMacros } = React.useContext(MacroContext);
  const { cards, setCards } = React.useContext(CardContext);

  function handleInput(event: React.SyntheticEvent) {
    if ((event.key === 'Enter' && event.shiftKey) || event.key === 'Escape') {
      setIsEditing(false);
      setText(event.target.textContent);
      // console.log(event.target.textContent);
      // console.log('handleInput', cards);
      setCards(
        cards.map((card, index) =>
          index === id ? event.target.textContent : card,
        ),
      );
      return;
    }
    setIsEditing(true);
  }

  return (
    <div
      contentEditable="true"
      className={`card-${id}`}
      onInput={(e) => handleInput(e)}
      onKeyDown={(e) => handleInput(e)}
    >
      {isEditing && text.split('$').length > 1 ? (
        // add delimeter for display:false
        <Latex macros={macros}> {`\\(${text}\\)`}</Latex>
      ) : (
        <Latex macros={macros}>{text}</Latex>
      )}
    </div>
  );
}

export default Card;
