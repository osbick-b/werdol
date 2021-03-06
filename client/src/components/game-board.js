// const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillAllGameRows } from "../redux/allGameRows/slice";
import { addColorClasses } from "../redux/colorClasses/slice";
import { addWinToStats } from "../redux/stats/slice";
import { defineAvailableWords } from "../redux/wordLength/slice";
import { setCorrectWord } from "../redux/correctWord/slice";

import { DICTIONARY } from "../../dictionary2300";
// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();
    const [indexCurrRow, setIndexCurrRow] = useState(0);
    const [endgame, setEndgame] = useState(null); // TODO -- add obj with conditional msgs

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);
    const colorClassesAll = useSelector((state) => state.colorClasses);

    const correctWord = useSelector((state) => state?.correctWord);
    const availableWords = useSelector(
        (state) => state.wordLength?.availableWords
    );

    // const newSecretWord = useSelector((state) => state.onePlayer.secretWord);
    console.log(`correctWord`, correctWord);

    // =========================================================================
    // FUNCTIONS ETC
    // =========================================================================
    // --- CHECK FOR WIN
    function checkForWin() {
        allGameRows.map(
            (row, i) =>
                row[0] &&
                (row.join() === correctWord.join()
                    ? setEndgame("win", dispatch(addWinToStats(i)))
                    : indexCurrRow === allGameRows.length - 1 &&
                      setEndgame(correctWord.join("")))
        );
    }
    // =========================================================================
    // SET AVAILABLE WORDS
    function filterAvaliableWords() {
        const wordsOfThisLength =
            wordLength &&
            DICTIONARY.filter((word) => word.length === wordLength);
        dispatch(defineAvailableWords(wordsOfThisLength));
    }
    // =========================================================================
    // --- WORD EVAL FOR COLOR RENDERING
    function wordEval(row, iR) {
        if (!row[0]) {
            return;
        }
        let colorClasses = Array(wordLength).fill("absent"); // pre-fills colorClasses with class "absent", and fn updates it when needed
        let correctEval = [...correctWord];
        let rowEval = [...row];

        rowEval.map((letter, iL) => {
            if (!correctWord.includes(letter)) {
                // Absent --> removes letters from eval
                rowEval.splice(iL, 1, null);
            }
        });
        rowEval.map((letter, iL) => {
            if (letter && letter === correctWord[iL]) {
                // Correct --> first finds all correct ones and removes them from eval
                colorClasses.splice(iL, 1, "correct");
                rowEval.splice(iL, 1, null);
                correctEval.splice(iL, 1, null);
            }
        });
        rowEval.map((letter, iL) => {
            if (letter && correctEval.includes(letter)) {
                // Present --> evals remaining letters against remaining Correct and removes them one by one
                const iCL = correctEval.findIndex(
                    (corrLett) => corrLett === letter
                );
                colorClasses.splice(iL, 1, "present");
                rowEval.splice(iL, 1, null);
                correctEval.splice(iCL, 1, null);
            }
        });
        dispatch(addColorClasses(colorClasses));
    }
    // =========================================================================
    // USE EFFECTS
    // =========================================================================
    // RANDOM CORRECT WORD
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * availableWords.length);
        availableWords[0] &&
            dispatch(setCorrectWord(availableWords[randomNum]));
    }, [availableWords]);
    // =========================================================================
    // --- UPDATES INDEX CURR ROW
    useEffect(() => {
        checkForWin();
        allGameRows[0] &&
            allGameRows[0][0] &&
            wordEval(allGameRows[indexCurrRow], indexCurrRow);
        setIndexCurrRow(allGameRows.filter((row) => !!row[0]).length);
    }, [allGameRows]);

    // =========================================================================
    // --- RENDER BOARD WITH SET WORD LENGTH // TODO -- disable change while in game --> OR == end game if thats the case -- confirmation scr
    useEffect(() => {
        dispatch(fillAllGameRows(wordLength));
        filterAvaliableWords();
    }, [wordLength]);
    
    //// ============================================================================================================ //
    //// ============================================================================================================ //
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
                                          (currRow[iL] ? " " + "typed" : "")
                                      }
                                  >
                                      {currRow[iL]}
                                  </div>
                              ))
                            : row.map((letter, iL) => (
                                  <div
                                      key={iL}
                                      className={
                                          letter
                                              ? "game-square " +
                                                colorClassesAll[iR][iL]
                                              : "game-square"
                                      }
                                  >
                                      {letter}
                                  </div>
                              ))}
                    </div>
                ))}
            {endgame && <div className="board-msg">{endgame}</div>}
        </section>
    );
}
