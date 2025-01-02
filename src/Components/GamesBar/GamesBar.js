import React from 'react'
import './GamesBar.css'

const gamesList = [
  "HOME",
  "LOTTERY",
  "CRICKET",
  "TENNIS",
  "FOOTBALL",
  "TABLE TENNIS",
  "BACCARAT",
  "32 CARDS",
  "TEENPATTI",
  "POKER",
  "LUCKY7",
];
const GamesBar = ({ onGameChange }) => {
    // const[nameOfGame,setNameofGame] = useState("Home")
    return (
      <div className='gamesList_container'>
        <ul className="listsOfGames">
          {gamesList.map((game,idx) => {
            return <li key={idx} onClick={() => onGameChange(game)}> {game}</li>
          })}
        </ul>
      </div>
    )
}

export default GamesBar
