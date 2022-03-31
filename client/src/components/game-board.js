const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/oneAttemp/slice";
import { fillAllAttempts, addToAllAttempts } from "../redux/allAttempts/slice";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();

    const gameLength = useSelector((state) => state.wordLength.length);
    const oneAttemp = useSelector((state) => state.oneAttemp);
    const allAttempts = useSelector((state) => state.allAttempts);
    // // const emptyArr = Array(gameLength).fill(null);

    const correctWord = ["w", "o", "r", "d", "l"]; //!-- placeholder
    // console.log("concat>> ", correctWord.join());
    console.log(`>>> ${fln}  > allAttempts:`, allAttempts);
    // =========================================================================
    // --- Fill All Attempts
    useEffect(() => {
        dispatch(fillAllAttempts(gameLength));
    }, [gameLength]);

    // =========================================================================
    // --- Row merging empty + input
    const mergedArr = oneAttemp.concat(
        Array(gameLength - oneAttemp.length).fill(null)
    ); // -- completes row with null until end of gameLength
    console.log(`mergedArr`, mergedArr);
    // =========================================================================

    return (
        <section className="game-board">
            {/* ----------------------------------- */}
            {/* <div className="game-row" data-attempt-no={1}>
                {mergedArr.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))}
            </div> */}
            {/* ------------------------------------- */}
            {allAttempts[0] &&
                allAttempts.map((oneAtt, i) => (
                    <div key={i} className="game-row" data-attempt-no={i + 1}>
                        {oneAtt.map((letter, i) => (
                            <div key={i} className="game-square">
                                {letter}
                            </div>
                        ))}
                    </div>
                ))}
        </section>
    );
}
