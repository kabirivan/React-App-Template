import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'src/redux/store';
import FourKIcon from '@mui/icons-material/FourK';
import { Button, Box } from '@mui/material';
import { incrementAction, decrementAction, incrementByAmountAction } from 'src/redux/slices/counter'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {count}
        </a>
        <FourKIcon />
        <Box sx={{ mt: 2 }} />
        <Button variant="contained" onClick={() => dispatch(incrementAction())}>Aumentar</Button>
        <Box sx={{ mt: 2 }} />
        <Button variant="contained" onClick={() => dispatch(decrementAction())}>Disminuir</Button>
        <Box sx={{ mt: 2 }} />
        <Button variant="contained" onClick={() => dispatch(incrementByAmountAction(2))}>Sumar 2</Button>
      </header>
    </div>
  );
}

export default App;
