const fln = "keyboard.js";
///////////////////////////////////


//* keyboard in wordle has a spacer div on each side of the middle row
import { useState, useEffect } from "react";
import { useDispatch, useSelect } from "react-redux";
import {
    addLetterInAttemp,
    deleteLetterInAttemp,
} from "../redux/oneAttemp/slice";



// =============================================================================

export function Keyboard() {
    const dispatch = useDispatch();

    // const [allAttempts, setAllAttempts]  = useState([]); // check length cant be bigger than max num of attempts
    // const [attemp, setAttemp]  = useState([]);

    // useEffect(() => {
    //     console.log(`attemp`, attemp);
    // }, [attemp]);

    const handleClick = ({ target }) => {
        const keyPressed = target.dataset.key;
        console.log(`>>> ${fln}  > keyPressed:`, keyPressed);
        
        if (keyPressed === "del") {
            dispatch(deleteLetterInAttemp);
        }
        if (keyPressed === "enter") {
            console.log(" --> SUBMIT ATTEMPT");
        }
        else {
            dispatch(addLetterInAttemp(keyPressed));
        }
        // setAttemp([...attemp, keyPressed]);
    };



    return (
        <section className="keyboard">
            {/* <h1>Keyboard</h1> */}
            <div className="keyboard-row">
                <button data-key="q" onClick={handleClick}>q</button>
                <button data-key="w" onClick={handleClick}>w</button>
                <button data-key="e" onClick={handleClick}>e</button>
                <button data-key="r" onClick={handleClick}>r</button>
                <button data-key="t" onClick={handleClick}>t</button>
                <button data-key="y" onClick={handleClick}>y</button>
                <button data-key="u" onClick={handleClick}>u</button>
                <button data-key="i" onClick={handleClick}>i</button>
                <button data-key="o" onClick={handleClick}>o</button>
                <button data-key="p" onClick={handleClick}>p</button>
            </div>

            <div className="keyboard-row">
                <button data-key="a" onClick={handleClick}>a</button>
                <button data-key="s" onClick={handleClick}>s</button>
                <button data-key="d" onClick={handleClick}>d</button>
                <button data-key="f" onClick={handleClick}>f</button>
                <button data-key="g" onClick={handleClick}>g</button>
                <button data-key="h" onClick={handleClick}>h</button>
                <button data-key="j" onClick={handleClick}>j</button>
                <button data-key="k" onClick={handleClick}>k</button>
                <button data-key="l" onClick={handleClick}>l</button>
            </div>

            <div className="keyboard-row">
                <button data-key="enter" onClick={handleClick} className="sp">
                    ✅
                </button>
                <button data-key="z" onClick={handleClick}>z</button>
                <button data-key="x" onClick={handleClick}>x</button>
                <button data-key="c" onClick={handleClick}>c</button>
                <button data-key="v" onClick={handleClick}>v</button>
                <button data-key="b" onClick={handleClick}>b</button>
                <button data-key="n" onClick={handleClick}>n</button>
                <button data-key="m" onClick={handleClick}>m</button>
                <button data-key="del" onClick={handleClick} className="sp">
                    🔙
                </button>
            </div>
        </section>
    );
}
