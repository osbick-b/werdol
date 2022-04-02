import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// =============================================================================

export function HeaderMain({ toggleDarkMode, toggleModal }) {

    return (
        <>
            <header className="main">
                <nav className="nav-header left">
                    <Link to={"/configs"}>
                        <button className="nav-btn" onClick={toggleModal}>
                            Configs
                        </button>
                    </Link>
                    <button className="nav-btn icon" onClick={toggleModal}>
                        Stats
                    </button>
                </nav>
                <h1 className="logo">Werdol</h1>
                <nav className="nav-header right">
                    <button onClick={toggleDarkMode}>Dark Mode</button>
                </nav>
            </header>
        </>
    );
}
