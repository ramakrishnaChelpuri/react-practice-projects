import React, { useState } from 'react'
import PlayerInfo from './Components/PlayerInfo'
import GameBoard from './Components/GameBoard'
import Log from './Components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'

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

  let gameboard = InitialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameboard[row][col] = player
  }

  const activePlayer = derivedPlayerState(gameTurns)


  function handleSelectedSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevGameTurns) => {
      const currentPlayer = activePlayer
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurns,]
      return updatedGameTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo name="player - 1" symbol="X" isActive={activePlayer === 'X'} />
          <PlayerInfo name="player - 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
