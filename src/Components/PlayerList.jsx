import { players } from "./Components/PlayerObj"
import PlayerObj from "./Components/PlayerObj"
import Players from "./Components/Players"

const PlayerList = () => {
  return (
    <div>
      
      <h3>FIFA PLAYERS</h3>
      {
        players.map((player) => (<Players name = {player.name} age = {player.age}  team = {player.team}  position = {player.position} nationality = {player.nationality} jerseyNumber = {player.jerseyNumber}/>))
        }

    </div>
  )
}

export default PlayerList