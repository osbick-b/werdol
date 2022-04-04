import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";


import { Configs } from "./configs";
import { WordInput } from "./word-input";


// =============================================================================
export function Modal({ toggleModal }) {
    // TODO --  maybe handle also modal with global state?

    return (
        <div className="modal-bg">
            <BrowserRouter>
                <div className="modal-box">
                    <Link to={"/"}>
                        <button className="btn-x" onClick={toggleModal}>
                            ❌
                        </button>
                    </Link>

                    <Route path={"/configs"}>
                        <Configs toggleModal={toggleModal} />
                    </Route>

                    <Route path={"/set-word"}>
                        <WordInput toggleModal={toggleModal} />
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
}
