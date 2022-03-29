

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Modal } from "./modal";



// =============================================================================

export function HeaderMain({toggleDarkMode}) {
    const [modalOn, setModalOn] = useState(false);


    const toggleModal = () => setModalOn(!modalOn);


    return (
        <>
            {!modalOn && <header className="main">
                <nav className="nav-left">
                    <button className="nav-btn">Nav</button>
                    <button className="nav-btn icon" onClick={toggleModal}>
                        Stats
                    </button>
                </nav>
                <h1 className="logo">Werdol</h1>
                <nav className="nav-right">
                    <button onClick={toggleDarkMode}>Dark Mode</button>
                </nav>
            </header>}

            {modalOn && <Modal render={"compName"} toggleModal={toggleModal} />}
        </>
    );
}