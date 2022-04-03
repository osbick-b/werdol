const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillAllGameRows } from "../redux/allGameRows/slice";
// import { setCorrectWord } from "../redux/correctWord/slice";
// import { addSecretWord } from "../redux/onePlayer/slice";


// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();
    const [indexCurrRow, setIndexCurrRow] = useState(0);
    const [endgame, setEndgame] = useState(null); // TODO -- add obj with conditional msgs

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);

    const correctWord = useSelector(
        (state) => state.correctWord
    ); //!-- placeholder

    const newSecretWord = useSelector((state) => state.onePlayer.secretWord);

    console.log(`newSecretWord`, newSecretWord);
    console.log(`correctWord`, correctWord);
    // =========================================================================
    // --- UPDATES INDEX CURR ROW
    useEffect(() => {
        checkForWin();
        setIndexCurrRow(allGameRows.filter((row) => !!row[0]).length);
    }, [allGameRows]);

    // =========================================================================
    // --- RENDER BOARD WITH SET WORD LENGTH // TODO -- disable change while in game --> OR == end game if thats the case -- confirmation scr
    useEffect(() => {
        dispatch(fillAllGameRows(wordLength));
    }, [wordLength]);
    // =========================================================================
    // --- CHECK FOR WIN
    function checkForWin() {
        allGameRows.map(
            (row, i) =>
                row[0] &&
                (row.join() === correctWord.join()
                    ? setEndgame("win")
                    : indexCurrRow === allGameRows.length - 1 &&
                      (setEndgame("lose"), console.log(">>> YOU LOSE")))
        );
    }

    // =========================================================================
    // --- ROW MERGING EMPTY + INPUT
    const rowInProcess = currRow.concat(
        Array(wordLength - currRow.length).fill(null)
    );
    // =========================================================================
    // --- CONDITIONAL COLOR on LETTER EVAL
    const letterEval = (letter, i) => {
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
    // !=========================================================================
    // --- BETTER LETTER CHECK
    // const betterLetterEval = (letter, i) => {
    const betterLetterEval = (row, iL) => {
        let colorClass = "";
        const letter = row[iL];

        if (letter) {
            colorClass = "absent";
        }
        if (letter === correctWord[iL]) {
            colorClass = "correct";
        } else if (correctWord.includes(letter)) {
            iL === row.findIndex((elem) => elem === letter) &&
                (colorClass = "present"); // case letter appears 2x in currRow
            // case letter appears x2 in correctWord
        }

        return " " + colorClass;

        // correctWord.map((letter,i) => {
        //     if (row[i] === letter) {
        //         colorClass = "correct";
        //     } else if (correctWord.includes(letter)) {

        //     }

        // });
    };

    // !=========================================================================
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
                                      className={
                                          "game-square" +
                                          (currRow[iL] ? " typed" : "")
                                      }
                                  >
                                      {currRow[iL]}
                                  </div>
                              ))
                            : row.map((letter, iL) => (
                                  <div
                                      key={iL}
                                      // className={"game-square" + letterEval(letter, iL)}>
                                      className={
                                          "game-square" +
                                          betterLetterEval(row, iL)
                                      }
                                  >
                                      {letter}
                                  </div>
                              ))}
                    </div>
                ))}
            {endgame && <div className="endgame-msg">{endgame}</div>}
        </section>
    );
}
