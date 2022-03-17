import React, { useState } from 'react';
import Confetti from 'react-confetti';

import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  const correctWord = 'pilot'; // todo: pull randomly from dictionary
  const maxGuesses = 4;
  const initialGrid = ['.....','.....','.....','.....','.....'];

  const [guessedWords, setGuessedWords] = useState(initialGrid);
  const [guessCount, setGuessCount] = useState(0);
  const [disableKeys, setDisableKeys] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const keyPressedHandler = (event) => {
    const keyPressed = event.target.id;

    console.log('key pressed', keyPressed);
    console.log('guess words', guessedWords);

    // get copy of current guesses data
    const guessedWordsNew = guessedWords;
    let currentGuess = guessedWordsNew[guessCount].replaceAll('.', '');

    // handle enter key only if full word is submitted
    if (keyPressed === 'ENTER' && currentGuess.length === 5) {
      const correctGuess = currentGuess === correctWord.toUpperCase();

      if (!correctGuess) {
        if (guessCount < maxGuesses) {
          // still able to make guesses so increment count
          setGuessCount(guessCount + 1);
        } else {
          console.log('todo: game over!');
          setDisableKeys(true);
        }
      } else {
        console.log('yay, you win!');
        setDisableKeys(true);
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 10000);
      }
    }

    // handle delete key
    if (keyPressed === 'DEL') {
      currentGuess = currentGuess.slice(0, -1);
    }

    // handle letters
    if (currentGuess.length < 5 && keyPressed !== 'DEL' && keyPressed !== 'ENTER') {
      // word is less than 5 letters so append input
      currentGuess += keyPressed;
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
      {confetti &&
        <Confetti />
      }
      <Grid guesses={guessedWords} />
      <Keyboard disableKeys={disableKeys} keyPressedEvent={keyPressedHandler} />
    </div>
  );
}

export default App;
