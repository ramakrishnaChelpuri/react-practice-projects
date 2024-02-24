import React, { useState } from 'react'
import PlayerInfo from './Components/PlayerInfo'
import GameBoard from './Components/GameBoard'
import Log from './Components/Log'


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectedSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevGameTurns) => {
      let currentPlayer = 'X'

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurns,]
      return updatedGameTurns
    })
    console.log(rowIndex, colIndex)
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="player - 1" symbol="X" isActive={activePlayer === 'X'} />
        <PlayerInfo name="player - 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
