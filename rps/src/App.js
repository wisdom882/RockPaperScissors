import React from 'react';
import Logo from './logo.component';
import Rock from './rock.component';
import Paper from './paper.component';
import Scissors from './scissors.component';
import './App.css';



function App() {
  return (
    <div className="container">
      <div className="header">
        <div className='rps'>
          <h3>ROCK</h3>
          <h3>PAPER</h3>
          <h3>SCISSORS</h3>
        </div>
        <div className="score">
          <p>SCORE</p>
          <h2>0</h2>
        </div>
      </div>

      <div className='game'>
        <Rock/>
        <Logo/>
        <Paper/>
        <Scissors/>
      </div>
    </div>
  );
}

export default App;
