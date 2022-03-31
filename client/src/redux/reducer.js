
import { combineReducers } from "redux";
import { CurrRowReducer } from "./currRow/slice";
import { AllGameRowsReducer } from "./allGameRows/slice";
import { WordLengthReducer } from "./wordLength/slice";



const rootReducer = combineReducers({
    currRow: CurrRowReducer,
    allGameRows: AllGameRowsReducer,
    wordLength: WordLengthReducer,
});


export default rootReducer;