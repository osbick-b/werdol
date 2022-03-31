
import { combineReducers } from "redux";
import { OneAttempReducer } from "./oneAttemp/slice";



const rootReducer = combineReducers({
    oneAttemp: OneAttempReducer,
});


export default rootReducer;