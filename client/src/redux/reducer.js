
import { combineReducers } from "redux";
import { OneAttempReducer } from "./oneAttemp/slice";
import { AllAttemptsReducer } from "./allAttempts/slice";
import { WordLengthReducer } from "./wordLength/slice";



const rootReducer = combineReducers({
    oneAttemp: OneAttempReducer,
    allAttempts: AllAttemptsReducer,
    wordLength: WordLengthReducer,
});


export default rootReducer;