import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUserAttempt } from "../redux/attempts/slice";


export function GameBoard() {
    const dispatch = useDispatch();


    useEffect(() => {
        console.log("--- GameBoard rendered");
    }, []);


    const attempts = useSelector((state) => state.attempts);


    const handleClick = () => {
        const userAttempt = {
            1: "pious",
        };
        dispatch(storeUserAttempt(userAttempt));
    };


    // ---------------------------------
    return (
        <section className="game-board">
            <h2>GameBoard</h2>
            <div className="game-row" data-attempt-no={1}>
                {/* TODO -- populate rows dynamically accoring to length */}
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

            <div className="game-row" data-attempt-no={2}>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
                <div className="game-square"></div>
            </div>
            <p>{attempts.map((att) => att[1])}</p>
            <button onClick={handleClick}>CICK</button>
        </section>
    );
}