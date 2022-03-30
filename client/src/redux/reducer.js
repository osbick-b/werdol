
import { combineReducers } from "redux";
import AttemptsReducer from "./attempts/slice";


const rootReducer = combineReducers({
    attempts: AttemptsReducer, // --- !! the key name used here for each mini-reducer will be used later in the component with useSelect to access this particular sub-state
});


export default rootReducer;