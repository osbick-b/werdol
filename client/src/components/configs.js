const fln = "configs.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { configWordLength } from "../redux/wordLength/slice";

// =============================================================================
export function Configs({ toggleModal }) {
    const dispatch = useDispatch();

    const [newLength, setNewLength] = useState();
    const wordLength = useSelector((state) => state.wordLength.length);
    // =========================================================================

    const changeLength = ({ target }) => {
        +target.value + 0 && setNewLength(+target.value); // to make sure its a number --> str also gets converted to number, but adding 0 returns NaN, so that's the cond evaluated here
    };

    const applyNewLength = () => {
        newLength && dispatch(configWordLength(newLength));
        toggleModal();
    };

    console.log(`${fln} > wordLength`, wordLength);
    console.log(`newLength`, newLength);
    // =============================================================================
    return (
        <>
            <h1>Configs</h1>

            <label htmlFor="newLength">Word Length:</label>
            <input
                name="newLength"
                id="newLength"
                type="text"
                placeholder={wordLength}
                onChange={changeLength}
            />

            <button onClick={applyNewLength}>APPLY</button>
        </>
    );
}
