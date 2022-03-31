const fln = "game-board.js";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLetterInAttemp, deleteLetterInAttemp } from "./redux/oneAttemp/slice";
import { configWordLength } from "../redux/wordLength/slice";

// =============================================================================

export function GameBoard() {
    const dispatch = useDispatch();

    // const [newLength, setNewLength] = useState();
    const wordLength = useSelector((state) => state.wordLength.length);
    const emptyGameRow = Array(wordLength).fill(null); // arr.fill method --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

    const oneAttemp = useSelector((state) => state.oneAttemp);

    console.log(`emptyGameRow`, emptyGameRow);
    console.log(`${fln} > wordLength`, wordLength);
    // console.log(`>>> ${fln}  > oneAttemp:`, oneAttemp);

    // =========================================================================

    // === ADJUST WORD LENGTH === //
    // //! --- doesnt live in this area! prob in config
    // const changeLength = ({ target }) => {
    //     +target.value + 0 && setNewLength(+target.value); // to make sure its a number --> str also gets converted to number, but adding 0 returns NaN, so that's the cond evaluated here
    // };

    // const applyNewLength = () => {
    //     newLength && dispatch(configWordLength(newLength));
    // };

    // console.log(`newLength`, newLength);
    //============================//
    // ---------------------------------
    return (
        <section className="game-board">
            {/* //!--- move to config */}
            {/* <div className="lenght-changer">
                Set length:
                <input name="newLength" onChange={changeLength}></input>
                <button onClick={applyNewLength}>GO</button>
            </div> */}
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {oneAttemp.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))}
            </div>
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {/* {oneAttemp.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))} */}
            </div>
            {/* ----------------------------------- */}
            <div className="game-row" data-attempt-no={1}>
                {emptyGameRow.map((letter, i) => (
                    <div key={i} className="game-square">
                        {letter}
                    </div>
                ))}
            </div>
            {/* ------------------------------------- */}
            <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div>
            <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div>
        </section>
    );
}
