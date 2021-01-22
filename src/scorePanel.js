import React from 'react';
import "./App.css";

function ScorePanel(props) {
 
    var scores;
    fetch("https://nhl-score-api.herokuapp.com/api/scores/latest").then(res => res.json()).then((result) => {
        scores = result;
        console.log(scores);
    });


    return (
        <div className="score-panel">

            <h2>{props.name}</h2>
            <div className="score-and-time">
            <p>score</p>
            <h3>vs. opponent</h3>
            <p>time</p>
            <br></br>
            <p>date</p>
            </div>

            <p>{scores}</p>
        </div>
    );
}

export default ScorePanel;