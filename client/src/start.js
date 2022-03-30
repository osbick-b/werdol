import ReactDOM from "react-dom";

import App from "./app";

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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("main")
);
