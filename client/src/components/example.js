import { useDispatch, useSelector } from "react-redux";
import { storeUserAttempt } from "../redux/attempts/slice";


export function ExampleComponentRedux() {
    const dispatch = useDispatch();

    const attempts = useSelector((state) => state.attempts);

    
    const handleClick = () => {
        const userAttempt = {
            1: "pious"
        };
        dispatch(storeUserAttempt(userAttempt));
    };


    return (
        <>
            <h1>ExampleComponentRedux</h1>
            <button onClick={handleClick}>CICK</button>
        </>
    );
}