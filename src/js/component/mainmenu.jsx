import React, { useState } from "react";
import TicTacToe from "./board";

const MainMenu = () => {
    const [visible, setVisible] = useState(true)
    return (
    <div className="text-center">
        <div className="header">
            <h1 className="mt-3">Tic Tac Toe in React.js</h1>
            
        </div>
        <div style={{display: visible ? "block" : "none" }}>
            <h2 className="mt-4">Pick A Weapon</h2>
            <div className="row chooseBox text-center mt-5 mx-auto d-flex align-items-center">
                <div className="col-12"><h5 className="">CHOOSE YOUR WEAPON</h5></div>
                <div className="inputClass">
                    <input id="player1" type="text" placeholder="Player 1"></input>
                    <input id="player2" type="text" placeholder="Player 2"></input>
                </div>
                <div className="spanBoxes">
                    <button className="X" onClick={() => setVisible(!visible)}>X</button>
                    <button className="O" onClick={() => setVisible(!visible)}>O</button>
                </div>
            </div>
        </div>
        <div className="playingField" style={{display: visible ? "none" : "block" }}>
            <TicTacToe visible={setVisible}/> 
            <button className="restartBtn btn btn-secondary" onClick={() => {
                if(visible == false){setVisible(!visible)}}}>Start Over!</button>
        </div>
    </div>
    )
};

export default MainMenu;