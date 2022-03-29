import { useState, useEffect } from "react";


export function GameBoard() {
    useEffect(() => {
        console.log("--- GameBoard rendered");
    }, []);
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
        </section>
    );
}