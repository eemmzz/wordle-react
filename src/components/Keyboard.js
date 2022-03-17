const Keyboard = ({keyPressedEvent, disableKeys}) => {
  return (
    <table className="App_Keyboard">
      <tbody>
        <tr>
          <td><button disabled={disableKeys} id="Q" onClick={keyPressedEvent} className="App_Keyboard_Button">Q</button></td>
          <td><button disabled={disableKeys} id="W" onClick={keyPressedEvent} className="App_Keyboard_Button">W</button></td>
          <td><button disabled={disableKeys} id="E" onClick={keyPressedEvent} className="App_Keyboard_Button">E</button></td>
          <td><button disabled={disableKeys} id="R" onClick={keyPressedEvent} className="App_Keyboard_Button">R</button></td>
          <td><button disabled={disableKeys} id="T" onClick={keyPressedEvent} className="App_Keyboard_Button">T</button></td>
          <td><button disabled={disableKeys} id="Y" onClick={keyPressedEvent} className="App_Keyboard_Button">Y</button></td>
          <td><button disabled={disableKeys} id="U" onClick={keyPressedEvent} className="App_Keyboard_Button">U</button></td>
          <td><button disabled={disableKeys} id="I" onClick={keyPressedEvent} className="App_Keyboard_Button">I</button></td>
          <td><button disabled={disableKeys} id="O" onClick={keyPressedEvent} className="App_Keyboard_Button">O</button></td>
          <td><button disabled={disableKeys} id="P" onClick={keyPressedEvent} className="App_Keyboard_Button">P</button></td>
        </tr>
        <tr>
          <td><button disabled={disableKeys} id="A" onClick={keyPressedEvent} className="App_Keyboard_Button">A</button></td>
          <td><button disabled={disableKeys} id="S" onClick={keyPressedEvent} className="App_Keyboard_Button">S</button></td>
          <td><button disabled={disableKeys} id="D" onClick={keyPressedEvent} className="App_Keyboard_Button">D</button></td>
          <td><button disabled={disableKeys} id="F" onClick={keyPressedEvent} className="App_Keyboard_Button">F</button></td>
          <td><button disabled={disableKeys} id="G" onClick={keyPressedEvent} className="App_Keyboard_Button">G</button></td>
          <td><button disabled={disableKeys} id="H" onClick={keyPressedEvent} className="App_Keyboard_Button">H</button></td>
          <td><button disabled={disableKeys} id="J" onClick={keyPressedEvent} className="App_Keyboard_Button">J</button></td>
          <td><button disabled={disableKeys} id="K" onClick={keyPressedEvent} className="App_Keyboard_Button">K</button></td>
          <td><button disabled={disableKeys} id="L" onClick={keyPressedEvent} className="App_Keyboard_Button">L</button></td>
          <td><button disabled={disableKeys} id="DEL" onClick={keyPressedEvent} className="App_Keyboard_Button">⌫</button></td>
        </tr>
        <tr>
          <td><button disabled={disableKeys} id="ENTER" onClick={keyPressedEvent} className="App_Keyboard_Button">⏎</button></td>
          <td><button disabled={disableKeys} id="Z" onClick={keyPressedEvent} className="App_Keyboard_Button">Z</button></td>
          <td><button disabled={disableKeys} id="X" onClick={keyPressedEvent} className="App_Keyboard_Button">X</button></td>
          <td><button disabled={disableKeys} id="C" onClick={keyPressedEvent} className="App_Keyboard_Button">C</button></td>
          <td><button disabled={disableKeys} id="V" onClick={keyPressedEvent} className="App_Keyboard_Button">V</button></td>
          <td><button disabled={disableKeys} id="B" onClick={keyPressedEvent} className="App_Keyboard_Button">B</button></td>
          <td><button disabled={disableKeys} id="N" onClick={keyPressedEvent} className="App_Keyboard_Button">N</button></td>
          <td><button disabled={disableKeys} id="M" onClick={keyPressedEvent} className="App_Keyboard_Button">M</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
