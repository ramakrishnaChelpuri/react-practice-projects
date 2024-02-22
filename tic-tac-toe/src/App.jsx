import React, { useState } from 'react'
import PlayerInfo from './Components/PlayerInfo'
import GameBoard from './Components/GameBoard'

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="player - 1" symbol="X" isActive={activePlayer === 'X'} />
        <PlayerInfo name="player - 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
    </main>
  )
}

export default App
