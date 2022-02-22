const Keyboard = () => {
  return (
    <table className="App_Keyboard">
      <tbody>
        <tr>
          <td><button value="Q" className="App_Keyboard_Button">Q</button></td>
          <td><button value="W" className="App_Keyboard_Button">W</button></td>
          <td><button value="E" className="App_Keyboard_Button">E</button></td>
          <td><button value="R" className="App_Keyboard_Button">R</button></td>
          <td><button value="T" className="App_Keyboard_Button">T</button></td>
          <td><button value="Y" className="App_Keyboard_Button">Y</button></td>
          <td><button value="U" className="App_Keyboard_Button">U</button></td>
          <td><button value="I" className="App_Keyboard_Button">I</button></td>
          <td><button value="O" className="App_Keyboard_Button">O</button></td>
          <td><button value="P" className="App_Keyboard_Button">P</button></td>
        </tr>
        <tr>
          <td><button value="A" className="App_Keyboard_Button">A</button></td>
          <td><button value="S" className="App_Keyboard_Button">S</button></td>
          <td><button value="D" className="App_Keyboard_Button">D</button></td>
          <td><button value="F" className="App_Keyboard_Button">F</button></td>
          <td><button value="G" className="App_Keyboard_Button">G</button></td>
          <td><button value="H" className="App_Keyboard_Button">H</button></td>
          <td><button value="J" className="App_Keyboard_Button">J</button></td>
          <td><button value="K" className="App_Keyboard_Button">K</button></td>
          <td><button value="L" className="App_Keyboard_Button">L</button></td>
          <td><button value="DEL" className="App_Keyboard_Button">⌫</button></td>
        </tr>
        <tr>
          <td><button value="ENTER" className="App_Keyboard_Button">⏎</button></td>
          <td><button value="Z" className="App_Keyboard_Button">Z</button></td>
          <td><button value="X" className="App_Keyboard_Button">X</button></td>
          <td><button value="C" className="App_Keyboard_Button">C</button></td>
          <td><button value="V" className="App_Keyboard_Button">V</button></td>
          <td><button value="B" className="App_Keyboard_Button">B</button></td>
          <td><button value="N" className="App_Keyboard_Button">N</button></td>
          <td><button value="M" className="App_Keyboard_Button">M</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
