

import { useState, useEffect } from "react";


export function Outside() {
    useEffect(() => {
        console.log("--- Outside rendered");
    }, []);
    // =========================================================================
    

    /////////////////////////////////////////////////////////////////////////////////
    return (
        < >
            <h1>Outside</h1>
        </>
    );
}