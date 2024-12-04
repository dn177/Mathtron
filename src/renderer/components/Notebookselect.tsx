import * as React from 'react';
import { CardContext } from '../context/CardContext';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

//TODO: use electron-store instead of localstorage
function NotebookSelect() {
  const [notebooks, setNotebooks] = React.useState<String[]>(
    localStorage ? Object.keys({ ...localStorage }) : ['default'],
  );
  const [currentNotebook, setCurrentNotebook] =
    React.useState<String>('default');
  const { cards, setCards } = React.useContext(CardContext);

  function selectHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    if (event.target.value === 'Create new notebook') {
      setNotebooks([...notebooks, 'notebook' + (notebooks.length + 1)]);
      return;
    }

    // console.log('called selectHandler', event.target.value);
    // console.log('cards:', cards);

    localStorage.setItem(currentNotebook, cards);

    setCurrentNotebook(event.target.value);
    if (localStorage.getItem(event.target.value) !== '') {
      setCards(
        localStorage
          .getItem(event.target.value)
          .split(',')
          .filter((el) => el !== (undefined || null || '')),
      );
    } else {
      setCards([]);
    }
  }

  return (
    <div className="notebookselect">
      <Select
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
          },
          '.MuiSvgIcon-root ': {
            fill: 'white !important',
          },
        }}
        name=""
        id="selectnotebook"
        onChange={selectHandler}
        value={currentNotebook}
      >
        {notebooks.map((notebook) => (
          <MenuItem value={notebook}>{notebook}</MenuItem>
        ))}
        <MenuItem value="Create new notebook">Create new notebook</MenuItem>
      </Select>
    </div>
  );
}

export default NotebookSelect;
