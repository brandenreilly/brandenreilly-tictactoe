import React, { useState } from "react";

const Modal = () => {
    const [visible, setVisible] = useState(false)

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const myFunc = ({name1,name2}) => {
        setVisible(!visible)
    }
    return (
    <div>
        <button id="myBtn" className="btn btn-secondary" onClick={myFunc}>Open Modal</button>
        <div id="myModal" className="modal" style={{display: visible ? "block" : "none"}}>
            <div className="modal-content">
                <span className="close" onClick={myFunc}>&times;</span>
                <input type="text" placeholder="Player 1"></input>
                <input type="text" placeholder="Player 2"></input>
            </div>
        </div>
    </div>
    )
}

export default Modal;