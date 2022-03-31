const fln = "game-board.js";
///////////////////////////////////


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/oneAttemp/slice";


// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();


    useEffect(() => {
        console.log("--- GameBoard rendered");
    }, []);


    
    
    const oneAttemp = useSelector((state) => state.oneAttemp);
    console.log(`>>> ${fln}  > oneAttemp:`, oneAttemp);
   


    // ---------------------------------
    return (
        <section className="game-board">
            <h2>oneAttempt: {oneAttemp.map((letter, i) => letter)}</h2>

            <div className="game-row" data-attempt-no={1}>
                {/* TODO -- populate rows dynamically accoring to length */}
                {oneAttemp.map((letter, i) => (
                    <div key={i} className="game-square">{letter}</div>
                ))}

                {/* <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div> */}
            </div>

            <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div>

            <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div>
        </section>
    );
}