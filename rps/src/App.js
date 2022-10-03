import React from 'react';
import Logo from './logo.component';
import Rock from './rock.component';
import Paper from './paper.component';
import Scissors from './scissors.component';
import './App.css';



function App() {
  let score = 0;
  return (
    <div className="container">
      <div className="header">
        <div className='rps'>
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
        <div className="score">
          <span>SCORE</span>
          <h2>{score}</h2>
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
