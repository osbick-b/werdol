import ReactDOM from "react-dom";

import App from "./app";

// =============================================================================
// Start.js -- Redux Setup
// =============================================================================

// 1 -- import all the stuff from redux:
import { createStore, applyMiddleware } from "redux";

import * as immutableState from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

// 1a -- Provider is the one you will wrapp your App into to pass it the store
import { Provider } from "react-redux";

// 1b -- import your RootReducer (here called just "reducer") from reducer.js
import reducer from "./redux/reducer"; // its called rootReducer in the orig reducer file. you can import it with another name bc we exported it default


// 2 -- Create the store

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(immutableState.default()))
);

// ----------------------------------------------------
// 3 -- Wrap App in the Provider and pass to it the store that you created

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("main")
);
