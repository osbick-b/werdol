import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// ====== Hooks ====== //
// import { ToggleLocalState } from "./hooks/toggleLocalState";

// ===== Components ===== //
import { Keyboard } from "./components/keyboard";
import { HeaderMain } from "./components/header";
import { Modal } from "./components/modal";
import { GameBoard } from "./components/game-board";


// === Redux === //
import { addPlayers } from "./redux/players/slice"; //!
import { setOnePlayer } from "./redux/onePlayer/slice"; //!

// =============================================================================
// --- APP --- //

export default function App() {
    const [darkModeOn, setDarkModeOn] = useState(true); //TODO -- see how to use toggle buttons: is it boolean?

    // Toggle Modal:
    const [modalOn, setModalOn] = useState(false);

    // useEffect(() => {
    // TODO: check user configs if has dark mode on or not
    // }, []);

    const toggleDarkMode = () => setDarkModeOn(!darkModeOn);
    const toggleModal = () => setModalOn(!modalOn);

    return (
        <>
            <BrowserRouter>
                {modalOn && <Modal toggleModal={toggleModal} />}
                <Route path={"/"}>
                    <main
                        id="app-main"
                        className={darkModeOn ? "darkmode" : "lightmode"}
                    >
                        <HeaderMain
                            toggleDarkMode={toggleDarkMode}
                            toggleModal={toggleModal}
                        />
                        <GameBoard />
                        <Keyboard />
                    </main>
                </Route>
            </BrowserRouter>
        </>
    );
}
