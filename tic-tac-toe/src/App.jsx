import PlayerInfo from './Components/PlayerInfo'
import GameBoard from './Components/GameBoard'

function App() {

  return (
    <main id="game-container">
      <ol id="players">
        <PlayerInfo name="player - 1" symbol="X" />
        <PlayerInfo name="player - 2" symbol="O" />
      </ol>
      <GameBoard />
    </main>
  )
}

export default App
