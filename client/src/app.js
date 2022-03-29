// -- will need to put router here later
// import { BrowserRouter, Route } from "react-router-dom";

import { useState } from "react";

import { ToggleLocalState } from "./hooks/toggleLocalState";

// Components:

import { Keyboard } from "./components/keyboard";
import { HeaderMain } from "./components/header";
// import { Modal } from "./components/modal";
import { GameBoard } from "./components/game-board";

// =============================================================================

// --- APP --- //

export default function App() {
    const [darkModeOn, setDarkModeOn] = useState(true); //TODO -- see how to use toggle buttons: is it boolean?
    // const [{darkModeOn = true}, toggleState] = ToggleLocalState();

    const [modalOn, setModalOn] = useState(false);
    // const toggleModal = () => {
    //     console.log(`modalOn`, modalOn);
    //     setModalOn(!modalOn);
    // };

    // useEffect(() => {
    // TODO: check user configs if has dark mode on or not
    // }, []);

    const toggleDarkMode = () => setDarkModeOn(!darkModeOn);
    const toggleModal = () => setModalOn(!modalOn);

    return (
        <>
            <main
                id="app-main"
                className={darkModeOn ? "darkmode" : "lightmode"}
            >
                {/* <button onClick={toggleDarkMode}>Dark Mode {darkModeOn}</button> */}
                {/* <button onClick={() => toggleState("darkModeOn")}>Dark Mode</button> */}
                <HeaderMain toggleDarkMode={toggleDarkMode} />
                {/* //? --- is it better if Header lives inside the app?  */}
                <GameBoard />
                <Keyboard />

                {/* {modalOn && <Modal render={"compName"} toggleModal={toggleModal} />} */}
            </main>
        </>
    );
}
