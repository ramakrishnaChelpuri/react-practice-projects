//import React, { useState } from 'react'

const InitialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
    let gameboard = InitialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gameboard[row][col] = player
        console.log(gameboard, row, col, player)
    }

    /* const [gameboard, setGameboard] = useState(InitialGameBoard)

    function handleGameboard(rowIndex, colIndex) {
        setGameboard((prevGameboard) => {
            const updatedGameBoard = [...prevGameboard.map((innerArray) => [...innerArray])]
            console.log('clicked')
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedGameBoard
        })
        onSelectSquare()
    } */
    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>

    )
}

export default GameBoard;