const fln = "keyboard.js";
///////////////////////////////////


//* keyboard in wordle has a spacer div on each side of the middle row
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addLetterInRow,
    deleteLetterInRow,
} from "../redux/currRow/slice";



// =============================================================================

export function Keyboard() {
    const dispatch = useDispatch();

    const wordLength = useSelector((state) => state.wordLength.length);


    const currRow = useSelector((state) => state.currRow);
    // // console.log(`>>> ${fln}  > currRow:`, currRow);


    const handleClick = ({ target }) => {
        const keyPressed = target.dataset.key;
        
        if (keyPressed === "del") {
            currRow.length > 0 && dispatch(deleteLetterInRow());
        }
        else if (keyPressed === "enter") {
            currRow.length === wordLength && console.log(" --> SUBMIT ROW", currRow);
            // -- pass it to allRows
            // -- eval //? render colors on retrieving it from allAtt in gameBorad
        }
        else {
            currRow.length < wordLength && dispatch(addLetterInRow(keyPressed));
        }
    };



    return (
        <section className="keyboard">
            {/* <h1>Keyboard</h1> */}
            <div className="keyboard-row">
                <button data-key="q" className="keyb" onClick={handleClick}>q</button>
                <button data-key="w" className="keyb" onClick={handleClick}>w</button>
                <button data-key="e" className="keyb" onClick={handleClick}>e</button>
                <button data-key="r" className="keyb" onClick={handleClick}>r</button>
                <button data-key="t" className="keyb" onClick={handleClick}>t</button>
                <button data-key="y" className="keyb" onClick={handleClick}>y</button>
                <button data-key="u" className="keyb" onClick={handleClick}>u</button>
                <button data-key="i" className="keyb" onClick={handleClick}>i</button>
                <button data-key="o" className="keyb" onClick={handleClick}>o</button>
                <button data-key="p" className="keyb" onClick={handleClick}>p</button>
            </div>

            <div className="keyboard-row">
                <button data-key="a" className="keyb" onClick={handleClick}>a</button>
                <button data-key="s" className="keyb" onClick={handleClick}>s</button>
                <button data-key="d" className="keyb" onClick={handleClick}>d</button>
                <button data-key="f" className="keyb" onClick={handleClick}>f</button>
                <button data-key="g" className="keyb" onClick={handleClick}>g</button>
                <button data-key="h" className="keyb" onClick={handleClick}>h</button>
                <button data-key="j" className="keyb" onClick={handleClick}>j</button>
                <button data-key="k" className="keyb" onClick={handleClick}>k</button>
                <button data-key="l" className="keyb" onClick={handleClick}>l</button>
            </div>

            <div className="keyboard-row">
                <button data-key="enter" className="keyb" onClick={handleClick} className="sp">
                    ✅
                </button>
                <button data-key="z" className="keyb" onClick={handleClick}>z</button>
                <button data-key="x" className="keyb" onClick={handleClick}>x</button>
                <button data-key="c" className="keyb" onClick={handleClick}>c</button>
                <button data-key="v" className="keyb" onClick={handleClick}>v</button>
                <button data-key="b" className="keyb" onClick={handleClick}>b</button>
                <button data-key="n" className="keyb" onClick={handleClick}>n</button>
                <button data-key="m" className="keyb" onClick={handleClick}>m</button>
                <button data-key="del" className="keyb" onClick={handleClick} className="sp">
                    🔙
                </button>
            </div>
        </section>
    );
}
