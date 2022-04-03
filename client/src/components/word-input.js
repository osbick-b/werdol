import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCorrectWord } from "../redux/correctWord/slice";
import { addSecretWord } from "../redux/onePlayer/slice";

import { socket } from "../socket";
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
            console.log(">> Set Secret Word");
            dispatch(addSecretWord(secretWord.toUpperCase())); //! -- check what we want to be doing here, where to send the word
            dispatch(setCorrectWord(secretWord));

            //? Event Emitter -- NewCorrectWord
            secretWord && socket.emit("playerSetCorrectWord", secretWord); // TODO -- add user/player ID somehow
            // --- add part that deals with user/player info
        }
    };
    ///////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <h1>wordInput</h1>
            <label htmlFor="secret-word">
                secretWord
                <span data-descr={"Word must have " + wordLength + " letters."}>
                    ❔
                </span>
            </label>
            <input
                name="secretWord"
                id="secret-word"
                type="text"
                maxLength={wordLength}
                minLength={wordLength}
                onChange={handleChange}
            />

            {/* {input:valid && <p>OK</p>} */}
            <button onClick={handleSubmit}>SET</button>
        </>
    );
}
