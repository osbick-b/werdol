import { useState, useEffect } from "react";


export function GameBoard() {
    useEffect(() => {
        console.log("--- GameBoard rendered");
    }, []);
    return (
        <section className="game-board">
            <h2>GameBoard</h2>
        </section>
    );
}