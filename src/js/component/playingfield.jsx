import React from "react";

const winningOutcomes = 
   //All Possible Horizontal Winning Outcomes
   [
    [1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1],
    //All Possible Vertical Winning Outcomes
    [1,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0,0,1],
    //All Possible Diagonal Winning Outcomes
    [1,0,0,0,1,0,0,0,1],
    [0,0,1,0,1,0,1,0,0],
    ]

const PlayingField = () => { 
   return (
    <div>
        <h1>Test</h1>
        <p>Some Test Text</p>
   </div>
   )
}

export default PlayingField;