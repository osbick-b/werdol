import { combineReducers } from "redux";
import { CurrRowReducer } from "./currRow/slice";
import { AllGameRowsReducer } from "./allGameRows/slice";
import { WordLengthReducer } from "./wordLength/slice";
import { CorrectWordReducer } from "./correctWord/slice";
import { UserCookieReducer } from "./userCookie/slice";
import { OnePlayerReducer } from "./onePlayer/slice";
import { PlayersReducer } from "./players/slice";



const rootReducer = combineReducers({
    currRow: CurrRowReducer,
    allGameRows: AllGameRowsReducer,
    wordLength: WordLengthReducer,
    correctWord: CorrectWordReducer,
    userCookie: UserCookieReducer,
    onePlayer: OnePlayerReducer,
    players: PlayersReducer,
});

export default rootReducer;
