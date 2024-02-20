import PlayerInfo from './Components/PlayerInfo'
function App() {

  return (
    <main id="game-container">
      <ol id="players">
        <PlayerInfo name="player - 1" symbol="X" />
        <PlayerInfo name="player - 2" symbol="O" />
      </ol>
    </main>
  )
}

export default App
