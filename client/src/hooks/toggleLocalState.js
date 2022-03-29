import { useState } from "react";

export function ToggleLocalState() {
    const [values, setValues]  = useState({});
    const toggleState = (state) => {
        console.log(`ini state passed`, state);
        setValues({
            ...values,
            [state]: !state,
        });
        console.log(`values after`, values);
    };
    return [values, toggleState];
}