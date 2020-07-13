import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HI
        </p>
        <Button className= "button"color="primary">Material UI</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
