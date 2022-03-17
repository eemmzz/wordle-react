import React, { useState } from 'react';

import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  const initialGrid = ['.....','.....','.....','.....','.....'];
  const maxGuesses = 4;

  const [guessedWords, setGuessedWords] = useState(initialGrid);
  const [guessCount, setGuessCount] = useState(0);

  const keyPressedHandler = (event) => {
    const keyPressed = event.target.id;

    console.log('key pressed', keyPressed);
    console.log('guess words', guessedWords);

    // get copy of current guesses data
    const guessedWordsNew = guessedWords;
    let currentGuess = guessedWordsNew[guessCount].replaceAll('.', '');

    if (currentGuess.length < 5) {
      // word is less than 5 letters so append input
      currentGuess += keyPressed;
    } else {
      console.log('TODO');
    }

    // re-enter padding characters for render if required
    if (currentGuess.length < 5) {
      const paddingLength = (5 - currentGuess.length);
      currentGuess += '.'.repeat(paddingLength);
    }

    // update grid with new state
    guessedWordsNew[guessCount] = currentGuess;
    setGuessedWords([...guessedWordsNew]);
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
