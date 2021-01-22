import React, {useState} from 'react';
import ScorePanel from "./scorePanel";

function App() {

  const [teams, setTeams] = useState([
    { name: "Eagles", color: "dark-green", textcolor: "white", logo: "./images/eagles.png" },
    { name: "Flyers", color: "orange", textcolor: "black", logo: "./images/flyers.png" },
    { name: "76ers", color: "blue", textcolor: "white", logo: "./images/sixers.png "},
    { name: "Phillies", color: "red", textcolor: "white", logo: "./images/phillies.png" },
    { name: "Union", color: "navy", textcolor: "white", logo: "./images/union.png" }
  ]);

  return( 
    <div className="app">
      <h1>Philadelphia Sport Score Central</h1>
      <br></br>
      <div className="scoreboard">
        {teams.map(team => (
          <ScorePanel name={team.name} logo={team.logo}/>
        ))};
      </div>
    </div>
  );
}

export default App;