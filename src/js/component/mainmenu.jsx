import React, { useState } from "react";
import TicTacToe from "./board";
import Modal from "./modal.jsx"

const MainMenu = () => {
    const [visible, setVisible] = useState(true)
    const [name1, setName] = useState("")
    const [name2, setName2] = useState("")

    const getName1 = (e) => {
        let name1Value = e.target.value;
        setName(name1Value)
    }
    const getName2 = (e) => {
        let name2Value = e.target.value;
        setName2(name2Value)
    }

    return (
    <div className="text-center">
        <div className="header">
            <h1 className="mt-3 mb-3">Tic Tac Toe in React.js</h1>
            <h1 className="mb-3" style={{display: visible ? "none" : "block" }}><strong>{name1}</strong> and <strong>{name2}</strong> are playing.</h1>
        </div>
        <div style={{display: visible ? "block" : "none" }}>
            <h2 className="mt-4">Pick A Weapon</h2>
            <div className="row chooseBox text-center mt-5 mx-auto d-flex align-items-center">
                <div className="col-12"><h5 className="">CHOOSE YOUR WEAPON</h5></div>
                <div className="inputClass">
                    <input id="player1" type="text" placeholder="Player 1" onChange={getName1}></input>
                    <input id="player2" type="text" placeholder="Player 2" onChange={getName2}></input>
                </div>
                <div className="spanBoxes">
                    <button className="X" onClick={() => setVisible(!visible)}>X</button>
                    <button className="O" onClick={() => setVisible(!visible)}>O</button>
                </div>
            </div>
        </div>
        <div className="playingField" style={{display: visible ? "none" : "block" }}>
            <TicTacToe name1={name1} name2={name2}/>
            <button className="restartBtn btn btn-secondary" onClick={() => {
                if(visible == false){setVisible(!visible)}}}>Change Players</button>
        </div>
    </div>
    )
};

export default MainMenu;