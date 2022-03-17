import React, { useState } from 'react';

import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  const initialGrid = ['.....','.....','.....','.....','.....'];
  const [guessedWords, setGuessedWords] = useState(initialGrid);

  const keyPressedHandler = (event) => {
    const keyPressed = event.target.id;

    console.log('key pressed', keyPressed);
    console.log('guess words', guessedWords);
  }

  return (
    <div className="App">
      <h1>Wordle React</h1>
      <Grid guesses={guessedWords} />
      <Keyboard keyPressedEvent={keyPressedHandler} />
    </div>
  );
}

export default App;
