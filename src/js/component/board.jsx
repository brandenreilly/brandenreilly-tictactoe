import React from "react";
import { useState } from "react";

const winningOutcomes = 
   [
    //All Possible Horizontal Winning Outcomes
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

const TicTacToe = () => {
    const [boardValue, setBoardValue] = useState(['','','','','','','','','']);
    const [countMove, setCountMove] = useState(0);
    const [cellStatus, setCellStatus] = useState([0,0,0,0,0,0,0,0,0]);
    let arrayStatus=[0,0,0,0,0,0,0,0,0];
    
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
            //setBoardValue([]);
        }
        if(countMove%2==0){
            setBoardValue(boardValue.map((elm,ind)=>ind==index? 'X': elm));
        }
        setCountMove(countMove+1);
    }
} 
	return	(
        <div class="container">
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
       </div>
       <button className="btn btn-primary" onClick={()=>{console.log(cellStatus)}}>Get Outcome</button>
</div>
    );
};

export default TicTacToe