
//* keyboard in wordle has a spacer div on each side of the middle row
import { useState, useEffect } from "react";


export function Keyboard() {
    useEffect(() => {
        console.log("--- Keyboard rendered");
    }, []);
    return (
        <section className="keyboard">
            <h1>Keyboard</h1>
            <div className="keyboard-row"></div>
            <div className="keyboard-row"></div>
            <div className="keyboard-row"></div>
        </section>
    );
}