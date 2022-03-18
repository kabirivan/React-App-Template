import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'src/redux/store';
import { decrement, increment } from 'src/redux/slices/counter'

function App() {
  const count = useSelector((state) => state.counter.value)

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
      </header>
    </div>
  );
}

export default App;
