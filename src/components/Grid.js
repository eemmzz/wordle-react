const Grid = ({guesses}) => {
  return (
    <table className="App_Grid">
      <tbody>
        {
          guesses.map((guess, index) => {
            const id = `guess-${index + 1}`;
            const letters = guess.split('');

            return <tr key={id} id={id}>
              {
                letters.map((letter, index) => {
                  return <td key={`${id}-${index}`}>{letter !== '.' ? letter : ' '}</td>
                })
              }
              </tr>
          })
        }
      </tbody>
    </table>
  );
}

export default Grid;
