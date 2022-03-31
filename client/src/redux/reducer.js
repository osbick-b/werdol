
import { combineReducers } from "redux";
import { OneAttempReducer } from "./oneAttemp/slice";
import { WordLengthReducer } from "./wordLength/slice";



const rootReducer = combineReducers({
    oneAttemp: OneAttempReducer,
    wordLength: WordLengthReducer,
});


export default rootReducer;