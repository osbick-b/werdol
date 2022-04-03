import ReactDOM from "react-dom";

import App from "./app";

// ===== Socket.io setup client ===== //
import { io } from "socket.io-client";
const socket = io();
import { init } from "./socket";

// ======= Redux Setup ========== //
import { createStore, applyMiddleware } from "redux";
import * as immutableState from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./redux/reducer"; // its called rootReducer in the orig reducer file. you can import it with another name bc we exported it default


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(immutableState.default()))
);


//=====================================================//
// in social network it all happens inside the fetch req for user info -- ref down there
init(store); // call init when user logged in

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("main")
);





// // ////////////////////////////////////////////////////////
// // fetch("/start/id.json")
// //     .then((resp) => resp.json())
// //     .then(({ userCookie }) => {
// //         console.log(">>>>> userCookie /user/id.json > user_id", userCookie);
// //         if (userCookie.user_id) {
// //             init(store); 

// //             ReactDOM.render(
// //                 <Provider store={store}>
// //                     <App myId={userCookie.user_id} />
// //                 </Provider>,
// //                 document.querySelector("main")
// //             );
// //         } else {
// //             ReactDOM.render(<Welcome />, document.querySelector("main"));
// //         }
// //     })
// //     .catch((err) => {
// //         console.log(`error in start.js`, err);
// //     });