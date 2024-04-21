import React, { useState } from 'react';
import './Board.css';
import { resetBoard, solveSudoku } from './sudokuSolver'; 
import { textToDisplay } from './Text';
import { useEffect } from 'react';

const initialGrid = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];


function App() {
  const [grid, setGrid] = useState(initialGrid);

  const handleSolve = () => {
    const newGrid = [...grid];
    if (solveSudoku(newGrid)) {
      setGrid(newGrid);
    } else {
    }
  };

  const handleReset = () => {
      const newBlankGrid = JSON.parse(JSON.stringify(initialGrid)); 
      resetBoard(newBlankGrid);
      setGrid(newBlankGrid);
  };
  

  const handleChange = (e, row, col) => {
    const newValue = e.target.value.trim();
    const newGrid = [...grid];
    newGrid[row][col] = newValue === '0' ? '' : newValue;
    setGrid(newGrid);
  };


  useEffect(() => {
    document.title = "Sudoku Solver";
  }, []);
    

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>

      <div className='text'>
      {textToDisplay()}
      </div>


      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                className="cell"
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="solve-button" onClick={handleSolve}>Solve</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
      </div>
  );
}

export default App;
