import { useState, useEffect } from "react";


export function HeaderMain() {
    useEffect(() => {
        console.log("--- HeaderMain rendered");
    }, []);
    return (
        <header className="main">
            <h1>HeaderMain</h1>
        </header>
    );
}