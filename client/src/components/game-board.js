const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/currRow/slice";
import { fillAllGameRows } from "../redux/allGameRows/slice";

import { useIndexCurrRow } from "../hooks/useIndexCurrRow";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();
    const [indexCurrRow] = useIndexCurrRow();

    const correctWord = ["w", "o", "r", "d", "l"]; //!-- placeholder

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);
    // // const emptyArr = Array(wordLength).fill(null);

    // console.log("concat>> ", correctWord.join());
    // console.log(`>>> ${fln}  > allGameRows:`, allGameRows);
    // =========================================================================
    // --- Render Board with set word length
    useEffect(() => {
        dispatch(fillAllGameRows(wordLength));
    }, [wordLength]);
    // TODO -- disable change while in game --> OR == end game if thats the case -- confirmation scr
    // =========================================================================
       
    console.log(`indexCurrRow`, indexCurrRow);
    //! =========================================================================
    //indexOf

    //! =========================================================================
    // --- Row merging empty + input
    const rowInProcess = currRow.concat(
        Array(wordLength - currRow.length).fill(null) // -- completes row with null until end of wordLength
    ); 
    // =========================================================================

    return (
        <section className="game-board">

            {allGameRows[0] &&
                allGameRows.map((row, i) => (
                    <div key={i} className="game-row" data-attempt-no={i + 1}>
                        {i === indexCurrRow
                            ? rowInProcess.map((letter, i) => (
                                <div key={i} className="game-square">
                                    {letter}
                                </div>
                            ))
                            : row.map((letter, i) => (
                                <div key={i} className="game-square">
                                    {letter}
                                </div>
                            ))}
                    </div>
                ))}
        </section>
    );
}
