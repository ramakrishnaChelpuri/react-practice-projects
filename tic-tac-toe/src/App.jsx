import React, { useState } from 'react'
import PlayerInfo from './Components/PlayerInfo'
import GameBoard from './Components/GameBoard'
import Log from './Components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './Components/GameOver'

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedPlayerState(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlayer] = useState('X')

  let gameboard = [...InitialGameBoard.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameboard[row][col] = player
  }

  const activePlayer = derivedPlayerState(gameTurns)

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevGameTurns) => {
      const currentPlayer = activePlayer
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurns,]
      return updatedGameTurns
    })
  }

  function handleRematch() {
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo name="player - 1" symbol="X" isActive={activePlayer === 'X'} />
          <PlayerInfo name="player - 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
