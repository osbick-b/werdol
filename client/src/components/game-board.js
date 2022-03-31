const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/currRow/slice";
import { fillAllGameRows, addToAllGameRows } from "../redux/allGameRows/slice";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();
    const [indexCurrRow, setIndexCurrRow]  = useState(0);

    const correctWord = ["w", "o", "r", "d", "l"]; //!-- placeholder

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);
    // // const emptyArr = Array(wordLength).fill(null);

    // console.log("concat>> ", correctWord.join());
    // console.log(`>>> ${fln}  > allGameRows:`, allGameRows);
    // =========================================================================
    // --- Fill All Attempts
    useEffect(() => {
        dispatch(fillAllGameRows(wordLength));
    }, [wordLength]);
    // TODO -- disable change while in game --> OR == end game if thats the case -- confirmation scr
    

    useEffect(() => {
        // const indexCurrRow = allGameRows.findIndex((row) => );

    }, [allGameRows]);
    //! =========================================================================
    //indexOf
    
    
    //! =========================================================================
    // --- Row merging empty + input
    const mergedArr = currRow.concat(
        Array(wordLength - currRow.length).fill(null)
    ); // -- completes row with null until end of wordLength
    console.log(`mergedArr`, mergedArr);

    //? --- how to access what is the current row index?

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

            {allGameRows[0] &&
                allGameRows.map((row, i) => (
                    <div key={i} className="game-row" data-attempt-no={i + 1}>
                        {/* {i===indexCurrRow && <h1>CurrRow {i}</h1>} */}
                        {i===indexCurrRow? <h1>CurrRow {i}</h1>:<h1>Nope</h1>}

                        {row.map((letter, i) => (
                            <div key={i} className="game-square">
                                {letter}
                            </div>
                        ))}
                    </div>
                ))}
        </section>
    );
}
