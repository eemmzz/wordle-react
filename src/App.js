import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  const keyPressedHandler = (event) => {
    console.log('key pressed!', event.target.id);
  }

  return (
    <div className="App">
      <h1>Wordle React</h1>
      <Grid />
      <Keyboard keyPressedEvent={keyPressedHandler} />
    </div>
  );
}

export default App;
