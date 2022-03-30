// =============================================================================
// on component
// =============================================================================


// 1 -- import useDispatch and useSelector from redux
import { useDispatch, useSelector } from "react-redux";


// 2 -- import actions from the slice.js (the mini-reducer) that concerns this component
// -----> will be used with dispatch, in order to be able to change the state
import { storeUserAttempt } from "../redux/attempts/slice";


// 3 -- in your created component: use them to access/change the sub-state handled by your mini-reducer (slice.js)
export function ExampleComponentRedux() {

    // 2a -- declare the shorthand for useDispatch at beginning of your component
    const dispatch = useDispatch();


    // 3a -- useState to access the current sub-state --> with an arrow fn to reach state
    // -------- you can do other things here to this data, like map, filter, whatever you need
    const attempts = useSelector((state) => state.attempts);


    // 3b -- when you have done sth and want to change state, use dispatch and the action to pass data to the store. 
    // -----> it'll be handled by the mini-reducer (slice.js) that action belongs to
    const userAttempt = {
        1: "pious"
    };
    
    dispatch(storeUserAttempt(userAttempt));


    return (
        <>
            <h1>ExampleComponentRedux</h1>
            
        </>
    );
}