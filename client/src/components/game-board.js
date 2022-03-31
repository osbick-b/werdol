const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/oneAttemp/slice";
import { configWordLength } from "../redux/wordLength/slice";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();

    const gameLength = useSelector((state) => state.wordLength.length);
    const emptyGameRow = Array(gameLength).fill(null); // arr.fill method --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

    const oneAttemp = useSelector((state) => state.oneAttemp);

    // console.log(`emptyGameRow`, emptyGameRow);
    // console.log(`${fln} > wordLength`, wordLength);
    // console.log(`>>> ${fln}  > oneAttemp:`, oneAttemp);

    // =========================================================================

    return (
        <section className="game-board">
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {oneAttemp.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))}
            </div>
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {/* {oneAttemp.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))} */}
            </div>
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {emptyGameRow.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))}
            </div>
            {/* ------------------------------------- */}
          
            {/* <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div> */}
        </section>
    );
}
