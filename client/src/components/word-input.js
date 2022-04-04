import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCorrectWord } from "../redux/correctWord/slice";
import { addSecretWord } from "../redux/onePlayer/slice";

import { socket } from "../socket";
// =============================================================================

export function WordInput({ toggleModal }) {
    const dispatch = useDispatch();
    const [secretWord, setSecretWord] = useState("");
    const [notValid, setNotValid]  = useState(false);
    const wordLength = useSelector((state) => state.wordLength.length);
    const availableWords = useSelector(
        (state) => state.wordLength?.availableWords
    );

    // =========================================================================
    // VALIDATE WORD
    const validateWord = () =>
        secretWord.length === wordLength &&
        (availableWords.includes(secretWord.toLowerCase()) || setNotValid(true));
    // =========================================================================

    const handleChange = ({ target }) => {
        target.value.length <= wordLength && setSecretWord(target.value);
    };

    const handleSubmit = () => {
        setNotValid(false);
        if (validateWord()) {
            dispatch(addSecretWord(secretWord.toUpperCase()));
            dispatch(setCorrectWord(secretWord));
            toggleModal();

            //? Event Emitter -- NewCorrectWord
            secretWord && socket.emit("playerSetCorrectWord", secretWord); // TODO -- add user/player ID somehow
            // --- add part that deals with user/player info
        }
    };
    ///////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <h1>Choose your word</h1>
            <p>Choose a word of {wordLength} letters for the other player(s) to guess!</p>
            <label htmlFor="secret-word">
                Secret Word
                {/* <span data-descr={"Word must have " + wordLength + " letters."}>
                    ❔
                </span> */}
            </label>
            <input
                name="secretWord"
                id="secret-word"
                type="text"
                maxLength={wordLength}
                minLength={wordLength}
                onChange={handleChange}
            />

            {notValid && <p>OK</p>}
            <button onClick={handleSubmit}>SET</button>
        </>
    );
}
