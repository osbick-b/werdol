

import { useState, useEffect } from "react";


export function Keyboard() {
    useEffect(() => {
        console.log("--- Keyboard rendered");
    }, []);
    return (
        <section className="keyboard">
            <h1>Keyboard</h1>
        </section>
    );
}