// const fln = "keyboard.js";
///////////////////////////////////

//* keyboard in wordle has a spacer div on each side of the middle row
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addLetterInRow,
    deleteLetterInRow,
    resetRow,
} from "../redux/currRow/slice";
import { submitCurrRowToAllRows } from "../redux/allGameRows/slice";

// =============================================================================

export function Keyboard() {
    const dispatch = useDispatch();
    const [indexCurrRow, setIndexCurrRow] = useState(0);
    const [correct, setCorrect] = useState([]);
    const [present, setPresent] = useState([]);
    const [absent, setAbsent] = useState([]);
    const [notAWord, setNotAWord] = useState(false);

    const wordLength = useSelector((state) => state.wordLength.length);
    const currRow = useSelector((state) => state.currRow);
    const allGameRows = useSelector((state) => state.allGameRows);
    const availableWords = useSelector(
        (state) => state.wordLength?.availableWords
    );

    const correctWord = useSelector(
        // (state) => state.correctWord[0] && state.correctWord
        (state) => state?.correctWord
    );

    const KEYB_MODEL = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["enter", "Z", "X", "C", "V", "B", "N", "M", "del"],
    ];

    console.log(`correctWord`, correctWord);
    console.log(`availableWords`, availableWords);
    // =============================================================================
    useEffect(() => {
        setIndexCurrRow(allGameRows.filter((row) => !!row[0]).length);
    }, [allGameRows]);

    // =========================================================================
    // VALIDATE WORD
    const validateCurrRow = () =>
        currRow.length === wordLength &&
        (availableWords.includes(currRow.join("").toLowerCase()) ||
            setNotAWord(true));

    // =========================================================================
    // COLOR CLASS CONDITIONAL RENDERING
    const storeKeyStatus = (submittedRow) => {
        const tempCorrect = [];
        const tempPresent = [];
        const tempAbsent = [];

        submittedRow.map((letter, i) => {
            if (letter === correctWord[i]) {
                tempCorrect.push(letter);
            } else if (correctWord.includes(letter)) {
                tempPresent.push(letter);
            } else if (letter) {
                tempAbsent.push(letter);
            }
        });
        setCorrect([...correct, ...tempCorrect]);
        setPresent([...present, ...tempPresent]);
        setAbsent([...absent, ...tempAbsent]);
    };
    // =========================================================================
    // LETTER EVAL FOR COLOR RENDERING
    const keyEval = (key) => {
        let keyClass = "";

        if (absent.includes(key)) {
            keyClass = "absent";
        } else if (correct.includes(key)) {
            keyClass = "correct";
        } else if (present.includes(key)) {
            keyClass = "present";
        }
        // colors
        if (key === "enter" || key === "del") {
            keyClass = "sp";
        }
        return " " + keyClass;
    };
    // =========================================================================
    // CLICK HANDLER -- UPDATE CURR ROW // TODO -- add keypress
    const handleClick = ({ target }) => {
        setNotAWord(false);
        const keyPressed = target.dataset.key;

        if (indexCurrRow >= allGameRows.length) {
            return console.log("GAME IS ALREADY FINISHED");
        }
        if (keyPressed === "del") {
            currRow.length > 0 && dispatch(deleteLetterInRow());
        } else if (keyPressed === "enter") {
            validateCurrRow() &&
                (dispatch(submitCurrRowToAllRows(currRow, indexCurrRow)),
                dispatch(resetRow(indexCurrRow)),
                storeKeyStatus(currRow));
        } else {
            currRow.length < wordLength && dispatch(addLetterInRow(keyPressed));
        }
    };
    //// ============================================================================================================ //
    //// ============================================================================================================ //
    return (
        <section className="keyboard">
            {KEYB_MODEL.map((keybRow, i) => (
                <div key={i} className="keyboard-row">
                    {keybRow.map((key) => (
                        <button
                            key={key}
                            data-key={key}
                            className={"keyb" + keyEval(key)}
                            onClick={handleClick}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
            {notAWord && <div className="board-msg">Not a word!</div>}
        </section>
    );
}
