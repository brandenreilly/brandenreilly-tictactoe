import React from "react";
import { useState , useEffect } from "react";
import MainMenu from "./mainmenu";

const TicTacToe = ( {name1,name2} ) => {
    const [boardValue, setBoardValue] = useState(['','','','','','','','','']);
    const [countMove, setCountMove] = useState(0);
    const [cellStatus, setCellStatus] = useState([0,0,0,0,0,0,0,0,0]);
    const [winner, setWinner] = useState("")
    const [visible, setVisible] = useState(false)
    let arrayStatus=[0,0,0,0,0,0,0,0,0];
    useEffect(()=>{
        testWinner()
    },[countMove])
    
    function Move_c11 (index){
    // Verify the status of the cell
    if(cellStatus[index]==1)
    {
      alert('You cant play again here');
    }
    else{
        arrayStatus[index]=1;
        setCellStatus(arrayStatus);
        if(countMove%2!=0){
            setBoardValue(boardValue.map((elm,ind)=>ind==index? 'O': elm));
            setCellStatus(cellStatus.map((elm,ind)=>ind==index? 2: elm));
        }
        if(countMove%2==0){
            setBoardValue(boardValue.map((elm,ind)=>ind==index? 'X': elm));
            setCellStatus(cellStatus.map((elm,ind)=>ind==index? 1: elm));
        }
        setCountMove(countMove+1);
    } 
}  

let topRow = boardValue[0] + boardValue[1] + boardValue[2]
let middleRow = boardValue[3] + boardValue[4] + boardValue[5]
let bottomRow = boardValue[6] + boardValue[7] + boardValue[8]
let leftCol = boardValue[0] + boardValue[3] + boardValue[6]
let middleCol = boardValue[1] + boardValue[4] + boardValue[7]
let rightCol = boardValue[2] + boardValue[5] + boardValue[8]
let firstDiag = boardValue[0] + boardValue[4] + boardValue[8]
let secondDiag = boardValue[2] + boardValue[4] + boardValue[6]
const testWinner = () => {
    if(topRow.match('XXX') || middleRow.match('XXX') || bottomRow.match('XXX') || leftCol.match('XXX') || middleCol.match('XXX') || rightCol.match('XXX') || firstDiag.match('XXX') || secondDiag.match('XXX')){
        setWinner(name1);
        setVisible(!visible)
    }else if(topRow.match('OOO') || middleRow.match('OOO') || bottomRow.match('OOO') || leftCol.match('OOO') || middleCol.match('OOO') || rightCol.match('OOO') || firstDiag.match('OOO') || secondDiag.match('OOO')){
        setWinner(name2);
        setVisible(!visible)
    }
}
if(winner){
    alert(winner + " has won!")
}
	return	(
        <div class="container">
            <div style={{display: visible ? "block" : "none" }}>
                <h1>{winner} has won!!</h1>
            </div>
       <div className="theBoard">
        <div className="c1 white" ><span onClick={()=>Move_c11(0)}>{boardValue[0]}</span></div>
        <div className="c12 black"><span onClick={()=>Move_c11(1)}>{boardValue[1]}</span></div>
        <div className="c13 white"><span onClick={()=>Move_c11(2)}>{boardValue[2]}</span></div>
        <div className="c21 black"><span onClick={()=>Move_c11(3)}>{boardValue[3]}</span></div>
        <div className="c22 white"><span onClick={()=>Move_c11(4)}>{boardValue[4]}</span></div>
        <div className="c23 black"><span onClick={()=>Move_c11(5)}>{boardValue[5]}</span></div>
        <div className="c31 white"><span onClick={()=>Move_c11(6)}>{boardValue[6]}</span></div>
        <div className="c32 black"><span onClick={()=>Move_c11(7)}>{boardValue[7]}</span></div>
        <div className="c33 white"><span onClick={()=>Move_c11(8)}>{boardValue[8]}</span></div>
        <div>
            <button className=" resetBtn btn btn-secondary" onClick={()=>{
                      setBoardValue(boardValue.map((elm,ind)=>ind==ind? '': elm));
                      setCellStatus(cellStatus.map((elm,ind)=>ind==ind? 0: elm));
                      setWinner('');
                      if (visible != false){
                      setVisible(!visible)}
            }}>Reset</button>
        </div>
       </div>
</div>
    );
};

export default TicTacToe