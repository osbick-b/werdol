const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillAllGameRows } from "../redux/allGameRows/slice";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();
    const [indexCurrRow, setIndexCurrRow] = useState(0);

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);

    // =========================================================================
    // --- UPDATES INDEX CURR ROW
    useEffect(() => {
        setIndexCurrRow(allGameRows.filter((row) => !!row[0]).length);
    }, [allGameRows]);

    // =========================================================================
    // --- RENDER BOARD WITH SET WORD LENGTH // TODO -- disable change while in game --> OR == end game if thats the case -- confirmation scr
    useEffect(() => {
        dispatch(fillAllGameRows(wordLength));
    }, [wordLength]);

    // =========================================================================
    // --- ROW MERGING EMPTY + INPUT
    const rowInProcess = currRow.concat(
        Array(wordLength - currRow.length).fill(null)
    );
    // =========================================================================
    // --- CONDITIONAL COLOR on LETTER EVAL
    const letterEval = (letter, i) => {
        // const correctWord = useSelector(); // TODO -- select it from some state
        const correctWord = ["W", "O", "R", "D", "L"]; //!-- placeholder

        let colorClass = "";
        if (letter === correctWord[i]) {
            colorClass = "correct";
        } else if (correctWord.includes(letter)) {
            colorClass = "present";
        } else if (letter) {
            colorClass = "absent";
        }
        return " " + colorClass;
    };


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <section className="game-board">
            {allGameRows[0] &&
                allGameRows.map((row, iR) => (
                    <div key={iR} className="game-row" data-attempt-no={iR + 1}>
                        {iR === indexCurrRow
                            ? row.map((letter, iL) => (
                                <div
                                    key={iL}
                                    className={"game-square" + (currRow[iL] ? " typed" : "")}>
                                    {currRow[iL]}
                                </div>
                            ))
                            : row.map((letter, iL) => (
                                <div
                                    key={iL}
                                    className={"game-square" + letterEval(letter, iL)}>
                                    {letter}
                                </div>
                            ))}
                    </div>
                ))}


        </section>
    );
}
