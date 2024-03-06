function GameBoard({ onSelectSquare, board }) {
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
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>

    )
}

export default GameBoard;