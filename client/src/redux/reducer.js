// =============================================================================
// on REDUCER.js
// =============================================================================


// 1 -- import fn Combine Reducers
import { combineReducers } from "redux";


// 2 -- import Mini-Reducers from its slices
import AttemptsReducer from "./attempts/slice";


// 3 -- declare Root Reducer -- combine all mini reducers in one
const rootReducer = combineReducers({
    attempts: AttemptsReducer, // --- !! the key name used here for each mini-reducer will be used later in the component with useSelect to access this particular sub-state
});


// 4 -- export root Reducer --> will be imported by START.js
export default rootReducer;