import Clock from './components/Clock';
import LightSwitch from './components/lightswitch';
import Title from './components/Title';
import UserBoard from './components/UserBoard';

import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title content="Hello, Motherfucking Henkies!" />
        <LightSwitch />
        <Clock />
        <p>
          <UserBoard />
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn From Your Local Henkie
        </a>
      </header>
    </div>
  );
};

export default App;
