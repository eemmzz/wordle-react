const Keyboard = ({keyPressedEvent}) => {
  return (
    <table className="App_Keyboard">
      <tbody>
        <tr>
          <td><button id="Q" onClick={keyPressedEvent} className="App_Keyboard_Button">Q</button></td>
          <td><button id="W" onClick={keyPressedEvent} className="App_Keyboard_Button">W</button></td>
          <td><button id="E" onClick={keyPressedEvent} className="App_Keyboard_Button">E</button></td>
          <td><button id="R" onClick={keyPressedEvent} className="App_Keyboard_Button">R</button></td>
          <td><button id="T" onClick={keyPressedEvent} className="App_Keyboard_Button">T</button></td>
          <td><button id="Y" onClick={keyPressedEvent} className="App_Keyboard_Button">Y</button></td>
          <td><button id="U" onClick={keyPressedEvent} className="App_Keyboard_Button">U</button></td>
          <td><button id="I" onClick={keyPressedEvent} className="App_Keyboard_Button">I</button></td>
          <td><button id="O" onClick={keyPressedEvent} className="App_Keyboard_Button">O</button></td>
          <td><button id="P" onClick={keyPressedEvent} className="App_Keyboard_Button">P</button></td>
        </tr>
        <tr>
          <td><button id="A" onClick={keyPressedEvent} className="App_Keyboard_Button">A</button></td>
          <td><button id="S" onClick={keyPressedEvent} className="App_Keyboard_Button">S</button></td>
          <td><button id="D" onClick={keyPressedEvent} className="App_Keyboard_Button">D</button></td>
          <td><button id="F" onClick={keyPressedEvent} className="App_Keyboard_Button">F</button></td>
          <td><button id="G" onClick={keyPressedEvent} className="App_Keyboard_Button">G</button></td>
          <td><button id="H" onClick={keyPressedEvent} className="App_Keyboard_Button">H</button></td>
          <td><button id="J" onClick={keyPressedEvent} className="App_Keyboard_Button">J</button></td>
          <td><button id="K" onClick={keyPressedEvent} className="App_Keyboard_Button">K</button></td>
          <td><button id="L" onClick={keyPressedEvent} className="App_Keyboard_Button">L</button></td>
          <td><button id="DEL" onClick={keyPressedEvent} className="App_Keyboard_Button">⌫</button></td>
        </tr>
        <tr>
          <td><button id="ENTER" onClick={keyPressedEvent} className="App_Keyboard_Button">⏎</button></td>
          <td><button id="Z" onClick={keyPressedEvent} className="App_Keyboard_Button">Z</button></td>
          <td><button id="X" onClick={keyPressedEvent} className="App_Keyboard_Button">X</button></td>
          <td><button id="C" onClick={keyPressedEvent} className="App_Keyboard_Button">C</button></td>
          <td><button id="V" onClick={keyPressedEvent} className="App_Keyboard_Button">V</button></td>
          <td><button id="B" onClick={keyPressedEvent} className="App_Keyboard_Button">B</button></td>
          <td><button id="N" onClick={keyPressedEvent} className="App_Keyboard_Button">N</button></td>
          <td><button id="M" onClick={keyPressedEvent} className="App_Keyboard_Button">M</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
