import { useState, useEffect } from "react";

export function Modal({render, toggleModal}) {

    // handle render inner component with global state!
    // then maybe handle also modal with that?
    
    
    return (
        <div className="modal-bg">
            <div className="modal-box">
                <h1>Modal</h1>
                <h2>{render}</h2>
                <button className="btn-x" onClick={toggleModal}>X</button>
            </div>
        </div>
    );
}
