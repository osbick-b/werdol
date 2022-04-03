import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCorrectWord } from "../redux/correctWord/slice";
import { addSecretWord } from "../redux/onePlayer/slice";


// =============================================================================

export function WordInput() {
    const dispatch = useDispatch();
    const [secretWord, setSecretWord] = useState("");
    const wordLength = useSelector((state) => state.wordLength.length);

    // =========================================================================
    
    const handleChange = ({ target }) => {
        target.value.length <= wordLength && setSecretWord(target.value);
    };

    const handleSubmit = () => {
        if (secretWord.length === wordLength) {
            // console.log(">> Set Secret Word");
            dispatch(addSecretWord(secretWord.toUpperCase()));
            dispatch(setCorrectWord(secretWord));
        }
    };
    ///////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <h1>wordInput</h1>
            <p>Word must have {wordLength} letters.</p>
            <label htmlFor="secretWord">secretWord</label>
            <input
                name="secretWord"
                id="secretWord"
                type="text"
                maxLength={wordLength}
                minLength={wordLength}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>SET</button>
        </>
    );
}
